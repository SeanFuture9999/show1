/**
 * 重生抽卡復仇記 — Engine v3 (Card Selection System)
 * New: hand cards, preview hints, confirm/cancel, branching outcomes
 */

const CG_PATH = 'assets/cg/';
const BG_PATH = 'assets/backgrounds/';
const TYPE_SPEED = 25;

// ===== CARD DATABASE =====
const CARDS = {
  fool: {
    id: 'fool', name: '愚者', subtitle: 'The Fool',
    desc: '看起來什麼都不懂的人，往往看得最清楚。',
    flavor: '有時候，最聰明的做法——就是讓所有人都以為你是笨蛋。',
    icon: '🎭', rarity: 'R', color: '#c9a94e',
    image: 'assets/ui/card_fool.png'
  },
  gluttony: {
    id: 'gluttony', name: '暴食', subtitle: 'Gluttony',
    desc: '貪得無厭的人，終將被自己的胃口噎死。',
    flavor: '七宗罪。吃太多的人最怕被翻帳。',
    icon: '🍽️', rarity: 'R', color: '#ff6b6b',
    image: 'assets/ui/card_gluttony.png'
  },
  judgement: {
    id: 'judgement', name: '審判', subtitle: 'Judgement',
    desc: '所有的痕跡都會說話。你以為刪了？它記得。',
    flavor: '世界上最可靠的證人——不是人，是紀錄。',
    icon: '⚖️', rarity: 'R', color: '#4ecdc4',
    image: 'assets/ui/card_judgement.png'
  },
  seen: {
    id: 'seen', name: '已讀', subtitle: 'Seen',
    desc: '最殘忍的不是拒絕，是看了卻假裝沒看到。',
    flavor: '你說沒收到？系統可不這麼說。',
    icon: '👁️', rarity: 'R', color: '#9b59b6',
    image: 'assets/ui/card_seen.png'
  },
  cain: {
    id: 'cain', name: '該隱的印記', subtitle: 'Mark of Cain',
    desc: '殺了兄弟的手，上帝做了標記。他自己不知道，但所有人都看得見。',
    flavor: '甩鍋者的自爆——兇手在犯罪現場簽了名。',
    icon: '✋', rarity: 'SR', color: '#e74c3c',
    image: 'assets/ui/card_cain.png'
  }
};

// ===== STATE =====
let S = {
  step: 0,
  arrogance: 0,
  hand: [],           // cards in hand
  choices: {},         // story choices made
  cardPlays: {},       // card play results: { play1: 'fool', play2: 'gluttony', ... }
  playRatings: [],     // ['best','ok','wrong',...] for final scoring
  typing: false,
  waitClick: false,
  waitChoice: false,
  waitCard: false,     // waiting for card selection
  currentLayer: 'front',
  chapter: 'prologue'
};

// ===== DOM =====
const $ = id => document.getElementById(id);
const el = {};

function initEl() {
  ['cg-front','cg-back','dialogue','speaker','text','click-hint',
   'choices','arrogance','arrogance-fill','arrogance-label',
   'gacha','flash','shaker','title','vignette',
   'hand-bar','hand-cards','card-preview','card-preview-inner',
   'card-acquire-overlay'
  ].forEach(id => { el[id.replace(/-/g,'')] = $(id); });
}

// ===== SCRIPT ENGINE =====
let script = [];
let branches = {};
let branchReturn = -1; // step to return to after branch

