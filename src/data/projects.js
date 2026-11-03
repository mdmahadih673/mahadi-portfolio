export const projectsData = [
  {
    id: "booknook",
    number: "01",
    title: "BookNook",
    tagline: "A Community Library for Discovering, Sharing & Borrowing Books",
    category: "Full-Stack Library Platform",
    year: "2026",
    image: "/images/project-booknook.png",
    overview: "BookNook is an online library where readers can browse and sort books, borrow available copies for 14 days, and manage the books they contribute. Members can sign in with email and social providers, maintain a profile, and upload book covers.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Better Auth", "Express.js", "MongoDB", "ImgBB"],
    features: [
      "Browse, search, and sort a shared collection by title, availability, or newest first",
      "Register or sign in with email/password, Google, or GitHub",
      "Add, edit, and delete books, including uploaded cover images",
      "Borrow available copies for 14 days and return them from a personal borrow list",
      "Manage a profile with an editable name and uploaded profile photo",
      "Responsive pages with loading states and a custom not-found page"
    ],
    challenges: [
      "Connecting Better Auth identity on the frontend with JWT-protected Express API requests",
      "Keeping book ownership and borrow/return actions scoped to the authenticated member",
      "Handling book-copy availability and borrow records consistently with MongoDB",
      "Supporting book-cover and profile-photo uploads through ImgBB"
    ],
    futurePlans: [
      "Add automated tests for authentication, book management, and borrow/return flows",
      "Improve discovery with richer filters, pagination, and saved-book lists",
      "Add borrowing reminders and clearer due-date status for readers"
    ],
    github: "https://github.com/mdmahadih673/BookNook-frontend",
    backendGithub: "https://github.com/mdmahadih673/BookNook-backend",
    live: "https://book-nook-frontend-two.vercel.app/",
    layoutVariant: "editorial-left"
  },
  {
    id: "bangla-news-24",
    number: "02",
    title: "Bangla News 24",
    tagline: "Real-Time Digital Journalism & News Aggregator",
    category: "Full-Stack Media Portal",
    year: "2026",
    image: "/images/project-banglanews-real.png",
    overview: "A modern digital journalism portal engineered for rapid content delivery and breaking news reporting. Powered by Next.js, featuring live breaking news tickers (সর্বশেষ সংবাদ), dynamic multi-category routing (রাজনীতি, বিশ্ব, অর্থনীতি, প্রযুক্তি), top-read rankings, and responsive Bengali typography.",
    technologies: ["Next.js", "React", "Tailwind CSS", "REST API", "Vercel"],
    features: [
      "Live breaking news marquee ticker with real-time timestamp synchronization",
      "Dynamic multi-category routing and dedicated editorial column layouts",
      "Most-read ranking system (সর্বাধিক পঠিত) and clean article viewer",
      "Fully responsive mobile-first typography optimized for high readability"
    ],
    challenges: [
      "Organizing many Bengali news categories and article layouts while keeping navigation easy to follow",
      "Making the editorial typography readable across desktop and smaller mobile screens",
      "Presenting breaking-news and timestamp elements clearly without overwhelming the page"
    ],
    futurePlans: [
      "Connect the interface to a managed news API or editorial CMS for regularly updated stories",
      "Add article search, bookmarks, and richer reading preferences",
      "Improve accessibility and performance with ongoing real-device testing"
    ],
    github: "https://github.com/mdmahadih673/bangla-news-24",
    live: "https://bangla-news-24-rho.vercel.app/",
    layoutVariant: "editorial-left"
  },
  {
    id: "bazar-dor",
    number: "03",
    title: "Bazar Dor (বাজার দর)",
    tagline: "Daily Commodity Price Tracker & Market Analytics",
    category: "Full-Stack Web Application",
    year: "2026",
    image: "/images/project-bazardor-real.png",
    overview: "A specialized Bengali web platform that tracks daily grocery and essential commodity market rates (চাল, ডাল, তেল, সবজি, মাছ, মাংস). Provides transparent market analytics, price change indicators with percentage tags (আজ দাম বেড়েছে/কমেছে), and itemized search to empower consumers.",
    technologies: ["Next.js", "React", "Tailwind CSS", "State Management", "Vercel"],
    features: [
      "Dynamic category filtering for essential groceries and daily staples",
      "Live price fluctuation badges displaying percentage increases and drops",
      "Itemized search and market-based min/max rate comparisons",
      "Fast client-side state handling and accessible responsive grid design"
    ],
    challenges: [
      "Presenting changing commodity prices in a way that is easy to compare at a glance",
      "Designing useful category filters and search for a broad range of Bengali grocery items",
      "Keeping price and percentage-change indicators understandable on narrow screens"
    ],
    futurePlans: [
      "Add a trusted data-entry workflow and historical price charts",
      "Show market and location-specific price comparisons with clear data timestamps",
      "Add saved items and alerts for selected price changes"
    ],
    github: "https://github.com/mdmahadih673/assignment-7",
    live: "https://assignment-7-flw1.vercel.app/",
    layoutVariant: "editorial-right"
  },
  {
    id: "fitlog",
    number: "04",
    title: "FitLog",
    tagline: "Minimalist Workout Companion & Routine Planner",
    category: "Interactive Fitness Application",
    year: "2026",
    image: "/images/project-fitlog-real.png",
    overview: "A dark-themed gym companion and workout planner designed for athletes and lifters. Features an illustrated exercise library covering 12 major lifts, custom routine building, and interactive workout set tracking.",
    technologies: ["React", "JavaScript (ES6+)", "Tailwind CSS", "State Management", "Vercel"],
    features: [
      "Curated exercise library covering 12 major lifts across all muscle groups",
      "Interactive workout planner with real-time set tracking and saved routines",
      "High-contrast dark gym UI with responsive card layouts and fluid animations",
      "Active routine counter, plan builder, and fast client-side state persistence"
    ],
    challenges: [
      "Making exercise selection and workout planning simple to use during a training session",
      "Keeping set tracking and routine state consistent as users interact with the planner",
      "Balancing a high-contrast dark visual style with clear, readable controls"
    ],
    futurePlans: [
      "Add user accounts and cloud-synced workout history",
      "Let users create custom exercises and review progress over time",
      "Improve routine sharing and accessibility for keyboard and assistive-technology users"
    ],
    github: "https://github.com/mdmahadih673/assienment-6",
    live: "https://assienment-6.vercel.app/",
    layoutVariant: "editorial-full"
  }
];
