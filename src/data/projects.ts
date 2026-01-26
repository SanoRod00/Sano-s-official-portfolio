export const projects = [
    {
        id: "finance-dashboard",
        slug: "finance-dashboard",
        title: "FinTech Analytics Dashboard",
        tagline: "Real-time financial data visualization for enterprise clients",
        description: "A comprehensive dashboard for monitoring financial markets, tracking portfolio performance, and analyzing trends with real-time data updates.",
        heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        categories: ["React", "D3.js", "TypeScript"],
        liveUrl: "#",
        repoUrl: "#",
        problem: "Enterprise clients needed a way to visualize complex financial datasets in real-time without performance degradation. Existing solutions were slow and difficult to customize.",
        solution: "Built a high-performance React application using D3.js for custom visualizations. Implemented WebSocket connections for sub-second data updates and web workers for heavy data processing off the main thread.",
        features: [
            "Real-time WebSocket data streaming",
            "Custom interactive charts with D3.js",
            "User-configurable dashboard layouts",
            "Dark/Light mode support",
            "Exportable reports (PDF/CSV)"
        ],
        techStack: [
            { name: "React", icon: "⚛️" },
            { name: "TypeScript", icon: "TS" },
            { name: "D3.js", icon: "📊" },
            { name: "Node.js", icon: "🟢" },
            { name: "WebSockets", icon: "🔌" }
        ],
        results: "Reduced data loading time by 60% and increased user engagement by 40%. Scaled to handle 50,000+ simultaneous connections."
    },
    {
        id: "ecommerce-platform",
        slug: "ecommerce-platform",
        title: "Modern E-Commerce Engine",
        tagline: "Headless e-commerce solution built for speed and conversion",
        description: "A headless e-commerce storefront designed for maximum performance, featuring server-side rendering and a seamless checkout experience.",
        heroImage: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2089&auto=format&fit=crop",
        categories: ["Next.js", "Stripe", "Tailwind"],
        liveUrl: "#",
        repoUrl: "#",
        problem: "The client's legacy monolithic platform was suffering from slow page loads (3s+) and poor mobile experience, leading to high cart abandonment rates.",
        solution: "Migrated to a modern headless architecture using Next.js. Implemented ISR (Incremental Static Regeneration) for instant product pages and optimized image delivery.",
        features: [
            "Server-side rendering for SEO",
            "Integrated Stripe Payment intent",
            "Optimized cart state management",
            "Mobile-first responsive design",
            "CMS integration for product management"
        ],
        techStack: [
            { name: "Next.js", icon: "N" },
            { name: "Tailwind CSS", icon: "🎨" },
            { name: "Stripe API", icon: "💳" },
            { name: "Zustand", icon: "🐻" },
            { name: "Vercel", icon: "▲" }
        ],
        results: "Page load speed improved to 0.8s. Mobile conversion rate increased by 25% in the first month after launch."
    },
    {
        id: "ai-content-generator",
        slug: "ai-content-generator",
        title: "AI Content Studio",
        tagline: "Generative AI tool for marketing teams",
        description: "An intuitive interface for marketing teams to generate, edit, and schedule social media content using large language models.",
        heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
        categories: ["OpenAI", "React", "Node.js"],
        liveUrl: "#",
        repoUrl: "#",
        problem: "Marketing teams were spending too much time brainstorming and drafting initial copy. They needed a tool to accelerate the creative process.",
        solution: "Developed a wrapper application around OpenAI's API with custom prompt engineering templates tailored for marketing use cases. Added a collaborative workspace for team editing.",
        features: [
            "Custom prompt templates",
            "Multi-user real-time editing",
            "Social media platform integration",
            "History versioning",
            "Token usage analytics"
        ],
        techStack: [
            { name: "React", icon: "⚛️" },
            { name: "OpenAI API", icon: "🤖" },
            { name: "Express", icon: "🚂" },
            { name: "MongoDB", icon: "🍃" },
            { name: "Socket.io", icon: "🔌" }
        ],
        results: "Adoption by 5 internal teams, saving an estimated 20 hours per week per team on content drafting."
    }
];
