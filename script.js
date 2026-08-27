const ASSET_VERSION = '20260828-assets1';

const characters = {
  shakespeare: {
    name: 'William Shakespeare',
    folder: 'shakespeare',
    description: 'You express your ideas creatively and enjoy using imagination and powerful language.',
    korean: '창의적인 생각을 풍부한 언어로 표현하는 것을 좋아하며 상상력과 이야기 구성 능력이 돋보이는 유형이에요.',
    type: '상상력 넘치는 표현가',
    years: '1564-1616',
    quote: 'Use your imagination and express your ideas boldly.',
    keywords: ['CREATIVITY', 'IMAGINATION', 'EXPRESSION']
  },

  austen: {
    name: 'Jane Austen',
    folder: 'jane-austen',
    description: 'You carefully observe people and understand emotions, relationships, and small details.',
    korean: '사람들의 감정과 관계를 세심하게 살피며 작은 변화와 특징을 잘 발견하는 유형이에요.',
    type: '섬세한 관찰자',
    years: '1775-1817',
    quote: 'Observe carefully and understand the feelings of others.',
    keywords: ['OBSERVATION', 'EMPATHY', 'THOUGHTFULNESS']
  },

  king: {
    name: 'Martin Luther King Jr.',
    folder: 'martin-luther-king',
    description: 'You speak with courage and confidence and inspire others through clear communication.',
    korean: '자신의 생각을 분명하고 자신감 있게 말하며 다른 사람에게 용기와 긍정적인 변화를 전하는 유형이에요.',
    type: '용기 있는 소통가',
    years: '1929-1968',
    quote: 'Your voice can inspire positive change.',
    keywords: ['LEADERSHIP', 'COURAGE', 'COMMUNICATION']
  },

  keller: {
    name: 'Helen Keller',
    folder: 'helen-keller',
    description: 'You remain hopeful and determined and continue moving forward when difficulties appear.',
    korean: '어려움이 생겨도 쉽게 포기하지 않고 희망과 끈기를 바탕으로 끝까지 노력하는 유형이에요.',
    type: '희망을 잃지 않는 도전자',
    years: '1880-1968',
    quote: 'Keep moving forward with hope and courage.',
    keywords: ['PERSISTENCE', 'HOPE', 'COURAGE']
  },

  dahl: {
    name: 'Roald Dahl',
    folder: 'roald-dahl',
    description: 'You enjoy humor, surprising ideas, and imaginative ways of looking at ordinary things.',
    korean: '평범한 상황에서도 재미있고 독특한 생각을 떠올리며 상상력과 유머 감각을 즐기는 유형이에요.',
    type: '재치 있는 상상가',
    years: '1916-1990',
    quote: 'Let imagination make the ordinary extraordinary.',
    keywords: ['HUMOR', 'IMAGINATION', 'FUN']
  },

  angelou: {
    name: 'Maya Angelou',
    folder: 'maya-angelou',
    description: 'You understand others warmly and encourage people through empathy, wisdom, and confidence.',
    korean: '다른 사람의 마음을 따뜻하게 이해하고 공감과 지혜가 담긴 말로 힘과 용기를 주는 유형이에요.',
    type: '따뜻한 영감 전달자',
    years: '1928-2014',
    quote: 'Encourage others with warmth, wisdom, and confidence.',
    keywords: ['INSPIRATION', 'EMPATHY', 'WISDOM']
  },

  christie: {
    name: 'Agatha Christie',
    folder: 'agatha-christie',
    description: 'You enjoy clues, careful observation, logical thinking, and solving problems step by step.',
    korean: '작은 단서도 놓치지 않고 논리적으로 생각하며 문제를 단계별로 해결하는 것을 좋아하는 유형이에요.',
    type: '집중력 있는 탐구자',
    years: '1890-1976',
    quote: 'Every mystery begins with careful observation.',
    keywords: ['LOGIC', 'CURIOSITY', 'FOCUS']
  },

  hemingway: {
    name: 'Ernest Hemingway',
    folder: 'ernest-hemingway',
    description: 'You value clear thinking, independence, courage, and simple but powerful communication.',
    korean: '핵심을 명확하게 파악하고 간결하게 표현하며 자신의 생각에 따라 독립적으로 행동하는 유형이에요.',
    type: '명확하고 독립적인 실천가',
    years: '1899-1961',
    quote: 'Think clearly, act bravely, and stay true to yourself.',
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


const poses = [
  'wave.png',
  'book.png',
  'heart.png',
  'thumbsup.png'
];

const poseSides = [
  'right',
  'right',
  'left',
  'left'
];


const DEFAULT_POSE_PROFILES = [
  { height: 0.68, maxWidth: 0.54, side: 'right' },
  { height: 0.61, maxWidth: 0.52, side: 'right' },
  { height: 0.63, maxWidth: 0.52, side: 'left'  },
  { height: 0.67, maxWidth: 0.54, side: 'left'  }
];


/*
 * 큰 소품/앉은 포즈만 살짝 줄인다.
 * 셰익스피어 연극 무대는 더 작게 하고 오른쪽 아래로 붙인다.
 */
const CHARACTER_POSE_PROFILES = {
  shakespeare: [
    /* wave = theatre stage: deliberately smaller and off-center */
    { height: 0.46, maxWidth: 0.40, side: 'right' },
    /* book = standing with scroll */
    { height: 0.62, maxWidth: 0.49, side: 'right' },
    /* heart = seated at writing desk */
    { height: 0.54, maxWidth: 0.47, side: 'left'  },
    /* thumbsup = standing with skull */
    { height: 0.61, maxWidth: 0.49, side: 'left'  }
  ],

  austen: [
    /* seated tea table */
    { height: 0.56, maxWidth: 0.48, side: 'right' },
    /* reading, seated/upper body */
    { height: 0.56, maxWidth: 0.47, side: 'right' },
    /* seated writing desk */
    { height: 0.53, maxWidth: 0.47, side: 'left'  },
    /* seated with teacup */
    { height: 0.55, maxWidth: 0.47, side: 'left'  }
  ],

  king: [
    /* standing */
    { height: 0.66, maxWidth: 0.50, side: 'right' },
    /* standing thoughtful */
    { height: 0.65, maxWidth: 0.49, side: 'right' },
    /* podium: larger prop, reduce */
    { height: 0.54, maxWidth: 0.45, side: 'left'  },
    /* microphone/sign: medium prop */
    { height: 0.58, maxWidth: 0.47, side: 'left'  }
  ],

  keller: [
    /* seated chair */
    { height: 0.57, maxWidth: 0.48, side: 'right' },
    /* desk */
    { height: 0.52, maxWidth: 0.46, side: 'right' },
    /* standing */
    { height: 0.63, maxWidth: 0.49, side: 'left'  },
    /* standing with flower */
    { height: 0.63, maxWidth: 0.49, side: 'left'  }
  ],

  dahl: [
    { height: 0.64, maxWidth: 0.49, side: 'right' },
    { height: 0.64, maxWidth: 0.49, side: 'right' },
    /* seated thinking */
    { height: 0.56, maxWidth: 0.47, side: 'left'  },
    { height: 0.64, maxWidth: 0.49, side: 'left'  }
  ],

  angelou: [
    { height: 0.62, maxWidth: 0.49, side: 'right' },
    /* upper-body with book */
    { height: 0.56, maxWidth: 0.47, side: 'right' },
    /* upper-body heart pose */
    { height: 0.56, maxWidth: 0.47, side: 'left'  },
    /* desk/books */
    { height: 0.51, maxWidth: 0.46, side: 'left'  }
  ],

  christie: [
    { height: 0.64, maxWidth: 0.49, side: 'right' },
    /* seated desk */
    { height: 0.53, maxWidth: 0.47, side: 'right' },
    { height: 0.61, maxWidth: 0.48, side: 'left'  },
    { height: 0.62, maxWidth: 0.48, side: 'left'  }
  ],

  hemingway: [
    { height: 0.64, maxWidth: 0.49, side: 'right' },
    /* seated/desk-like composition */
    { height: 0.54, maxWidth: 0.47, side: 'right' },
    /* typewriter desk */
    { height: 0.52, maxWidth: 0.46, side: 'left'  },
    { height: 0.62, maxWidth: 0.48, side: 'left'  }
  ]
};


function getPoseProfile(
  characterKey,
  poseIndex
) {
  const custom =
    CHARACTER_POSE_PROFILES[
      characterKey
    ];

  const profile =
    custom &&
    custom[poseIndex]
      ? custom[poseIndex]
      : DEFAULT_POSE_PROFILES[
          poseIndex
        ];

  return {
    height:
      profile.height,

    maxWidth:
      profile.maxWidth,

    side:
      profile.side
  };
}

const $ = id => document.getElementById(id);


let qIndex = 0;
let scores = {};
let selected = null;
let stream = null;
let shot = 0;
let photos = [];
let countingDown = false;


function resetScores() {
  scores = Object.fromEntries(
    Object.keys(characters).map(key => [key, 0])
  );
}


const RESULT_HISTORY_KEY =
  'englishCharacterRecentResultsV2';


const RESULT_OPPORTUNITY =
  (() => {
    const totals =
      Object.fromEntries(
        Object.keys(characters)
          .map(key => [key, 0])
      );

    questions.forEach(question => {
      const answers =
        question[2];

      answers.forEach(answer => {
        const targets =
          answer[2];

        targets.forEach(
          (key, index) => {
            totals[key] +=
              index === 0 ? 2 : 1;
          }
        );
      });
    });

    return totals;
  })();


function getRecentResults() {
  try {
    const stored =
      JSON.parse(
        localStorage.getItem(
          RESULT_HISTORY_KEY
        ) || '[]'
      );

    return Array.isArray(stored)
      ? stored.slice(0, 4)
      : [];
  } catch (error) {
    return [];
  }
}


function rememberResult(key) {
  try {
    const recent =
      getRecentResults();

    recent.unshift(key);

    localStorage.setItem(
      RESULT_HISTORY_KEY,
      JSON.stringify(
        recent.slice(0, 4)
      )
    );
  } catch (error) {
    // Private browsing / storage blocked:
    // result selection should still work.
  }
}


function normalizedResultScores() {
  return Object.fromEntries(
    Object.keys(scores).map(key => {
      const opportunity =
        RESULT_OPPORTUNITY[key] || 1;

      return [
        key,
        scores[key] / opportunity
      ];
    })
  );
}


function screen(id) {
  document
    .querySelectorAll('.screen')
    .forEach(element => {
      element.classList.remove('active');
    });

  const targetScreen = $(id);

  if (targetScreen) {
    targetScreen.classList.add('active');
  }

  window.scrollTo({
    top: 0,
    behavior: 'auto'
  });
}


function startQuiz() {
  stopCamera();

  qIndex = 0;
  selected = null;
  shot = 0;
  photos = [];
  countingDown = false;

  resetScores();

  screen('quiz-screen');
  renderQuestion();

  window.__startRequested = false;
  window.__appStarting = false;
}


function renderQuestion() {
  const [
    english,
    korean,
    answers
  ] = questions[qIndex];

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

  $('answers').innerHTML =
    '';

  answers.forEach(
    ([
      answerEnglish,
      answerKorean,
      targets
    ]) => {
      const button =
        document.createElement('button');

      button.type =
        'button';

      button.className =
        'answer-btn';

      button.innerHTML =
        `${answerEnglish}<small>${answerKorean}</small>`;

      button.addEventListener(
        'click',
        () => choose(targets)
      );

      $('answers').appendChild(button);
    }
  );
}


function choose(targets) {
  targets.forEach(
    (key, index) => {
      scores[key] +=
        index === 0 ? 2 : 1;
    }
  );

  qIndex += 1;

  if (qIndex < questions.length) {
    renderQuestion();
  } else {
    showAnalysis();
  }
}


function selectResult() {
  const normalized =
    normalizedResultScores();

  const bestScore =
    Math.max(
      ...Object.values(normalized)
    );

  /*
   * 답변 성향은 유지하되, 최고점과 매우 가까운
   * 캐릭터들도 후보에 포함한다.
   */
  let candidates =
    Object.keys(normalized)
      .filter(
        key =>
          normalized[key] >=
          bestScore - 0.075
      );

  const recent =
    getRecentResults();

  /*
   * 같은 인물이 연속해서 두 번 나왔다면,
   * 비슷한 점수의 다른 후보가 있을 때만 반복을 막는다.
   */
  if (
    recent.length >= 2 &&
    recent[0] === recent[1] &&
    candidates.length > 1
  ) {
    const alternatives =
      candidates.filter(
        key => key !== recent[0]
      );

    if (alternatives.length) {
      candidates =
        alternatives;
    }
  }

  const adjusted =
    candidates.map(key => {
      let value =
        normalized[key];

      if (recent[0] === key) {
        value -= 0.055;
      }

      if (recent[1] === key) {
        value -= 0.025;
      }

      return {
        key,
        value
      };
    });

  const minimum =
    Math.min(
      ...adjusted.map(item => item.value)
    );

  const weighted =
    adjusted.map(item => ({
      key: item.key,
      weight:
        1 +
        Math.max(
          0,
          (item.value - minimum) * 18
        )
    }));

  const totalWeight =
    weighted.reduce(
      (sum, item) =>
        sum + item.weight,
      0
    );

  let pick =
    Math.random() * totalWeight;

  selected =
    weighted[
      weighted.length - 1
    ].key;

  for (const item of weighted) {
    pick -= item.weight;

    if (pick <= 0) {
      selected =
        item.key;
      break;
    }
  }

  rememberResult(selected);
}


async function showAnalysis() {
  selectResult();

  screen('analysis-screen');

  const steps =
    document.querySelectorAll('.analysis-step');

  steps.forEach(
    step => step.classList.remove('active')
  );

  await sleep(250);

  if (steps[0]) {
    steps[0].classList.add('active');
  }

  await sleep(650);

  if (steps[1]) {
    steps[1].classList.add('active');
  }

  await sleep(650);

  if (steps[2]) {
    steps[2].classList.add('active');
  }

  await sleep(700);

  showResult();
}


function showResult() {
  const character =
    characters[selected];

  $('result-name').textContent =
    character.name;

  $('result-description').textContent =
    character.korean;

  $('result-image').src =
    `images1/${character.folder}/book.png?v=${ASSET_VERSION}`;

  $('result-type').textContent =
    character.type;

  $('result-years').textContent =
    character.years;

  $('result-quote').textContent =
    character.quote;

  $('result-keywords').innerHTML =
    character.keywords
      .map(
        word =>
          `<span class="keyword">${word}</span>`
      )
      .join('');

  screen('result-screen');
}


function openBooth() {
  if (!selected) {
    return;
  }

  shot = 0;
  photos = [];
  countingDown = false;

  $('preview-grid').innerHTML =
    '';

  $('save-strip-btn')
    .classList
    .add('hidden');

  $('capture-btn').disabled =
    !stream;

  const character =
    characters[selected];

  $('photo-title').textContent =
    `Take Photos with ${character.name}`;

  updatePose();

  screen('photo-screen');
}


function createCroppedCharacterDataUrl(image) {
  const bounds = getVisibleBounds(image);

  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  canvas.width = Math.max(1, bounds.width);
  canvas.height = Math.max(1, bounds.height);

  context.clearRect(0, 0, canvas.width, canvas.height);

  context.drawImage(
    image,
    bounds.x,
    bounds.y,
    bounds.width,
    bounds.height,
    0,
    0,
    canvas.width,
    canvas.height
  );

  return canvas.toDataURL('image/png');
}


function loadNormalizedCharacter(overlay, source, profile) {
  const sourceImage = new Image();

  sourceImage.onload = () => {
    const croppedSource =
      createCroppedCharacterDataUrl(sourceImage);

    overlay.onload = () => {
      overlay.style.left =
        profile.side === 'left'
          ? '2%'
          : 'auto';

      overlay.style.right =
        profile.side === 'right'
          ? '2%'
          : 'auto';

      overlay.style.bottom =
        '1.5%';

      overlay.style.height =
        `${profile.height * 100}%`;

      overlay.style.width =
        'auto';

      overlay.style.maxWidth =
        `${profile.maxWidth * 100}%`;

      overlay.style.maxHeight =
        `${profile.height * 100}%`;

      overlay.style.objectFit =
        'contain';

      overlay.style.objectPosition =
        profile.side === 'left'
          ? 'bottom left'
          : 'bottom right';

      overlay.onload = null;
    };

    overlay.src =
      croppedSource;
  };

  sourceImage.src =
    source;
}


function updatePose() {
  const character =
    characters[selected];

  const poseIndex =
    Math.min(
      shot,
      poses.length - 1
    );

  const overlay =
    $('character-overlay');

  const profile =
    getPoseProfile(
      selected,
      poseIndex
    );

  $('shot-counter').textContent =
    `${Math.min(shot + 1, 4)} / 4`;

  const source =
    `images1/${character.folder}/${poses[poseIndex]}?v=${ASSET_VERSION}`;

  loadNormalizedCharacter(
    overlay,
    source,
    profile
  );
}


async function startCamera() {
  try {
    stopCamera();

    stream =
      await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: 'user',

          width: {
            ideal: 1280
          },

          height: {
            ideal: 960
          }
        },

        audio: false
      });

    $('video').srcObject =
      stream;

    await $('video').play();

    $('camera-message')
      .classList
      .add('hidden');

    $('capture-btn').disabled =
      false;

  } catch (error) {
    $('camera-message')
      .classList
      .remove('hidden');

    $('camera-message').textContent =
      'Camera access failed. Open through HTTPS and allow camera permission.';
  }
}


