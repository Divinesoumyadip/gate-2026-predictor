export const BRANCHES = [
  {key:'CSE',label:'CSE',full:'Computer Science',icon:'',color:'#00F5FF'},
  {key:'DA',label:'DA',full:'Data Science & AI',icon:'',color:'#8B5CF6'}
];

export const calculateRank = (branch, category, marks) => {
  const data = [[90, 1], [80, 150], [70, 800], [60, 3000], [50, 9000]];
  const sorted = [...data].sort((a, b) => b[0] - a[0]);

  if (marks >= sorted[0][0]) return sorted[0][1];
  for (let i = 0; i < sorted.length - 1; i++) {
    const [hm, hr] = sorted[i];
    const [lm, lr] = sorted[i + 1];
    if (marks <= hm && marks >= lm) {
      const t = (hm - marks) / (hm - lm);
      return Math.round(hr + t * (lr - hr));
    }
  }
  return 9000;
};
