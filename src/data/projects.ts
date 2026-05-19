export const projects = [
  {
    id: "polyvoice",
    slug: "polyvoice",
    title: "PolyVoice",
    hackathonLabel: "2026 CodeXtreme Hackathon — Submitted as Bridgely",
    hackathonUrl: "https://codextreme26.devpost.com/",
    statusBadge: "In Development",
    role: "Product Lead & Co-Founder / Pitch",
    tagline: "Bridging Deaf, Blind, and hearing users through real-time AI communication",
    description:
      "PolyVoice (submitted as Bridgely) is a Flutter mobile app that eliminates communication barriers between Deaf, Blind, and hearing users via real-time speech-to-text, AI-powered sign language recognition, and WebRTC video calling — built at the 2026 CodeXtreme Ingenious Hackathon Season 1.",
    heroImage: "/projects/polyvoice.png",
    categories: ["Flutter", "AI", "Mobile"],
    liveUrl: "https://devpost.com/software/bridegly",
    repoUrl: "https://github.com/nshizirunguwilson/poly-voice",
    devpostUrl: "https://devpost.com/software/bridegly",
    problem:
      "Deaf, Blind, and hearing individuals cannot communicate in real time without a human interpreter — an expensive, inaccessible, and unscalable dependency that excludes millions from everyday conversations.",
    solution:
      "A role-adaptive mobile app that acts as a live translation bridge: hearing users' speech converts to live captions for Deaf participants, while Deaf users' sign language is captured by camera and translated to text-to-speech for others — all in a single WebRTC video call, no interpreter needed.",
    features: [
      "Role-adaptive UI for Deaf, Blind, and hearing users",
      "AI sign language recognition via Google ML Kit + MediaPipe",
      "Real-time speech-to-text and text-to-speech",
      "Production-grade WebRTC video calling via Twilio",
      "Quick phrase buttons as communication fallback",
      "User contact management and online status tracking",
      "JWT + bcrypt authentication with SQLite persistence",
    ],
    techStack: [
      { name: "Flutter (Dart)", icon: "💙" },
      { name: "Node.js + Express", icon: "🟢" },
      { name: "Twilio Video (WebRTC)", icon: "📹" },
      { name: "Google ML Kit", icon: "🤖" },
      { name: "MediaPipe", icon: "✋" },
      { name: "SQLite", icon: "🗄️" },
      { name: "JWT + bcrypt", icon: "🔐" },
    ],
    results:
      "Successfully submitted at the 2026 CodeXtreme Ingenious Hackathon Season 1 under the name Bridgely — still in active development with sign language model improvements and new language support shipping continuously.",
  },
  {
    id: "ambarafits",
    slug: "ambarafits",
    title: "Ambara Fits",
    tagline: "Premium fashion e-commerce with a Rwandan soul",
    description:
      "A modern online fashion store blending high-end contemporary clothing with Rwandan cultural aesthetics and craftsmanship.",
    heroImage: "/projects/ambarafits.png",
    categories: ["React", "TypeScript", "Tailwind"],
    liveUrl: "https://ambarafits.vercel.app/",
    repoUrl: "https://github.com/SanoRod00/Ambarafits",
    problem:
      "Local fashion brands lack polished digital storefronts that reflect their cultural identity while meeting modern UX standards.",
    solution:
      "A performant, visually rich e-commerce experience that celebrates Rwandan heritage through design — animated interactions, dark/light mode, and mobile-first layouts.",
    features: [
      "Animated typing hero effect",
      "Product like / wishlist with live counts",
      "Responsive dark & light mode",
      "Mobile-first layout",
      "Fast Vite + React performance",
    ],
    techStack: [
      { name: "React", icon: "⚛️" },
      { name: "TypeScript", icon: "TS" },
      { name: "Tailwind CSS", icon: "🎨" },
      { name: "Framer Motion", icon: "🎞️" },
      { name: "Vite", icon: "⚡" },
    ],
    results:
      "Fully deployed on Vercel — showcasing cultural fashion with a modern, production-ready storefront.",
  },
  {
    id: "phishguard",
    slug: "phishguard",
    title: "PhishGuard",
    tagline: "Production-grade email security analyzer with full auth stack",
    description:
      "A protected email-review workspace for analyzing suspicious URLs and sender addresses, backed by a production-style authentication layer with JWT, rotating refresh tokens, CSRF protection, and email verification flows.",
    heroImage: "/projects/phishguard.png",
    categories: ["Node.js", "Express", "PostgreSQL"],
    liveUrl: "https://phishguard-ql8z.onrender.com",
    repoUrl: "https://github.com/SanoRod00/PhishGuard---Email-Security-Analyzer",
    problem:
      "Users receiving suspicious emails have no quick, secure way to analyze URLs and sender addresses without exposing themselves to risk or relying on fragmented tools.",
    solution:
      "A sandboxed workspace where users can safely review and analyze phishing indicators, protected by enterprise-grade auth — JWT access tokens, rotating refresh tokens in httpOnly cookies, CSRF protection, rate limiting, and email-based verification and reset flows.",
    features: [
      "Suspicious URL and sender address analysis",
      "JWT access tokens with rotating refresh tokens",
      "httpOnly cookies for secure token storage",
      "CSRF protection and rate limiting",
      "Email-based verification and password reset flows",
      "PostgreSQL-backed user and session management",
    ],
    techStack: [
      { name: "Node.js", icon: "🟢" },
      { name: "Express", icon: "🚂" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "JWT", icon: "🔐" },
    ],
    results:
      "Deployed on Render with a full production-style auth system — demonstrating secure backend architecture and real-world security engineering practices.",
  },
  {
    id: "budgetbuddy",
    slug: "budgetbuddy",
    title: "BudgetBuddy",
    tagline: "Personal finance management built for ALU students",
    description:
      "A specialized web application designed to help ALU students manage personal finances — tracking expenses, analyzing spending habits, and staying within monthly budget constraints.",
    heroImage: "/projects/budgetbuddy.png",
    categories: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://sanorod00.github.io/Sano_Rodrigue_Summative-Assignment---Building-Responsive-UI/",
    repoUrl: "https://github.com/SanoRod00/Sano_Rodrigue_Summative-Assignment---Building-Responsive-UI",
    demoUrl: "https://www.loom.com/share/7d128b94fd2c49faaa14568742b7be68",
    problem:
      "ALU students face unique financial challenges with limited tools that understand their context — leading to poor spending habits and budget overruns during the academic term.",
    solution:
      "A responsive, data-driven budgeting interface tailored to student life — enabling expense tracking, visual spending breakdowns, and monthly budget enforcement to build lasting financial discipline.",
    features: [
      "Expense tracking with category breakdown",
      "Monthly budget limit enforcement",
      "Spending habit analysis and insights",
      "Responsive design for mobile and desktop",
      "Intuitive, accessible UI for financial literacy",
    ],
    techStack: [
      { name: "HTML", icon: "🌐" },
      { name: "CSS", icon: "🎨" },
      { name: "JavaScript", icon: "JS" },
    ],
    results:
      "Deployed as a summative project — a fully functional budgeting tool that demonstrates responsive UI skills and real-world application design for student financial management.",
  },
];