function sleep(milliseconds) {
  return new Promise(
    resolve => setTimeout(resolve, milliseconds)
  );
}


async function captureWithCountdown() {
  if (
    !stream ||
    shot >= 4 ||
    countingDown
  ) {
    return;
  }

  countingDown =
    true;

  $('capture-btn').disabled =
    true;

  const countdown =
    $('countdown');

  countdown.classList.remove('hidden');

  for (const number of [3, 2, 1]) {
    countdown.textContent =
      number;

    await sleep(700);
  }

  countdown.textContent =
    '📸';

  await sleep(250);

  captureFrame();

  countdown.classList.add('hidden');

  countingDown =
    false;

  if (shot < 4) {
    $('capture-btn').disabled =
      false;
  }
}


function drawVideoCover(
  context,
  video,
  x,
  y,
  width,
  height
) {
  const videoWidth =
    video.videoWidth || 1280;

  const videoHeight =
    video.videoHeight || 960;

  const scale =
    Math.max(
      width / videoWidth,
      height / videoHeight
    );

  const drawWidth =
    videoWidth * scale;

  const drawHeight =
    videoHeight * scale;

  context.drawImage(
    video,
    x + (width - drawWidth) / 2,
    y + (height - drawHeight) / 2,
    drawWidth,
    drawHeight
  );
}


