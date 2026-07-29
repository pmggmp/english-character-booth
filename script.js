
const shotLayouts = [
  // 1컷: 오른쪽 아래
  {
    live: {
      side: 'right',
      width: '38%',
      height: '84%',
      edge: '0%',
      bottom: '0%'
    },
    save: {
      side: 'right',
      maxW: 400,
      maxH: 850,
      edge: 6,
      bottom: 18
    }
  },

  // 2컷: 왼쪽 아래
  {
    live: {
      side: 'left',
      width: '38%',
      height: '84%',
      edge: '0%',
      bottom: '0%'
    },
    save: {
      side: 'left',
      maxW: 400,
      maxH: 850,
      edge: 6,
      bottom: 18
    }
  },

  // 3컷: 오른쪽 아래
  // 연설대나 큰 소품이 있어 약간 크게 표시
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
      edge: 4,
      bottom: 12
    }
  },

  // 4컷: 왼쪽 아래
  {
    live: {
      side: 'left',
      width: '38%',
      height: '84%',
      edge: '0%',
      bottom: '0%'
    },
    save: {
      side: 'left',
      maxW: 400,
      maxH: 850,
      edge: 6,
      bottom: 18
    }
  }
];
