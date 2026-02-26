/**
 * 重生抽卡復仇記 — Game Engine v2
 * Enhanced: bigger text, transitions, text effects
 */

const ASSET_PATH = 'assets/';
const TYPING_SPEED = 28;

// ===== GAME STATE =====
let state = {
  step: 0,
  arrogance: 0,
  maxArrogance: 100,
  cards: [],
  choices: {},
  chapter: 'prologue',
  typing: false,
  waitingForClick: false,
  waitingForChoice: false,
};

// ===== DOM REFS =====
const $ = id => document.getElementById(id);
const dom = {};
function initDom() {
  ['bg','cg-overlay','char-left','char-center','char-right',
   'dialogue','speaker','text','click-indicator','choices',
   'arrogance-bar','arrogance-fill','arrogance-label',
   'gacha-overlay','gacha-card','gacha-result','gacha-close',
   'screen-flash','screen-shake','title-screen','vignette'
  ].forEach(id => { 
    const el = $(id);
    if (el) dom[id.replace(/-/g,'')] = el;
  });
}

// ===== SCRIPT ENGINE =====
let currentScript = [];

function loadScript(script) {
  currentScript = script;
  state.step = 0;
  executeStep();
}

function executeStep() {
  if (state.step >= currentScript.length) {
    showMessage('系統', '— 本章結束 —', 'system');
    return;
  }

  const cmd = currentScript[state.step];
  
  switch(cmd.type) {
    case 'bg': setBg(cmd.src); nextStep(); break;
    case 'cg': showCG(cmd.src); nextStep(); break;
    case 'cg_hide': hideCG(); nextStep(); break;
    case 'char': setChar(cmd.pos, cmd.src); nextStep(); break;
    case 'char_hide': hideChar(cmd.pos); nextStep(); break;
    case 'char_hide_all': hideAllChars(); nextStep(); break;
    case 'say': showMessage(cmd.speaker, cmd.text, cmd.style); break;
    case 'narrate': showNarration(cmd.text); break;
    case 'choice': showChoices(cmd.options); break;
    case 'arrogance': changeArrogance(cmd.delta, cmd.reason); break;
    case 'gacha': triggerGacha(cmd.pool, cmd.forced); break;
    case 'flash': screenFlash(cmd.color, cmd.duration); nextStep(); break;
    case 'shake': screenShake(); nextStep(); break;
    case 'wait': setTimeout(nextStep, cmd.ms || 1000); break;
    case 'effect': applyEffect(cmd.name); nextStep(); break;
    case 'show_arrogance': if(dom.arrogancebar) dom.arrogancebar.style.display='block'; nextStep(); break;
    case 'hide_arrogance': if(dom.arrogancebar) dom.arrogancebar.style.display='none'; nextStep(); break;
    case 'title_hide': if(dom.titlescreen) dom.titlescreen.style.display='none'; nextStep(); break;
    case 'show_dialogue': if(dom.dialogue) dom.dialogue.style.display='block'; nextStep(); break;
    case 'chapter_end': chapterEnd(cmd.next); break;
    default: console.warn('Unknown:', cmd.type); nextStep();
  }
}

function nextStep() {
  state.step++;
  if (state.step < currentScript.length) {
    const next = currentScript[state.step];
    const instant = ['bg','cg','cg_hide','char','char_hide','char_hide_all',
                     'flash','shake','effect','show_arrogance','hide_arrogance',
                     'title_hide','show_dialogue'];
    if (instant.includes(next.type)) {
      executeStep();
    } else {
      setTimeout(executeStep, 80);
    }
  } else {
    executeStep();
  }
}

// ===== BACKGROUND =====
function setBg(src) {
  if (!dom.bg) return;
  if (src) {
    // Crossfade transition
    dom.bg.style.transition = 'opacity 0.6s ease';
    dom.bg.style.opacity = 0;
    setTimeout(() => {
      dom.bg.style.backgroundImage = `url(${ASSET_PATH}backgrounds/${src})`;
      dom.bg.style.opacity = 1;
    }, 300);
  } else {
    dom.bg.style.opacity = 0;
  }
}

