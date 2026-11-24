import { profile, shortUrl } from './profile';

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'How I Work', href: '#how-i-work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'User Manual', href: '#working-with-me' },
];

export const hero = {
  name: profile.name,
  roles: 'System Analyst → Product Manager · Project Manager · Vibe Coder · QA',
  intro:
    "I'm a generalist who bridges the worlds of business and technology. Starting out as a system analyst, I grew into a product and project manager, and now I vibe code in the AI era. I'm close to the board of directors, comfortable in executive conversations, and able to turn strategic vision into real products.",
  location: profile.location,
  facts: [
    { label: 'Current role', value: 'System Analyst & PM' },
    { label: 'Transitioning', value: 'System Analyst → PM' },
    { label: 'Focus', value: 'AI-era product building' },
    { label: 'Approach', value: 'Business ⇔ Tech bridge' },
  ],
  stats: [
    { value: '6+', label: 'Years experience' },
    { value: '20+', label: 'Projects delivered' },
    { value: '3', label: 'Industries served' },
    { value: '∞', label: 'Curiosity level' },
  ],
  industries: [
    { name: 'Software House', company: 'EOA Tech' },
    { name: 'Bus Charter & Rental', company: 'White Horse · Whitehorse Group' },
    { name: 'Travel & Open Trip', company: 'Explorer · Whitehorse Group' },
  ],
};

export const about = {
  paragraphs: [
    "I'm a generalist who bridges the worlds of business and technology. Starting out as a system analyst, I grew into a product and project manager, and now I vibe code in the AI era. I'm close to the board of directors, comfortable in executive conversations, and able to turn strategic vision into real products.",
    'My career is built at the intersection of business strategy and technical execution. As a system analyst, I learned to understand problems deeply. As a product & project manager, I learned to turn that understanding into products users value. And in the AI era, I have seen first-hand how vibe coding democratizes creation — anyone can build, as long as they know what they want to make.',
    "What sets me apart is my closeness to decision makers. Talking to the board isn't intimidating — it's the space where I can align the big vision with the reality of execution.",
  ],
  values: [
    { icon: 'briefcase', title: 'Generalist', text: 'Multidisciplinary — from system analysis to product and project management.' },
    { icon: 'chat', title: 'Executive Presence', text: 'Comfortable talking with the board, turning complexity into decisions.' },
    { icon: 'bulb', title: 'Adaptive', text: 'Quick to learn in the AI era, from traditional analysis to vibe coding.' },
    { icon: 'cap', title: 'Continuous Learner', text: 'Always curious, always experimenting with new tools and approaches.' },
  ],
};

export const expertise = {
  intro: 'Three complementary domains of expertise — analytical, managerial, and technical.',
  domains: [
    {
      icon: 'grid',
      title: 'System Analysis',
      text: 'Requirement gathering, process modeling, data flow analysis, and technical documentation that bridges stakeholders and the engineering team.',
      tags: ['UML', 'BPMN', 'Data Modeling', 'SRS'],
    },
    {
      icon: 'people',
      title: 'Product & Project Management',
      text: 'Roadmap planning, sprint management, stakeholder communication, and end-to-end execution from idea to launch with clear metrics.',
      tags: ['Agile/Scrum', 'Roadmap', 'KPI', 'Stakeholder'],
    },
    {
      icon: 'code',
      title: 'Vibe Coding & AI',
      text: 'Using AI tools for fast prototyping, building MVPs, and exploring new technology with a pragmatic vibe coding approach.',
      tags: ['AI-Assisted Dev', 'Rapid Prototyping', 'MVP'],
    },
  ],
  skills: [
    'Product Strategy', 'Agile/Scrum', 'Stakeholder Management', 'Requirement Analysis', 'UML/BPMN',
    'Data Modeling', 'Roadmap Planning', 'KPI Definition', 'Sprint Management', 'AI-Assisted Development',
    'Rapid Prototyping', 'No-Code Tools', 'Cross-functional Leadership', 'Executive Communication',
    'Process Optimization', 'User Stories', 'API Design Basics', 'SQL & Data Querying', 'Notion & Jira', 'Figma Basics',
  ],
};

