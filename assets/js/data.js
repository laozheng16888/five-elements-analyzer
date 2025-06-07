// 天干
const tiangan = [
  { name: '甲', element: 'Wood', yinYang: 'Yang' },
  { name: '乙', element: 'Wood', yinYang: 'Yin' },
  { name: '丙', element: 'Fire', yinYang: 'Yang' },
  { name: '丁', element: 'Fire', yinYang: 'Yin' },
  { name: '戊', element: 'Earth', yinYang: 'Yang' },
  { name: '己', element: 'Earth', yinYang: 'Yin' },
  { name: '庚', element: 'Metal', yinYang: 'Yang' },
  { name: '辛', element: 'Metal', yinYang: 'Yin' },
  { name: '壬', element: 'Water', yinYang: 'Yang' },
  { name: '癸', element: 'Water', yinYang: 'Yin' }
];

// 地支
const dizhi = [
  { name: '子', element: 'Water', hides: ['癸'] },
  { name: '丑', element: 'Earth', hides: ['己', '癸', '辛'] },
  { name: '寅', element: 'Wood', hides: ['甲', '丙', '戊'] },
  { name: '卯', element: 'Wood', hides: ['乙'] },
  { name: '辰', element: 'Earth', hides: ['戊', '乙', '癸'] },
  { name: '巳', element: 'Fire', hides: ['丙', '庚', '戊'] },
  { name: '午', element: 'Fire', hides: ['丁', '己'] },
  { name: '未', element: 'Earth', hides: ['己', '丁', '乙'] },
  { name: '申', element: 'Metal', hides: ['庚', '壬', '戊'] },
  { name: '酉', element: 'Metal', hides: ['辛'] },
  { name: '戌', element: 'Earth', hides: ['戊', '辛', '丁'] },
  { name: '亥', element: 'Water', hides: ['壬', '甲'] }
];

// 纳音五行（简化）
const naYin = {
  '甲子': 'Gold in the Sea',
  '乙丑': 'Gold in the Sea',
  '丙寅': 'Fire in the Furnace',
  '丁卯': 'Fire in the Furnace',
  // 可扩展为60组干支纳音
};

// 五行顺序用于图表
const fiveElements = ['Wood', 'Fire', 'Earth', 'Metal', 'Water'];
