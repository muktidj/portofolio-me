export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'How I Work', href: '#how-i-work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const hero = {
  name: 'Your Name',
  roles: 'System Analyst → Product Manager · Project Manager · Vibe Coder',
  intro:
    'Saya seorang generalis yang menjembatani dunia bisnis dan teknologi. Berawal dari system analyst, tumbuh menjadi product manager dan project manager, kini juga aktif vibe coding di era AI. Saya dekat dengan BOD, nyaman berdialog eksekutif, dan mampu menerjemahkan visi strategis menjadi produk yang nyata.',
  location: 'Jakarta, Indonesia',
  facts: [
    { label: 'Current role', value: 'Product Manager' },
    { label: 'Transitioning', value: 'System Analyst → PM' },
    { label: 'Focus', value: 'AI-era product building' },
    { label: 'Approach', value: 'Business ⇔ Tech bridge' },
  ],
  stats: [
    { value: '8+', label: 'Years experience' },
    { value: '20+', label: 'Projects delivered' },
    { value: '5', label: 'Industries served' },
    { value: '∞', label: 'Curiosity level' },
  ],
  industries: ['Fintech', 'E-Commerce', 'Healthcare', 'Enterprise', 'Travel'],
};

export const about = {
  paragraphs: [
    'Saya seorang generalis yang menjembatani dunia bisnis dan teknologi. Berawal dari system analyst, tumbuh menjadi product manager dan project manager, kini juga aktif vibe coding di era AI. Saya dekat dengan BOD, nyaman berdialog eksekutif, dan mampu menerjemahkan visi strategis menjadi produk yang nyata.',
    'Karier saya dibangun di persimpangan strategi bisnis dan eksekusi teknis. Sebagai system analyst, saya belajar memahami masalah secara mendalam. Sebagai product & project manager, saya belajar mengubah pemahaman itu menjadi produk yang divalue pengguna. Dan di era AI, saya merasakan sendiri bagaimana vibe coding mendemokratisasi kreasi — siapa pun bisa membangun, asal tahu apa yang ingin dibuat.',
    'Yang membuat saya berbeda adalah kedekatan dengan decision maker. Bicara dengan BOD bukan hal yang intimidating — itu ruang di mana saya bisa menyelaraskan visi besar dengan realitas eksekusi.',
  ],
  values: [
    { icon: 'briefcase', title: 'Generalist', text: 'Multidisiplin — dari analisis sistem hingga manajemen produk dan proyek.' },
    { icon: 'chat', title: 'Executive Presence', text: 'Nyaman berdialog dengan BOD, menerjemahkan kompleksitas menjadi keputusan.' },
    { icon: 'bulb', title: 'Adaptive', text: 'Belajar cepat di era AI, dari traditional analysis ke vibe coding.' },
    { icon: 'cap', title: 'Continuous Learner', text: 'Selalu penasaran, selalu bereksperimen dengan tools dan pendekatan baru.' },
  ],
};

