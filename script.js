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

const $ = id => document.getElementById(id);

let qIndex = 0;
let scores = {};
let selected = null;
let stream = null;
let shot = 0;
let photos = [];

function resetScores() {
  scores = Object.fromEntries(
    Object.keys(characters).map(key => [key, 0])
  );
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });

  const target = $(id);

  if (target) {
    target.classList.add('active');
  }
}

function startQuiz() {
  stopCamera();
  qIndex = 0;
  selected = null;
  shot = 0;
  photos = [];
  resetScores();
  showScreen('quiz-screen');
  renderQuestion();
}

function renderQuestion() {
  const [english, korean, answers] = questions[qIndex];

  $('question-number').textContent = `Question ${qIndex + 1}`;
  $('progress-count').textContent = `${qIndex + 1} / 8`;
  $('progress-fill').style.width = `${(qIndex + 1) * 12.5}%`;
  $('question-text').textContent = english;
  $('question-korean').textContent = korean;
  $('answers').innerHTML = '';

  answers.forEach(([answerEnglish, answerKorean, targets]) => {
    const button = document.createElement('button');

    button.type = 'button';
    button.className = 'answer-btn';
    button.innerHTML = `
      ${answerEnglish}
      <small>${answerKorean}</small>
    `;

    button.addEventListener('click', () => {
      chooseAnswer(targets);
    });

    $('answers').appendChild(button);
  });
}

function chooseAnswer(targets) {
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

function showResult() {
  const maxScore = Math.max(...Object.values(scores));

  const finalists = Object.keys(scores).filter(key => {
    return scores[key] === maxScore;
  });

  selected = finalists[
    Math.floor(Math.random() * finalists.length)
  ];

  const character = characters[selected];

  $('result-name').textContent = character.name;
  $('result-description').textContent = character.description;
  $('result-image').src =
    `images1/${character.folder}/wave.png`;

  $('result-keywords').innerHTML = character.keywords
    .map(keyword => `<span class="keyword">${keyword}</span>`)
    .join('');

  showScreen('result-screen');
}

function openBooth() {
  if (!selected) return;

  shot = 0;
  photos = [];

  $('preview-grid').innerHTML = '';
  $('save-strip-btn').classList.add('hidden');
  $('capture-btn').disabled = !stream;

  const character = characters[selected];

  $('photo-title').textContent =
    `Take Photos with ${character.name}`;

  updatePose();
  showScreen('photo-screen');
}

function updatePose() {
  if (!selected) return;

  const character = characters[selected];
  const poseIndex = Math.min(shot, poses.length - 1);

  $('shot-counter').textContent =
    `${Math.min(shot + 1, 4)} / 4`;

  $('character-overlay').src =
    `images1/${character.folder}/${poses[poseIndex]}`;
}

async function startCamera() {
  try {
    stopCamera();

    stream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: 'user'
      },
      audio: false
    });

    const video = $('video');

    video.srcObject = stream;
    video.setAttribute('playsinline', '');
    await video.play();

    $('camera-message').classList.add('hidden');
    $('capture-btn').disabled = false;
  } catch (error) {
    console.error(error);

    $('camera-message').classList.remove('hidden');
    $('camera-message').textContent =
      'Camera access failed. Open through HTTPS and allow camera permission.';
  }
}

function waitForImage(image) {
  if (image.complete && image.naturalWidth > 0) {
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    image.onload = resolve;
    image.onerror = reject;
  });
}

async function capture() {
  if (!stream || shot >= 4) return;

  const video = $('video');
  const overlay = $('character-overlay');
  const canvas = $('capture-canvas');
  const context = canvas.getContext('2d');

  if (!context) return;

  try {
    await waitForImage(overlay);
  } catch (error) {
    console.error('Character image loading failed.', error);
    return;
  }

  canvas.width = 900;
  canvas.height = 1200;

  context.clearRect(0, 0, canvas.width, canvas.height);

  /*
    카메라 영상을 세로 사진 비율로 자르기
  */
  const videoWidth = video.videoWidth || 900;
  const videoHeight = video.videoHeight || 1200;

  const targetRatio = canvas.width / canvas.height;
  const videoRatio = videoWidth / videoHeight;

  let sourceX = 0;
  let sourceY = 0;
  let sourceWidth = videoWidth;
  let sourceHeight = videoHeight;

  if (videoRatio > targetRatio) {
    sourceWidth = videoHeight * targetRatio;
    sourceX = (videoWidth - sourceWidth) / 2;
  } else {
    sourceHeight = videoWidth / targetRatio;
    sourceY = (videoHeight - sourceHeight) / 2;
  }

  /*
    셀카처럼 좌우 반전하여 카메라 영상 그리기
  */
  context.save();
  context.translate(canvas.width, 0);
  context.scale(-1, 1);

  context.drawImage(
    video,
    sourceX,
    sourceY,
    sourceWidth,
    sourceHeight,
    0,
    0,
    canvas.width,
    canvas.height
  );

  context.restore();

  /*
    캐릭터를 화면보다 지나치게 크지 않게 그리기
  */
  const maxCharacterWidth = 220;
  const maxCharacterHeight = 560;

  const scale = Math.min(
    maxCharacterWidth / overlay.naturalWidth,
    maxCharacterHeight / overlay.naturalHeight
  );

  const characterWidth =
    overlay.naturalWidth * scale;

  const characterHeight =
    overlay.naturalHeight * scale;

  const characterX =
    canvas.width - characterWidth - 30;

  const characterY =
    canvas.height - characterHeight - 25;

  context.drawImage(
    overlay,
    characterX,
    characterY,
    characterWidth,
    characterHeight
  );

  const photoData =
    canvas.toDataURL('image/jpeg', 0.92);

  photos.push(photoData);

  const previewImage =
    document.createElement('img');

  previewImage.src = photoData;
  previewImage.alt =
    `Photo ${shot + 1}`;

  $('preview-grid').appendChild(previewImage);

  shot += 1;

  if (shot < 4) {
    updatePose();
  } else {
    $('shot-counter').textContent = '4 / 4';
    $('capture-btn').disabled = true;
    $('save-strip-btn').classList.remove('hidden');
  }
}

