const IMAGE_ROOT = 'images1';

const characters = {
  shakespeare: {
    name: 'William Shakespeare',
    folder: 'shakespeare',
    description: 'You are creative, expressive, and full of imagination.',
    keywords: ['CREATIVITY', 'IMAGINATION', 'EXPRESSION']
  },
  austen: {
    name: 'Jane Austen',
    folder: 'jane-austen',
    description: 'You are thoughtful, observant, and understanding.',
    keywords: ['OBSERVATION', 'EMPATHY', 'THOUGHTFULNESS']
  },
  king: {
    name: 'Martin Luther King Jr.',
    folder: 'martin-luther-king',
    description: 'You are confident, courageous, and ready to lead.',
    keywords: ['LEADERSHIP', 'COURAGE', 'COMMUNICATION']
  },
  keller: {
    name: 'Helen Keller',
    folder: 'helen-keller',
    description: 'You are determined, hopeful, and strong.',
    keywords: ['PERSISTENCE', 'HOPE', 'COURAGE']
  },
  dahl: {
    name: 'Roald Dahl',
    folder: 'roald-dahl',
    description: 'You are playful, imaginative, and full of surprising ideas.',
    keywords: ['HUMOR', 'IMAGINATION', 'FUN']
  },
  angelou: {
    name: 'Maya Angelou',
    folder: 'maya-angelou',
    description: 'You are warm, inspiring, and thoughtful.',
    keywords: ['INSPIRATION', 'EMPATHY', 'WISDOM']
  },
  christie: {
    name: 'Agatha Christie',
    folder: 'agatha-christie',
    description: 'You are curious, logical, and focused.',
    keywords: ['LOGIC', 'CURIOSITY', 'FOCUS']
  },
  hemingway: {
    name: 'Ernest Hemingway',
    folder: 'ernest-hemingway',
    description: 'You are independent, clear, and strong-minded.',
    keywords: ['CLARITY', 'STRENGTH', 'INDEPENDENCE']
  }
};

