import { profile, shortUrl } from './profile';

export const nav = [
  { label: 'Tentang', href: '#about' },
  { label: 'Keahlian', href: '#expertise' },
  { label: 'Cara Kerja', href: '#how-i-work' },
  { label: 'Pengalaman', href: '#experience' },
  { label: 'Proyek', href: '#projects' },
  { label: 'User Manual', href: '#working-with-me' },
];

export const hero = {
  name: profile.name,
  roles: 'System Analyst → Product Manager · Project Manager · Vibe Coder · QA',
  intro:
    'Saya seorang generalis yang menjembatani dunia bisnis dan teknologi. Berawal dari system analyst, tumbuh menjadi product manager dan project manager, kini juga aktif vibe coding di era AI. Saya dekat dengan BOD, nyaman berdialog eksekutif, dan mampu menerjemahkan visi strategis menjadi produk yang nyata.',
  location: profile.location,
  facts: [
    { label: 'Peran saat ini', value: 'System Analyst & PM' },
    { label: 'Transisi', value: 'System Analyst → PM' },
    { label: 'Fokus', value: 'Membangun produk di era AI' },
    { label: 'Pendekatan', value: 'Jembatan bisnis ⇔ teknologi' },
  ],
  stats: [
    { value: '6+', label: 'Tahun pengalaman' },
    { value: '20+', label: 'Proyek selesai' },
    { value: '3', label: 'Industri' },
    { value: '∞', label: 'Rasa ingin tahu' },
  ],
  industries: [
    { name: 'Software House', company: 'EOA Tech' },
    { name: 'Sewa Bus Pariwisata', company: 'White Horse · Whitehorse Group' },
    { name: 'Travel & Open Trip', company: 'Explorer · Whitehorse Group' },
  ],
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
      period: '2022 — Sekarang', company: 'Whitehorse Group · White Horse & Explorer', role: 'System Analyst · Product Manager · QA & VIBE Coder',
      text: 'Memegang peran rangkap untuk dua bisnis grup: White Horse (sewa bus pariwisata) dan Explorer (open trip & travel). Menjembatani kebutuhan bisnis dengan teknologi, dari analisis hingga rilis.',
      bullets: ['Menganalisis kebutuhan bisnis dan menyusun spesifikasi sistem untuk White Horse dan Explorer', 'Mengelola roadmap dan prioritas produk bersama manajemen dan tim engineering', 'Di era AI, turun langsung sebagai tester (QA) dan frontend developer dengan bantuan AI tools'],
    },
    {
      period: '2020 — 2022', company: 'EOA Tech · Software House', role: 'System Analyst',
      text: 'Menganalisis kebutuhan klien, merancang solusi sistem, dan menjadi jembatan antara klien dengan tim development.',
      bullets: ['Melakukan requirement gathering dan analisis proses bisnis klien', 'Menyusun dokumentasi sistem: SRS, BPMN, UML, dan data model', 'Mengawal implementasi bersama tim developer hingga UAT'],
    },
  ],
};

