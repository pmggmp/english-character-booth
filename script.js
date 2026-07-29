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
      [
        'Creating an imaginative story',
        '상상력이 풍부한 이야기 만들기',
        ['shakespeare', 'dahl']
      ],
      [
        'Reading and understanding feelings',
        '글을 읽고 사람들의 감정 이해하기',
        ['austen', 'angelou']
      ],
      [
        'Giving a speech and sharing ideas',
        '발표하며 내 생각 전달하기',
        ['king', 'hemingway']
      ],
      [
        'Solving difficult questions carefully',
        '어려운 문제를 꼼꼼하게 해결하기',
        ['keller', 'christie']
      ]
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
      [
        'A dramatic story with powerful words',
        '힘 있는 표현이 나오는 극적인 이야기',
        ['shakespeare', 'king']
      ],
      [
        'A warm story about people and relationships',
        '사람과 관계를 다룬 따뜻한 이야기',
        ['austen', 'angelou']
      ],
      [
        'A funny and surprising adventure',
        '재미있고 놀라운 모험 이야기',
        ['dahl', 'hemingway']
      ],
      [
        'A mysterious story full of clues',
        '단서가 가득한 미스터리 이야기',
        ['christie', 'keller']
      ]
    ]
  ],

  [
    'What do you do when you face a difficult task?',
    '어려운 과제를 만났을 때 어떻게 하나요?',
    [
      [
        'I try a completely new idea.',
        '완전히 새로운 방법을 시도한다.',
        ['dahl', 'shakespeare']
      ],
      [
        'I keep trying and never give up.',
        '포기하지 않고 계속 노력한다.',
        ['keller', 'angelou']
      ],
      [
        'I solve it step by step.',
        '단서를 찾아 단계별로 해결한다.',
        ['christie', 'austen']
      ],
      [
        'I focus on the most important point.',
        '가장 중요한 내용에 집중한다.',
        ['hemingway', 'king']
      ]
    ]
  ],

  [
    'How do you usually express your ideas?',
    '평소 자신의 생각을 어떻게 표현하나요?',
    [
      [
        'With creative and beautiful words',
        '창의적이고 아름다운 말로',
        ['shakespeare', 'dahl']
      ],
      [
        'With careful details and observations',
        '세심한 관찰과 자세한 내용으로',
        ['austen', 'christie']
      ],
      [
        'With a strong and confident voice',
        '힘 있고 자신감 있는 목소리로',
        ['king', 'angelou']
      ],
      [
        'With simple and clear sentences',
        '간단하고 명확한 문장으로',
        ['hemingway', 'keller']
      ]
    ]
  ],

  [
    'What is most important to you?',
    '나에게 가장 중요한 것은 무엇인가요?',
    [
      [
        'Making people laugh and imagine',
        '사람들을 웃게 하고 상상하게 하는 것',
        ['dahl', 'shakespeare']
      ],
      [
        'Understanding and encouraging others',
        '다른 사람을 이해하고 격려하는 것',
        ['angelou', 'austen']
      ],
      [
        'Speaking up for what is right',
        '옳은 일을 위해 목소리를 내는 것',
        ['king', 'christie']
      ],
      [
        'Overcoming difficulties',
        '어려움을 극복하는 것',
        ['keller', 'hemingway']
      ]
    ]
  ],

  [
    'Which activity would you choose?',
    '다음 중 어떤 활동을 선택하고 싶나요?',
    [
      ['Writing a play', '연극 대본 쓰기', ['shakespeare', 'dahl']],
      [
        'Writing about people’s feelings',
        '사람들의 감정에 관한 글쓰기',
        ['austen', 'angelou']
      ],
      [
        'Giving an inspiring speech',
        '사람들에게 용기를 주는 연설하기',
        ['king', 'keller']
      ],
      [
        'Solving a mystery',
        '미스터리 사건 해결하기',
        ['christie', 'hemingway']
      ]
    ]
  ],

  [
    'What message would you like to share with the world?',
    '세상에 어떤 메시지를 전하고 싶나요?',
    [
      [
        'Use your imagination!',
        '상상력을 펼쳐 보세요!',
        ['dahl', 'shakespeare']
      ],
      [
        'Your voice is important.',
        '당신의 목소리는 소중합니다.',
        ['angelou', 'austen']
      ],
      [
        'Never give up.',
        '절대 포기하지 마세요.',
        ['keller', 'christie']
      ],
      [
        'Be strong and speak clearly.',
        '강하게 생각하고 분명하게 말하세요.',
        ['hemingway', 'king']
      ]
    ]
  ]
];