export const process = {
  intro:
    'A 5-phase methodology I use on every project — from understanding the problem to measuring impact. I adapt it to the context and scale of the project.',
  phases: [
    {
      icon: 'search', title: 'Discover',
      text: 'Understanding the problem from the business and user perspective before touching any technical solution.',
      steps: ['Workshops with stakeholders & the board to align on vision', 'User interviews and on-the-ground observation', 'Competitive analysis & industry benchmarks', 'Identifying pain points and opportunity gaps'],
      tools: ['Notion', 'Miro', 'Google Forms', 'Interview Notes'],
      output: 'Problem statement & opportunity brief',
    },
    {
      icon: 'doc', title: 'Analyze',
      text: 'Translating business needs into technical specifications the engineering team can execute.',
      steps: ['Process modeling with BPMN & flowcharts', 'Data modeling and ERD design', 'Requirement specification (SRS document)', 'Gap analysis between current and future state'],
      tools: ['Draw.io', 'Lucidchart', 'Confluence', 'Jira'],
      output: 'Technical spec & system design doc',
    },
    {
      icon: 'calendar', title: 'Plan',
      text: 'Building a realistic roadmap and sprint plan, prioritized by impact vs effort.',
      steps: ['Quarterly product roadmap alignment with the board', 'Backlog grooming & story pointing with the dev team', 'Sprint planning on a 2-week cycle', 'Risk assessment and mitigation plan'],
      tools: ['Jira', 'Confluence', 'Notion', 'Google Sheets'],
      output: 'Roadmap, sprint backlog & project plan',
    },
    {
      icon: 'rocket', title: 'Execute',
      text: 'Guiding execution sprint by sprint, ensuring quality delivery on schedule.',
      steps: ['Daily stand-ups & blocker resolution', 'UAT coordination with business stakeholders', 'Stakeholder updates & demos every sprint review', 'Cross-functional sync across dev, design, QA, and business'],
      tools: ['Jira', 'Slack', 'Figma', 'GitHub'],
      output: 'Working software every sprint',
    },
    {
      icon: 'chart', title: 'Measure',
      text: 'Measuring impact with data, learning from results, and iterating for continuous improvement.',
      steps: ['Tracking KPIs & product metrics post-launch', 'Sprint retrospectives with the team', 'Data analysis for insight & decision making', 'Iteration planning based on feedback & data'],
      tools: ['Google Analytics', 'Mixpanel', 'Looker Studio', 'Metabase'],
      output: 'Insight report & iteration plan',
    },
  ],
};

export const experience = {
  intro: 'From system analysis to product management — every role added a new perspective.',
  jobs: [
    {
      period: '2022 — Present', company: 'Whitehorse Group · White Horse & Explorer', role: 'System Analyst · Product Manager · QA & Frontend',
      text: 'Wearing multiple hats for two group businesses: White Horse (bus charter) and Explorer (open trips & travel). Bridging business needs and technology, from analysis to release.',
      bullets: ['Analyze business needs and write system specifications for White Horse and Explorer', 'Manage the product roadmap and priorities with management and the engineering team', 'In the AI era, work hands-on as tester (QA) and frontend developer using AI tools'],
    },
    {
      period: '2020 — 2022', company: 'EOA Tech · Software House', role: 'System Analyst',
      text: 'Analyzed client needs, designed system solutions, and bridged clients with the development team.',
      bullets: ['Ran requirement gathering and business process analysis with clients', 'Wrote system documentation: SRS, BPMN, UML, and data models', 'Guided implementation with the developer team through UAT'],
    },
  ],
};