function getVisibleBounds(image) {
  const tempCanvas =
    document.createElement('canvas');

  const tempContext =
    tempCanvas.getContext(
      '2d',
      {
        willReadFrequently: true
      }
    );

  tempCanvas.width =
    image.naturalWidth || image.width;

  tempCanvas.height =
    image.naturalHeight || image.height;

  tempContext.clearRect(
    0,
    0,
    tempCanvas.width,
    tempCanvas.height
  );

  tempContext.drawImage(
    image,
    0,
    0
  );

  const pixels =
    tempContext.getImageData(
      0,
      0,
      tempCanvas.width,
      tempCanvas.height
    ).data;

  let left =
    tempCanvas.width;

  let top =
    tempCanvas.height;

  let right =
    -1;

  let bottom =
    -1;

  for (
    let y = 0;
    y < tempCanvas.height;
    y += 2
  ) {
    for (
      let x = 0;
      x < tempCanvas.width;
      x += 2
    ) {
      const alpha =
        pixels[
          (y * tempCanvas.width + x) * 4 + 3
        ];

      if (alpha > 64) {
        if (x < left) {
          left = x;
        }

        if (x > right) {
          right = x;
        }

        if (y < top) {
          top = y;
        }

        if (y > bottom) {
          bottom = y;
        }
      }
    }
  }

  if (
    right < left ||
    bottom < top
  ) {
    return {
      x: 0,
      y: 0,
      width: tempCanvas.width,
      height: tempCanvas.height
    };
  }

  const padding =
    4;

  const cropX =
    Math.max(
      0,
      left - padding
    );

  const cropY =
    Math.max(
      0,
      top - padding
    );

  return {
    x: cropX,
    y: cropY,

    width: Math.min(
      tempCanvas.width - cropX,
      right - left + padding * 2
    ),

    height: Math.min(
      tempCanvas.height - cropY,
      bottom - top + padding * 2
    )
  };
}