// ===== CG =====
function showCG(src) {
  if (!dom.cgoverlay) return;
  dom.cgoverlay.style.backgroundImage = `url(${ASSET_PATH}cg/${src})`;
  dom.cgoverlay.style.display = 'block';
  dom.cgoverlay.style.animation = 'none';
  void dom.cgoverlay.offsetWidth; // reflow
  dom.cgoverlay.style.animation = 'cgReveal 0.8s ease forwards';
}
function hideCG() {
  if (!dom.cgoverlay) return;
  dom.cgoverlay.style.animation = 'cgFadeOut 0.5s ease forwards';
  setTimeout(() => { dom.cgoverlay.style.display = 'none'; }, 500);
}

// ===== CHARACTERS =====
function setChar(pos, src) {
  const el = dom[`char${pos}`];
  if (!el) return;
  const img = el.querySelector('img');
  if (!img) return;
  if (src) {
    img.src = `${ASSET_PATH}characters/${src}`;
    img.style.display = 'block';
    // Slide-in animation
    el.style.animation = 'none';
    void el.offsetWidth;
    el.style.animation = 'charAppear 0.4s ease forwards';
  } else {
    img.style.display = 'none';
  }
}
function hideChar(pos) { setChar(pos, null); }
function hideAllChars() {
  ['left','center','right'].forEach(p => hideChar(p));
}

// ===== DIALOGUE =====
let typingTimeout = null;

function parseText(text) {
  return (text || '')
    .replace(/\n/g, '<br>')
    .replace(/\*\*(.*?)\*\*/g, '<span class="highlight">$1</span>')
    .replace(/\{\{(.*?)\}\}/g, '<span class="korean">$1</span>')
    .replace(/\[\[(.*?)\]\]/g, '<span class="system">$1</span>');
}

function showMessage(speaker, text, style) {
  state.typing = true;
  state.waitingForClick = false;
  
  if (!dom.dialogue) return;
  dom.dialogue.style.display = 'block';
  dom.dialogue.className = style === 'narration' ? 'dialogue-box narration' : 'dialogue-box';
  
  if (dom.speaker) {
    dom.speaker.textContent = speaker || '';
    dom.speaker.style.display = speaker ? 'block' : 'none';
  }
  if (dom.text) dom.text.innerHTML = '';
  if (dom.clickindicator) dom.clickindicator.style.display = 'none';
  
  const parsed = parseText(text);
  typeText(parsed, 0);
}

function typeText(html, idx) {
  const temp = document.createElement('div');
  temp.innerHTML = html;
  const plainText = temp.textContent;
  
  if (idx <= plainText.length) {
    if (dom.text) dom.text.innerHTML = getPartialHTML(html, idx);
    typingTimeout = setTimeout(() => typeText(html, idx + 1), TYPING_SPEED);
  } else {
    state.typing = false;
    state.waitingForClick = true;
    if (dom.clickindicator) dom.clickindicator.style.display = 'block';
  }
}

function getPartialHTML(html, charCount) {
  let result = '';
  let visibleChars = 0;
  let inTag = false;
  
  for (let i = 0; i < html.length && visibleChars < charCount; i++) {
    if (html[i] === '<') { 
      inTag = true;
      const tagEnd = html.indexOf('>', i);
      if (tagEnd === -1) break;
      result += html.substring(i, tagEnd + 1);
      i = tagEnd;
      continue;
    }
    if (html[i] === '>') { inTag = false; result += html[i]; continue; }
    if (!inTag) { visibleChars++; }
    result += html[i];
  }
  
  const openTags = (result.match(/<span[^>]*>/g) || []).length;
  const closeTags = (result.match(/<\/span>/g) || []).length;
  for (let i = 0; i < openTags - closeTags; i++) result += '</span>';
  
  return result;
}

function showNarration(text) {
  showMessage(null, text, 'narration');
}

