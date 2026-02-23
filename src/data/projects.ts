export const projects = [
  {
    id: "remote-collab-platform",
    slug: "remote-collab-platform",
    title: "Project One",
    tagline: "Remote collaboration workspace focused on speed and clarity",
    description:
      "A modern collaboration platform with real-time updates, message threads, and team dashboards for distributed teams.",
    heroImage: "/projects/project1.png",
    categories: ["React", "TypeScript", "Node.js"],
    liveUrl: "https://example.com/project-one",
    repoUrl: "https://github.com/example/project-one",
    problem:
      "Remote teams struggled with fragmented communication across multiple tools, causing delays and duplicate work.",
    solution:
      "Built a single workspace with structured channels, instant notifications, and responsive dashboards optimized for low-latency interactions.",
    features: [
      "Real-time status updates",
      "Collaborative task boards",
      "Team-specific notification controls",
      "Role-based permissions",
      "Fast searchable activity timeline",
    ],
    techStack: [
      { name: "React", icon: "⚛️" },
      { name: "TypeScript", icon: "TS" },
      { name: "Node.js", icon: "🟢" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "WebSockets", icon: "🔌" },
    ],
    results:
      "Improved team response time by 37% and reduced context switching by consolidating daily work into one interface.",
  },
  {
    id: "mobile-reminder-suite",
    slug: "mobile-reminder-suite",
    title: "Project Two",
    tagline: "Mobile reminder product for personal scheduling and routine planning",
    description:
      "A mobile-first reminder experience with smart recurring schedules, real-time alerts, and clean task organization.",
    heroImage: "/projects/project2.png",
    categories: ["React", "Express", "MongoDB"],
    liveUrl: "https://example.com/project-two",
    repoUrl: "https://github.com/example/project-two",
    problem:
      "Users needed a lightweight reminder app that stayed reliable under poor connectivity and frequent context changes.",
    solution:
      "Implemented an offline-friendly architecture with fast sync reconciliation and an interface optimized for one-handed interaction.",
    features: [
      "Recurring reminder engine",
      "Offline mode with sync recovery",
      "Context-aware push notifications",
      "Calendar and list views",
      "Usage insights dashboard",
    ],
    techStack: [
      { name: "React", icon: "⚛️" },
      { name: "Express", icon: "🚂" },
      { name: "MongoDB", icon: "🍃" },
      { name: "Cloud Functions", icon: "☁️" },
      { name: "Push API", icon: "📲" },
    ],
    results:
      "Cut missed reminder rates by 42% and increased weekly active usage through faster interactions and better notification timing.",
  },
  {
    id: "food-delivery-campaign",
    slug: "food-delivery-campaign",
    title: "Project Three",
    tagline: "Conversion-focused food ordering experience and campaign landing",
    description:
      "A marketing + ordering flow built for quick menu discovery, promotion tracking, and higher mobile conversion rates.",
    heroImage: "/projects/project3.png",
    categories: ["Next.js", "Tailwind", "Stripe"],
    liveUrl: "https://example.com/project-three",
    repoUrl: "https://github.com/example/project-three",
    problem:
      "High cart abandonment was driven by slow pages and unclear promotion visibility during checkout.",
    solution:
      "Redesigned the funnel with performance budgets, stronger offer placement, and fewer checkout steps to reduce friction.",
    features: [
      "Fast category browsing",
      "Promotion-aware checkout",
      "A/B tested call-to-action variants",
      "Real-time order tracking",
      "Admin campaign controls",
    ],
    techStack: [
      { name: "Next.js", icon: "N" },
      { name: "Tailwind", icon: "🎨" },
      { name: "Stripe", icon: "💳" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "Vercel", icon: "▲" },
    ],
    results:
      "Reduced median page load to 1.1s and improved checkout completion by 29% over the previous release.",
  },
];