export const projects = {
  intro: 'Setiap proyek diceritakan dalam tiga sudut pandang: apa yang dibuat, mengapa penting, dan dampaknya. Detail dan case study lengkap sedang disiapkan — segera hadir.',
  items: [
    {
      status: 'dev',
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
      status: 'dev',
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
    { label: 'Building', text: 'Website portofolio ini — dibangun dengan Astro, dibantu Claude Opus' },
    { label: 'Learning', text: 'TypeScript & React patterns for better vibe coding' },
  ],
};

export const contact = {
  intro: 'Punya ide, proyek, atau sekedar ingin diskusi? Saya selalu terbuka untuk percakapan baru.',
  email: profile.email,
  location: profile.location,
  availability: 'Biasanya merespons dalam 1–2 hari kerja.',
};

export const resume = {
  contacts: [
    { icon: 'mail', text: profile.email },
    { icon: 'pin', text: profile.location },
    { icon: 'in', text: shortUrl(profile.linkedin) },
    { icon: 'globe', text: shortUrl(profile.github) },
  ],
  labels: { summary: 'Professional Summary', work: 'Work Experience', education: 'Education', skills: 'Core Skills', additional: 'Additional', close: 'Tutup', download: 'Unduh PDF' },
  education: [
    { degree: 'Sarjana Komputer (S.Kom) — Sistem Informasi', school: 'Universitas Budi Luhur · 2016 — 2020', text: 'Fokus pada system analysis, database design, dan IT project management. IPK 3.5/4.0.' },
    { degree: 'SMK — Pemasaran (Marketing)', school: 'SMKN 20 Jakarta · 2013 — 2016', text: 'Dasar pemasaran, komunikasi, dan penjualan — bekal memahami sisi bisnis dan pelanggan.' },
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
  header: { resume: 'Resume', cta: 'Hubungi Saya' },
  hero: { viewWork: 'Lihat Karya', talk: 'Ayo Ngobrol', resume: 'Resume', industries: 'Industri yang pernah saya tangani', photoAlt: 'Foto' },
  about: { eyebrow: '01 — Tentang', viewResume: 'Lihat Resume', title: 'Jembatan antara', titleEm: 'bisnis dan teknologi' },
  expertise: { eyebrow: '02 — Keahlian', title: 'Apa yang saya bawa ke tim', skills: 'Tools & Skills' },
  process: { eyebrow: '03 — Cara Kerja', title: 'Dari masalah ke produk,', titleEm: 'langkah demi langkah', tools: 'Tools', output: 'Output' },
  experience: { eyebrow: '04 — Pengalaman', title: 'Perjalanan sejauh ini' },
  projects: { eyebrow: '05 — Proyek', title: 'Karya pilihan', what: 'Apa', why: 'Mengapa', impact: 'Dampak', viewCase: 'Lihat case study →', context: 'Konteks & Masalah', approach: 'Pendekatan', outcome: 'Hasil', lesson: 'Pelajaran', soon: 'Detail segera hadir', status: { dev: 'Dalam pengembangan', beta: 'Beta' } },
  learning: { eyebrow: 'Selalu belajar', title: 'Yang sedang saya dalami', titleEm: 'saat ini', updated: 'Diperbarui berkala' },
  contact: { eyebrow: '06 — Kontak', title: 'Mari bangun sesuatu', email: 'Email', linkedin: 'LinkedIn', location: 'Lokasi', response: 'Waktu respons' },
  footer: { builtWith: 'Dibuat dengan', assisted: '· dibantu' },
};

export const motto = {
  eyebrow: 'Prinsip kerja',
  quote: 'Done is better than perfect.',
  text: 'Saya lebih memilih merilis versi yang berfungsi lalu menyempurnakannya dengan feedback nyata, daripada menunggu sempurna dan tidak pernah rilis. Kualitas tetap dijaga — lewat iterasi dan pengujian, bukan penundaan.',
  points: [
    { icon: 'rocket', title: 'Ship', text: 'Rilis versi pertama secepatnya.' },
    { icon: 'search', title: 'Learn', text: 'Kumpulkan feedback & data nyata.' },
    { icon: 'trend', title: 'Iterate', text: 'Perbaiki terus, sedikit demi sedikit.' },
  ],
};

export const manual = {
  eyebrow: 'User Manual',
  title: 'Bekerja dengan',
  titleEm: 'saya',
  intro: 'Belum pernah bekerja dengan saya? Ini panduan singkat tentang gaya kerja, cara berkomunikasi, dan nilai yang saya pegang — supaya kolaborasi kita lancar sejak hari pertama.',
  groups: [
    {
      icon: 'bulb', title: 'Prinsip kerja',
      items: [
        { title: 'Lingkungan sehat & suportif', text: 'Saya tumbuh paling baik di tempat yang profesional, saling menghormati, dan membangun hubungan kerja yang bermakna.' },
        { title: 'Tumbuh lewat ruang & refleksi', text: 'Cara paling efektif untuk berkembang: diberi ruang menemukan solusi sendiri, terbuka pada feedback, lalu merefleksikannya.' },
        { title: 'Well-being itu penting', text: 'Saya menjaga keseimbangan kerja dan hidup. Di luar jam kerja, mari sepakati dulu sebelum menghubungi.' },
        { title: 'Saling menghormati', text: 'Perlakukan orang lain sebagaimana kita ingin diperlakukan — prinsip sederhana yang membuat kerja sama jadi mudah.' },
      ],
    },
    {
      icon: 'chat', title: 'Cara saya berkomunikasi',
      items: [
        { title: 'Konteks dulu, baru inti', text: 'Ceritakan latar belakangnya sebelum masuk ke poin utama, terutama saat memberi saya tugas. Dengan konteks, hasil kerja saya jauh lebih tepat.' },
        { title: 'Saya butuh waktu mencerna', text: 'Saya tidak selalu langsung membalas. Itu tandanya saya sedang memikirkan jawaban terbaik, bukan mengabaikan.' },
        { title: 'Selalu terbuka untuk feedback', text: 'Sampaikan saja, kapan pun. Feedback adalah bahan bakar saya untuk berkembang.' },
      ],
    },
    {
      icon: 'spark', title: 'Kekuatan saya',
      items: [
        { title: 'Sangat adaptif', text: 'Cepat menyesuaikan diri dengan perubahan ide, prioritas, maupun tanggung jawab.' },
        { title: 'Optimis & can-do', text: 'Setiap tantangan saya anggap bahan belajar. Saya berkomitmen memberi yang terbaik dan mencari ilmu dari sumber mana pun.' },
        { title: 'Komunikatif', text: 'Senang berinteraksi dengan orang, dan memastikan setiap keputusan tersampaikan dengan jelas agar tidak ada miskomunikasi.' },
      ],
    },
  ],
  tipsTitle: 'Tips cepat bekerja dengan saya',
  tips: ['Mulai dengan konteks, lalu inti', 'Beri saya waktu untuk mencerna', 'Hargai jam kerja — sepakati di luar itu', 'Ada feedback? Sampaikan langsung'],
};