function skipTyping() {
  if (!state.typing) return;
  clearTimeout(typingTimeout);
  
  const cmd = currentScript[state.step];
  if (!cmd || !cmd.text) {
    state.typing = false;
    state.waitingForClick = true;
    if (dom.clickindicator) dom.clickindicator.style.display = 'block';
    return;
  }
  
  const parsed = parseText(cmd.text);
  if (dom.text) dom.text.innerHTML = parsed;
  state.typing = false;
  state.waitingForClick = true;
  if (dom.clickindicator) dom.clickindicator.style.display = 'block';
}

// ===== CHOICES =====
function showChoices(options) {
  state.waitingForChoice = true;
  if (!dom.choices) return;
  dom.choices.style.display = 'flex';
  dom.choices.innerHTML = '';
  
  options.forEach((opt) => {
    const btn = document.createElement('button');
    btn.className = `choice-btn ${opt.style || ''}`;
    btn.textContent = opt.text;
    if (opt.style === 'strike') {
      btn.style.textDecoration = 'line-through';
      btn.style.opacity = '0.4';
      btn.style.cursor = 'not-allowed';
    }
    btn.onclick = () => {
      if (opt.style === 'strike') return; // disabled
      selectChoice(opt);
    };
    dom.choices.appendChild(btn);
  });
}

function selectChoice(opt) {
  state.waitingForChoice = false;
  if (dom.choices) dom.choices.style.display = 'none';
  if (opt.key) state.choices[opt.key] = opt.value;
  if (opt.arrogance) changeArrogance(opt.arrogance);
  if (opt.card) state.cards.push(opt.card);
  nextStep();
}

// ===== ARROGANCE METER =====
function changeArrogance(delta, reason) {
  state.arrogance = Math.max(0, Math.min(state.maxArrogance, state.arrogance + delta));
  
  if (dom.arrogancefill) {
    dom.arrogancefill.style.width = `${state.arrogance}%`;
  }
  
  if (delta > 0 && dom.arrogancebar) {
    dom.arrogancebar.classList.add('pulse-red');
    setTimeout(() => dom.arrogancebar.classList.remove('pulse-red'), 600);
    // Flash screen red briefly for big changes
    if (delta >= 20) screenFlash('#ff000044', 300);
  }
  
  if (reason && dom.arrogancelabel) {
    dom.arrogancelabel.textContent = `⚡ ${reason} +${delta}`;
    dom.arrogancelabel.style.color = '#ff4444';
    dom.arrogancelabel.style.fontSize = '14px';
    setTimeout(() => { 
      if(dom.arrogancelabel) {
        dom.arrogancelabel.textContent = `囂張值 ${state.arrogance}%`;
        dom.arrogancelabel.style.color = '#ff6b6b';
        dom.arrogancelabel.style.fontSize = '12px';
      }
    }, 2000);
  }
  
  nextStep();
}

// ===== GACHA SYSTEM (3-Stage) =====
let gachaState = { charge: 0, taps: 0, result: null, phase: 0 };

function triggerGacha(pool, forced) {
  if (!dom.gachaoverlay) { nextStep(); return; }
  
  // Determine result
  if (forced) {
    gachaState.result = forced;
  } else {
    const roll = Math.random();
    if (roll < 0.05 && pool.ssr) gachaState.result = pool.ssr;
    else if (roll < 0.20 && pool.sr) gachaState.result = pool.sr;
    else gachaState.result = pool.r;
  }
  
  gachaState.charge = 0;
  gachaState.taps = 0;
  gachaState.phase = 1;
  
  // Show overlay
  dom.gachaoverlay.style.display = 'flex';
  
  // Show Stage 1: Charge
  const s1 = $('gacha-stage1');
  const s2 = $('gacha-stage2');
  const s3 = $('gacha-stage3');
  if (s1) s1.style.display = 'flex';
  if (s2) s2.style.display = 'none';
  if (s3) s3.style.display = 'none';
  
  const fill = $('gacha-charge-fill');
  if (fill) fill.style.width = '0%';
  
  // Auto-charge slowly
  gachaState.autoCharge = setInterval(() => {
    if (gachaState.phase !== 1) return;
    gachaState.charge = Math.min(100, gachaState.charge + 0.5);
    if (fill) fill.style.width = gachaState.charge + '%';
    if (gachaState.charge >= 100) gachaPhase2();
  }, 50);
  
  // Listen for taps to charge faster
  dom.gachaoverlay.onclick = gachaTap;
}