function drawCharacter(
  context,
  overlay,
  profile,
  canvasWidth,
  canvasHeight
) {
  const bounds =
    getVisibleBounds(overlay);

  const targetHeight =
    canvasHeight * profile.height;

  const maximumWidth =
    canvasWidth * profile.maxWidth;

  let drawHeight =
    targetHeight;

  let drawWidth =
    drawHeight *
    (bounds.width / bounds.height);

  if (drawWidth > maximumWidth) {
    drawWidth =
      maximumWidth;

    drawHeight =
      drawWidth *
      (bounds.height / bounds.width);
  }

  const sideMargin =
    24;

  const bottomMargin =
    18;

  const drawX =
    profile.side === 'left'
      ? sideMargin
      : canvasWidth -
        drawWidth -
        sideMargin;

  const drawY =
    canvasHeight -
    drawHeight -
    bottomMargin;

  context.drawImage(
    overlay,
    bounds.x,
    bounds.y,
    bounds.width,
    bounds.height,
    drawX,
    drawY,
    drawWidth,
    drawHeight
  );
}


function captureFrame() {
  const video =
    $('video');

  const overlay =
    $('character-overlay');

  const canvas =
    $('capture-canvas');

  const context =
    canvas.getContext('2d');

  canvas.width =
    900;

  canvas.height =
    1200;

  context.save();

  context.translate(
    canvas.width,
    0
  );

  context.scale(
    -1,
    1
  );

  drawVideoCover(
    context,
    video,
    0,
    0,
    canvas.width,
    canvas.height
  );

  context.restore();

  const poseIndex =
    Math.min(shot, 3);

  const profile =
    getPoseProfile(
      selected,
      poseIndex
    );

  drawCharacter(
    context,
    overlay,
    profile,
    canvas.width,
    canvas.height
  );

  const photoUrl =
    canvas.toDataURL(
      'image/jpeg',
      0.93
    );

  photos.push(photoUrl);

  const preview =
    document.createElement('img');

  preview.src =
    photoUrl;

  preview.alt =
    `Photo ${shot + 1}`;

  $('preview-grid')
    .appendChild(preview);

  shot += 1;

  if (shot < 4) {
    updatePose();

  } else {
    $('shot-counter').textContent =
      '4 / 4';

    $('capture-btn').disabled =
      true;

    $('save-strip-btn')
      .classList
      .remove('hidden');
  }
}