export const expertise = {
  intro: 'Tiga domain keahlian yang saling melengkapi — analitis, manajerial, dan teknis.',
  domains: [
    {
      icon: 'grid',
      title: 'System Analysis',
      text: 'Requirement gathering, process modeling, data flow analysis, dan dokumentasi teknis yang bridging stakeholder dengan tim engineering.',
      tags: ['UML', 'BPMN', 'Data Modeling', 'SRS'],
    },
    {
      icon: 'people',
      title: 'Product & Project Management',
      text: 'Roadmap planning, sprint management, stakeholder communication, dan eksekusi end-to-end dari ide hingga launch dengan metrik yang jelas.',
      tags: ['Agile/Scrum', 'Roadmap', 'KPI', 'Stakeholder'],
    },
    {
      icon: 'code',
      title: 'Vibe Coding & AI',
      text: 'Memanfaatkan AI tools untuk prototyping cepat, membangun MVP, dan eksplorasi teknologi baru dengan pendekatan vibe coding yang pragmatis.',
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
    'Metodologi 5 fase yang saya pakai di setiap proyek — dari memahami masalah hingga mengukur impact. Pendekatan ini bisa saya adaptasi sesuai konteks dan skala proyek.',
  phases: [
    {
      icon: 'search', title: 'Discover',
      text: 'Memahami masalah dari sudut pandang bisnis dan pengguna sebelum menyentuh solusi teknis.',
      steps: ['Workshop dengan stakeholder & BOD untuk align visi', 'User interview dan observasi langsung lapangan', 'Competitive analysis & benchmark industri', 'Identifikasi pain point dan opportunity gap'],
      tools: ['Notion', 'Miro', 'Google Forms', 'Interview Notes'],
      output: 'Problem statement & opportunity brief',
    },
    {
      icon: 'doc', title: 'Analyze',
      text: 'Menerjemahkan kebutuhan bisnis menjadi spesifikasi teknis yang dapat dieksekusi tim engineering.',
      steps: ['Process modeling dengan BPMN & flowchart', 'Data modeling dan ERD design', 'Requirement specification (SRS document)', 'Gap analysis antara current state vs future state'],
      tools: ['Draw.io', 'Lucidchart', 'Confluence', 'Jira'],
      output: 'Technical spec & system design doc',
    },
    {
      icon: 'calendar', title: 'Plan',
      text: 'Menyusun roadmap dan sprint plan yang realistis, dengan prioritas berbasis impact vs effort.',
      steps: ['Product roadmap quarterly alignment dengan BOD', 'Backlog grooming & story pointing dengan tim dev', 'Sprint planning 2-week cycle', 'Risk assessment dan mitigation plan'],
      tools: ['Jira', 'Confluence', 'Notion', 'Google Sheets'],
      output: 'Roadmap, sprint backlog & project plan',
    },
    {
      icon: 'rocket', title: 'Execute',
      text: 'Mengawal eksekusi sprint demi sprint, memastikan delivery berkualitas sesuai timeline.',
      steps: ['Daily stand-up & blocker resolution', 'UAT coordination dengan stakeholder bisnis', 'Stakeholder update & demo setiap sprint review', 'Cross-functional sync antara dev, design, QA, dan bisnis'],
      tools: ['Jira', 'Slack', 'Figma', 'GitHub'],
      output: 'Working software setiap sprint',
    },
    {
      icon: 'chart', title: 'Measure',
      text: 'Mengukur impact dengan data, belajar dari hasil, dan iterasi untuk continuous improvement.',
      steps: ['Tracking KPI & product metrics post-launch', 'Retrospective sprint dengan tim untuk improvement', 'Data analysis untuk insight & decision making', 'Iteration planning berdasarkan feedback & data'],
      tools: ['Google Analytics', 'Mixpanel', 'Looker Studio', 'Metabase'],
      output: 'Insight report & iteration plan',
    },
  ],
};

export const experience = {
  intro: 'Dari analisis sistem ke manajemen produk — setiap peran menambah perspektif baru.',
  jobs: [
    {
      period: '2023 — Present', company: 'Tech Company', role: 'Product Manager',
      text: 'Memimpin produk digital end-to-end, dari discovery hingga delivery, dengan fokus pada pertumbuhan dan retensi pengguna.',
      bullets: ['Meluncurkan 3 produk baru dengan 40% peningkatan user acquisition', 'Mengelola roadmap quarterly bersama BOD dan tim engineering', 'Menetapkan dan melacak KPI produk dengan data-driven approach'],
    },
    {
      period: '2021 — 2023', company: 'Digital Agency', role: 'Project Manager',
      text: 'Mengelola delivery multiple project secara paralel dengan tim cross-functional dan timeline yang ketat.',
      bullets: ['Menyelesaikan 15+ project on-time dengan tingkat kepuasan klien 95%', 'Menerapkan agile methodology yang meningkatkan velocity tim 30%', 'Facilitate daily stand-ups, sprint planning, dan retrospective'],
    },
    {
      period: '2018 — 2021', company: 'Enterprise Solutions', role: 'System Analyst',
      text: 'Menganalisis kebutuhan bisnis, merancang solusi teknis, dan menjadi jembatan antara stakeholder bisnis dengan tim development.',
      bullets: ['Mendesain arsitektur sistem untuk 5+ enterprise application', 'Memimpin requirement gathering workshop dengan 20+ stakeholder', 'Menghasilkan dokumentasi teknis yang mengurangi rework 50%'],
    },
  ],
};

export const projects = {
  intro: 'Setiap proyek diceritakan dalam tiga sudut pandang: apa yang dibuat, mengapa penting, dan dampaknya. Klik untuk melihat case study lengkap.',
  items: [
    {
      category: 'Product Management',
      title: 'Analytics Dashboard Platform',
      summary: 'Platform dashboard analytics real-time yang membantu eksekutif memantau KPI bisnis dengan visualisasi data interaktif.',
      what: 'Real-time analytics dashboard untuk eksekutif dengan 12 KPI bisnis yang bisa diakses dari mobile dan desktop.',
      why: 'Data bisnis tersebar di multiple system dan laporan manual memakan waktu 3 hari per minggu. BOD butuh satu source of truth.',
      impact: 'Meluncurkan 3 produk baru dengan 40% peningkatan user acquisition, menghemat 24 jam kerja per minggu dari laporan manual.',
      tags: ['Product Strategy', 'Data Viz', 'SaaS'],
      metrics: [
        { value: '40%', label: 'User acquisition' },
        { value: '24h', label: 'Saved weekly' },
        { value: '3 mo', label: 'Time to launch' },
        { value: '12', label: 'KPIs tracked' },
      ],
      context: 'Eksekutif perusahaan kesulitan mendapatkan visibility real-time atas KPI bisnis. Data tersebar di multiple system, dan laporan manual memakan waktu 3 hari per minggu. BOD meminta satu source of truth yang bisa diakses kapan saja.',
      approach: [
        'Discovery workshop dengan C-level untuk identifikasi 12 KPI utama',
        'User interview dengan 8 eksekutif untuk memahami kebutuhan visualisasi',
        'Prioritasi roadmap: MVP dengan 5 KPI dulu, sisanya phase 2',
        'Sprint 2-week cycle dengan demo mingguan ke BOD untuk feedback cepat',
        'UAT dengan 3 divisi sebelum rollout menyeluruh',
      ],
      outcome: 'Platform diluncurkan dalam 3 bulan. Eksekutif kini bisa monitor KPI real-time dari mobile maupun desktop. Laporan manual diganti dengan auto-generated report, menghemat 24 jam kerja per minggu.',
      lesson: 'Melibatkan BOD sejak fase discovery membuat alignment jauh lebih cepat. Demo mingguan bukan overhead — itu investasi trust.',
    },
    {
      category: 'Project Management',
      title: 'Cross-Team Collaboration Suite',
      summary: 'Initiative untuk menyelaraskan 4 tim cross-functional dalam pengembangan fitur enterprise, dari kickoff hingga release.',
      what: 'Framework kolaborasi 4 tim cross-functional dengan dependency mapping, Scrum of Scrums, dan standardisasi komunikasi.',
      why: 'Tim bekerja silo, timeline sering meleset, dependency tidak terlihat, dan komunikasi tersebar di banyak channel tidak terstruktur.',
      impact: '4 tim deliver fitur enterprise dalam 4 bulan tanpa missed milestone. Kepuasan klien 95%, pola kerja ini diadopsi sebagai standar.',
      tags: ['Agile Delivery', 'Stakeholder', 'Enterprise'],
      metrics: [],
      context: '', approach: [], outcome: '', lesson: '',
    },
  ],
};

export const learning = {
  intro: 'Sebagai continuous learner, saya selalu sedang mempelajari sesuatu. Berikut yang sedang jadi fokus saat ini.',
  items: [
    { label: 'Exploring', text: 'AI agents & multi-agent orchestration frameworks' },
    { label: 'Reading', text: '"Inspired" by Marty Cagan — how to create products customers love' },
    { label: 'Building', text: 'Portfolio website with AI-assisted development (this one!)' },
    { label: 'Learning', text: 'TypeScript & React patterns for better vibe coding' },
  ],
};

export const contact = {
  intro: 'Punya ide, proyek, atau sekedar ingin diskusi? Saya selalu terbuka untuk percakapan baru.',
  email: 'hello@yourname.dev',
  location: 'Jakarta, Indonesia',
  availability: 'Biasanya merespons dalam 1–2 hari kerja.',
};

export const resume = {
  contacts: [
    { icon: 'mail', text: 'hello@yourname.dev' },
    { icon: 'phone', text: '+62 812 3456 7890' },
    { icon: 'pin', text: 'Jakarta, Indonesia' },
    { icon: 'in', text: 'linkedin.com/in/yourname' },
    { icon: 'globe', text: 'yourname.dev' },
  ],
  labels: { summary: 'Professional Summary', work: 'Work Experience', education: 'Education', certifications: 'Certifications', skills: 'Core Skills', additional: 'Additional', close: 'Tutup', download: 'Unduh PDF' },
  education: { degree: 'B.Sc. Information Systems', school: 'University Name · 2014 — 2018', text: 'Fokus pada system analysis, database design, dan IT project management. GPA 3.7/4.0.' },
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
