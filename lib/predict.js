export const BRANCHES = [
  {k:'CSE', c:'💻', n:'CSE', f:'Computer Science', col:'#00F5FF'},
  {k:'DA', c:'🤖', n:'DA', f:'Data Science & AI', col:'#7C3AED'},
  {k:'ME', c:'⚙️', n:'ME', f:'Mechanical', col:'#F59E0B'},
  {k:'ECE', c:'📡', n:'ECE', f:'Electronics & Comm.', col:'#10B981'},
  {k:'EE', c:'⚡', n:'EE', f:'Electrical', col:'#FBBF24'},
  {k:'CE', c:'🏗️', n:'Civil', f:'Civil Engineering', col:'#94A3B8'},
  {k:'CH', c:'🧪', n:'Chem', f:'Chemical', col:'#06B6D4'},
  {k:'PI', c:'🏭', n:'PI', f:'Production & Ind.', col:'#84CC16'},
];

export const calculateAIR = (branch, category, marks) => {
  const data = [[90, 1], [80, 150], [70, 800], [60, 3000], [50, 9000], [40, 18000], [30, 28000]];
  const sorted = [...data].sort((a, b) => b[0] - a[0]);

  if (marks >= sorted[0][0]) return sorted[0][1];
  if (marks <= sorted[sorted.length - 1][0]) return sorted[sorted.length - 1][1];

  for (let i = 0; i < sorted.length - 1; i++) {
    const [hm, hr] = sorted[i];
    const [lm, lr] = sorted[i + 1];
    if (marks <= hm && marks >= lm) {
      const t = (hm - marks) / (hm - lm);
      return Math.round(hr + t * (lr - hr));
    }
  }
  return 35000;
};