function roundedRectPath(
  context,
  x,
  y,
  width,
  height,
  radius
) {
  const adjustedRadius =
    Math.min(
      radius,
      width / 2,
      height / 2
    );

  context.beginPath();

  context.moveTo(
    x + adjustedRadius,
    y
  );

  context.lineTo(
    x + width - adjustedRadius,
    y
  );

  context.quadraticCurveTo(
    x + width,
    y,
    x + width,
    y + adjustedRadius
  );

  context.lineTo(
    x + width,
    y + height - adjustedRadius
  );

  context.quadraticCurveTo(
    x + width,
    y + height,
    x + width - adjustedRadius,
    y + height
  );

  context.lineTo(
    x + adjustedRadius,
    y + height
  );

  context.quadraticCurveTo(
    x,
    y + height,
    x,
    y + height - adjustedRadius
  );

  context.lineTo(
    x,
    y + adjustedRadius
  );

  context.quadraticCurveTo(
    x,
    y,
    x + adjustedRadius,
    y
  );

  context.closePath();
}


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


async function saveStrip() {
  if (photos.length !== 4) {
    return;
  }

  const canvas =
    document.createElement('canvas');

  const context =
    canvas.getContext('2d');

  const canvasWidth =
    1000;

  const sideMargin =
    48;

  const gap =
    22;

  const photoWidth =
    (
      canvasWidth -
      sideMargin * 2 -
      gap
    ) / 2;

  const photoHeight =
    600;

  const headerHeight =
    170;

  const footerHeight =
    160;

  const canvasHeight =
    headerHeight +
    photoHeight * 2 +
    gap +
    footerHeight;

  canvas.width =
    canvasWidth;

  canvas.height =
    canvasHeight;

  context.fillStyle =
    '#fbf4ff';

  context.fillRect(
    0,
    0,
    canvasWidth,
    canvasHeight
  );

  context.textAlign =
    'center';

  context.textBaseline =
    'middle';

  context.fillStyle =
    '#2b2340';

  context.font =
    'bold 50px -apple-system, BlinkMacSystemFont, sans-serif';

  context.fillText(
    'Which English Character Are You?',
    canvasWidth / 2,
    58
  );

  context.fillStyle =
    '#7c5ce7';

  context.font =
    'bold 36px -apple-system, BlinkMacSystemFont, sans-serif';

  context.fillText(
    `With ${characters[selected].name}`,
    canvasWidth / 2,
    118
  );

  const loadedImages =
    await Promise.all(
      photos.map(loadImage)
    );

  const positions = [
    [
      sideMargin,
      headerHeight
    ],

    [
      sideMargin +
      photoWidth +
      gap,

      headerHeight
    ],

    [
      sideMargin,

      headerHeight +
      photoHeight +
      gap
    ],

    [
      sideMargin +
      photoWidth +
      gap,

      headerHeight +
      photoHeight +
      gap
    ]
  ];

  loadedImages.forEach(
    (image, index) => {
      const [
        photoX,
        photoY
      ] = positions[index];

      context.fillStyle =
        '#d9ccef';

      roundedRectPath(
        context,
        photoX - 4,
        photoY - 4,
        photoWidth + 8,
        photoHeight + 8,
        24
      );

      context.fill();

      context.save();

      roundedRectPath(
        context,
        photoX,
        photoY,
        photoWidth,
        photoHeight,
        20
      );

      context.clip();

      const scale =
        Math.max(
          photoWidth / image.width,
          photoHeight / image.height
        );

      const drawWidth =
        image.width * scale;

      const drawHeight =
        image.height * scale;

      context.drawImage(
        image,

        photoX +
        (photoWidth - drawWidth) / 2,

        photoY +
        (photoHeight - drawHeight) / 2,

        drawWidth,
        drawHeight
      );

      context.restore();
    }
  );

  context.fillStyle =
    '#70677f';

  context.font =
    'bold 29px -apple-system, BlinkMacSystemFont, sans-serif';

  context.fillText(
    'Learning English, Finding Myself',
    canvasWidth / 2,
    canvasHeight - 62
  );

  const imageBlob =
    await new Promise(
      resolve => {
        canvas.toBlob(
          resolve,
          'image/jpeg',
          0.94
        );
      }
    );

  if (!imageBlob) {
    return;
  }

  const fileName =
    `${characters[selected].folder}-4cut.jpg`;

  const imageFile =
    new File(
      [imageBlob],
      fileName,
      {
        type: 'image/jpeg'
      }
    );

  if (
    navigator.canShare &&
    navigator.canShare({
      files: [imageFile]
    })
  ) {
    try {
      await navigator.share({
        files: [imageFile],
        title: 'English Character Photo Booth'
      });

      return;

    } catch (error) {
      if (
        error.name ===
        'AbortError'
      ) {
        return;
      }
    }
  }

  const downloadUrl =
    URL.createObjectURL(imageBlob);

  const downloadLink =
    document.createElement('a');

  downloadLink.href =
    downloadUrl;

  downloadLink.download =
    fileName;

  document.body
    .appendChild(downloadLink);

  downloadLink.click();

  downloadLink.remove();

  setTimeout(
    () => {
      URL.revokeObjectURL(downloadUrl);
    },
    1000
  );
}