function run() {
  if (S.step >= script.length) {
    if (branchReturn >= 0) {
      // Return from branch
      S.step = branchReturn;
      branchReturn = -1;
      script = window._mainScript || script;
      run();
      return;
    }
    showMsg('', '━━ 完 ━━');
    return;
  }
  const c = script[S.step];

  const handlers = {
    'cg':            () => { showCG(CG_PATH + c.src, c.portrait, c.pan); next(); },
    'bg':            () => { showCG(BG_PATH + c.src, c.portrait, c.pan); next(); },
    'pan':           () => { panCG(c.to, c.duration, c.scale); setTimeout(next, c.wait ? (c.duration||2000) : 50); },
    'zoom':          () => { zoomCG(c.scale, c.duration); setTimeout(next, c.wait ? (c.duration||2000) : 50); },
    'black':         () => { fadeToBlack(); next(); },
    'cg_hide':       () => { fadeToBlack(); next(); },
    'say':           () => showMsg(c.speaker, c.text, c.textEffect),
    'narrate':       () => showNarr(c.text, c.textEffect),
    'choice':        () => showChoices(c.options),
    'arrogance':     () => { changeArrogance(c.delta, c.reason); },
    'show_arrogance':() => { if(el.arrogance) el.arrogance.style.display='block'; next(); },
    'flash':         () => { screenFlash(c.color, c.duration); next(); },
    'shake':         () => { screenShake(); next(); },
    'wait':          () => setTimeout(next, c.ms || 1000),
    'effect':        () => { applyEffect(c.name); next(); },
    'big_title':     () => showBigTitle(c.text, c.sub),
    'chapter_end':   () => chapterEnd(c.next, c.showAd),
    // New v3 commands
    'card_acquire':  () => showCardAcquire(c.card, c.watchLines),
    'card_reveal':   () => showCardReveal(c.cards),
    'card_play':     () => showCardPlay(c),
    'show_hand':     () => { showHandBar(); next(); },
    'hide_hand':     () => { hideHandBar(); next(); },
    'set_chapter':   () => { S.chapter = c.chapter; next(); },
  };

  const fn = handlers[c.type];
  if (fn) fn();
  else { console.warn('Unknown:', c.type); next(); }
}

function next() {
  S.step++;
  if (S.step >= script.length) { run(); return; }
  const c = script[S.step];
  const instant = ['cg','bg','black','cg_hide','flash','shake','effect','show_arrogance','show_hand','hide_hand','set_chapter','pan','zoom'];
  if (instant.includes(c.type)) run();
  else setTimeout(run, 60);
}

// ===== CG DISPLAY (crossfade + pan/zoom) =====

// Pan uses transform-origin + scale for guaranteed full coverage
// Transform-origin presets
const PAN_ORIGIN = {
  'left':         '0% 50%',
  'right':        '100% 50%',
  'center':       '50% 50%',
  'top':          '50% 0%',
  'bottom':       '50% 100%',
  'top-left':     '0% 0%',
  'top-right':    '100% 0%',
  'bottom-left':  '0% 100%',
  'bottom-right': '100% 100%',
};
// Keep PAN_POS for standalone pan command backward compat
const PAN_POS = PAN_ORIGIN;

function showCG(url, isPortrait, panConfig) {
  const front = el.cgfront;
  const back = el.cgback;
  const img = new Image();
  
  const applyImage = () => {
    // Reset everything
    front.style.transition = 'none';
    front.style.opacity = 0;
    front.style.transform = 'none';
    back.style.opacity = 0;
    
    // Set image
    front.style.backgroundImage = `url(${url})`;
    front.className = 'cg-layer' + (isPortrait ? ' portrait' : '');
    front.style.backgroundSize = (panConfig && panConfig.fit) ? panConfig.fit : (isPortrait ? 'contain' : 'cover');
    front.style.backgroundPosition = (panConfig && panConfig.start) ? panConfig.start : 'center';
    front.style.backgroundColor = (panConfig && panConfig.bgColor) ? panConfig.bgColor : 'transparent';
    // Initial zoom if configured
    if (panConfig && panConfig.zoom && panConfig.zoom.from !== undefined) {
      front.style.transform = `scale(${panConfig.zoom.from})`;
    }
    
    // Force reflow then fade in
    void front.offsetWidth;
    front.style.transition = 'opacity 0.6s ease';
    front.style.opacity = 1;
    
    // After fade-in, start animation if configured
    if (panConfig && (panConfig.to || panConfig.zoom)) {
      setTimeout(() => {
        const dur = panConfig.duration || 4000;
        void front.offsetWidth;
        const transitions = [];
        if (panConfig.to) transitions.push(`background-position ${dur}ms ease-in-out`);
        if (panConfig.zoom) transitions.push(`transform ${dur}ms ease-in-out`);
        front.style.transition = transitions.join(', ');
        if (panConfig.to) front.style.backgroundPosition = panConfig.to;
        if (panConfig.zoom) front.style.transform = `scale(${panConfig.zoom.to})`;
      }, 700);
    }
  };
  
  img.onload = applyImage;
  img.onerror = applyImage;
  img.src = url;
}

