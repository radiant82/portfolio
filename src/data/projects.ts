export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  isFeatured: boolean;
  overview: string;
  features: string[];
  challenges: string;
  solution: string;
  gallery: string[];
  liveUrl?: string;
  githubUrl?: string;
  architecture?: string;
}

export const projects: Project[] = [
  {
    slug: "nexalytics-dashboard",
    title: "Nexalytics Dashboard",
    description:
      "A real-time analytics dashboard for SaaS companies to track revenue, user engagement, and growth metrics with interactive charts and data visualizations.",
    image: "/images/project-dashboard.png",
    tech: ["React", "TypeScript", "D3.js", "Node.js", "PostgreSQL", "Redis"],
    isFeatured: true,
    overview:
      "Nexalytics is a comprehensive analytics platform designed for SaaS businesses. It provides real-time insights into revenue performance, user demographics, subscription metrics, and conversion rates. The dashboard features interactive charts, customizable date ranges, and exportable reports.",
    features: [
      "Real-time data streaming with WebSocket connections",
      "Interactive D3.js charts with drill-down capabilities",
      "Custom date range filtering and comparison periods",
      "User cohort analysis and segmentation",
      "Automated PDF/CSV report generation",
      "Role-based access control with team collaboration",
      "Dark mode with fully responsive design",
      "Integration with Stripe, Google Analytics, and Mixpanel",
    ],
    challenges:
      "The main challenge was handling high-frequency data updates without degrading UI performance. With thousands of data points streaming per second, traditional React re-renders caused significant lag and memory issues.",
    solution:
      "I implemented a virtual scrolling system combined with Canvas-based rendering for the charts. Data was aggregated on the server side using Redis streams and only delta updates were sent to the client via WebSockets. React.memo and useMemo were used strategically to prevent unnecessary re-renders, resulting in a 60fps experience even with live data.",
    gallery: ["/images/project-dashboard.png"],
    liveUrl: "https://nexalytics-demo.vercel.app",
    githubUrl: "https://github.com/jayneel/nexalytics",
    architecture:
      "The architecture follows a microservices pattern with a Next.js frontend, Node.js API gateway, Redis for caching and pub/sub, and PostgreSQL for persistent storage. Data ingestion workers process events asynchronously using Bull queues.",
  },
  {
    slug: "spark-ecommerce",
    title: "Spark E-Commerce",
    description:
      "A full-featured e-commerce mobile-first application with product discovery, cart management, secure checkout, and order tracking capabilities.",
    image: "/images/project-ecommerce.png",
    tech: ["Next.js", "Tailwind CSS", "Stripe", "MongoDB", "Prisma", "Zustand"],
    isFeatured: true,
    overview:
      "Spark is a modern e-commerce platform built with a mobile-first approach. It features a curated shopping experience with advanced search, personalized recommendations, and a streamlined checkout process powered by Stripe. The platform supports multiple vendors and includes an admin panel for inventory management.",
    features: [
      "Mobile-first responsive design with gesture navigation",
      "AI-powered product recommendations",
      "Real-time inventory management with low-stock alerts",
      "Stripe integration for secure payments",
      "Order tracking with email notifications",
      "Wishlist and comparison features",
      "Multi-vendor support with seller dashboard",
      "Progressive Web App capabilities for offline browsing",
    ],
    challenges:
      "Building a performant product search with instant filtering across thousands of items while maintaining smooth animations on mobile devices was the key challenge.",
    solution:
      "I used a combination of Algolia for search indexing and React Query for client-side caching. Product images were served via a CDN with Next.js Image optimization. Skeleton screens and optimistic updates ensured the UI felt instant.",
    gallery: ["/images/project-ecommerce.png"],
    liveUrl: "https://spark-shop.vercel.app",
    githubUrl: "https://github.com/jayneel/spark-ecommerce",
  },
  {
    slug: "neva-ai-assistant",
    title: "Neva AI Assistant",
    description:
      "An intelligent conversational AI assistant that helps users with research, content creation, and data analysis through natural language interactions.",
    image: "/images/project-ai-chat.png",
    tech: ["Python", "FastAPI", "React", "OpenAI API", "LangChain", "Pinecone"],
    isFeatured: true,
    overview:
      "Neva is an AI-powered assistant that combines multiple language models with a custom knowledge base. It enables natural conversations for research, content creation, code generation, and data analysis. The system features conversation memory, document upload capabilities, and multi-modal interactions.",
    features: [
      "Multi-model AI support (GPT-4, Claude, Gemini)",
      "RAG-based knowledge retrieval with Pinecone vector DB",
      "Document upload and analysis (PDF, DOCX, CSV)",
      "Code generation with syntax highlighting",
      "Conversation history with search functionality",
      "Voice input and text-to-speech output",
      "Custom system prompts and personas",
      "API access for programmatic integration",
    ],
    challenges:
      "Managing conversation context across long sessions while keeping API costs manageable, and ensuring the RAG pipeline returned relevant chunks from large document collections.",
    solution:
      "I implemented a sliding window context manager that summarizes older messages and stores them in Pinecone. For RAG, I used a hybrid search combining dense embeddings with BM25 sparse retrieval, achieving 40% better relevance scores than pure vector search.",
    gallery: ["/images/project-ai-chat.png"],
    liveUrl: "https://neva-ai.vercel.app",
    githubUrl: "https://github.com/jayneel/neva-ai",
    architecture:
      "Frontend in React with WebSocket for streaming responses. Backend uses FastAPI with LangChain for LLM orchestration. Pinecone for vector storage, Redis for session management, and PostgreSQL for user data.",
  },
  {
    slug: "atlas-task-manager",
    title: "Atlas Task Manager",
    description:
      "A collaborative project management tool with Kanban boards, sprint planning, time tracking, and team performance analytics.",
    image: "/images/project-taskapp.png",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Socket.io", "Tailwind CSS"],
    isFeatured: false,
    overview:
      "Atlas is a comprehensive project management solution designed for agile teams. It features Kanban boards with real-time collaboration, sprint planning, burndown charts, and integrated time tracking. The platform supports team management with role-based permissions and performance analytics.",
    features: [
      "Drag-and-drop Kanban boards with real-time sync",
      "Sprint planning with story points and velocity tracking",
      "Built-in time tracking with weekly reports",
      "Team workload visualization and capacity planning",
      "Custom workflow automation with triggers",
      "Integration with GitHub, Slack, and Jira",
      "Burndown and velocity charts",
      "Mobile app with offline support",
    ],
    challenges:
      "Implementing real-time collaborative editing where multiple users could simultaneously modify the same board without data conflicts or lost updates.",
    solution:
      "I used Operational Transformation (OT) principles combined with Socket.io for real-time communication. Each board change is represented as an atomic operation that can be composed and transformed. A conflict resolution algorithm ensures consistency across all connected clients.",
    gallery: ["/images/project-taskapp.png"],
    githubUrl: "https://github.com/jayneel/atlas-tasks",
  },
  {
    slug: "developer-portfolio",
    title: "Developer Portfolio",
    description:
      "A modern, glassmorphism-styled portfolio website built with Next.js 14, featuring dynamic project showcases, a contact form, and smooth animations.",
    image: "/images/project-portfolio.png",
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion"],
    isFeatured: false,
    overview:
      "This portfolio website showcases my work and skills with a modern dark theme featuring glassmorphism effects, gradient accents, and smooth animations. Built with Next.js 14 App Router for optimal performance and SEO.",
    features: [
      "Glassmorphism design with gradient accents",
      "Responsive layout for all screen sizes",
      "Dynamic project detail pages with static generation",
      "Contact form with server-side API route",
      "Smooth page transitions and micro-animations",
      "SEO optimized with meta tags and semantic HTML",
      "Custom scrollbar and focus-visible styling",
      "Deployed on Netlify with @netlify/plugin-nextjs",
    ],
    challenges:
      "Creating a visually striking design that loads fast and scores high on Core Web Vitals, while using complex CSS effects like backdrop-filter and gradient animations.",
    solution:
      "Strategic use of CSS containment and will-change properties for animated elements. Images optimized with Next.js Image component. Critical CSS inlined and non-critical deferred. Achieved 95+ Lighthouse scores across all categories.",
    gallery: ["/images/project-portfolio.png"],
    githubUrl: "https://github.com/jayneel/portfolio",
  },
];

export const featuredProjects = projects.filter((p) => p.isFeatured);
