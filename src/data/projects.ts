export const projects = [
  {
    id: "polyvoice",
    slug: "polyvoice",
    title: "PolyVoice",
    hackathonLabel: "2026 CodeXtreme Hackathon, submitted as Bridgely",
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
      "A workspace where you can safely check suspicious emails and URLs. It has a full auth system — login, email verification, password reset, rate limiting, and CSRF protection — all production-ready.",
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
    id: "beatsapp",
    slug: "beatsapp",
    title: "ORISHA",
    tagline: "Africa's beat marketplace for producers, artists, and freestylers",
    description:
      "A full-stack marketplace where African music producers sell beats and artists buy them — with automatic licensing, mobile money payments, crypto (USDC/USDT), ACRCloud copyright protection, and in-browser vocal recording for freestylers.",
    heroImage: "/projects/beatsapp.png",
    categories: ["React", "Node.js", "PostgreSQL"],
    repoUrl: "https://github.com/SanoRod00/Beats-App",
    problem:
      "African producers sell beats through informal channels — WhatsApp, DMs, cash handoffs — with no contracts, no copyright protection, and no reliable payment infrastructure. Artists have no trusted place to discover and license beats legally.",
    solution:
      "A marketplace platform that handles everything: producers upload beats, set three-tier licensing prices, and get paid instantly via card, mobile money (MTN, Airtel), or stablecoin. ACRCloud fingerprints every beat for copyright protection, and PDF licenses are generated automatically on purchase.",
    features: [
      "Three-tier licensing system with custom pricing per beat",
      "ACRCloud beat fingerprinting for copyright monitoring",
      "Payments via Stripe, Flutterwave (mobile money), and Coinbase Commerce (crypto)",
      "Watermarked preview downloads before purchase",
      "Revenue splitting for collaborative producer tracks",
      "In-browser vocal recording for freestylers",
      "Weekly battle competitions with crypto prize payouts",
      "Available in English, French, Portuguese, and Swahili",
    ],
    techStack: [
      { name: "React 18 + Vite", icon: "⚛️" },
      { name: "Node.js + Express", icon: "🟢" },
      { name: "PostgreSQL + Prisma", icon: "🐘" },
      { name: "Tailwind CSS + Framer Motion", icon: "🎨" },
      { name: "Zustand", icon: "🗂️" },
      { name: "Stripe + Flutterwave + Coinbase", icon: "💳" },
      { name: "ACRCloud (audio fingerprinting)", icon: "🎵" },
      { name: "Cloudflare R2 + CDN", icon: "☁️" },
    ],
    results:
      "A production-ready marketplace built from scratch — covering payments, licensing, copyright protection, multi-language support, and real-time audio. Demonstrates full-stack depth across frontend, backend, payments, and media infrastructure.",
  },
  {
    id: "bestburger",
    slug: "bestburger",
    title: "BestBurger",
    tagline: "Mobile UI design for a food ordering app",
    description:
      "A complete mobile app UI for a burger restaurant — splash screen, home feed with category filters and ratings, product detail with spice and portion controls, and a full customization screen for toppings and sides. Designed in Figma.",
    heroImage: "/projects/bestburger.png",
    liveUrl: "https://www.figma.com/design/tk6OprbTiCc3Z4DCcTrKbi/BestBurger-UI-template?node-id=0-1&t=zGPUwiPS3N4rxNhm-1",
    liveLabel: "View in Figma",
    categories: ["Figma", "UI/UX", "Mobile"],
    screenshots: [
      "/projects/bestburger-1.png",
      "/projects/bestburger-2.png",
      "/projects/bestburger-3.png",
    ],
    problem:
      "Food ordering apps often feel cluttered — too many options on screen at once, hard to browse by category, and customization flows that lose users before they reach checkout.",
    solution:
      "A focused 4-screen mobile UI: a bold splash screen, a home feed with search and category filters, a product detail page with spice level and portion controls, and a customization screen for toppings and sides — all tied together with a consistent dark red brand palette.",
    features: [
      "Splash screen with brand identity and logo",
      "Home feed with search bar and category filters (All, Combos, Sliders)",
      "Product cards with star ratings and wishlist toggles",
      "Product detail page with spice level slider and portion counter",
      "Customization screen with toppings and side options",
      "Consistent dark red and white brand palette throughout",
    ],
    techStack: [
      { name: "Figma", icon: "🎨" },
    ],
    results:
      "A polished 4-screen mobile UI that demonstrates product thinking and visual design — from brand identity through to a complete ordering and customization flow.",
  },
  {
    id: "budgetbuddy",
    slug: "budgetbuddy",
    title: "BudgetBuddy",
    tagline: "Personal finance management built for ALU students",
    description:
      "A personal finance app built for ALU students. Track expenses by category, set a monthly budget, and see a breakdown of where your money actually went.",
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
