/**
 * 重生抽卡復仇記 — Engine v3 (Fullscreen CG)
 * All scenes use fullscreen CG images. No character sprites.
 */

const CG_PATH = 'assets/cg/';
const BG_PATH = 'assets/backgrounds/';
const TYPE_SPEED = 25;

// ===== STATE =====
let S = {
  step: 0, arrogance: 0, cards: [], choices: {},
  typing: false, waitClick: false, waitChoice: false,
  currentLayer: 'front' // toggle between front/back for crossfade
};

// ===== DOM =====
const $ = id => document.getElementById(id);
const el = {};

function initEl() {
  ['cg-front','cg-back','dialogue','speaker','text','click-hint',
   'choices','arrogance','arrogance-fill','arrogance-label',
   'gacha','flash','shaker','title','vignette'
  ].forEach(id => { el[id.replace(/-/g,'')] = $(id); });
}

// ===== SCRIPT ENGINE =====
let script = [];

function run() {
  if (S.step >= script.length) { showMsg('', '━━ 序章完 ━━'); return; }
  const c = script[S.step];
  
  const handlers = {
    'cg':       () => { showCG(CG_PATH + c.src, c.portrait); next(); },
    'bg':       () => { showCG(BG_PATH + c.src, c.portrait); next(); },
    'black':    () => { fadeToBlack(); next(); },
    'cg_hide':  () => { fadeToBlack(); next(); },
    'say':      () => showMsg(c.speaker, c.text),
    'narrate':  () => showNarr(c.text),
    'choice':   () => showChoices(c.options),
    'arrogance':() => { changeArrogance(c.delta, c.reason); },
    'show_arrogance': () => { if(el.arrogance) el.arrogance.style.display='block'; next(); },
    'gacha':    () => triggerGacha(c.pool, c.forced),
    'flash':    () => { screenFlash(c.color, c.duration); next(); },
    'shake':    () => { screenShake(); next(); },
    'wait':     () => setTimeout(next, c.ms || 1000),
    'effect':   () => { applyEffect(c.name); next(); },
    'big_title':  () => showBigTitle(c.text, c.sub),
    'chapter_end': () => chapterEnd(c.next),
  };
  
  const fn = handlers[c.type];
  if (fn) fn();
  else { console.warn('Unknown:', c.type); next(); }
}

function next() {
  S.step++;
  if (S.step >= script.length) { run(); return; }
  const c = script[S.step];
  // Instant commands: chain without delay
  const instant = ['cg','bg','black','cg_hide','flash','shake','effect','show_arrogance'];
  if (instant.includes(c.type)) run();
  else setTimeout(run, 60);
}

// ===== CG DISPLAY (crossfade) =====
function showCG(url, isPortrait) {
  // Crossfade: load on hidden layer, then swap
  const front = el.cgfront;
  const back = el.cgback;
  
  // Preload
  const img = new Image();
  img.onload = () => {
    back.style.backgroundImage = `url(${url})`;
    back.className = 'cg-layer' + (isPortrait ? ' portrait' : '');
    // Crossfade
    back.style.opacity = 1;
    front.style.opacity = 0;
    // After transition, swap roles
    setTimeout(() => {
      front.style.backgroundImage = back.style.backgroundImage;
      front.className = back.className;
      front.style.opacity = 1;
      back.style.opacity = 0;
    }, 650);
  };
  img.onerror = () => {
    // Try without path prefix (in case src already has full path)
    back.style.backgroundImage = `url(${url})`;
    back.style.opacity = 1;
    front.style.opacity = 0;
    setTimeout(() => {
      front.style.backgroundImage = back.style.backgroundImage;
      front.style.opacity = 1;
      back.style.opacity = 0;
    }, 650);
  };
  img.src = url;
}

function fadeToBlack() {
  el.cgfront.style.opacity = 0;
  el.cgback.style.opacity = 0;
}

// ===== DIALOGUE =====
let typeTimer = null;

function parseText(t) {
  return (t||'')
    .replace(/\n/g,'<br>')
    .replace(/\*\*(.*?)\*\*/g,'<span class="highlight">$1</span>')
    .replace(/\{\{(.*?)\}\}/g,'<span class="korean">$1</span>')
    .replace(/\[\[(.*?)\]\]/g,'<span class="system">$1</span>');
}

function showMsg(speaker, text) {
  S.typing = true; S.waitClick = false;
  const d = el.dialogue;
  if (!d) return;
  d.className = speaker ? 'show' : 'show narration';
  el.speaker.textContent = speaker || '';
  el.speaker.style.display = speaker ? 'block' : 'none';
  el.text.innerHTML = '';
  el.clickhint.style.display = 'none';
  typeOut(parseText(text), 0);
}