// Pan command: smoothly move current CG to a new position
function panCG(to, duration) {
  const front = el.cgfront;
  if (!front) return;
  const targetPos = PAN_POS[to] || to;
  const dur = duration || 2000;
  void front.offsetWidth;
  front.style.transition = `background-position ${dur}ms ease-in-out`;
  front.style.backgroundPosition = targetPos;
}

// Zoom command: smoothly zoom current CG (uses transform)
function zoomCG(scale, duration) {
  const front = el.cgfront;
  if (!front) return;
  const dur = duration || 2000;
  void front.offsetWidth;
  front.style.transition = `transform ${dur}ms ease-in-out`;
  front.style.transform = `scale(${scale})`;
}

function fadeToBlack() {
  el.cgfront.style.transition = 'opacity 0.6s ease';
  el.cgfront.style.opacity = 0;
  el.cgfront.style.transform = 'none';
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

function showMsg(speaker, text, textEffect) {
  S.typing = true; S.waitClick = false;
  const d = el.dialogue;
  if (!d) return;
  d.className = speaker ? 'show' : 'show narration';
  if (textEffect === 'impact') d.classList.add('text-impact');
  else d.classList.remove('text-impact');
  el.speaker.textContent = speaker || '';
  el.speaker.style.display = speaker ? 'block' : 'none';
  el.text.innerHTML = '';
  el.clickhint.style.display = 'none';
  typeOut(parseText(text), 0);
}

function showNarr(text, textEffect) { showMsg(null, text, textEffect); }

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
      next();
    };
    el.choices.appendChild(b);
  });
}

// ===== ARROGANCE =====
function changeArrogance(d, reason) {
  S.arrogance = Math.max(0, Math.min(100, S.arrogance + d));
  if (el.arrogancefill) el.arrogancefill.style.width = S.arrogance + '%';
  if (d > 0 && d >= 15) screenFlash('#ff000033', 300);
  if (d < 0) {
    screenFlash('#c9a94e44', 500);
    if (el.arrogancelabel) {
      el.arrogancelabel.textContent = `✦ ${reason || '重置'}`;
      el.arrogancelabel.style.color = '#c9a94e';
      setTimeout(() => {
        if(el.arrogancelabel) { el.arrogancelabel.textContent = `囂張值 ${S.arrogance}%`; el.arrogancelabel.style.color='#ff6b6b'; }
      }, 2000);
    }
  } else if (reason && el.arrogancelabel) {
    el.arrogancelabel.textContent = `⚡ ${reason}`;
    el.arrogancelabel.style.color = '#ff4444';
    setTimeout(() => {
      if(el.arrogancelabel) { el.arrogancelabel.textContent = `囂張值 ${S.arrogance}%`; el.arrogancelabel.style.color='#ff6b6b'; }
    }, 2000);
  }
  next();
}

// ===== HAND CARD SYSTEM (NEW) =====

function showHandBar() {
  if (!el.handbar) return;
  el.handbar.style.display = 'flex';
  renderHand();
}

function hideHandBar() {
  if (!el.handbar) return;
  el.handbar.style.display = 'none';
}

function renderHand() {
  if (!el.handcards) return;
  el.handcards.innerHTML = '';
  S.hand.forEach(cardId => {
    const card = CARDS[cardId];
    if (!card) return;
    const div = document.createElement('div');
    div.className = 'hand-card';
    div.style.borderColor = card.color;
    div.innerHTML = card.image
      ? `<img class="hand-card-img" src="${card.image}" alt="${card.name}"><span class="hand-card-name">${card.name}</span>`
      : `<span class="hand-card-icon">${card.icon}</span><span class="hand-card-name">${card.name}</span>`;
    el.handcards.appendChild(div);
  });
}

