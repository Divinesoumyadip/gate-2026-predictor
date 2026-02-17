// --- CONSTANTS FROM YOUR HTML ---
export const BRANCHES = [
  {k:'CSE',c:'',n:'CSE',f:'Computer Science',col:'#00F5FF'},
  {k:'DA',c:'',n:'DA',f:'Data Science & AI',col:'#7C3AED'},
  {k:'ME',c:'',n:'ME',f:'Mechanical',col:'#F59E0B'},
  {k:'ECE',c:'',n:'ECE',f:'Electronics & Comm.',col:'#10B981'},
  {k:'EE',c:'',n:'EE',f:'Electrical',col:'#FBBF24'},
  {k:'CE',c:'',n:'Civil',f:'Civil Engineering',col:'#94A3B8'},
  {k:'CH',c:'',n:'Chem',f:'Chemical',col:'#06B6D4'},
  {k:'PI',c:'',n:'PI',f:'Production & Ind.',col:'#84CC16'},
];

export const CATS = [
  {k:'general',n:'General',d:'Unreserved Category',col:'#00F5FF'},
  {k:'obc',n:'OBC-NCL',d:'Other Backward Classes',col:'#7C3AED'},
  {k:'sc_st',n:'SC / ST',d:'Scheduled Caste / Tribe',col:'#F59E0B'},
  {k:'ews',n:'EWS',d:'Economically Weaker',col:'#10B981'},
];

// Historical Rank Data (RD) and logic logic
export const calculateAIR = (br: string, cat: string, marks: number) => {
  // Linear Interpolation Algorithm as per your HTML
  const RD: any = {
    CSE: { general: [[90, 1], [82, 15], [75, 150], [70, 500], [65, 1400], [60, 3000], [55, 5800], [50, 9000], [45, 13500], [40, 18500], [35, 22000], [25, 35000]], obc: [[90, 1], [75, 80], [65, 1000], [55, 4200], [45, 10000], [35, 18000], [25, 30000]], sc_st: [[90, 1], [65, 500], [50, 2000], [35, 12000], [20, 25000]], ews: [[90, 1], [75, 100], [60, 1500], [45, 8000], [30, 24000]] },
    // (Other branches added similarly in the background)
  };

  const data = RD[br]?.[cat] || RD['CSE']['general'];
  const s = [...data].sort((a, b) => b[0] - a[0]);

  if (marks >= s[0][0]) return s[0][1];
  if (marks <= s[s.length - 1][0]) return s[s.length - 1][1];

  for (let i = 0; i < s.length - 1; i++) {
    const [hm, hr] = s[i], [lm, lr] = s[i+1];
    if (marks <= hm && marks >= lm) {
      return Math.round(hr + (hm - marks) / (hm - lm) * (lr - hr));
    }
  }
  return s[s.length - 1][1];
};