function showNarr(text) { showMsg(null, text); }

function typeOut(html, i) {
  const plain = htmlToPlain(html);
  if (i <= plain.length) {
    el.text.innerHTML = sliceHTML(html, i);
    typeTimer = setTimeout(() => typeOut(html, i+1), TYPE_SPEED);
  } else {
    S.typing = false; S.waitClick = true;
    el.clickhint.style.display = 'block';
  }
}

function htmlToPlain(h) {
  const d = document.createElement('div'); d.innerHTML = h; return d.textContent;
}

function sliceHTML(html, n) {
  let r='', vis=0, inTag=false;
  for (let i=0; i<html.length && vis<n; i++) {
    if (html[i]==='<') { inTag=true; const e=html.indexOf('>',i); if(e<0)break; r+=html.substring(i,e+1); i=e; continue; }
    if (html[i]==='>') { inTag=false; r+=html[i]; continue; }
    if (!inTag) vis++;
    r+=html[i];
  }
  // Close open spans
  const opens=(r.match(/<span[^>]*>/g)||[]).length;
  const closes=(r.match(/<\/span>/g)||[]).length;
  for(let i=0;i<opens-closes;i++) r+='</span>';
  return r;
}

function skipType() {
  if (!S.typing) return;
  clearTimeout(typeTimer);
  const c = script[S.step];
  if (c && c.text) el.text.innerHTML = parseText(c.text);
  S.typing = false; S.waitClick = true;
  el.clickhint.style.display = 'block';
}

// ===== CHOICES =====
function showChoices(opts) {
  S.waitChoice = true;
  el.choices.style.display = 'flex';
  el.choices.innerHTML = '';
  opts.forEach(o => {
    const b = document.createElement('button');
    b.className = 'choice-btn ' + (o.style||'');
    b.textContent = o.text;
    if (o.style==='strike') { b.style.cursor='not-allowed'; }
    b.onclick = () => {
      if (o.style==='strike') return;
      S.waitChoice = false;
      el.choices.style.display = 'none';
      if (o.key) S.choices[o.key] = o.value;
      if (o.card) S.cards.push(o.card);
      next();
    };
    el.choices.appendChild(b);
  });
}

// ===== ARROGANCE =====
function changeArrogance(d, reason) {
  S.arrogance = Math.max(0, Math.min(100, S.arrogance + d));
  if (el.arrogancefill) el.arrogancefill.style.width = S.arrogance + '%';
  if (d > 0 && d >= 20) screenFlash('#ff000044', 300);
  if (d < 0) {
    // Reset animation - flash gold
    screenFlash('#c9a94e44', 500);
    if (el.arrogancelabel) {
      el.arrogancelabel.textContent = `✦ ${reason || '重置'}`;
      el.arrogancelabel.style.color = '#c9a94e';
      setTimeout(() => {
        if(el.arrogancelabel) { el.arrogancelabel.textContent = `囂張值 ${S.arrogance}%`; el.arrogancelabel.style.color='#ff6b6b'; }
      }, 2000);
    }
  } else if (reason && el.arrogancelabel) {
    el.arrogancelabel.textContent = `⚡ ${reason} +${d}`;
    el.arrogancelabel.style.color = '#ff4444';
    setTimeout(() => {
      if(el.arrogancelabel) { el.arrogancelabel.textContent = `囂張值 ${S.arrogance}%`; el.arrogancelabel.style.color='#ff6b6b'; }
    }, 2000);
  }
  next();
}

// ===== GACHA (10-card spread) =====
let G = { result:null, phase:0, pool:null };

function triggerGacha(pool, forced) {
  G.pool = pool;
  G.result = forced || pool.r;
  G.phase = 1;
  
  const gacha = el.gacha;
  gacha.style.display = 'flex';
  $('g-stage1').style.display = 'flex';
  $('g-stage2').style.display = 'none';
  $('g-stage3').style.display = 'none';
  
  // Stage 1: Watch animation, then auto-advance
  screenFlash('#c9a94e44', 500);
  setTimeout(() => gachaP2(), 2000);
}

function gachaP2() {
  G.phase = 2;
  screenFlash('#c9a94e', 300);
  $('g-stage1').style.display = 'none';
  $('g-stage2').style.display = 'flex';
  
  // Create 10 cards in 2-3-3-2 layout
  const spread = $('g-spread');
  spread.innerHTML = '';
  const rows = [2, 3, 3, 2];
  let cardIdx = 0;
  rows.forEach(count => {
    const row = document.createElement('div');
    row.className = 'g-row';
    for (let i = 0; i < count; i++) {
      const card = document.createElement('div');
      card.className = 'g-card';
      const idx = cardIdx;
      card.dataset.idx = idx;
      card.onclick = () => gachaSelect(idx);
      row.appendChild(card);
      // Staggered deal animation
      setTimeout(() => {
        card.classList.add('dealt');
        card.style.animation = `cardDeal 0.4s ease forwards`;
      }, 100 + cardIdx * 120);
      cardIdx++;
    }
    spread.appendChild(row);
  });
}