// ===== CARD ACQUIRE ANIMATION =====

function showCardAcquire(cardId, watchLines) {
  const card = CARDS[cardId];
  if (!card) { next(); return; }
  S.hand.push(cardId);
  
  const overlay = el.cardacquireoverlay;
  if (!overlay) { renderHand(); next(); return; }
  
  // Hide dialogue behind overlay (use class removal, not inline style)
  if (el.dialogue) el.dialogue.className = '';
  overlay.style.display = 'flex';
  overlay.innerHTML = `
    <div class="acquire-glow" style="background:radial-gradient(circle,${card.color}44 0%,transparent 70%)"></div>
    <div class="acquire-card" style="border-color:${card.color}">
      ${card.image ? `<img class="acquire-card-art" src="${card.image}" alt="${card.name}">` : `<div class="acquire-card-icon">${card.icon}</div>`}
      <div class="acquire-card-rarity" style="color:${card.color}">★ ${card.rarity} ★</div>
      <div class="acquire-card-name">${card.name}</div>
      <div class="acquire-card-subtitle">${card.subtitle}</div>
      <div class="acquire-card-desc">${card.desc}</div>
    </div>
    <div class="acquire-watch-line" id="acquire-watch-text"></div>
    <button class="acquire-close" onclick="closeCardAcquire()">收下</button>
  `;
  
  screenFlash(card.color + '44', 500);
  
  // Type out watch lines
  if (watchLines && watchLines.length > 0) {
    const watchEl = $('acquire-watch-text');
    let lineIdx = 0;
    function showNextLine() {
      if (lineIdx < watchLines.length && watchEl) {
        watchEl.innerHTML += (lineIdx > 0 ? '<br>' : '') + '【懷錶】' + watchLines[lineIdx];
        lineIdx++;
        setTimeout(showNextLine, 1500);
      }
    }
    setTimeout(showNextLine, 800);
  }
}

function closeCardAcquire() {
  const overlay = el.cardacquireoverlay;
  if (overlay) overlay.style.display = 'none';
  if (el.dialogue) { el.dialogue.style.cssText = ''; }
  renderHand();
  next();
}

// ===== CARD REVEAL (Prologue - 3 cards) =====

function showCardReveal(cardIds) {
  const overlay = el.cardacquireoverlay;
  if (!overlay) { cardIds.forEach(c => S.hand.push(c)); next(); return; }
  
  let revealIdx = 0;
  const cards = cardIds.map(id => CARDS[id]).filter(Boolean);
  
  // Hide dialogue behind overlay (use class removal, not inline style)
  if (el.dialogue) el.dialogue.className = '';
  overlay.style.display = 'flex';
  
  function revealNext() {
    if (revealIdx >= cards.length) {
      // All revealed - show collect button
      overlay.innerHTML += `<button class="acquire-close" onclick="closeCardReveal()">全部收下</button>`;
      return;
    }
    const card = cards[revealIdx];
    const isFirst = revealIdx === 0;
    
    if (isFirst) {
      overlay.innerHTML = `<div class="reveal-title">命運之牌</div><div class="reveal-cards" id="reveal-cards-container"></div>`;
    }
    
    const container = $('reveal-cards-container');
    if (!container) return;
    
    // Add card back first, then flip
    const cardEl = document.createElement('div');
    cardEl.className = 'reveal-card-wrapper';
    cardEl.innerHTML = `
      <div class="reveal-card flipping" style="border-color:${card.color}">
        <div class="reveal-card-inner">
          <div class="reveal-card-front">
            ${card.image ? `<img class="reveal-card-art" src="${card.image}" alt="${card.name}">` : `<div class="acquire-card-icon">${card.icon}</div>`}
            <div class="acquire-card-rarity" style="color:${card.color}">★ ${card.rarity} ★</div>
            <div class="acquire-card-name">${card.name}</div>
            <div class="acquire-card-subtitle">${card.subtitle}</div>
          </div>
        </div>
      </div>
      <div class="reveal-card-desc">${card.desc}</div>
    `;
    container.appendChild(cardEl);
    
    screenFlash(card.color + '44', 300);
    S.hand.push(card.id);
    
    revealIdx++;
    setTimeout(revealNext, 2000);
  }
  
  setTimeout(revealNext, 500);
}

