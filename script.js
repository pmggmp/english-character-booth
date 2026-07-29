const characters = {
  shakespeare:{
    name:'William Shakespeare',
    folder:'shakespeare',
    description:'You are creative, expressive, and full of imagination.',
    keywords:['CREATIVITY','IMAGINATION','EXPRESSION']
  },
  austen:{
    name:'Jane Austen',
    folder:'jane-austen',
    description:'You are thoughtful, observant, and understanding.',
    keywords:['OBSERVATION','EMPATHY','THOUGHTFULNESS']
  },
  king:{
    name:'Martin Luther King Jr.',
    folder:'martin-luther-king',
    description:'You are confident, courageous, and ready to lead.',
    keywords:['LEADERSHIP','COURAGE','COMMUNICATION']
  },
  keller:{
    name:'Helen Keller',
    folder:'helen-keller',
    description:'You are determined, hopeful, and strong.',
    keywords:['PERSISTENCE','HOPE','COURAGE']
  },
  dahl:{
    name:'Roald Dahl',
    folder:'roald-dahl',
    description:'You are playful, imaginative, and full of surprising ideas.',
    keywords:['HUMOR','IMAGINATION','FUN']
  },
  angelou:{
    name:'Maya Angelou',
    folder:'maya-angelou',
    description:'You are warm, inspiring, and thoughtful.',
    keywords:['INSPIRATION','EMPATHY','WISDOM']
  },
  christie:{
    name:'Agatha Christie',
    folder:'agatha-christie',
    description:'You are curious, logical, and focused.',
    keywords:['LOGIC','CURIOSITY','FOCUS']
  },
  hemingway:{
    name:'Ernest Hemingway',
    folder:'ernest-hemingway',
    description:'You are independent, clear, and strong-minded.',
    keywords:['CLARITY','STRENGTH','INDEPENDENCE']
  }
};

const questions = [
  ['What do you enjoy most in English class?','영어 시간에 가장 즐거운 활동은 무엇인가요?',[
    ['Creating an imaginative story','상상력이 풍부한 이야기 만들기',['shakespeare','dahl']],
    ['Reading and understanding feelings','글을 읽고 사람들의 감정 이해하기',['austen','angelou']],
    ['Giving a speech and sharing ideas','발표하며 내 생각 전달하기',['king','hemingway']],
    ['Solving difficult questions carefully','어려운 문제를 꼼꼼하게 해결하기',['keller','christie']]
  ]],
  ['Which word describes you best?','나를 가장 잘 나타내는 단어는 무엇인가요?',[
    ['Creative','창의적인',['shakespeare','dahl']],
    ['Thoughtful','사려 깊은',['austen','angelou']],
    ['Confident','자신감 있는',['king','hemingway']],
    ['Determined','의지가 강한',['keller','christie']]
  ]],
  ['What kind of story do you like?','어떤 종류의 이야기를 좋아하나요?',[
    ['A dramatic story with powerful words','힘 있는 표현이 나오는 극적인 이야기',['shakespeare','king']],
    ['A warm story about people and relationships','사람과 관계를 다룬 따뜻한 이야기',['austen','angelou']],
    ['A funny and surprising adventure','재미있고 놀라운 모험 이야기',['dahl','hemingway']],
    ['A mysterious story full of clues','단서가 가득한 미스터리 이야기',['christie','keller']]
  ]],
  ['What do you do when you face a difficult task?','어려운 과제를 만났을 때 어떻게 하나요?',[
    ['I try a completely new idea.','완전히 새로운 방법을 시도한다.',['dahl','shakespeare']],
    ['I keep trying and never give up.','포기하지 않고 계속 노력한다.',['keller','angelou']],
    ['I solve it step by step.','단서를 찾아 단계별로 해결한다.',['christie','austen']],
    ['I focus on the most important point.','가장 중요한 내용에 집중한다.',['hemingway','king']]
  ]],
  ['How do you usually express your ideas?','평소 자신의 생각을 어떻게 표현하나요?',[
    ['With creative and beautiful words','창의적이고 아름다운 말로',['shakespeare','dahl']],
    ['With careful details and observations','세심한 관찰과 자세한 내용으로',['austen','christie']],
    ['With a strong and confident voice','힘 있고 자신감 있는 목소리로',['king','angelou']],
    ['With simple and clear sentences','간단하고 명확한 문장으로',['hemingway','keller']]
  ]],
  ['What is most important to you?','나에게 가장 중요한 것은 무엇인가요?',[
    ['Making people laugh and imagine','사람들을 웃게 하고 상상하게 하는 것',['dahl','shakespeare']],
    ['Understanding and encouraging others','다른 사람을 이해하고 격려하는 것',['angelou','austen']],
    ['Speaking up for what is right','옳은 일을 위해 목소리를 내는 것',['king','christie']],
    ['Overcoming difficulties','어려움을 극복하는 것',['keller','hemingway']]
  ]],
  ['Which activity would you choose?','다음 중 어떤 활동을 선택하고 싶나요?',[
    ['Writing a play','연극 대본 쓰기',['shakespeare','dahl']],
    ['Writing about people’s feelings','사람들의 감정에 관한 글쓰기',['austen','angelou']],
    ['Giving an inspiring speech','사람들에게 용기를 주는 연설하기',['king','keller']],
    ['Solving a mystery','미스터리 사건 해결하기',['christie','hemingway']]
  ]],
  ['What message would you like to share with the world?','세상에 어떤 메시지를 전하고 싶나요?',[
    ['Use your imagination!','상상력을 펼쳐 보세요!',['dahl','shakespeare']],
    ['Your voice is important.','당신의 목소리는 소중합니다.',['angelou','austen']],
    ['Never give up.','절대 포기하지 마세요.',['keller','christie']],
    ['Be strong and speak clearly.','강하게 생각하고 분명하게 말하세요.',['hemingway','king']]
  ]]
];

