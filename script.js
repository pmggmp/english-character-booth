const characters={
shakespeare:{name:'William Shakespeare',folder:'shakespeare',description:'You are creative, expressive, and full of imagination.',keywords:['CREATIVITY','IMAGINATION','EXPRESSION']},
austen:{name:'Jane Austen',folder:'jane-austen',description:'You are thoughtful, observant, and understanding.',keywords:['OBSERVATION','EMPATHY','THOUGHTFULNESS']},
king:{name:'Martin Luther King Jr.',folder:'martin-luther-king',description:'You are confident, courageous, and ready to lead.',keywords:['LEADERSHIP','COURAGE','COMMUNICATION']},
keller:{name:'Helen Keller',folder:'helen-keller',description:'You are determined, hopeful, and strong.',keywords:['PERSISTENCE','HOPE','COURAGE']},
dahl:{name:'Roald Dahl',folder:'roald-dahl',description:'You are playful, imaginative, and full of surprising ideas.',keywords:['HUMOR','IMAGINATION','FUN']},
angelou:{name:'Maya Angelou',folder:'maya-angelou',description:'You are warm, inspiring, and thoughtful.',keywords:['INSPIRATION','EMPATHY','WISDOM']},
christie:{name:'Agatha Christie',folder:'agatha-christie',description:'You are curious, logical, and focused.',keywords:['LOGIC','CURIOSITY','FOCUS']},
hemingway:{name:'Ernest Hemingway',folder:'ernest-hemingway',description:'You are independent, clear, and strong-minded.',keywords:['CLARITY','STRENGTH','INDEPENDENCE']}
};

const questions=[
['What do you enjoy most in English class?','영어 시간에 가장 즐거운 활동은 무엇인가요?',[
['Creating an imaginative story','상상력이 풍부한 이야기 만들기',['shakespeare','dahl']],['Reading and understanding feelings','글을 읽고 사람들의 감정 이해하기',['austen','angelou']],['Giving a speech and sharing ideas','발표하며 내 생각 전달하기',['king','hemingway']],['Solving difficult questions carefully','어려운 문제를 꼼꼼하게 해결하기',['keller','christie']]]],
['Which word describes you best?','나를 가장 잘 나타내는 단어는 무엇인가요?',[
['Creative','창의적인',['shakespeare','dahl']],['Thoughtful','사려 깊은',['austen','angelou']],['Confident','자신감 있는',['king','hemingway']],['Determined','의지가 강한',['keller','christie']]]],
['What kind of story do you like?','어떤 종류의 이야기를 좋아하나요?',[
['A dramatic story with powerful words','힘 있는 표현이 나오는 극적인 이야기',['shakespeare','king']],['A warm story about people and relationships','사람과 관계를 다룬 따뜻한 이야기',['austen','angelou']],['A funny and surprising adventure','재미있고 놀라운 모험 이야기',['dahl','hemingway']],['A mysterious story full of clues','단서가 가득한 미스터리 이야기',['christie','keller']]]],
['What do you do when you face a difficult task?','어려운 과제를 만났을 때 어떻게 하나요?',[
['I try a completely new idea.','완전히 새로운 방법을 시도한다.',['dahl','shakespeare']],['I keep trying and never give up.','포기하지 않고 계속 노력한다.',['keller','angelou']],['I solve it step by step.','단서를 찾아 단계별로 해결한다.',['christie','austen']],['I focus on the most important point.','가장 중요한 내용에 집중한다.',['hemingway','king']]]],
['How do you usually express your ideas?','평소 자신의 생각을 어떻게 표현하나요?',[
['With creative and beautiful words','창의적이고 아름다운 말로',['shakespeare','dahl']],['With careful details and observations','세심한 관찰과 자세한 내용으로',['austen','christie']],['With a strong and confident voice','힘 있고 자신감 있는 목소리로',['king','angelou']],['With simple and clear sentences','간단하고 명확한 문장으로',['hemingway','keller']]]],
['What is most important to you?','나에게 가장 중요한 것은 무엇인가요?',[
['Making people laugh and imagine','사람들을 웃게 하고 상상하게 하는 것',['dahl','shakespeare']],['Understanding and encouraging others','다른 사람을 이해하고 격려하는 것',['angelou','austen']],['Speaking up for what is right','옳은 일을 위해 목소리를 내는 것',['king','christie']],['Overcoming difficulties','어려움을 극복하는 것',['keller','hemingway']]]],
['Which activity would you choose?','다음 중 어떤 활동을 선택하고 싶나요?',[
['Writing a play','연극 대본 쓰기',['shakespeare','dahl']],['Writing about people’s feelings','사람들의 감정에 관한 글쓰기',['austen','angelou']],['Giving an inspiring speech','사람들에게 용기를 주는 연설하기',['king','keller']],['Solving a mystery','미스터리 사건 해결하기',['christie','hemingway']]]],
['What message would you like to share with the world?','세상에 어떤 메시지를 전하고 싶나요?',[
['Use your imagination!','상상력을 펼쳐 보세요!',['dahl','shakespeare']],['Your voice is important.','당신의 목소리는 소중합니다.',['angelou','austen']],['Never give up.','절대 포기하지 마세요.',['keller','christie']],['Be strong and speak clearly.','강하게 생각하고 분명하게 말하세요.',['hemingway','king']]]]
];

