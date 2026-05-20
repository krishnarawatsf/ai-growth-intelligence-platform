export const personas = {
  founder: {
    label: 'Founder',
    northStar: 'Weekly active teams completing the core value action',
    summary:
      'Revenue quality is improving, but activation still leaks at the onboarding stage. The fastest leverage is to reduce time-to-value and test a tighter first-session flow.',
    focus: 'Prioritize activation, retention durability, and efficient growth spend.',
    memo: 'Board-ready: the product is growing, but a 9% drop in activation is masking future retention risk.',
    recommendations: [
      { title: 'Shorten the onboarding path', impact: 'High', effort: 'Low', confidence: '82%', reason: 'Activation drops most at the second step.' },
      { title: 'Segment channel quality', impact: 'Medium', effort: 'Low', confidence: '74%', reason: 'Paid traffic converts, but trial retention is weaker than organic.' },
      { title: 'Launch a recovery email loop', impact: 'Medium', effort: 'Medium', confidence: '68%', reason: 'Users who do not reach value in 24h are 2.4x likelier to churn.' },
    ],
  },
  growth: {
    label: 'Growth Lead',
    northStar: 'Qualified conversions per week',
    summary:
      'Channel performance is mixed. Organic and referral bring healthier users, while one paid source has the highest CAC with the worst retention. Reallocate budget and test a landing page variant.',
    focus: 'Optimize CAC, improve funnel conversion, and expand experiment velocity.',
    memo: 'Growth memo: the strongest lever is not more traffic, it is better traffic plus improved landing conversion.',
    recommendations: [
      { title: 'Shift spend toward high-LTV channels', impact: 'High', effort: 'Low', confidence: '79%', reason: 'Referral CAC is 37% lower with higher 30-day retention.' },
      { title: 'Test a value-proposition rewrite', impact: 'High', effort: 'Medium', confidence: '71%', reason: 'Landing-page bounce spikes before signup intent is established.' },
      { title: 'Prioritize one experiment per funnel stage', impact: 'Medium', effort: 'Low', confidence: '65%', reason: 'The backlog is noisy and lacks stage-level ownership.' },
    ],
  },
  marketing: {
    label: 'Marketing',
    northStar: 'Revenue-qualified pipeline from efficient acquisition',
    summary:
      'Campaign efficiency is strongest in email and referral, but paid social is inflating acquisition cost without improving downstream conversion. Tie attribution to retention, not just signups.',
    focus: 'Measure channel quality, cohort value, and contribution margin.',
    memo: 'Marketing summary: the best campaigns do not just create signups, they create retained users with payback within the target window.',
    recommendations: [
      { title: 'Kill low-retention ad sets', impact: 'High', effort: 'Low', confidence: '87%', reason: 'Some ad sets drive volume but produce low-quality cohorts.' },
      { title: 'Build retention-aware attribution', impact: 'Medium', effort: 'Medium', confidence: '76%', reason: 'Current reporting overvalues early conversions.' },
      { title: 'Clone the top-performing channel narrative', impact: 'Medium', effort: 'Low', confidence: '70%', reason: 'Email and referral share a trust-based message pattern.' },
    ],
  },
  product: {
    label: 'Product',
    northStar: 'Retained users completing the core action',
    summary:
      'The highest-risk product issue is feature discovery: users who reach value tend to stay, but too many never activate the core loop. The strongest product opportunity is a guided behavior path.',
    focus: 'Improve activation mechanics, product-led retention, and feature adoption.',
    memo: 'Product insight: retention is structurally healthy after activation; the bottleneck is getting users to the first value moment.',
    recommendations: [
      { title: 'Instrument activation milestones', impact: 'High', effort: 'Low', confidence: '84%', reason: 'The team needs better visibility into the value moment.' },
      { title: 'Redesign first-run guidance', impact: 'High', effort: 'Medium', confidence: '73%', reason: 'Users who complete the first action retain materially better.' },
      { title: 'Promote the sticky feature earlier', impact: 'Medium', effort: 'Low', confidence: '69%', reason: 'Feature adoption strongly correlates with 30-day retention.' },
    ],
  },
};

export const kpis = [
  { label: 'North Star', value: '12.4k', delta: '+18.2%', tone: 'text-success' },
  { label: 'Activation Rate', value: '41.8%', delta: '-3.1%', tone: 'text-warn' },
  { label: '30-day Retention', value: '28.6%', delta: '+4.7%', tone: 'text-success' },
  { label: 'CAC / LTV', value: '1:4.9', delta: '+9.3%', tone: 'text-success' },
  { label: 'Weekly Experiments', value: '7', delta: '+2', tone: 'text-sky-300' },
];

export const funnel = [
  { step: 'Visit', value: 100, note: 'Traffic quality steady' },
  { step: 'Signup', value: 76, note: 'High intent from organic' },
  { step: 'Activation', value: 41, note: 'Largest leak point' },
  { step: 'Habit', value: 29, note: 'Feature adoption drives retention' },
  { step: 'Paid', value: 16, note: 'Monetization improves post activation' },
];

export const cohorts = [
  ['W1', 82, 64, 51, 43, 38, 35],
  ['W2', 84, 67, 53, 47, 40, 36],
  ['W3', 85, 69, 57, 49, 45, 39],
  ['W4', 88, 71, 60, 53, 47, 42],
];

export const cohortHeader = ['W0', 'W1', 'W2', 'W3', 'W4', 'W5'];

export const campaigns = [
  { channel: 'Referral', cac: '$19', ltv: '$112', roi: '5.9x', status: 'Best quality' },
  { channel: 'Search', cac: '$33', ltv: '$118', roi: '3.6x', status: 'Balanced scale' },
  { channel: 'Paid Social', cac: '$58', ltv: '$94', roi: '1.6x', status: 'Needs optimization' },
  { channel: 'Email', cac: '$8', ltv: '$91', roi: '11.4x', status: 'Retention driver' },
];

export const architecture = [
  'Event ingestion',
  'Metric engine',
  'Cohort / funnel tables',
  'Anomaly detection',
  'AI recommendation layer',
  'Strategy assistant',
];

export const useCases = [
  'SaaS: reduce trial friction and improve activation.',
  'Marketplace: improve liquidity and marketplace match quality.',
  'DTC: compare channel efficiency and margin-adjusted LTV.',
  'Consumer app: detect retention loops and engagement decay.',
];

export const personaOrder = Object.keys(personas);