function closeCardReveal() {
  const overlay = el.cardacquireoverlay;
  if (overlay) overlay.style.display = 'none';
  // Clear any inline style that could override CSS classes
  if (el.dialogue) { el.dialogue.style.cssText = ''; }
  renderHand();
  next();
}

// ===== CARD PLAY (Core new mechanic) =====

let currentPlay = null;

function showCardPlay(playData) {
  S.waitCard = true;
  currentPlay = playData;
  
  // Hide dialogue
  if (el.dialogue) el.dialogue.className = '';
  
  // Show card selection UI
  const preview = el.cardpreview;
  if (!preview) return;
  
  preview.style.display = 'flex';
  
  const inner = el.cardpreviewinner;
  inner.innerHTML = `
    <div class="play-header">
      <div class="play-watch-prompt">【懷錶】${playData.prompt}</div>
    </div>
    <div class="play-cards" id="play-cards-grid"></div>
    <div class="play-hint-area" id="play-hint-area">
      <div class="play-hint-text">選擇一張卡片</div>
    </div>
  `;
  
  const grid = $('play-cards-grid');
  const availableCards = playData.cards || S.hand;
  
  availableCards.forEach(cardId => {
    const card = CARDS[cardId];
    if (!card) return;
    
    const cardEl = document.createElement('div');
    cardEl.className = 'play-card';
    cardEl.style.borderColor = card.color;
    cardEl.dataset.cardId = cardId;
    cardEl.innerHTML = card.image
      ? `<img class="play-card-art" src="${card.image}" alt="${card.name}"><div class="play-card-name">${card.name}</div>`
      : `<div class="play-card-icon">${card.icon}</div><div class="play-card-name">${card.name}</div><div class="play-card-subtitle">${card.subtitle}</div>`;
    cardEl.onclick = () => previewCard(cardId);
    grid.appendChild(cardEl);
  });
}

function previewCard(cardId) {
  if (!currentPlay) return;
  const card = CARDS[cardId];
  const hint = currentPlay.hints[cardId] || '……';
  
  // Highlight selected card
  document.querySelectorAll('.play-card').forEach(el => {
    el.classList.toggle('selected', el.dataset.cardId === cardId);
  });
  
  const hintArea = $('play-hint-area');
  if (hintArea) {
    hintArea.innerHTML = `
      <div class="play-hint-watch">【懷錶】<span class="system">${hint}</span></div>
      <div class="play-hint-buttons">
        <button class="play-btn-confirm" onclick="confirmCard('${cardId}')">確認出牌</button>
        <button class="play-btn-cancel" onclick="cancelCard()">換一張</button>
      </div>
    `;
  }
}

function cancelCard() {
  document.querySelectorAll('.play-card').forEach(el => {
    el.classList.remove('selected');
  });
  const hintArea = $('play-hint-area');
  if (hintArea) {
    hintArea.innerHTML = `<div class="play-hint-text">選擇一張卡片</div>`;
  }
}

function confirmCard(cardId) {
  if (!currentPlay) return;
  
  S.waitCard = false;
  const result = currentPlay.results[cardId];
  
  // Record
  S.cardPlays[currentPlay.id] = cardId;
  if (result && result.rating) S.playRatings.push(result.rating);
  
  // Hide card play UI
  const preview = el.cardpreview;
  if (preview) preview.style.display = 'none';
  
  // Apply arrogance change
  if (result && result.arrogance) {
    S.arrogance = Math.max(0, Math.min(100, S.arrogance + result.arrogance));
    if (el.arrogancefill) el.arrogancefill.style.width = S.arrogance + '%';
  }
  
  // Flash based on result
  if (result) {
    if (result.rating === 'best') screenFlash('#c9a94e44', 500);
    else if (result.rating === 'wrong') screenFlash('#ff000033', 300);
  }
  
  // Play branch
  if (result && result.branch && branches[result.branch]) {
    window._mainScript = script;
    branchReturn = S.step + 1;
    script = branches[result.branch];
    S.step = 0;
    run();
  } else {
    next();
  }
}