export const projects = {
  intro: 'Each project is told from three angles: what was built, why it matters, and its impact. Click to see the full case study.',
  items: [
    {
      status: '',
      category: 'Product Management',
      title: 'Analytics Dashboard Platform',
      summary: 'A real-time analytics dashboard platform that helps executives monitor business KPIs through interactive data visualization.',
      what: 'A real-time analytics dashboard for executives with 12 business KPIs, accessible from mobile and desktop.',
      why: 'Business data was scattered across multiple systems and manual reporting took 3 days a week. The board needed a single source of truth.',
      impact: 'Launched 3 new products with a 40% increase in user acquisition, saving 24 working hours per week on manual reports.',
      tags: ['Product Strategy', 'Data Viz', 'SaaS'],
      metrics: [
        { value: '40%', label: 'User acquisition' },
        { value: '24h', label: 'Saved weekly' },
        { value: '3 mo', label: 'Time to launch' },
        { value: '12', label: 'KPIs tracked' },
      ],
      context: 'Company executives struggled to get real-time visibility into business KPIs. Data was spread across multiple systems, and manual reporting took 3 days per week. The board asked for a single source of truth accessible at any time.',
      approach: [
        'Discovery workshop with the C-level to identify the 12 key KPIs',
        'Interviews with 8 executives to understand visualization needs',
        'Roadmap prioritization: MVP with 5 KPIs first, the rest in phase 2',
        '2-week sprint cycle with weekly demos to the board for fast feedback',
        'UAT with 3 divisions before full rollout',
      ],
      outcome: 'The platform launched in 3 months. Executives can now monitor KPIs in real time from mobile and desktop. Manual reports were replaced with auto-generated ones, saving 24 working hours per week.',
      lesson: 'Involving the board from the discovery phase made alignment much faster. Weekly demos are not overhead — they are an investment in trust.',
    },
    {
      status: 'dev',
      category: 'Project Management',
      title: 'Cross-Team Collaboration Suite',
      summary: 'An initiative to align 4 cross-functional teams on enterprise feature development, from kickoff to release.',
      what: 'A collaboration framework for 4 cross-functional teams with dependency mapping, Scrum of Scrums, and standardized communication.',
      why: 'Teams worked in silos, timelines often slipped, dependencies were invisible, and communication was scattered across many unstructured channels.',
      impact: '4 teams delivered enterprise features in 4 months with no missed milestones. 95% client satisfaction, and this way of working was adopted as the standard.',
      tags: ['Agile Delivery', 'Stakeholder', 'Enterprise'],
      metrics: [],
      context: '', approach: [], outcome: '', lesson: '',
    },
  ],
};

export const learning = {
  intro: "As a continuous learner, I'm always studying something. Here is what I'm focused on right now.",
  items: [
    { label: 'Exploring', text: 'AI agents & multi-agent orchestration frameworks' },
    { label: 'Reading', text: '"Inspired" by Marty Cagan — how to create products customers love' },
    { label: 'Building', text: 'This portfolio website — built with Astro, assisted by Claude Opus' },
    { label: 'Learning', text: 'TypeScript & React patterns for better vibe coding' },
  ],
};

export const contact = {
  intro: "Got an idea, a project, or just want to chat? I'm always open to new conversations.",
  email: profile.email,
  location: profile.location,
  availability: 'Usually replies within 1–2 business days.',
};

export const resume = {
  contacts: [
    { icon: 'mail', text: profile.email },
    { icon: 'pin', text: profile.location },
    { icon: 'in', text: shortUrl(profile.linkedin) },
    { icon: 'globe', text: shortUrl(profile.github) },
  ],
  labels: { summary: 'Professional Summary', work: 'Work Experience', education: 'Education', certifications: 'Certifications', skills: 'Core Skills', additional: 'Additional', close: 'Close', download: 'Download PDF' },
  education: [
    { degree: 'Bachelor of Computer Science (S.Kom) — Information Systems', school: 'Budi Luhur University · 2016 — 2020', text: 'Focused on system analysis, database design, and IT project management. GPA 3.5/4.0.' },
    { degree: 'Vocational High School — Marketing', school: 'SMKN 20 Jakarta · 2013 — 2016', text: 'Foundations in marketing, communication, and sales — grounding for the business and customer side.' },
  ],
  certifications: [
    { name: 'Certified Scrum Master (CSM)', meta: 'Scrum Alliance · 2022' },
    { name: 'Google Project Management Certificate', meta: 'Google · 2021' },
    { name: 'ITIL Foundation', meta: 'AXELOS · 2019' },
  ],
  skillGroups: [
    { title: 'Product & Strategy', items: ['Product Roadmap', 'Go-to-Market', 'KPI / OKR', 'User Discovery', 'A/B Testing'] },
    { title: 'Project Management', items: ['Agile / Scrum', 'Sprint Planning', 'Risk Management', 'Resource Allocation', 'UAT'] },
    { title: 'System Analysis', items: ['UML / BPMN', 'Data Modeling', 'SRS Documentation', 'Gap Analysis', 'Process Mapping'] },
    { title: 'Technical & Tools', items: ['SQL', 'API Design', 'Figma', 'Jira / Confluence', 'AI-Assisted Dev'] },
  ],
  additional: [
    'Product Strategy', 'Agile/Scrum', 'Stakeholder Management', 'Requirement Analysis', 'UML/BPMN',
    'Data Modeling', 'Roadmap Planning', 'KPI Definition', 'Sprint Management', 'AI-Assisted Development',
    'Rapid Prototyping', 'No-Code Tools', 'Cross-functional Leadership', 'Executive Communication',
    'Process Optimization', 'User Stories', 'API Design Basics', 'SQL & Data Querying', 'Notion & Jira', 'Figma Basics',
  ],
};