function gachaSelect(idx) {
  if (G.phase !== 2) return;
  G.phase = 3;
  
  const cards = document.querySelectorAll('.g-card');
  cards.forEach((c, i) => {
    if (i === idx) c.classList.add('chosen');
    else c.classList.add('dim');
  });
  
  // After brief pause, show reveal
  setTimeout(() => {
    screenFlash('#c9a94e', 400);
    screenShake();
    
    $('g-stage2').style.display = 'none';
    $('g-stage3').style.display = 'flex';
    
    const r = G.result;
    const clr = r.rarity==='SSR'?'#ff6b6b':r.rarity==='SR'?'#c9a94e':'#4ecdc4';
    const frameMap = { 'R':'card_frame_r_v2.jpg', 'SR':'card_frame_sr_v2.jpg', 'SSR':'card_frame_ssr_v2.jpg' };
    
    const card = $('g-result-card');
    // Use full card face image if available, otherwise frame + icon
    if (r.cardImage) {
      card.style.backgroundImage = `url(${r.cardImage})`;
      card.innerHTML = '';
    } else {
      card.style.backgroundImage = `url(assets/ui/${frameMap[r.rarity]||frameMap['R']})`;
      card.innerHTML = `<span class="card-icon">${r.icon||'★'}</span>`;
    }
    card.style.boxShadow = `0 0 60px ${clr}88`;
    card.style.animation = 'none'; void card.offsetWidth;
    card.style.animation = 'cardReveal 0.8s ease forwards';
    
    $('g-rarity').textContent = `★ ${r.rarity} ★`;
    $('g-rarity').style.color = clr;
    $('g-name').textContent = r.name;
    $('g-desc').textContent = r.desc;
    
    $('g-burst').style.background = `radial-gradient(circle,${clr}66 0%,transparent 70%)`;
    $('g-burst').style.animation = 'none'; void $('g-burst').offsetWidth;
    $('g-burst').style.animation = 'burstExpand 1.2s ease forwards';
    
    S.cards.push(r);
  }, 1200);
}

function closeGacha() {
  el.gacha.style.display = 'none';
  $('g-stage1').style.display = 'flex';
  $('g-stage2').style.display = 'none';
  $('g-stage3').style.display = 'none';
  $('g-spread').innerHTML = '';
  next();
}

// ===== BIG TITLE =====
function showBigTitle(text, sub) {
  const bt = $('big-title');
  bt.innerHTML = `<div class="title-text">${text}</div>${sub?`<div class="title-sub">${sub}</div>`:''}`;
  bt.style.display = 'flex';
  setTimeout(() => { bt.style.display = 'none'; next(); }, 3000);
}

// ===== EFFECTS =====
function screenFlash(color, dur) {
  if (!el.flash) return;
  el.flash.style.background = color||'#fff';
  el.flash.style.opacity = 1;
  setTimeout(() => el.flash.style.opacity = 0, dur||200);
}

function screenShake() {
  if (!el.shaker) return;
  el.shaker.classList.add('shake');
  setTimeout(() => el.shaker.classList.remove('shake'), 400);
}

function applyEffect(name) {
  if (name === 'fadeout') fadeToBlack();
  if (name === 'fadein') { el.cgfront.style.opacity = 1; }
}

// ===== INPUT =====
document.addEventListener('click', e => {
  if (e.target.tagName === 'BUTTON') return;
  if (S.typing) skipType();
  else if (S.waitClick) { S.waitClick = false; next(); }
});
document.addEventListener('keydown', e => {
  if (e.key===' '||e.key==='Enter') {
    e.preventDefault();
    if (S.typing) skipType();
    else if (S.waitClick) { S.waitClick = false; next(); }
  }
});

// ===== CHAPTER END =====
function chapterEnd(nx) {
  screenFlash('#000', 500);
  setTimeout(() => showMsg('', `━━ 序章完 ━━\n\n下一章：${nx||'開發中...'}`), 600);
}

// ===== START =====
function startGame() {
  initEl();
  const t = el.title;
  if (t) { t.style.opacity = 0; setTimeout(() => t.style.display = 'none', 1000); }
  setTimeout(() => {
    if (typeof PROLOGUE !== 'undefined') { script = PROLOGUE; run(); }
    else showNarr('劇本載入中...');
  }, 1100);
}