const poses = ['wave.png','book.png','heart.png','thumbsup.png'];

const livePlacements = [
  { side:'right', edge:4, bottom:3, width:24 },
  { side:'right', edge:5, bottom:3, width:25 },
  { side:'left',  edge:5, bottom:3, width:25 },
  { side:'left',  edge:4, bottom:3, width:24 }
];

const shotPlacements = [
  { side:'right', edge:28, bottom:28, maxW:235, maxH:360 },
  { side:'right', edge:34, bottom:30, maxW:250, maxH:380 },
  { side:'left',  edge:34, bottom:30, maxW:250, maxH:380 },
  { side:'left',  edge:28, bottom:28, maxW:235, maxH:360 }
];

const $ = id => document.getElementById(id);

let qIndex = 0;
let scores = {};
let selected = null;
let stream = null;
let shot = 0;
let photos = [];
let captureBusy = false;

function resetScores(){
  scores = Object.fromEntries(Object.keys(characters).map(k => [k, 0]));
}

function screen(id){
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const target = $(id);
  if(target) target.classList.add('active');
}

function startQuiz(){
  qIndex = 0;
  resetScores();
  screen('quiz-screen');
  renderQuestion();
}

function renderQuestion(){
  const [en, ko, answers] = questions[qIndex];
  $('question-number').textContent = `Question ${qIndex + 1}`;
  $('progress-count').textContent = `${qIndex + 1} / 8`;
  $('progress-fill').style.width = `${(qIndex + 1) * 12.5}%`;
  $('question-text').textContent = en;
  $('question-korean').textContent = ko;
  $('answers').innerHTML = '';

  answers.forEach(([a, b, targets]) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'answer-btn';
    btn.innerHTML = `${a}<small>${b}</small>`;
    btn.onclick = () => choose(targets);
    $('answers').appendChild(btn);
  });
}

function choose(targets){
  targets.forEach((k, i) => scores[k] += i === 0 ? 2 : 1);
  qIndex++;
  if(qIndex < questions.length){
    renderQuestion();
  }else{
    showResult();
  }
}

function showResult(){
  const max = Math.max(...Object.values(scores));
  const finals = Object.keys(scores).filter(k => scores[k] === max);
  selected = finals[Math.floor(Math.random() * finals.length)];
  const c = characters[selected];

  $('result-name').textContent = c.name;
  $('result-description').textContent = c.description;
  $('result-image').src = `images1/${c.folder}/wave.png`;
  $('result-keywords').innerHTML = c.keywords.map(x => `<span class="keyword">${x}</span>`).join('');
  screen('result-screen');
}

