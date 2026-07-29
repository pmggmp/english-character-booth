async function saveStrip(){
  if(photos.length !== 4) return;

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  const canvasWidth = 1000;
  const sideMargin = 48;
  const gap = 22;

  const photoWidth =
    (canvasWidth - sideMargin * 2 - gap) / 2;

  const photoHeight = 600;
  const headerHeight = 170;
  const footerHeight = 120;

  const canvasHeight =
    headerHeight +
    photoHeight * 2 +
    gap +
    footerHeight;

  canvas.width = canvasWidth;
  canvas.height = canvasHeight;

  /* 배경 */
  ctx.fillStyle = '#fbf4ff';
  ctx.fillRect(
    0,
    0,
    canvasWidth,
    canvasHeight
  );

  /* 제목 */
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  ctx.fillStyle = '#2b2340';
  ctx.font =
    'bold 50px -apple-system, BlinkMacSystemFont, sans-serif';

  ctx.fillText(
    'Which English Character Are You?',
    canvasWidth / 2,
    58
  );

  /* 인물 이름 */
  ctx.fillStyle = '#7c5ce7';
  ctx.font =
    'bold 36px -apple-system, BlinkMacSystemFont, sans-serif';

  ctx.fillText(
    `With ${characters[selected].name}`,
    canvasWidth / 2,
    118
  );

  /* 저장된 네 장 불러오기 */
  const loadedImages = await Promise.all(
    photos.map(src => new Promise((resolve, reject) => {
      const img = new Image();

      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = src;
    }))
  );

  const positions = [
    [sideMargin, headerHeight],
    [
      sideMargin + photoWidth + gap,
      headerHeight
    ],
    [
      sideMargin,
      headerHeight + photoHeight + gap
    ],
    [
      sideMargin + photoWidth + gap,
      headerHeight + photoHeight + gap
    ]
  ];

  loadedImages.forEach((img, index) => {
    const [photoX, photoY] = positions[index];

    /* 테두리 */
    ctx.fillStyle = '#d9ccef';

    roundRect(
      ctx,
      photoX - 4,
      photoY - 4,
      photoWidth + 8,
      photoHeight + 8,
      24
    );

    ctx.fill();

    /* 둥근 사진 */
    ctx.save();

    roundRect(
      ctx,
      photoX,
      photoY,
      photoWidth,
      photoHeight,
      20
    );

    ctx.clip();

    const scale = Math.max(
      photoWidth / img.width,
      photoHeight / img.height
    );

    const drawWidth = img.width * scale;
    const drawHeight = img.height * scale;

    ctx.drawImage(
      img,
      photoX + (photoWidth - drawWidth) / 2,
      photoY + (photoHeight - drawHeight) / 2,
      drawWidth,
      drawHeight
    );

    ctx.restore();
  });

  /* 하단 문구는 사진 아래 별도 여백에 배치 */
  ctx.fillStyle = '#70677f';
  ctx.font =
    'bold 29px -apple-system, BlinkMacSystemFont, sans-serif';

  ctx.fillText(
    'Learning English, Finding Myself',
    canvasWidth / 2,
    canvasHeight - 48
  );

  canvas.toBlob(async blob => {
    if(!blob) return;

    const fileName =
      `${characters[selected].folder}-4cut.jpg`;

    const file = new File(
      [blob],
      fileName,
      {type:'image/jpeg'}
    );

    /* 아이패드 공유 창 */
    if(
      navigator.canShare &&
      navigator.canShare({files:[file]})
    ){
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

    /* 일반 다운로드 */
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.href = url;
    link.download = fileName;

    document.body.appendChild(link);
    link.click();
    link.remove();

    setTimeout(() => {
      URL.revokeObjectURL(url);
    }, 1000);

  }, 'image/jpeg', 0.94);
}


function roundRect(
  ctx,
  x,
  y,
  width,
  height,
  radius
){
  ctx.beginPath();

  ctx.moveTo(
    x + radius,
    y
  );

  ctx.lineTo(
    x + width - radius,
    y
  );

  ctx.quadraticCurveTo(
    x + width,
    y,
    x + width,
    y + radius
  );

  ctx.lineTo(
    x + width,
    y + height - radius
  );

  ctx.quadraticCurveTo(
    x + width,
    y + height,
    x + width - radius,
    y + height
  );

  ctx.lineTo(
    x + radius,
    y + height
  );

  ctx.quadraticCurveTo(
    x,
    y + height,
    x,
    y + height - radius
  );

  ctx.lineTo(
    x,
    y + radius
  );

  ctx.quadraticCurveTo(
    x,
    y,
    x + radius,
    y
  );

  ctx.closePath();
}
$('start-btn').onclick = startQuiz;