const questions = [
  [
    'What do you enjoy most in English class?',
    '영어 시간에 가장 즐거운 활동은 무엇인가요?',
    [
      ['Creating an imaginative story', '상상력이 풍부한 이야기 만들기', ['shakespeare', 'dahl']],
      ['Reading and understanding feelings', '글을 읽고 사람들의 감정 이해하기', ['austen', 'angelou']],
      ['Giving a speech and sharing ideas', '발표하며 내 생각 전달하기', ['king', 'hemingway']],
      ['Solving difficult questions carefully', '어려운 문제를 꼼꼼하게 해결하기', ['keller', 'christie']]
    ]
  ],
  [
    'Which word describes you best?',
    '나를 가장 잘 나타내는 단어는 무엇인가요?',
    [
      ['Creative', '창의적인', ['shakespeare', 'dahl']],
      ['Thoughtful', '사려 깊은', ['austen', 'angelou']],
      ['Confident', '자신감 있는', ['king', 'hemingway']],
      ['Determined', '의지가 강한', ['keller', 'christie']]
    ]
  ],
  [
    'What kind of story do you like?',
    '어떤 종류의 이야기를 좋아하나요?',
    [
      ['A dramatic story with powerful words', '힘 있는 표현이 나오는 극적인 이야기', ['shakespeare', 'king']],
      ['A warm story about people and relationships', '사람과 관계를 다룬 따뜻한 이야기', ['austen', 'angelou']],
      ['A funny and surprising adventure', '재미있고 놀라운 모험 이야기', ['dahl', 'hemingway']],
      ['A mysterious story full of clues', '단서가 가득한 미스터리 이야기', ['christie', 'keller']]
    ]
  ],
  [
    'What do you do when you face a difficult task?',
    '어려운 과제를 만났을 때 어떻게 하나요?',
    [
      ['I try a completely new idea.', '완전히 새로운 방법을 시도한다.', ['dahl', 'shakespeare']],
      ['I keep trying and never give up.', '포기하지 않고 계속 노력한다.', ['keller', 'angelou']],
      ['I solve it step by step.', '단서를 찾아 단계별로 해결한다.', ['christie', 'austen']],
      ['I focus on the most important point.', '가장 중요한 내용에 집중한다.', ['hemingway', 'king']]
    ]
  ],
  [
    'How do you usually express your ideas?',
    '평소 자신의 생각을 어떻게 표현하나요?',
    [
      ['With creative and beautiful words', '창의적이고 아름다운 말로', ['shakespeare', 'dahl']],
      ['With careful details and observations', '세심한 관찰과 자세한 내용으로', ['austen', 'christie']],
      ['With a strong and confident voice', '힘 있고 자신감 있는 목소리로', ['king', 'angelou']],
      ['With simple and clear sentences', '간단하고 명확한 문장으로', ['hemingway', 'keller']]
    ]
  ],
  [
    'What is most important to you?',
    '나에게 가장 중요한 것은 무엇인가요?',
    [
      ['Making people laugh and imagine', '사람들을 웃게 하고 상상하게 하는 것', ['dahl', 'shakespeare']],
      ['Understanding and encouraging others', '다른 사람을 이해하고 격려하는 것', ['angelou', 'austen']],
      ['Speaking up for what is right', '옳은 일을 위해 목소리를 내는 것', ['king', 'christie']],
      ['Overcoming difficulties', '어려움을 극복하는 것', ['keller', 'hemingway']]
    ]
  ],
  [
    'Which activity would you choose?',
    '다음 중 어떤 활동을 선택하고 싶나요?',
    [
      ['Writing a play', '연극 대본 쓰기', ['shakespeare', 'dahl']],
      ['Writing about people’s feelings', '사람들의 감정에 관한 글쓰기', ['austen', 'angelou']],
      ['Giving an inspiring speech', '사람들에게 용기를 주는 연설하기', ['king', 'keller']],
      ['Solving a mystery', '미스터리 사건 해결하기', ['christie', 'hemingway']]
    ]
  ],
  [
    'What message would you like to share with the world?',
    '세상에 어떤 메시지를 전하고 싶나요?',
    [
      ['Use your imagination!', '상상력을 펼쳐 보세요!', ['dahl', 'shakespeare']],
      ['Your voice is important.', '당신의 목소리는 소중합니다.', ['angelou', 'austen']],
      ['Never give up.', '절대 포기하지 마세요.', ['keller', 'christie']],
      ['Be strong and speak clearly.', '강하게 생각하고 분명하게 말하세요.', ['hemingway', 'king']]
    ]
  ]
];

const poses = ['wave.png', 'book.png', 'heart.png', 'thumbsup.png'];

/* live 화면과 저장 사진에서 캐릭터 위치를 다르게 */
const shotLayouts = [
  {
    live: { side: 'right', width: '30%', height: '74%', bottom: '0%' },
    save: { side: 'right', maxW: 300, maxH: 700, right: 24, bottom: 24 }
  },
  {
    live: { side: 'left', width: '34%', height: '78%', bottom: '0%' },
    save: { side: 'left', maxW: 340, maxH: 760, left: 24, bottom: 24 }
  },
  {
    live: { side: 'right', width: '31%', height: '75%', bottom: '0%' },
    save: { side: 'right', maxW: 305, maxH: 710, right: 24, bottom: 24 }
  },
  {
    live: { side: 'left', width: '35%', height: '79%', bottom: '0%' },
    save: { side: 'left', maxW: 345, maxH: 770, left: 24, bottom: 24 }
  }
];

const $ = id => document.getElementById(id);

let qIndex = 0;
let scores = {};
let selected = null;
let stream = null;
let shot = 0;
let photos = [];

function resetScores() {
  scores = Object.fromEntries(Object.keys(characters).map(k => [k, 0]));
}

function screen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  $(id).classList.add('active');
}

function startQuiz() {
  qIndex = 0;
  resetScores();
  screen('quiz-screen');
  renderQuestion();
}