function resetBoothForRetake() {
  shot = 0;
  photos = [];
  countingDown = false;

  const previewGrid =
    $('preview-grid');

  const saveButton =
    $('save-strip-btn');

  const captureButton =
    $('capture-btn');

  if (previewGrid) {
    previewGrid.innerHTML = '';
  }

  if (saveButton) {
    saveButton.classList.add('hidden');
  }

  if (captureButton) {
    captureButton.disabled = !stream;
  }

  updatePose();

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}


function goBackToResult() {
  stopCamera();
  screen('result-screen');
}


function stopCamera() {
  if (stream) {
    stream
      .getTracks()
      .forEach(track => {
        track.stop();
      });

    stream =
      null;
  }

  const video =
    $('video');

  if (video) {
    video.srcObject =
      null;
  }
}


function connectButton(
  id,
  handler
) {
  const button =
    $(id);

  if (button) {
    button.addEventListener(
      'click',
      handler
    );
  }
}


connectButton(
  'retry-btn',
  startQuiz
);

connectButton(
  'photo-btn',
  openBooth
);

connectButton(
  'camera-btn',
  startCamera
);

connectButton(
  'capture-btn',
  captureWithCountdown
);

connectButton(
  'save-strip-btn',
  saveStrip
);

connectButton(
  'back-result-btn',
  goBackToResult
);

connectButton(
  'back-result-bottom-btn',
  goBackToResult
);

connectButton(
  'retake-btn',
  resetBoothForRetake
);


window.addEventListener(
  'pagehide',
  stopCamera
);


resetScores();

window.startQuiz =
  startQuiz;

if (window.__startRequested) {
  window.__appStarting = true;
  startQuiz();
}