const poses = [
  'wave.png',
  'book.png',
  'heart.png',
  'thumbsup.png'
];

/*
  캐릭터 위치와 크기

  1컷: 오른쪽
  2컷: 왼쪽
  3컷: 오른쪽
  4컷: 왼쪽

  이전보다 약 25~30% 확대
*/
const shotLayouts = [
  {
    live: {
      side: 'right',
      width: '38%',
      height: '84%',
      edge: '1%',
      bottom: '0%'
    },
    save: {
      side: 'right',
      maxW: 400,
      maxH: 850,
      edge: 22,
      bottom: 18
    }
  },

  {
    live: {
      side: 'left',
      width: '40%',
      height: '86%',
      edge: '1%',
      bottom: '0%'
    },
    save: {
      side: 'left',
      maxW: 420,
      maxH: 880,
      edge: 22,
      bottom: 18
    }
  },

  {
    live: {
      side: 'right',
      width: '42%',
      height: '88%',
      edge: '0%',
      bottom: '0%'
    },
    save: {
      side: 'right',
      maxW: 440,
      maxH: 900,
      edge: 18,
      bottom: 12
    }
  },

  {
    live: {
      side: 'left',
      width: '40%',
      height: '86%',
      edge: '1%',
      bottom: '0%'
    },
    save: {
      side: 'left',
      maxW: 420,
      maxH: 880,
      edge: 22,
      bottom: 18
    }
  }
];

const $ = id => document.getElementById(id);

let qIndex = 0;
let scores = {};
let selected = null;
let stream = null;
let shot = 0;
let photos = [];
let capturing = false;

/* 점수 초기화 */
function resetScores() {
  scores = Object.fromEntries(
    Object.keys(characters).map(key => [key, 0])
  );
}

/* 화면 전환 */
function screen(id) {
  document
    .querySelectorAll('.screen')
    .forEach(item => item.classList.remove('active'));

  const target = $(id);

  if (target) {
    target.classList.add('active');
  }
}

/* 퀴즈 시작 */
function startQuiz() {
  qIndex = 0;
  selected = null;
  resetScores();
  screen('quiz-screen');
  renderQuestion();
}

/* 문제 출력 */
function renderQuestion() {
  const [english, korean, answers] =
    questions[qIndex];

  $('question-number').textContent =
    `Question ${qIndex + 1}`;

  $('progress-count').textContent =
    `${qIndex + 1} / ${questions.length}`;

  $('progress-fill').style.width =
    `${((qIndex + 1) / questions.length) * 100}%`;

  $('question-text').textContent =
    english;

  $('question-korean').textContent =
    korean;

  $('answers').innerHTML = '';

  answers.forEach(
    ([englishAnswer, koreanAnswer, targets]) => {
      const button =
        document.createElement('button');

      button.type = 'button';
      button.className = 'answer-btn';

      button.innerHTML =
        `${englishAnswer}<small>${koreanAnswer}</small>`;

      button.addEventListener(
        'click',
        () => choose(targets)
      );

      $('answers').appendChild(button);
    }
  );
}

/* 답 선택 */
function choose(targets) {
  targets.forEach((key, index) => {
    scores[key] += index === 0 ? 2 : 1;
  });

  qIndex += 1;

  if (qIndex < questions.length) {
    renderQuestion();
  } else {
    showResult();
  }
}

/* 결과 출력 */
function showResult() {
  const maximum =
    Math.max(...Object.values(scores));

  const finalCharacters =
    Object.keys(scores).filter(
      key => scores[key] === maximum
    );

  selected =
    finalCharacters[
      Math.floor(
        Math.random() *
        finalCharacters.length
      )
    ];

  const character =
    characters[selected];

  $('result-name').textContent =
    character.name;

  $('result-description').textContent =
    character.description;

  $('result-image').src =
    `${IMAGE_ROOT}/${character.folder}/wave.png`;

  $('result-keywords').innerHTML =
    character.keywords
      .map(
        keyword =>
          `<span class="keyword">${keyword}</span>`
      )
      .join('');

  screen('result-screen');
}

/* 포토부스 열기 */
function openBooth() {
  if (!selected) return;

  shot = 0;
  photos = [];
  capturing = false;

  $('preview-grid').innerHTML = '';

  $('save-strip-btn')
    .classList.add('hidden');

  $('capture-btn').disabled =
    !stream;

  const character =
    characters[selected];

  $('photo-title').textContent =
    `Take Photos with ${character.name}`;

  updatePose();
  screen('photo-screen');
}