// ===== BIG TITLE =====
function showBigTitle(text, sub) {
  const bt = $('big-title');
  if (!bt) { next(); return; }
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
  setTimeout(() => el.shaker.classList.remove('shake'), 800);
}

function applyEffect(name) {
  if (name === 'fadeout') fadeToBlack();
  if (name === 'fadein') { el.cgfront.style.opacity = 1; }
}

// ===== CHAPTER END =====
function chapterEnd(nx, showAd) {
  if (showAd) {
    // Show ad prompt
    const overlay = el.cardacquireoverlay;
    if (overlay) {
      overlay.style.display = 'flex';
      overlay.innerHTML = `
        <div class="chapter-end-title">━━ ${S.chapter === 'prologue' ? '序章完' : '第一章完'} ━━</div>
        <div class="chapter-end-next">下一章：${nx || '開發中...'}</div>
        <button class="acquire-close" onclick="closeChapterEnd()">▶ 繼續</button>
      `;
    }
  } else {
    showMsg('', `━━ 完 ━━\n\n下一章：${nx||'開發中...'}`);
  }
}

function closeChapterEnd() {
  const overlay = el.cardacquireoverlay;
  if (overlay) overlay.style.display = 'none';
  
  // Load next chapter if available
  if (S.chapter === 'prologue' && typeof CHAPTER1 !== 'undefined') {
    S.chapter = 'chapter1';
    script = CHAPTER1;
    branches = typeof CH1_BRANCHES !== 'undefined' ? CH1_BRANCHES : {};
    S.step = 0;
    run();
  } else if (S.chapter === 'chapter1') {
    showMsg('', '━━ 第二章：秘書的眼淚 ━━\n\n開發中...');
  } else {
    showMsg('', '━━ 開發中 ━━');
  }
}

// ===== FACE SLAP SYSTEM =====

function getFaceSlapGrade() {
  const bestCount = S.playRatings.filter(r => r === 'best').length;
  const total = S.playRatings.length;
  if (bestCount >= total * 0.8) return 'SSR';
  if (bestCount >= total * 0.5) return 'SR';
  return 'R';
}

function triggerFaceSlap(grade) {
  screenFlash('#ffffff', 300);
  setTimeout(() => {
    screenShake();
    // Arrogance bar explosion
    if (el.arrogancefill) {
      el.arrogancefill.style.transition = 'width 0.3s ease';
      el.arrogancefill.style.width = '100%';
      setTimeout(() => {
        screenFlash('#ff000066', 200);
        el.arrogancefill.style.background = 'linear-gradient(90deg,#c9a94e,#ff6b6b,#c9a94e)';
        setTimeout(() => {
          el.arrogancefill.style.transition = 'width 1s ease';
          el.arrogancefill.style.width = '0%';
          S.arrogance = 0;
          screenFlash('#c9a94e66', 500);
          if (el.arrogancelabel) {
            const gradeText = grade === 'SSR' ? '✦✦✦ 完美打臉 ✦✦✦' : grade === 'SR' ? '✦✦ 漂亮打臉 ✦✦' : '✦ 打臉成功 ✦';
            el.arrogancelabel.textContent = gradeText;
            el.arrogancelabel.style.color = '#c9a94e';
          }
        }, 500);
      }, 300);
    }
  }, 300);
}