function gachaTap(e) {
  if (e.target.tagName === 'BUTTON') return;
  
  if (gachaState.phase === 1) {
    gachaState.taps++;
    gachaState.charge = Math.min(100, gachaState.charge + 8);
    const fill = $('gacha-charge-fill');
    if (fill) fill.style.width = gachaState.charge + '%';
    
    // Visual feedback per tap
    const icon = $('gacha-watch-icon');
    if (icon) {
      icon.style.transform = `scale(${1 + gachaState.charge/200})`;
      icon.style.filter = `drop-shadow(0 0 ${20 + gachaState.charge/2}px rgba(201,169,78,${0.5 + gachaState.charge/200}))`;
    }
    
    // Screen pulse
    screenFlash('#c9a94e22', 100);
    
    if (gachaState.charge >= 100) gachaPhase2();
  }
}

function gachaPhase2() {
  if (gachaState.phase === 2) return;
  gachaState.phase = 2;
  clearInterval(gachaState.autoCharge);
  
  // Flash transition
  screenFlash('#c9a94e', 300);
  
  const s1 = $('gacha-stage1');
  const s2 = $('gacha-stage2');
  if (s1) s1.style.display = 'none';
  if (s2) s2.style.display = 'flex';
  
  // Animate cards cycling
  const candidates = document.querySelectorAll('.gacha-candidate');
  let cycle = 0;
  const cycleInterval = setInterval(() => {
    candidates.forEach((c, i) => {
      c.classList.remove('chosen', 'dimmed');
      if (i === cycle % 3) c.classList.add('chosen');
    });
    cycle++;
  }, 200);
  
  // After cycling, pick one
  setTimeout(() => {
    clearInterval(cycleInterval);
    const pick = 1; // Always middle card for drama
    candidates.forEach((c, i) => {
      c.classList.remove('chosen');
      if (i === pick) {
        c.classList.add('chosen');
        c.innerHTML = gachaState.result.icon || '★';
      } else {
        c.classList.add('dimmed');
      }
    });
    
    // Transition to reveal
    setTimeout(() => gachaPhase3(), 1000);
  }, 2500);
}

function gachaPhase3() {
  gachaState.phase = 3;
  const result = gachaState.result;
  const color = result.rarity === 'SSR' ? '#ff6b6b' : result.rarity === 'SR' ? '#c9a94e' : '#4ecdc4';
  
  // Big flash
  screenFlash(color, 400);
  screenShake();
  
  const s2 = $('gacha-stage2');
  const s3 = $('gacha-stage3');
  if (s2) s2.style.display = 'none';
  if (s3) s3.style.display = 'flex';
  
  // Set card content
  const card = $('gacha-card');
  const rarity = $('gacha-rarity');
  const name = $('gacha-card-name');
  const desc = $('gacha-card-desc');
  const burst = $('gacha-reveal-burst');
  
  if (card) {
    card.innerHTML = result.icon || '★';
    card.style.boxShadow = `0 0 60px ${color}88`;
    card.style.animation = 'none';
    void card.offsetWidth;
    card.style.animation = 'cardReveal 0.8s ease forwards';
    // Use PixelLab card frame based on rarity
    const frameMap = { 'R': 'card_frame_r.png', 'SR': 'card_frame_sr.png', 'SSR': 'card_frame_ssr.png' };
    const frame = frameMap[result.rarity] || 'card_frame_r.png';
    card.style.backgroundImage = `url(assets/ui/${frame})`;
    card.style.backgroundSize = 'cover';
    card.style.imageRendering = 'pixelated';
  }
  if (burst) {
    burst.style.background = `radial-gradient(circle, ${color}66 0%, transparent 70%)`;
    burst.style.animation = 'none';
    void burst.offsetWidth;
    burst.style.animation = 'burstExpand 1.2s ease forwards';
  }
  if (rarity) {
    rarity.textContent = `★ ${result.rarity} ★`;
    rarity.style.color = color;
  }
  if (name) name.textContent = result.name;
  if (desc) desc.textContent = result.desc;
  
  state.cards.push(result);
  
  // Remove tap handler
  dom.gachaoverlay.onclick = null;
}