/* 촬영 화면 속 캐릭터 위치 */
function applyLiveLayout(index) {
  const layout =
    shotLayouts[Math.min(index, 3)].live;

  const overlay =
    $('character-overlay');

  overlay.style.left = 'auto';
  overlay.style.right = 'auto';

  if (layout.side === 'left') {
    overlay.style.left = layout.edge;
  } else {
    overlay.style.right = layout.edge;
  }

  overlay.style.width =
    layout.width;

  overlay.style.height =
    layout.height;

  overlay.style.bottom =
    layout.bottom;
}

/* 현재 자세 적용 */
function updatePose() {
  if (!selected) return;

  const poseIndex =
    Math.min(shot, poses.length - 1);

  const character =
    characters[selected];

  $('shot-counter').textContent =
    `${Math.min(shot + 1, 4)} / 4`;

  $('character-overlay').src =
    `${IMAGE_ROOT}/${character.folder}/${poses[poseIndex]}`;

  applyLiveLayout(poseIndex);
}

/* 카메라 시작 */
async function startCamera() {
  try {
    if (stream) {
      stopCamera();
    }

    stream =
      await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: 'user',
          width: { ideal: 1280 },
          height: { ideal: 960 }
        },
        audio: false
      });

    const video = $('video');

    video.srcObject = stream;

    await video.play();

    $('camera-message')
      .classList.add('hidden');

    $('capture-btn').disabled =
      false;
  } catch (error) {
    console.error(error);

    $('camera-message').textContent =
      'Camera access failed. Open through HTTPS and allow camera permission.';

    $('camera-message')
      .classList.remove('hidden');

    $('capture-btn').disabled =
      true;
  }
}

/* 잠시 기다리기 */
function sleep(milliseconds) {
  return new Promise(resolve => {
    setTimeout(resolve, milliseconds);
  });
}

/* 카운트다운 요소 준비 */
function getCountdownElement() {
  let countdown =
    $('countdown');

  if (!countdown) {
    countdown =
      document.createElement('div');

    countdown.id = 'countdown';
    countdown.className = 'hidden';

    const cameraStage =
      document.querySelector('.camera-stage');

    if (cameraStage) {
      cameraStage.appendChild(countdown);
    }
  }

  return countdown;
}

/* 3, 2, 1 카운트다운 */
async function runCountdown() {
  const countdown =
    getCountdownElement();

  countdown.classList.remove('hidden');

  for (const number of [3, 2, 1]) {
    countdown.textContent = number;

    countdown.style.animation = 'none';
    void countdown.offsetWidth;
    countdown.style.animation =
      'countdownPop .7s ease';

    await sleep(750);
  }

  countdown.classList.add('hidden');
  countdown.textContent = '';

  await sleep(120);
}

/* 이미지가 완전히 로드될 때까지 기다리기 */
function waitForImage(image) {
  if (
    image.complete &&
    image.naturalWidth > 0
  ) {
    return Promise.resolve();
  }

  return new Promise(
    (resolve, reject) => {
      image.addEventListener(
        'load',
        resolve,
        { once: true }
      );

      image.addEventListener(
        'error',
        reject,
        { once: true }
      );
    }
  );
}

/*
  카메라 영상을 캔버스 비율에 맞춰
  찌그러지지 않게 채우기
*/
function drawMirroredVideoCover(
  context,
  video,
  width,
  height
) {
  const sourceWidth =
    video.videoWidth || 1280;

  const sourceHeight =
    video.videoHeight || 960;

  const sourceRatio =
    sourceWidth / sourceHeight;

  const targetRatio =
    width / height;

  let cropX = 0;
  let cropY = 0;
  let cropWidth = sourceWidth;
  let cropHeight = sourceHeight;

  if (sourceRatio > targetRatio) {
    cropWidth =
      sourceHeight * targetRatio;

    cropX =
      (sourceWidth - cropWidth) / 2;
  } else {
    cropHeight =
      sourceWidth / targetRatio;

    cropY =
      (sourceHeight - cropHeight) / 2;
  }

  context.save();

  context.translate(width, 0);
  context.scale(-1, 1);

  context.drawImage(
    video,
    cropX,
    cropY,
    cropWidth,
    cropHeight,
    0,
    0,
    width,
    height
  );

  context.restore();
}

