export interface Project {
  id: number;
  title: string;
  description: string;
  problem?: string;
  approach?: string;
  image: string;
  mobileImage?: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  websiteUrl?: string;
  rating?: number;
}

export const getProjectStatus = (project: Project): "Shipped" | "Under Dev" =>
  project.websiteUrl || project.demoUrl ? "Shipped" : "Under Dev";

export const getProjectLiveUrl = (project: Project) => project.websiteUrl || project.demoUrl;

const projectKinds: Record<string, string> = {
  "FLA Purchase": "Tailoring · E-commerce",
  "HARV DREAMS": "Streetwear · E-commerce",
  "Mizrmo Carpool": "Mobility · Platform",
  "Westlife Motors": "Automotive · Inventory",
  "Scentiva Aura": "Fragrance · Store",
  "PM Holdings": "Entertainment · Brand site",
  "Future-Link Services": "Training · Events",
  VisionSpa: "Wellness · Booking",
  "Kultural Kompass": "Podcast · Media",
  BrainBank: "Productivity · Tool",
  "Supreme Masqueraders Society Platform": "Community · Platform",
  "Artisans Hub": "Marketplace · AI",
  RealRate: "Real estate · ML",
  WeBarb: "Grooming · Booking",
  AgriLync: "Agritech · AI",
  SikaSoft: "Fintech · Suite",
};

export const getProjectKind = (project: Project) => projectKinds[project.title] ?? "Product";