function renderQuestion() {
  const [en, ko, answers] = questions[qIndex];

  $('question-number').textContent = `Question ${qIndex + 1}`;
  $('progress-count').textContent = `${qIndex + 1} / 8`;
  $('progress-fill').style.width = `${(qIndex + 1) * 12.5}%`;
  $('question-text').textContent = en;
  $('question-korean').textContent = ko;

  $('answers').innerHTML = '';

  answers.forEach(([a, b, targets]) => {
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.innerHTML = `${a}<small>${b}</small>`;
    btn.onclick = () => choose(targets);
    $('answers').appendChild(btn);
  });
}

function choose(targets) {
  targets.forEach((k, i) => {
    scores[k] += i === 0 ? 2 : 1;
  });

  qIndex++;
  if (qIndex < questions.length) {
    renderQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  const max = Math.max(...Object.values(scores));
  const finals = Object.keys(scores).filter(k => scores[k] === max);
  selected = finals[Math.floor(Math.random() * finals.length)];

  const c = characters[selected];
  $('result-name').textContent = c.name;
  $('result-description').textContent = c.description;
  $('result-image').src = `${IMAGE_ROOT}/${c.folder}/wave.png`;
  $('result-keywords').innerHTML = c.keywords
    .map(x => `<span class="keyword">${x}</span>`)
    .join('');

  screen('result-screen');
}

function openBooth() {
  shot = 0;
  photos = [];
  $('preview-grid').innerHTML = '';
  $('save-strip-btn').classList.add('hidden');
  $('capture-btn').disabled = !stream;

  const c = characters[selected];
  $('photo-title').textContent = `Take Photos with ${c.name}`;

  updatePose();
  screen('photo-screen');
}

function applyLiveLayout(index) {
  const layout = shotLayouts[Math.min(index, 3)].live;
  const o = $('character-overlay');

  o.style.left = 'auto';
  o.style.right = 'auto';

  if (layout.side === 'left') {
    o.style.left = '2%';
  } else {
    o.style.right = '2%';
  }

  o.style.bottom = layout.bottom;
  o.style.width = layout.width;
  o.style.height = layout.height;
}

function updatePose() {
  const c = characters[selected];
  const poseIndex = Math.min(shot, 3);

  $('shot-counter').textContent = `${Math.min(shot + 1, 4)} / 4`;
  $('character-overlay').src = `${IMAGE_ROOT}/${c.folder}/${poses[poseIndex]}`;

  applyLiveLayout(poseIndex);
}

async function startCamera() {
  try {
    stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'user' },
      audio: false
    });

    $('video').srcObject = stream;
    $('camera-message').classList.add('hidden');
    $('capture-btn').disabled = false;
  } catch (e) {
    $('camera-message').textContent =
      'Camera access failed. Open through HTTPS and allow camera permission.';
    $('camera-message').classList.remove('hidden');
  }
}