/* 사진 촬영 */
async function capture() {
  if (
    !stream ||
    shot >= 4 ||
    capturing
  ) {
    return;
  }

  capturing = true;
  $('capture-btn').disabled = true;

  await runCountdown();

  const video =
    $('video');

  const overlay =
    $('character-overlay');

  const canvas =
    $('capture-canvas');

  const context =
    canvas.getContext('2d');

  if (!context) {
    capturing = false;
    $('capture-btn').disabled = false;
    return;
  }

  try {
    await waitForImage(overlay);
  } catch (error) {
    console.error(
      'Character image loading failed.',
      error
    );

    capturing = false;
    $('capture-btn').disabled = false;
    return;
  }

  canvas.width = 900;
  canvas.height = 1200;

  context.clearRect(
    0,
    0,
    canvas.width,
    canvas.height
  );

  /* 카메라 영상 */
  drawMirroredVideoCover(
    context,
    video,
    canvas.width,
    canvas.height
  );

  /* 현재 컷의 캐릭터 배치 */
  const layout =
    shotLayouts[Math.min(shot, 3)].save;

  const naturalWidth =
    overlay.naturalWidth || 1000;

  const naturalHeight =
    overlay.naturalHeight || 1000;

  const characterScale =
    Math.min(
      layout.maxW / naturalWidth,
      layout.maxH / naturalHeight
    );

  const characterWidth =
    naturalWidth * characterScale;

  const characterHeight =
    naturalHeight * characterScale;

  let characterX;

  if (layout.side === 'left') {
    characterX = layout.edge;
  } else {
    characterX =
      canvas.width -
      characterWidth -
      layout.edge;
  }

  const characterY =
    canvas.height -
    characterHeight -
    layout.bottom;

  context.drawImage(
    overlay,
    characterX,
    characterY,
    characterWidth,
    characterHeight
  );

  const photoData =
    canvas.toDataURL(
      'image/jpeg',
      0.94
    );

  photos.push(photoData);

  const previewImage =
    document.createElement('img');

  previewImage.src =
    photoData;

  previewImage.alt =
    `Photo ${shot + 1}`;

  $('preview-grid')
    .appendChild(previewImage);

  shot += 1;
  capturing = false;

  if (shot < 4) {
    updatePose();
    $('capture-btn').disabled = false;
  } else {
    $('shot-counter').textContent =
      '4 / 4';

    $('capture-btn').disabled =
      true;

    $('save-strip-btn')
      .classList.remove('hidden');
  }
}

/* 둥근 사진 틀 */
function roundRectPath(
  context,
  x,
  y,
  width,
  height,
  radius
) {
  context.beginPath();

  context.moveTo(
    x + radius,
    y
  );

  context.lineTo(
    x + width - radius,
    y
  );

  context.quadraticCurveTo(
    x + width,
    y,
    x + width,
    y + radius
  );

  context.lineTo(
    x + width,
    y + height - radius
  );

  context.quadraticCurveTo(
    x + width,
    y + height,
    x + width - radius,
    y + height
  );

  context.lineTo(
    x + radius,
    y + height
  );

  context.quadraticCurveTo(
    x,
    y + height,
    x,
    y + height - radius
  );

  context.lineTo(
    x,
    y + radius
  );

  context.quadraticCurveTo(
    x,
    y,
    x + radius,
    y
  );

  context.closePath();
}

/* 저장용 이미지 불러오기 */
function loadImage(source) {
  return new Promise(
    (resolve, reject) => {
      const image =
        new Image();

      image.onload =
        () => resolve(image);

      image.onerror =
        reject;

      image.src =
        source;
    }
  );
}

