export const projects = [
  {
    id: "colabsync",
    slug: "colabsync",
    title: "ColabSync",
    tagline: "Real-time team collaboration workspace",
    description:
      "Collaboration platform with live updates, threads, and team dashboards.",
    heroImage: "/projects/project1.png",
    categories: ["React", "TypeScript", "Node.js"],
    liveUrl: "https://example.com/colabsync",
    repoUrl: "https://github.com/sanorod/colabsync",
    problem:
      "Fragmented tools caused delays and duplicate work for remote teams.",
    solution:
      "Unified workspace with structured channels, instant notifications, and low-latency dashboards.",
    features: [
      "Real-time updates",
      "Task boards",
      "Custom notifications",
      "Role-based access",
      "Searchable timeline",
    ],
    techStack: [
      { name: "React", icon: "⚛️" },
      { name: "TypeScript", icon: "TS" },
      { name: "Node.js", icon: "🟢" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "WebSockets", icon: "🔌" },
    ],
    results:
      "37% faster response time, reduced context switching across teams.",
  },
  {
    id: "remindme",
    slug: "remindme",
    title: "RemindMe",
    tagline: "Mobile-first smart reminder app",
    description:
      "Recurring schedules, real-time alerts, and offline-ready task management.",
    heroImage: "/projects/project2.png",
    categories: ["React", "Express", "MongoDB"],
    liveUrl: "https://example.com/remindme",
    repoUrl: "https://github.com/sanorod/remindme",
    problem:
      "Existing reminder apps broke under poor connectivity.",
    solution:
      "Offline-first architecture with fast sync and one-handed UI.",
    features: [
      "Recurring reminders",
      "Offline sync",
      "Smart push alerts",
      "Calendar + list views",
      "Usage insights",
    ],
    techStack: [
      { name: "React", icon: "⚛️" },
      { name: "Express", icon: "🚂" },
      { name: "MongoDB", icon: "🍃" },
      { name: "Cloud Functions", icon: "☁️" },
      { name: "Push API", icon: "📲" },
    ],
    results:
      "42% fewer missed reminders, higher weekly active usage.",
  },
  {
    id: "foodrush",
    slug: "foodrush",
    title: "FoodRush",
    tagline: "High-conversion food ordering flow",
    description:
      "Fast menu discovery, promo tracking, and optimized mobile checkout.",
    heroImage: "/projects/project3.png",
    categories: ["Next.js", "Tailwind", "Stripe"],
    liveUrl: "https://example.com/foodrush",
    repoUrl: "https://github.com/sanorod/foodrush",
    problem:
      "Slow pages and hidden promos caused high cart abandonment.",
    solution:
      "Performance-first redesign with fewer checkout steps and better offer placement.",
    features: [
      "Fast browsing",
      "Promo-aware checkout",
      "A/B tested CTAs",
      "Live order tracking",
      "Admin controls",
    ],
    techStack: [
      { name: "Next.js", icon: "N" },
      { name: "Tailwind", icon: "🎨" },
      { name: "Stripe", icon: "💳" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "Vercel", icon: "▲" },
    ],
    results:
      "1.1s page load, 29% better checkout completion.",
  },
  {
    id: "budgetbuddy",
    slug: "budgetbuddy",
    title: "BudgetBuddy",
    tagline: "Personal finance tracker with visual insights",
    description:
      "Interactive charts, smart category tagging, and savings goal tracking.",
    heroImage: "/projects/project4.png",
    categories: ["React", "Tailwind", "Chart.js"],
    liveUrl: "https://example.com/budgetbuddy",
    repoUrl: "https://github.com/sanorod/budgetbuddy",
    problem:
      "Hard to visualize spending or set actionable savings goals.",
    solution:
      "Intuitive dashboard with auto-categorization and progress-based goal tracking.",
    features: [
      "Spending charts",
      "Drag & drop tags",
      "Recurring detection",
      "Goal tracker",
      "Monthly reports",
    ],
    techStack: [
      { name: "React", icon: "⚛️" },
      { name: "Tailwind", icon: "🎨" },
      { name: "Chart.js", icon: "📊" },
      { name: "Node.js", icon: "🟢" },
      { name: "LocalStorage", icon: "💾" },
    ],
    results:
      "35% better budget awareness, avg. 3 goals reached in 2 months.",
  },
];