function getCountdownEl() {
  let el = $('countdown');
  if (!el) {
    el = document.createElement('div');
    el.id = 'countdown';
    el.className = 'hidden';
    document.querySelector('.camera-stage').appendChild(el);
  }
  return el;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function runCountdown() {
  const el = getCountdownEl();
  el.classList.remove('hidden');

  for (let n = 3; n >= 1; n--) {
    el.textContent = n;
    await sleep(700);
  }

  el.classList.add('hidden');
}

async function capture() {
  if (!stream || shot >= 4) return;

  $('capture-btn').disabled = true;

  await runCountdown();

  if (!stream) return;

  const v = $('video');
  const o = $('character-overlay');
  const c = $('capture-canvas');
  const x = c.getContext('2d');

  c.width = 900;
  c.height = 1200;

  /* 카메라 */
  x.save();
  x.translate(c.width, 0);
  x.scale(-1, 1);
  x.drawImage(v, 0, 0, c.width, c.height);
  x.restore();

  /* 캐릭터 */
  const layout = shotLayouts[Math.min(shot, 3)].save;
  const naturalW = o.naturalWidth || 1000;
  const naturalH = o.naturalHeight || 1000;

  const ratio = Math.min(layout.maxW / naturalW, layout.maxH / naturalH);
  const ow = naturalW * ratio;
  const oh = naturalH * ratio;

  let dx = 0;
  if (layout.side === 'left') {
    dx = layout.left;
  } else {
    dx = c.width - ow - layout.right;
  }

  const dy = c.height - oh - layout.bottom;

  x.drawImage(o, dx, dy, ow, oh);

  const url = c.toDataURL('image/jpeg', 0.92);
  photos.push(url);

  const img = document.createElement('img');
  img.src = url;
  $('preview-grid').appendChild(img);

  shot++;

  if (shot < 4) {
    updatePose();
    $('capture-btn').disabled = false;
  } else {
    $('shot-counter').textContent = '4 / 4';
    $('capture-btn').disabled = true;
    $('save-strip-btn').classList.remove('hidden');
  }
}

function roundRectPath(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

async function saveStrip() {
  if (photos.length !== 4) return;

  const c = document.createElement('canvas');
  const x = c.getContext('2d');

  c.width = 1400;
  c.height = 2000;

  /* 배경 */
  x.fillStyle = '#f6eff9';
  x.fillRect(0, 0, c.width, c.height);

  /* 제목 */
  x.textAlign = 'center';
  x.fillStyle = '#2b2340';
  x.font = 'bold 64px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
  x.fillText('Which English Character Are You?', c.width / 2, 100);

  x.fillStyle = '#7c5ce7';
  x.font = 'bold 44px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
  x.fillText(`With ${characters[selected].name}`, c.width / 2, 160);

  /* 2x2 사진 배치 */
  const loaded = await Promise.all(photos.map(loadImage));

  const cardW = 640;
  const cardH = 853;
  const gap = 30;
  const startX = 45;
  const startY = 230;
  const radius = 24;

  loaded.forEach((img, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);

    const px = startX + col * (cardW + gap);
    const py = startY + row * (cardH + gap);

    x.save();
    roundRectPath(x, px, py, cardW, cardH, radius);
    x.clip();
    x.drawImage(img, px, py, cardW, cardH);
    x.restore();

    x.strokeStyle = '#d9cdee';
    x.lineWidth = 6;
    roundRectPath(x, px, py, cardW, cardH, radius);
    x.stroke();
  });

  /* 하단 문구 */
  x.fillStyle = '#6f6781';
  x.font = 'bold 34px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
  x.fillText('Learning English, Finding Myself', c.width / 2, 1910);

  c.toBlob(async blob => {
    if (!blob) return;

    const fileName = `${characters[selected].folder}-4cut.jpg`;
    const file = new File([blob], fileName, { type: 'image/jpeg' });

    try {
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: 'English Character Photo Booth'
        });
        return;
      }
    } catch (error) {
      if (error.name === 'AbortError') return;
    }

    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }, 'image/jpeg', 0.94);
}

function stopCamera() {
  if (stream) {
    stream.getTracks().forEach(t => t.stop());
    stream = null;
  }
  $('capture-btn').disabled = true;
}

window.addEventListener('DOMContentLoaded', () => {
  resetScores();

  if ($('start-btn')) $('start-btn').onclick = startQuiz;
  if ($('retry-btn')) $('retry-btn').onclick = startQuiz;
  if ($('photo-btn')) $('photo-btn').onclick = openBooth;
  if ($('camera-btn')) $('camera-btn').onclick = startCamera;
  if ($('capture-btn')) $('capture-btn').onclick = capture;
  if ($('save-strip-btn')) $('save-strip-btn').onclick = saveStrip;
  if ($('back-result-btn')) {
    $('back-result-btn').onclick = () => {
      stopCamera();
      screen('result-screen');
    };
  }

  getCountdownEl();
  console.log('FINAL SCRIPT LOADED');
});