// ===== INPUT =====
document.addEventListener('click', e => {
  if (e.target.tagName === 'BUTTON') return;
  if (e.target.closest('.play-card')) return;
  if (e.target.closest('#card-preview')) return;
  if (e.target.closest('#card-acquire-overlay')) return;
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

// ===== START =====
function startGame() {
  initEl();
  const t = el.title;
  if (t) { t.style.opacity = 0; setTimeout(() => t.style.display = 'none', 1000); }
  setTimeout(() => {
    if (typeof PROLOGUE !== 'undefined') {
      script = PROLOGUE;
      branches = typeof PROLOGUE_BRANCHES !== 'undefined' ? PROLOGUE_BRANCHES : {};
      S.chapter = 'prologue';
      run();
    } else showNarr('劇本載入中...');
  }, 1100);
}

// ===== DEBUG MENU (remove before launch) =====
function toggleDebug() {
  const m = document.getElementById('debug-menu');
  if (m) m.classList.toggle('open');
}

function debugJump(target) {
  // Close menu
  const m = document.getElementById('debug-menu');
  if (m) m.classList.remove('open');
  
  // Initialize if needed
  initEl();
  
  // Hide title screen
  const title = document.getElementById('title');
  if (title) { title.style.display = 'none'; title.style.opacity = 0; }
  
  // Reset all state
  S.typing = false; S.waitClick = false; S.waitCard = false;
  S.hand = [];
  clearTimeout(typeTimer);
  
  // Hide all overlays
  if (el.cardacquireoverlay) el.cardacquireoverlay.style.display = 'none';
  if (el.dialogue) el.dialogue.style.cssText = '';
  if (el.dialogue) el.dialogue.className = '';
  const bt = document.getElementById('big-title');
  if (bt) bt.style.display = 'none';
  
  // Reset CG layers
  if (el.cgfront) { el.cgfront.style.opacity = 0; el.cgfront.style.transform = 'none'; }
  if (el.cgback) { el.cgback.style.opacity = 0; }
  
  // Hide hand bar
  if (el.handbar) el.handbar.style.display = 'none';
  
  // Set script
  script = PROLOGUE;
  branches = typeof PROLOGUE_BRANCHES !== 'undefined' ? PROLOGUE_BRANCHES : {};
  S.chapter = 'prologue';
  
  // Find label index
  if (typeof target === 'number') {
    S.step = target;
  } else {
    const idx = script.findIndex(c => c.label === target);
    S.step = idx >= 0 ? idx : 0;
  }
  
  console.log('Debug jump to:', target, 'idx:', S.step);
  run();
}

function debugJumpCh1(target) {
  // Close menu
  const m = document.getElementById('debug-menu');
  if (m) m.classList.remove('open');
  
  // Initialize if needed
  initEl();
  
  // Hide title screen
  const title = document.getElementById('title');
  if (title) { title.style.display = 'none'; title.style.opacity = 0; }
  
  // Reset all state
  S.typing = false; S.waitClick = false; S.waitCard = false;
  clearTimeout(typeTimer);
  
  // Hide all overlays
  if (el.cardacquireoverlay) el.cardacquireoverlay.style.display = 'none';
  if (el.dialogue) el.dialogue.style.cssText = '';
  if (el.dialogue) el.dialogue.className = '';
  const bt = document.getElementById('big-title');
  if (bt) bt.style.display = 'none';
  
  // Reset CG layers
  if (el.cgfront) { el.cgfront.style.opacity = 0; el.cgfront.style.transform = 'none'; }
  if (el.cgback) { el.cgback.style.opacity = 0; }
  
  // Hide hand bar
  if (el.handbar) el.handbar.style.display = 'none';
  
  // Set Chapter 1 script
  script = CHAPTER1;
  branches = typeof CH1_BRANCHES !== 'undefined' ? CH1_BRANCHES : {};
  S.chapter = 'chapter1';
  
  // Give player the 3 starting cards from prologue
  if (!S.hand || S.hand.length === 0) {
    S.hand = ['fool', 'gluttony', 'judgement'];
  }
  
  // Find label index
  const idx = script.findIndex(c => c.label === target);
  S.step = idx >= 0 ? idx : 0;
  
  console.log('Debug jump Ch1 to:', target, 'idx:', S.step);
  run();
}