function openBooth(){
  if(!selected) return;
  shot = 0;
  photos = [];
  captureBusy = false;
  $('preview-grid').innerHTML = '';
  $('save-strip-btn').classList.add('hidden');
  $('capture-btn').disabled = !stream;
  $('shot-counter').textContent = '1 / 4';

  const c = characters[selected];
  $('photo-title').textContent = `Take Photos with ${c.name}`;
  updatePose();
  screen('photo-screen');
}

function updatePose(){
  if(!selected) return;
  const c = characters[selected];
  const overlay = $('character-overlay');
  const poseIndex = Math.min(shot, 3);
  overlay.src = `images1/${c.folder}/${poses[poseIndex]}`;

  const p = livePlacements[poseIndex];
  overlay.style.left = p.side === 'left' ? `${p.edge}%` : 'auto';
  overlay.style.right = p.side === 'right' ? `${p.edge}%` : 'auto';
  overlay.style.bottom = `${p.bottom}%`;
  overlay.style.width = `${p.width}%`;

  $('shot-counter').textContent = `${Math.min(shot + 1, 4)} / 4`;
}

function wait(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}

function ensureCountdown(){
  let el = $('countdown-overlay');
  if(el) return el;

  el = document.createElement('div');
  el.id = 'countdown-overlay';
  el.className = 'hidden';
  el.textContent = '';
  const stage = document.querySelector('.camera-stage');
  if(stage) stage.appendChild(el);
  return el;
}

async function runCountdown(){
  const overlay = ensureCountdown();
  overlay.classList.remove('hidden');

  for(const n of ['3','2','1']){
    overlay.textContent = n;
    await wait(650);
  }

  overlay.textContent = '📸';
  await wait(250);
  overlay.classList.add('hidden');
}

async function waitForOverlayImage(){
  const img = $('character-overlay');
  if(img.complete && img.naturalWidth > 0) return;
  await new Promise(resolve => {
    img.onload = () => resolve();
    img.onerror = () => resolve();
  });
}

async function startCamera(){
  try{
    stream = await navigator.mediaDevices.getUserMedia({
      video:{ facingMode:'user' },
      audio:false
    });

    const video = $('video');
    video.srcObject = stream;
    await video.play().catch(() => {});
    $('camera-message').classList.add('hidden');
    $('capture-btn').disabled = false;
  }catch(e){
    $('camera-message').textContent = 'Camera access failed. Open through HTTPS and allow camera permission.';
    $('camera-message').classList.remove('hidden');
  }
}

function drawCover(ctx, img, x, y, w, h, mirror = false){
  const sw = img.videoWidth || img.naturalWidth || img.width;
  const sh = img.videoHeight || img.naturalHeight || img.height;

  if(!sw || !sh) return;

  const scale = Math.max(w / sw, h / sh);
  const dw = sw * scale;
  const dh = sh * scale;
  const dx = x + (w - dw) / 2;
  const dy = y + (h - dh) / 2;

  ctx.save();
  if(mirror){
    ctx.translate(x + w, y);
    ctx.scale(-1, 1);
    ctx.drawImage(img, w - (dx - x) - dw, dy - y, dw, dh);
  }else{
    ctx.drawImage(img, dx, dy, dw, dh);
  }
  ctx.restore();
}