const poses=['wave.png','book.png','heart.png','thumbsup.png'];
const $=id=>document.getElementById(id);
let qIndex=0,scores={},selected=null,stream=null,shot=0,photos=[];
function resetScores(){scores=Object.fromEntries(Object.keys(characters).map(k=>[k,0]));}
function screen(id){document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));$(id).classList.add('active');}
function startQuiz(){qIndex=0;resetScores();screen('quiz-screen');renderQuestion();}
function renderQuestion(){const [en,ko,answers]=questions[qIndex];$('question-number').textContent=`Question ${qIndex+1}`;$('progress-count').textContent=`${qIndex+1} / 8`;$('progress-fill').style.width=`${(qIndex+1)*12.5}%`;$('question-text').textContent=en;$('question-korean').textContent=ko;$('answers').innerHTML='';answers.forEach(([a,b,targets])=>{const btn=document.createElement('button');btn.className='answer-btn';btn.innerHTML=`${a}<small>${b}</small>`;btn.onclick=()=>choose(targets);$('answers').appendChild(btn);});}
function choose(targets){targets.forEach((k,i)=>scores[k]+=i===0?2:1);qIndex++;qIndex<8?renderQuestion():showResult();}
function showResult(){const max=Math.max(...Object.values(scores));const finals=Object.keys(scores).filter(k=>scores[k]===max);selected=finals[Math.floor(Math.random()*finals.length)];const c=characters[selected];$('result-name').textContent=c.name;$('result-description').textContent=c.description;$('result-image').src=`images1/${c.folder}/wave.png`;$('result-keywords').innerHTML=c.keywords.map(x=>`<span class="keyword">${x}</span>`).join('');screen('result-screen');}
function openBooth(){shot=0;photos=[];$('preview-grid').innerHTML='';$('save-strip-btn').classList.add('hidden');$('capture-btn').disabled=!stream;const c=characters[selected];$('photo-title').textContent=`Take Photos with ${c.name}`;updatePose();screen('photo-screen');}
function updatePose(){const c=characters[selected];$('shot-counter').textContent=`${Math.min(shot+1,4)} / 4`;$('character-overlay').src=`images1/${c.folder}/${poses[Math.min(shot,3)]}`;}
async function startCamera(){try{stream=await navigator.mediaDevices.getUserMedia({video:{facingMode:'user'},audio:false});$('video').srcObject=stream;$('camera-message').classList.add('hidden');$('capture-btn').disabled=false;}catch(e){$('camera-message').textContent='Camera access failed. Open through HTTPS and allow camera permission.';}}
function capture(){if(!stream||shot>=4)return;const v=$('video'),o=$('character-overlay'),c=$('capture-canvas'),x=c.getContext('2d');c.width=900;c.height=1200;x.save();x.translate(900,0);x.scale(-1,1);x.drawImage(v,0,0,900,1200);x.restore();x.drawImage(o,900-420-18,1200-980,420,980);const url=c.toDataURL('image1/jpeg',.92);photos.push(url);const img=document.createElement('img');img.src=url;$('preview-grid').appendChild(img);shot++;if(shot<4)updatePose();else{$('shot-counter').textContent='4 / 4';$('capture-btn').disabled=true;$('save-strip-btn').classList.remove('hidden');}}
function saveStrip(){if(photos.length!==4)return;const c=document.createElement('canvas'),x=c.getContext('2d'),w=900,ph=1200,g=20,h=180+4*ph+5*g+130;c.width=w;c.height=h;x.fillStyle='#fff7fb';x.fillRect(0,0,w,h);x.fillStyle='#2b2340';x.textAlign='center';x.font='bold 54px Georgia';x.fillText('Which English Character Are You?',w/2,78);x.font='bold 34px -apple-system';x.fillStyle='#7c5ce7';x.fillText(characters[selected].name,w/2,132);let loaded=0;photos.forEach((src,i)=>{const im=new Image();im.onload=()=>{x.drawImage(im,0,200+i*(ph+g),w,ph);if(++loaded===4){x.fillStyle='#6f6781';x.font='28px -apple-system';x.fillText('Learning English, Finding Myself',w/2,h-54);const a=document.createElement('a');a.download=`${characters[selected].folder}-4cut.jpg`;a.href=c.toDataURL('image/jpeg',.94);a.click();}};im.src=src;});}
function stopCamera(){if(stream){stream.getTracks().forEach(t=>t.stop());stream=null;}}
$('start-btn').onclick=startQuiz;$('retry-btn').onclick=startQuiz;$('photo-btn').onclick=openBooth;$('camera-btn').onclick=startCamera;$('capture-btn').onclick=capture;$('save-strip-btn').onclick=saveStrip;$('back-result-btn').onclick=()=>{stopCamera();screen('result-screen');};resetScores();