export const ui = {
  header: { resume: 'Resume', cta: 'Get in Touch' },
  hero: { viewWork: 'View My Work', talk: "Let's Talk", resume: 'Resume', industries: "Industries I've worked with", photoAlt: 'Photo of' },
  about: { eyebrow: '01 — About', viewResume: 'View Resume', title: 'The bridge between', titleEm: 'business and technology' },
  expertise: { eyebrow: '02 — Expertise', title: 'What I bring to the table', skills: 'Tooling & Skills' },
  process: { eyebrow: '03 — How I Work', title: 'From problem to product,', titleEm: 'step by step', tools: 'Tools', output: 'Output' },
  experience: { eyebrow: '04 — Experience', title: 'The journey so far' },
  projects: { eyebrow: '05 — Projects', title: 'Selected work', what: 'What', why: 'Why', impact: 'Impact', viewCase: 'View case study →', context: 'Context & Problem', approach: 'Approach', outcome: 'Outcome', lesson: 'Lesson learned', status: { dev: 'In development', beta: 'Beta' } },
  learning: { eyebrow: 'Always learning', title: "What I'm into", titleEm: 'right now', updated: 'Updated regularly' },
  contact: { eyebrow: '06 — Contact', title: "Let's build something", email: 'Email', linkedin: 'LinkedIn', location: 'Location', response: 'Response time' },
  footer: { builtWith: 'Built with', assisted: '· assisted by' },
};

export const motto = {
  eyebrow: 'Working principle',
  quote: 'Done is better than perfect.',
  text: "I'd rather ship a working version and refine it with real feedback than wait for perfect and never ship. Quality still matters — it comes from iteration and testing, not delay.",
  points: [
    { icon: 'rocket', title: 'Ship', text: 'Release the first version fast.' },
    { icon: 'search', title: 'Learn', text: 'Collect real feedback & data.' },
    { icon: 'trend', title: 'Iterate', text: 'Keep improving, step by step.' },
  ],
};

export const manual = {
  eyebrow: 'User Manual',
  title: 'Working',
  titleEm: 'with me',
  intro: "Haven't worked with me before? Here's a quick guide to my working style, how I communicate, and what I believe in — so we can collaborate smoothly from day one.",
  groups: [
    {
      icon: 'bulb', title: 'My work beliefs',
      items: [
        { title: 'Healthy, supportive environment', text: 'I grow best in a workplace that is professional, respectful, and builds meaningful relationships between co-workers.' },
        { title: 'Growth through ownership & reflection', text: 'The most effective way to grow is to find your own way to solve things, stay open to feedback, and reflect.' },
        { title: 'Well-being matters', text: 'I protect my work-life balance. Outside working hours, please agree with me first before reaching out.' },
        { title: 'Mutual respect', text: 'Treat others the way you want to be treated — a simple rule that makes working together easy.' },
      ],
    },
    {
      icon: 'chat', title: 'How I communicate',
      items: [
        { title: 'Context first, headline second', text: 'Share the background before the main point, especially when handing me a task. With context, my work is far more on target.' },
        { title: 'I take time to digest', text: "I may not reply right away. It means I'm thinking through the best answer, not ignoring you." },
        { title: 'Always open to feedback', text: 'Just tell me, anytime. Feedback is what fuels my growth.' },
      ],
    },
    {
      icon: 'spark', title: 'My strengths',
      items: [
        { title: 'Highly adaptable', text: 'I adjust quickly to changing ideas, priorities, and responsibilities.' },
        { title: 'Optimistic, can-do attitude', text: 'I treat every challenge as a learning resource, commit to doing my best, and seek knowledge from any source.' },
        { title: 'Communicative', text: 'I love working with people and make sure every decision is well-informed to avoid miscommunication.' },
      ],
    },
  ],
  tipsTitle: 'Quick tips for working with me',
  tips: ['Start with context, then the point', 'Give me time to digest', 'Respect working hours — agree on anything outside them', 'Have feedback? Say it directly'],
};
