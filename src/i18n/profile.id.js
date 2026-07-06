// Konten portofolio versi Bahasa Indonesia, diadaptasi dari CV Ahmad Luthfi.

export const profileId = {
  summary:
    "Product Manager dengan latar belakang kuat di Backend Engineering, berpengalaman memimpin produk autentikasi, OAuth, Digital Identity, dan transaksi di lingkungan fintech yang teregulasi. Terbiasa mengelola siklus produk end-to-end — mulai dari discovery, requirement gathering, roadmap planning, stakeholder management, UAT, hingga delivery — sambil menjembatani kebutuhan bisnis dan implementasi teknis bersama tim Engineering, Compliance, Security, dan Legal.",

  stats: [
    { value: "4+", label: "Tahun di Teknologi & Produk" },
    { value: "2", label: "Tahun sebagai Product Manager" },
    { value: "5", label: "Kelompok Stakeholder Lintas Fungsi" },
  ],

  strengths: [
    {
      role: "Product Manager",
      description:
        "Memegang siklus produk end-to-end — dari discovery dan requirement hingga roadmap planning dan hasil yang terukur.",
      points: [
        "Product strategy, roadmap, dan discovery",
        "PRD, user story & acceptance criteria",
        "Keputusan berbasis data dari feedback stakeholder",
      ],
    },
    {
      role: "Project Manager",
      description:
        "Mengoordinasikan delivery lintas tim dan menjaga rilis tetap sesuai jadwal di lingkungan yang teregulasi dan berisiko tinggi.",
      points: [
        "Delivery end-to-end dari perencanaan hingga rilis",
        "Koordinasi lintas fungsi: Engineering, Security, Compliance, Legal, dan Business",
        "Koordinasi UAT dan kesiapan rilis",
      ],
    },
    {
      role: "Technical Product Manager",
      description:
        "Latar belakang backend engineering membuat diskusi teknis dengan engineer berjalan tanpa perlu penerjemah.",
      points: [
        "Pengalaman langsung dengan API, OAuth, dan arsitektur sistem",
        "Terbiasa dengan SQL dan tools API seperti Postman",
        "Pemahaman mendalam di domain autentikasi dan digital identity",
      ],
    },
  ],

  quickFacts: [
    { label: "Fokus domain", value: "Fintech, Digital Identity, Authentication, User Management" },
    { label: "Latar belakang", value: "Backend Engineering → Product Manager" },
    { label: "Pendidikan", value: "Politeknik Negeri Bandung — Teknik Konversi Energi (2015–2019)" },
    { label: "Minat", value: "Product Manager, Project Manager, Technical PM, SaaS, Fintech, Platform Products" },
  ],

  experience: [
    {
      role: "Product Manager",
      company: "PRIVY",
      period: "Februari 2024 – Desember 2025",
      summary:
        "Memiliki dan mengelola produk-produk inti platform: User Management, Authentication, Transaction Systems, dan Digital Identity.",
      responsibilities: [
        "Memimpin pengembangan produk end-to-end: discovery, requirement gathering, prioritization, development, testing, hingga release.",
        "Mengelola produk autentikasi: Login, Registration, Forgot Password, OTP Verification, dan sistem autentikasi berbasis OAuth.",
        "Menyusun product requirements, user story, acceptance criteria, dan spesifikasi fungsional.",
        "Berkolaborasi dengan tim Engineering, Security, Compliance, Legal, dan Business untuk memastikan keselarasan dan keberhasilan delivery produk.",
        "Mengoordinasikan proses UAT dan aktivitas release readiness.",
        "Menentukan metrik keberhasilan produk dan meningkatkan performa produk secara berkelanjutan lewat feedback stakeholder dan analisis data.",
        "Menjadi jembatan utama antara tim bisnis dan tim teknis.",
      ],
      achievements: [
        "Berhasil mengantarkan inisiatif Digital Identity yang mendukung kebutuhan regulasi dan compliance.",
        "Meningkatkan pengalaman autentikasi dan user management lewat berbagai product enhancement.",
        "Memimpin kolaborasi lintas fungsi antara Engineering, Security, Compliance, dan Legal.",
      ],
    },
    {
      role: "Backend Engineer",
      company: "PRIVY",
      period: "Januari 2022 – Januari 2024",
      summary:
        "Mengembangkan dan memelihara backend service yang mendukung produk autentikasi, identity, dan user management.",
      responsibilities: [
        "Mengembangkan dan memelihara backend service untuk produk OAuth: User Registration, User Profile, serta Authentication & Authorization.",
        "Membantu tim produk merancang dan mengimplementasikan alur autentikasi yang aman.",
        "Membangun dan memelihara API untuk layanan user dan identity.",
        "Berkolaborasi dengan Product Manager untuk menerjemahkan kebutuhan bisnis menjadi solusi teknis.",
        "Membangun pemahaman kuat soal arsitektur sistem, alur data, dan best practice keamanan — yang kemudian mendukung transisi ke peran Product Manager.",
      ],
      achievements: [
        "Berkontribusi pada pengembangan sistem autentikasi berbasis OAuth.",
        "Membangun dan memelihara layanan identity kritikal yang dipakai di banyak produk.",
        "Memperkuat keahlian di arsitektur sistem, API design, dan pengembangan aplikasi yang aman.",
      ],
    },
  ],

  projects: [
    {
      title: "Digital Identity Platform",
      tag: "Fintech · Compliance",
      points: [
        "Memimpin pengembangan produk fitur Digital Identity.",
        "Mengoordinasikan tim lintas fungsi: Product, Engineering, Security, Compliance, dan Legal.",
        "Mengelola definisi requirement, roadmap planning, UAT, dan aktivitas release.",
        "Mendukung inisiatif digital identity dan data-sharing framework yang aman.",
      ],
    },
    {
      title: "Authentication & OAuth Platform",
      tag: "Security · UX",
      points: [
        "Mengelola produk Login, Registration, Forgot Password, OTP, dan OAuth.",
        "Meningkatkan alur autentikasi dan pengalaman pengguna.",
        "Bekerja erat dengan tim engineering untuk memastikan keamanan dan skalabilitas.",
      ],
    },
  ],

  skills: [
    {
      category: "Product Management",
      items: [
        "Product Strategy",
        "Product Roadmap",
        "Product Discovery",
        "Product Requirements Document (PRD)",
        "User Story & Acceptance Criteria",
        "Stakeholder Management",
        "Agile / Scrum",
        "User Acceptance Testing (UAT)",
      ],
    },
    {
      category: "Technical",
      items: ["API Products", "OAuth", "Authentication & Authorization", "Digital Identity", "SQL"],
    },
    {
      category: "Tools",
      items: ["Jira", "Confluence", "Notion", "Figma", "Postman"],
    },
  ],
};