function closeGacha() {
  if (dom.gachaoverlay) dom.gachaoverlay.style.display = 'none';
  dom.gachaoverlay.onclick = null;
  clearInterval(gachaState.autoCharge);
  
  // Reset stages
  const s1 = $('gacha-stage1');
  const s2 = $('gacha-stage2');
  const s3 = $('gacha-stage3');
  if (s1) s1.style.display = 'flex';
  if (s2) s2.style.display = 'none';
  if (s3) s3.style.display = 'none';
  
  // Reset candidates
  document.querySelectorAll('.gacha-candidate').forEach(c => {
    c.classList.remove('chosen', 'dimmed');
    c.innerHTML = '🎴';
  });
  
  nextStep();
}

// ===== EFFECTS =====
function screenFlash(color, duration) {
  if (!dom.screenflash) return;
  dom.screenflash.style.background = color || '#fff';
  dom.screenflash.style.opacity = 1;
  setTimeout(() => { dom.screenflash.style.opacity = 0; }, duration || 200);
}

function screenShake() {
  if (!dom.screenshake) return;
  dom.screenshake.classList.add('shake');
  setTimeout(() => dom.screenshake.classList.remove('shake'), 400);
}

function applyEffect(name) {
  switch(name) {
    case 'fadeout':
      if (dom.bg) {
        dom.bg.style.transition = 'opacity 1.2s ease';
        dom.bg.style.opacity = 0;
      }
      hideAllChars();
      // Darken everything
      if (dom.vignette) {
        dom.vignette.style.background = 'rgba(0,0,0,0.8)';
        dom.vignette.style.opacity = 1;
      }
      break;
    case 'fadein':
      if (dom.bg) {
        dom.bg.style.transition = 'opacity 0.8s ease';
        dom.bg.style.opacity = 1;
      }
      if (dom.vignette) dom.vignette.style.opacity = 0;
      break;
  }
}

// ===== INPUT =====
document.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') return;
  if (state.typing) {
    skipTyping();
  } else if (state.waitingForClick) {
    state.waitingForClick = false;
    nextStep();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === ' ' || e.key === 'Enter') {
    e.preventDefault();
    if (state.typing) skipTyping();
    else if (state.waitingForClick) { state.waitingForClick = false; nextStep(); }
  }
});

// ===== CHAPTER END =====
function chapterEnd(next) {
  // Dramatic chapter end
  screenFlash('#000', 500);
  setTimeout(() => {
    showMessage('', `━━ 序章完 ━━\n\n下一章：${next || '開發中...'}`, 'system');
  }, 600);
}

// ===== GAME START =====
function startGame() {
  initDom();
  
  // Title fade out
  if (dom.titlescreen) {
    dom.titlescreen.style.transition = 'opacity 0.8s ease';
    dom.titlescreen.style.opacity = 0;
    setTimeout(() => { dom.titlescreen.style.display = 'none'; }, 800);
  }
  
  if (dom.dialogue) dom.dialogue.style.display = 'block';
  
  setTimeout(() => {
    if (typeof PROLOGUE_SCRIPT !== 'undefined') {
      loadScript(PROLOGUE_SCRIPT);
    } else {
      showNarration('劇本載入中...');
    }
  }, 900);
}