function loadPhoto(source) {
  return new Promise((resolve, reject) => {
    const image = new Image();

    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = source;
  });
}

async function saveStrip() {
  if (photos.length !== 4 || !selected) {
    alert('Please take all four photos first.');
    return;
  }

  const character = characters[selected];

  /*
    가로 2칸 × 세로 2칸 형태의 4컷 사진
  */
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  if (!context) return;

  const margin = 42;
  const gap = 20;
  const photoWidth = 540;
  const photoHeight = 720;
  const headerHeight = 180;
  const footerHeight = 150;

  canvas.width =
    margin * 2 + photoWidth * 2 + gap;

  canvas.height =
    headerHeight +
    margin +
    photoHeight * 2 +
    gap +
    footerHeight;

  context.fillStyle = '#fff7fb';
  context.fillRect(
    0,
    0,
    canvas.width,
    canvas.height
  );

  context.fillStyle = '#2b2340';
  context.textAlign = 'center';
  context.textBaseline = 'middle';

  context.font =
    'bold 50px -apple-system, BlinkMacSystemFont, sans-serif';

  context.fillText(
    'Which English Character Are You?',
    canvas.width / 2,
    65
  );

  context.fillStyle = '#7c5ce7';
  context.font =
    'bold 38px -apple-system, BlinkMacSystemFont, sans-serif';

  context.fillText(
    `With ${character.name}`,
    canvas.width / 2,
    128
  );

  let loadedPhotos;

  try {
    loadedPhotos = await Promise.all(
      photos.map(loadPhoto)
    );
  } catch (error) {
    console.error('Photo loading failed.', error);
    alert('The photos could not be prepared. Please try again.');
    return;
  }

  loadedPhotos.forEach((image, index) => {
    const column = index % 2;
    const row = Math.floor(index / 2);

    const x =
      margin + column * (photoWidth + gap);

    const y =
      headerHeight +
      margin +
      row * (photoHeight + gap);

    context.save();

    context.beginPath();
    context.roundRect(
      x,
      y,
      photoWidth,
      photoHeight,
      24
    );

    context.clip();

    context.drawImage(
      image,
      x,
      y,
      photoWidth,
      photoHeight
    );

    context.restore();

    context.strokeStyle = '#e7e0f3';
    context.lineWidth = 5;

    context.beginPath();
    context.roundRect(
      x,
      y,
      photoWidth,
      photoHeight,
      24
    );

    context.stroke();
  });

  context.fillStyle = '#6f6781';
  context.font =
    'bold 30px -apple-system, BlinkMacSystemFont, sans-serif';

  context.fillText(
    'Learning English, Finding Myself',
    canvas.width / 2,
    canvas.height - 75
  );

  canvas.toBlob(
    async blob => {
      if (!blob) {
        alert('The photo could not be created.');
        return;
      }

      const fileName =
        `${character.folder}-4cut.jpg`;

      const file = new File(
        [blob],
        fileName,
        { type: 'image/jpeg' }
      );

      /*
        아이패드에서는 공유창을 열어
        ‘이미지 저장’을 선택할 수 있게 함
      */
      if (
        navigator.canShare &&
        navigator.canShare({ files: [file] })
      ) {
        try {
          await navigator.share({
            files: [file],
            title: 'English Character Photo Booth',
            text: `Take photos with ${character.name}`
          });

          return;
        } catch (error) {
          if (error.name === 'AbortError') {
            return;
          }

          console.error(error);
        }
      }

      /*
        공유 기능이 없는 경우 다운로드
      */
      const url =
        URL.createObjectURL(blob);

      const link =
        document.createElement('a');

      link.href = url;
      link.download = fileName;

      document.body.appendChild(link);
      link.click();
      link.remove();

      window.setTimeout(() => {
        URL.revokeObjectURL(url);
      }, 1500);
    },
    'image/jpeg',
    0.94
  );
}

function stopCamera() {
  if (stream) {
    stream.getTracks().forEach(track => {
      track.stop();
    });

    stream = null;
  }

  const video = $('video');

  if (video) {
    video.srcObject = null;
  }
}

function connectButtons() {
  const startButton = $('start-btn');
  const retryButton = $('retry-btn');
  const photoButton = $('photo-btn');
  const cameraButton = $('camera-btn');
  const captureButton = $('capture-btn');
  const saveButton = $('save-strip-btn');
  const backButton = $('back-result-btn');

  if (startButton) {
    startButton.addEventListener('click', startQuiz);
  }

  if (retryButton) {
    retryButton.addEventListener('click', startQuiz);
  }

  if (photoButton) {
    photoButton.addEventListener('click', openBooth);
  }

  if (cameraButton) {
    cameraButton.addEventListener('click', startCamera);
  }

  if (captureButton) {
    captureButton.addEventListener('click', capture);
  }

  if (saveButton) {
    saveButton.addEventListener('click', saveStrip);
  }

  if (backButton) {
    backButton.addEventListener('click', () => {
      stopCamera();
      showScreen('result-screen');
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  resetScores();
  connectButtons();

  console.log('English Character Booth loaded successfully.');
});