async function capture(){
  if(!stream || shot >= 4 || captureBusy) return;

  captureBusy = true;
  $('capture-btn').disabled = true;

  try{
    await waitForOverlayImage();
    await runCountdown();

    const currentShot = shot;
    const video = $('video');
    const overlay = $('character-overlay');
    const canvas = $('capture-canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = 900;
    canvas.height = 1200;

    drawCover(ctx, video, 0, 0, canvas.width, canvas.height, true);

    const p = shotPlacements[currentShot];
    const ratio = Math.min(
      p.maxW / overlay.naturalWidth,
      p.maxH / overlay.naturalHeight
    );

    const ow = overlay.naturalWidth * ratio;
    const oh = overlay.naturalHeight * ratio;
    const ox = p.side === 'left'
      ? p.edge
      : canvas.width - ow - p.edge;
    const oy = canvas.height - oh - p.bottom;

    ctx.drawImage(overlay, ox, oy, ow, oh);

    const url = canvas.toDataURL('image/jpeg', 0.94);
    photos.push(url);

    const img = document.createElement('img');
    img.src = url;
    $('preview-grid').appendChild(img);

    shot++;

    if(shot < 4){
      updatePose();
      $('capture-btn').disabled = false;
    }else{
      $('shot-counter').textContent = '4 / 4';
      $('save-strip-btn').classList.remove('hidden');
    }
  }finally{
    captureBusy = false;
  }
}

function roundRectPath(ctx, x, y, w, h, r){
  const rr = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + rr, y);
  ctx.lineTo(x + w - rr, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + rr);
  ctx.lineTo(x + w, y + h - rr);
  ctx.quadraticCurveTo(x + w, y + h, x + w - rr, y + h);
  ctx.lineTo(x + rr, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - rr);
  ctx.lineTo(x, y + rr);
  ctx.quadraticCurveTo(x, y, x + rr, y);
  ctx.closePath();
}

function drawRoundedImage(ctx, img, x, y, w, h, r){
  ctx.save();
  roundRectPath(ctx, x, y, w, h, r);
  ctx.clip();
  drawCover(ctx, img, x, y, w, h, false);
  ctx.restore();

  ctx.save();
  ctx.strokeStyle = '#cfc2e9';
  ctx.lineWidth = 4;
  roundRectPath(ctx, x, y, w, h, r);
  ctx.stroke();
  ctx.restore();
}

async function saveStrip(){
  if(photos.length !== 4 || !selected) return;

  const out = document.createElement('canvas');
  const ctx = out.getContext('2d');

  out.width = 1400;
  out.height = 2000;

  ctx.fillStyle = '#f4eef8';
  ctx.fillRect(0, 0, out.width, out.height);

  ctx.fillStyle = '#2b2340';
  ctx.textAlign = 'center';
  ctx.font = 'bold 64px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
  ctx.fillText('Which English Character Are You?', out.width / 2, 100);

  ctx.fillStyle = '#7c5ce7';
  ctx.font = 'bold 44px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
  ctx.fillText(`With ${characters[selected].name}`, out.width / 2, 168);

  const loadedImages = await Promise.all(
    photos.map(src => new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = src;
    }))
  );

  const panelW = 620;
  const panelH = 826;
  const gapX = 28;
  const gapY = 34;
  const startX = 66;
  const startY = 230;

  loadedImages.forEach((img, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = startX + col * (panelW + gapX);
    const y = startY + row * (panelH + gapY);
    drawRoundedImage(ctx, img, x, y, panelW, panelH, 24);
  });

  ctx.fillStyle = '#6e6783';
  ctx.font = 'bold 34px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
  ctx.fillText('Learning English, Finding Myself', out.width / 2, out.height - 70);

  out.toBlob(async blob => {
    if(!blob) return;

    const fileName = `${characters[selected].folder}-4cut.jpg`;
    const file = new File([blob], fileName, { type:'image/jpeg' });

    if(navigator.canShare && navigator.canShare({ files:[file] })){
      try{
        await navigator.share({
          files:[file],
          title:'English Character Photo Booth'
        });
        return;
      }catch(error){
        if(error.name === 'AbortError') return;
      }
    }

    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    a.remove();

    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }, 'image/jpeg', 0.95);
}

function stopCamera(){
  if(stream){
    stream.getTracks().forEach(t => t.stop());
    stream = null;
  }
  const video = $('video');
  if(video) video.srcObject = null;
  $('capture-btn').disabled = true;
  $('camera-message').classList.remove('hidden');
}

function bindEvents(){
  if($('start-btn')) $('start-btn').onclick = startQuiz;
  if($('retry-btn')) $('retry-btn').onclick = startQuiz;
  if($('photo-btn')) $('photo-btn').onclick = openBooth;
  if($('camera-btn')) $('camera-btn').onclick = startCamera;
  if($('capture-btn')) $('capture-btn').onclick = capture;
  if($('save-strip-btn')) $('save-strip-btn').onclick = saveStrip;
  if($('back-result-btn')) $('back-result-btn').onclick = () => {
    stopCamera();
    screen('result-screen');
  };
}

resetScores();
bindEvents();
ensureCountdown();
console.log('final script loaded');