/*
  4컷 저장

  사진 끝 아래에 충분한 여백을 두어
  하단 문구가 사진과 겹치지 않음
*/
async function saveStrip() {
  if (photos.length !== 4) return;

  const canvas =
    document.createElement('canvas');

  const context =
    canvas.getContext('2d');

  if (!context) return;

  canvas.width = 1400;
  canvas.height = 2180;

  /* 전체 배경 */
  context.fillStyle =
    '#f8f1fa';

  context.fillRect(
    0,
    0,
    canvas.width,
    canvas.height
  );

  /* 제목 */
  context.textAlign =
    'center';

  context.textBaseline =
    'middle';

  context.fillStyle =
    '#2b2340';

  context.font =
    'bold 64px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';

  context.fillText(
    'Which English Character Are You?',
    canvas.width / 2,
    92
  );

  context.fillStyle =
    '#7c5ce7';

  context.font =
    'bold 44px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';

  context.fillText(
    `With ${characters[selected].name}`,
    canvas.width / 2,
    158
  );

  const loadedImages =
    await Promise.all(
      photos.map(loadImage)
    );

  /* 2×2 사진 크기 */
  const photoWidth = 640;
  const photoHeight = 853;

  const horizontalGap = 30;
  const verticalGap = 30;

  const startX = 45;
  const startY = 230;

  const radius = 24;

  loadedImages.forEach(
    (image, index) => {
      const column =
        index % 2;

      const row =
        Math.floor(index / 2);

      const photoX =
        startX +
        column *
        (photoWidth + horizontalGap);

      const photoY =
        startY +
        row *
        (photoHeight + verticalGap);

      context.save();

      roundRectPath(
        context,
        photoX,
        photoY,
        photoWidth,
        photoHeight,
        radius
      );

      context.clip();

      context.drawImage(
        image,
        photoX,
        photoY,
        photoWidth,
        photoHeight
      );

      context.restore();

      /* 사진 테두리 */
      context.strokeStyle =
        '#d9cdee';

      context.lineWidth = 6;

      roundRectPath(
        context,
        photoX,
        photoY,
        photoWidth,
        photoHeight,
        radius
      );

      context.stroke();
    }
  );

  /*
    두 번째 줄 사진 끝:
    약 1966px

    하단 문구:
    2080px

    사진과 문구 사이에 충분한 간격 확보
  */
  context.fillStyle =
    '#6f6781';

  context.font =
    'bold 36px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';

  context.fillText(
    'Learning English, Finding Myself',
    canvas.width / 2,
    2080
  );

  canvas.toBlob(
    async blob => {
      if (!blob) return;

      const fileName =
        `${characters[selected].folder}-4cut.jpg`;

      const file =
        new File(
          [blob],
          fileName,
          { type: 'image/jpeg' }
        );

      /*
        아이패드에서는 공유창을 열어
        이미지 저장 선택
      */
      if (
        navigator.canShare &&
        navigator.canShare({
          files: [file]
        })
      ) {
        try {
          await navigator.share({
            files: [file],
            title:
              'English Character Photo Booth'
          });

          return;
        } catch (error) {
          if (
            error.name ===
            'AbortError'
          ) {
            return;
          }

          console.error(error);
        }
      }

      /*
        공유창을 사용할 수 없을 경우
        일반 다운로드
      */
      const objectUrl =
        URL.createObjectURL(blob);

      const link =
        document.createElement('a');

      link.href =
        objectUrl;

      link.download =
        fileName;

      document.body.appendChild(link);

      link.click();
      link.remove();

      setTimeout(
        () =>
          URL.revokeObjectURL(
            objectUrl
          ),
        1500
      );
    },
    'image/jpeg',
    0.95
  );
}

/* 카메라 종료 */
function stopCamera() {
  if (stream) {
    stream
      .getTracks()
      .forEach(track => track.stop());

    stream = null;
  }

  if ($('video')) {
    $('video').srcObject = null;
  }

  if ($('capture-btn')) {
    $('capture-btn').disabled = true;
  }
}

/* 버튼 연결 */
window.addEventListener(
  'DOMContentLoaded',
  () => {
    resetScores();
    getCountdownElement();

    if ($('start-btn')) {
      $('start-btn')
        .addEventListener(
          'click',
          startQuiz
        );
    }

    if ($('retry-btn')) {
      $('retry-btn')
        .addEventListener(
          'click',
          startQuiz
        );
    }

    if ($('photo-btn')) {
      $('photo-btn')
        .addEventListener(
          'click',
          openBooth
        );
    }

    if ($('camera-btn')) {
      $('camera-btn')
        .addEventListener(
          'click',
          startCamera
        );
    }

    if ($('capture-btn')) {
      $('capture-btn')
        .addEventListener(
          'click',
          capture
        );
    }

    if ($('save-strip-btn')) {
      $('save-strip-btn')
        .addEventListener(
          'click',
          saveStrip
        );
    }

    if ($('back-result-btn')) {
      $('back-result-btn')
        .addEventListener(
          'click',
          () => {
            stopCamera();
            screen('result-screen');
          }
        );
    }

    console.log(
      'FINAL CHARACTER BOOTH SCRIPT 0730-3'
    );
  }
);
