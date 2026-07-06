// English portfolio content, based directly on Ahmad Luthfi's CV.

export const profileEn = {
  summary:
    "Product Manager with a strong background in Backend Engineering, experienced in leading authentication, OAuth, Digital Identity, and transaction-related products within a regulated fintech environment. Skilled in managing the end-to-end product lifecycle — from discovery, requirement gathering, and roadmap planning to stakeholder management, UAT, and delivery — while bridging business needs and technical implementation across Engineering, Compliance, Security, and Legal teams.",

  stats: [
    { value: "4+", label: "Years in Tech & Product" },
    { value: "2", label: "Years as Product Manager" },
    { value: "5", label: "Cross-functional Stakeholder Groups" },
  ],

  strengths: [
    {
      role: "Product Manager",
      description:
        "Owns the product lifecycle end-to-end — from discovery and requirements to roadmap planning and measurable outcomes.",
      points: [
        "Product strategy, roadmap, and discovery",
        "PRD, user stories & acceptance criteria",
        "Data-informed decisions from stakeholder feedback",
      ],
    },
    {
      role: "Project Manager",
      description:
        "Coordinates delivery across teams and keeps releases on track inside a regulated, high-stakes environment.",
      points: [
        "End-to-end delivery from planning to release",
        "Cross-functional coordination across Engineering, Security, Compliance, Legal, and Business",
        "UAT coordination and release readiness",
      ],
    },
    {
      role: "Technical Product Manager",
      description:
        "A backend engineering background means technical conversations with engineers happen without a translator.",
      points: [
        "Hands-on experience with APIs, OAuth, and system architecture",
        "Comfortable with SQL and API tooling like Postman",
        "Deep fluency in authentication and digital identity domains",
      ],
    },
  ],

  quickFacts: [
    { label: "Focus areas", value: "Fintech, Digital Identity, Authentication, User Management" },
    { label: "Background", value: "Backend Engineering → Product Manager" },
    { label: "Education", value: "Politeknik Negeri Bandung — Energy Conversion Engineering (2015–2019)" },
    { label: "Interests", value: "Product Manager, Project Manager, Technical PM, SaaS, Fintech, Platform Products" },
  ],

  experience: [
    {
      role: "Product Manager",
      company: "PRIVY",
      period: "February 2024 – December 2025",
      summary:
        "Owned and managed core platform products including User Management, Authentication, Transaction Systems, and Digital Identity.",
      responsibilities: [
        "Led end-to-end product development from discovery, requirement gathering, prioritization, development, testing, and release.",
        "Managed authentication products including Login, Registration, Forgot Password, OTP Verification, and OAuth-based authentication systems.",
        "Defined product requirements, user stories, acceptance criteria, and functional specifications.",
        "Collaborated with Engineering, Security, Compliance, Legal, and Business teams to ensure product alignment and successful delivery.",
        "Coordinated UAT processes and release readiness activities.",
        "Defined product success metrics and continuously improved product performance through stakeholder feedback and data analysis.",
        "Acted as the primary bridge between business and technical teams.",
      ],
      achievements: [
        "Successfully delivered Digital Identity initiatives supporting regulatory and compliance requirements.",
        "Improved authentication and user management experiences through multiple product enhancements.",
        "Led cross-functional collaboration across Engineering, Security, Compliance, and Legal teams.",
      ],
    },
    {
      role: "Backend Engineer",
      company: "PRIVY",
      period: "January 2022 – January 2024",
      summary:
        "Developed and maintained backend services supporting authentication, identity, and user management products.",
      responsibilities: [
        "Developed and maintained backend services supporting OAuth products, including User Registration, User Profile, and Authentication & Authorization.",
        "Assisted product teams in designing and implementing secure authentication flows.",
        "Built and maintained APIs for user and identity-related services.",
        "Collaborated with Product Managers to translate business requirements into technical solutions.",
        "Gained strong understanding of system architecture, data flow, and security best practices, which later supported the transition to Product Manager role.",
      ],
      achievements: [
        "Contributed to the development of OAuth-based authentication systems.",
        "Built and maintained critical identity-related services used across multiple products.",
        "Strengthened expertise in system architecture, API design, and secure application development.",
      ],
    },
  ],

  projects: [
    {
      title: "Digital Identity Platform",
      tag: "Fintech · Compliance",
      points: [
        "Led product development of Digital Identity features.",
        "Coordinated cross-functional teams across Product, Engineering, Security, Compliance, and Legal.",
        "Managed requirement definition, roadmap planning, UAT, and release activities.",
        "Supported initiatives related to secure digital identity and data-sharing frameworks.",
      ],
    },
    {
      title: "Authentication & OAuth Platform",
      tag: "Security · UX",
      points: [
        "Managed Login, Registration, Forgot Password, OTP, and OAuth-related products.",
        "Improved authentication flow and user experience.",
        "Worked closely with engineering teams to ensure security and scalability.",
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