const allProjects: Project[] = [
  {
    id: 11,
    title: "Westlife Motors",
    description:
      "Trusted automobile dealer from Takoradi — importing premium vehicles from America, Europe, Japan, and China for customers across Ghana and Côte d'Ivoire.",
    problem:
      "Buyers in West Africa struggle to find reliable, transparent access to quality imported vehicles with clear inventory and local support.",
    approach:
      "Built a full inventory and enquiry platform with vehicle listings, 360° views, and enquiry/buy flows so customers can browse and book viewings with confidence.",
    image: "/uploads/westlife-web.jpg",
    mobileImage: "/uploads/westlife-mobile.png",
    technologies: [
      "React",
      "Vite",
      "MongoDB",
      "Node.js",
      "Cloudinary",
    ],
    githubUrl: "https://github.com/CongoMusahAdama/westlife",
    websiteUrl: "https://westlife-motors-kappa.vercel.app/",
    rating: 5,
  },
  {
    id: 12,
    title: "HARV DREAMS",
    description:
      "Bold Ghanaian streetwear brand for dreamers who refuse to quit — purpose-driven apparel with a clean shop, cart, and collection experience.",
    problem:
      "Emerging fashion brands need a storefront that matches their identity while handling inventory, sold-out states, and smooth checkout.",
    approach:
      "Built a minimalist e-commerce experience with product grids, size/qty selection, wishlist, and account flows so shoppers can browse and buy with clarity.",
    image: "/uploads/harvdreams-web.png",
    mobileImage: "/uploads/harvdreams-mobile.png",
    technologies: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Supabase",
      "Vite",
    ],
    githubUrl: "https://github.com/CongoMusahAdama/dreamweave-ecom",
    websiteUrl: "https://harvdreams.com/",
    rating: 5,
  },
  {
    id: 13,
    title: "Scentiva Aura",
    description:
      "Premium fragrance & lifestyle store from Takoradi — browse curated scents, find your signature, and order in two taps via WhatsApp.",
    problem:
      "Buying fragrance online often feels impersonal, with no guidance on scent matching and friction at checkout.",
    approach:
      "Built a dark luxury shop with a scent-discovery quiz, curated collections, and WhatsApp-first ordering so customers can find and confirm their fragrance fast.",
    image: "/uploads/scentiva-web.png",
    mobileImage: "/uploads/scentiva-mobile.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "React",
      "WhatsApp API",
    ],
    githubUrl: "https://github.com/CongoMusahAdama/scentiva",
    websiteUrl: "https://scentivaaura.shop/",
    rating: 5,
  },
  {
    id: 14,
    title: "PM Holdings",
    description:
      "Official brand site for Nana Quasi-Wusu (The Finest MC) — Takoradi-based broadcaster, hypeman, and entertainment consultant uniting entertainment, fashion, modeling, and foundation work under “Excellence is my Hallmark.”",
    problem:
      "Multi-venture public figures need one polished home for booking, brand stories, and foundation outreach without scattering audiences across channels.",
    approach:
      "Built a multi-page portfolio with booking CTAs, venture hubs (entertainment, fashion, modeling), and a dedicated PM Foundation section for scholarships and community service.",
    image: "/uploads/pmholdings-web-v2.jpg",
    mobileImage: "/uploads/pmholdings-mobile.png",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "TailwindCSS",
      "Framer Motion",
    ],
    githubUrl: "https://github.com/CongoMusahAdama/pmholdings",
    websiteUrl: "https://www.pmholdingsgh.com/",
    rating: 5,
  },
  {
    id: 15,
    title: "Future-Link Services",
    description:
      "Skills. Business. Income. — workforce training, skills-to-income programmes, SME support, community impact, and smart event check-in to help people grow, earn, and succeed.",
    problem:
      "Organizers and learners need one place for training, SME support, and event registration without juggling disconnected tools.",
    approach:
      "Built a services and events platform with browseable conferences/AGMs, registration flows, and smart check-in so organizers and attendees can discover and run events smoothly.",
    image: "/uploads/futurelink-web.jpg",
    mobileImage: "/uploads/futurelink-mobile.png",
    technologies: [
      "React",
      "Vite",
      "TailwindCSS",
      "Node.js",
      "MongoDB",
    ],
    githubUrl: "https://github.com/CongoMusahAdama/futurelink",
    websiteUrl: "https://www.future-linkservices.com/",
    rating: 5,
  },
  {
    id: 10,
    title: "VisionSpa",
    description:
      "A premium spa and wellness platform. Features an elegant booking system, service showcases, and a refined user interface designed to evoke relaxation and luxury.",
    problem:
      "Traditional spa booking systems are often cluttered and uninspiring, failing to reflect the premium nature of the services offered.",
    approach:
      "Built a high-end, visual-first platform using React and Tailwind, focusing on a minimal interface that guides users through a premium booking journey without friction.",
    image: "/uploads/visionspaweb.png",
    mobileImage: "/uploads/visionspamobile.png",
    technologies: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Node.js",
      "Booking API",
    ],
    githubUrl: "https://github.com/CongoMusahAdama/visionspa",
    websiteUrl: "https://visionspa.store/",
    rating: 5,
  },
  {
    id: 9,
    title: "FLA Purchase",
    description:
      "A bespoke tailoring and custom-print platform. Features real-time production tracking, secure escrow payments, and a seamless connection between clients and expert tailors.",
    problem:
      "The custom tailoring industry lacks transparency in production timelines and payment security for both clients and creators.",
    approach:
      "Implemented a custom production-tracking state machine and integrated a secure Escrow API to ensure trust throughout the manufacturing lifecycle.",
    image: "/uploads/fla.png",
    mobileImage: "/uploads/image copy 5.png",
    technologies: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Node.js",
      "Escrow API",
    ],
    githubUrl: "https://github.com/CongoMusahAdama/fla",
    websiteUrl: "https://www.flamingo-store1.com/",
    rating: 5,
  },
  {
    id: 8,
    title: "Kultural Kompass",
    description:
      "Exploring culture, truth, and the tensions that shape our world. A dynamic podcast platform featuring automated episode fetching, a custom video player, and a refined brand-aligned interface.",
    problem:
      "Standard podcast directories often lack the branding and custom interactivity required for premium, niche-focused cultural content.",
    approach:
      "Designed a specialized content-delivery workflow using YouTube's Data API to automate episode releases within a custom-branded, interactive React frontend.",
    image: "/uploads/kultural project.png",
    mobileImage: "/uploads/Kultural mobile  4.png",
    technologies: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "YouTube API",
      "Netlify",
    ],
    githubUrl: "https://github.com/CongoMusahAdama/kultural",
    websiteUrl: "https://kulturalkompass.netlify.app/",
    rating: 5,
  },
  {
    id: 7,
    title: "BrainBank",
    description:
      "Idea management reimagined. BrainBank is a tool that helps you capture, organize, prioritize, and execute ideas in one focused space. Built for ambitious thinkers, entrepreneurs, students, and creatives who want clarity not clutter.",
    problem:
      "Note-taking apps are often too generic, making it difficult to prioritize high-level ideas from casual thoughts.",
    approach:
      "Created a hierarchy-focused data structure that separates brainstorming from execution, optimized for rapid capture and intuitive prioritization.",
    image: "/uploads/brainbank.png",
    mobileImage: "/uploads/brainbank-mobile.png",
    technologies: ["React", "TypeScript", "TailwindCSS", "Vite"],
    githubUrl: "https://github.com/CongoMusahAdama/Brainbank",
    websiteUrl: "https://brainbanc.netlify.app/",
    rating: 5,
  },
  {
    id: 6,
    title: "Supreme Masqueraders Society Platform",
    description:
      "A responsive digital hub showcasing history, events, and media with role-based dashboards for members and admins. Features include forums, donations, event management, and content moderation to strengthen community engagement.",
    problem:
      "Cultural organizations often struggle with fragmented communication and difficulty in managing historical media and community engagement in one place.",
    approach:
      "Developed a comprehensive community management system with role-based access control, donation tracking, and an archival media library to centralize organizational assets.",
    image: "/uploads/supreme-masqueraders.jpg",
    mobileImage: "/uploads/supreme-mobile.png",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Payment Integration",
      "Analytics",
    ],
    githubUrl: "https://github.com/CongoMusahAdama/sms",
    websiteUrl: "https://ssuprememasquraderssociety.netlify.app/",
    rating: 5,
  },
  {
    id: 0,
    title: "Artisans Hub",
    description:
      "A platform giving Ghanaian artisans the spotlight they deserve by helping them sell products, get booked for services, and secure funding through AI-matched investor connections tailored to their craft focus.",
    problem:
      "Local artisans often lack access to digital markets and struggle to find investors specifically interested in traditional craft focus.",
    approach:
      "Integrated an AI-driven matching algorithm that connects artisans with tailored funding opportunities based on their specific niche and historical project metadata.",
    image: "/uploads/Screenshot (366).png",
    mobileImage: "/uploads/artisans-hub-mobile.png",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "AI Matching",
    ],
    githubUrl: "https://github.com/CongoMusahAdama/ArtisanHub",
    websiteUrl: "https://artisanhubghana.netlify.app/",
    rating: 5,
  },
  {
    id: 1,
    title: "RealRate",
    description:
      "AI powered real estate platform providing accurate property price predictions and helping you find your dream home in Ghana",
    problem:
      "High volatility and lack of reliable data in the real estate market make accurate property valuation difficult for Ghanaian homebuyers.",
    approach:
      "Developed a Voting Regression machine learning model that analyzes historical sales data and location metrics to provide real-time price predictions.",
    image: "/uploads/067f6480-76cb-4a27-a4c3-2388ff2fbd51.png",
    technologies: ["FastAPI", "Voting Regression Model"],
    githubUrl: "https://github.com/CongoMusahAdama/rrate",
    rating: 4,
  },
  {
    id: 2,
    title: "WeBarb",
    description:
      "WeBarb connects you with top-rated barbers for a professional haircut experience. Book appointments easily, pay securely, and enjoy grooming wherever you are.",
    problem:
      "Users often face long wait times and inconsistent quality when looking for professional grooming services in unfamiliar locations.",
    approach:
      "Built a location-aware booking engine with a peer-review system and secure micro-payments to ensure quality and reliability for users on the move.",
    image: "/uploads/webarb.png",
    mobileImage: "/uploads/webarb-mobile.png",
    technologies: [
      "MongoDB",
      "Express",
      "JavaScript",
      "Node.js",
      "React",
      "Vite",
    ],
    githubUrl: "https://github.com/CongoMusahAdama/webarb-fe",
    websiteUrl: "https://webarb.netlify.app",
    rating: 5,
  },
  {
    id: 3,
    title: "AgriLync",
    description:
      "AgriLync is an AI-powered platform aimed at transforming African agriculture and improving financial access.",
    problem:
      "Small-scale farmers in Africa struggle to access credit due to lack of traditional credit scoring data and modern agricultural insights.",
    approach:
      "Leveraged satellite imagery and AI modeling to create alternative credit scores for farmers, facilitating financial access and providing predictive crop insights.",
    image: "/uploads/agrilync-new.png",
    mobileImage: "/uploads/agrilync-mobile.png",
    technologies: ["MongoDB", "Express", "TypeScript", "React", "Vite"],
    githubUrl: "https://github.com/CongoMusahAdama/agrilync-protoype",
    websiteUrl: "https://agri-lync.netlify.app",
    rating: 5,
  },
  {
    id: 4,
    title: "Mizrmo Carpool",
    description:
      "A carpool platform for finding and sharing rides. Users can create ride offers or join existing ones for efficient transportation.",
    problem:
      "Inefficient commuting patterns lead to higher transportation costs and increased urban traffic congestion.",
    approach:
      "Designed a route-matching algorithm that optimizes ride-shares in real-time based on destination proximity and user preferences.",
    image: "/uploads/mizrmo.png",
    technologies: ["Nest.js", "Node.js", "TypeScript", "PostgreSQL"],
    githubUrl: "https://github.com/CongoMusahAdama",
    rating: 4,
  },
  {
    id: 5,
    title: "SikaSoft",
    description:
      "An all-in-one suite for financial management and operations. Lower costs, improve efficiency, and gain full control using Suite SikaSoft's unified platform tailored for Microfinance, Co-operative, and Susu institutions.",
    problem:
      "Microfinance institutions often use fragmented legacy systems that slow down operations and increase the risk of data loss.",
    approach:
      "Developed a mission-critical financial suite that unifies accounting, member management, and reporting into a single, high-reliability platform.",
    image: "/uploads/sikasoft.png",
    technologies: ["JavaScript", "AJAX", "jQuery", "PHP"],
    githubUrl: "https://github.com/CongoMusahAdama",
    websiteUrl: "https://sikasoftonline.com/",
    rating: 5,
  },
];

const projectOrder = [
  "FLA Purchase",
  "HARV DREAMS",
  "Mizrmo Carpool",
  "Westlife Motors",
  "Scentiva Aura",
  "PM Holdings",
  "Future-Link Services",
  "VisionSpa",
  "Kultural Kompass",
  "BrainBank",
  "Supreme Masqueraders Society Platform",
  "Artisans Hub",
  "RealRate",
  "WeBarb",
  "AgriLync",
  "SikaSoft",
];

export const projects = [...allProjects].sort((a, b) => {
  const aIdx = allProjects.indexOf(a);
  const bIdx = allProjects.indexOf(b);
  const aRank =
    projectOrder.indexOf(a.title) === -1
      ? projectOrder.length + aIdx
      : projectOrder.indexOf(a.title);
  const bRank =
    projectOrder.indexOf(b.title) === -1
      ? projectOrder.length + bIdx
      : projectOrder.indexOf(b.title);
  return aRank - bRank;
});
