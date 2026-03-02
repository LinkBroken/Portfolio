import user from "@/assets/userImage.png";
import logo from "@/assets/logo.svg";
import aboutTeaserImage from "@/assets/about-image.jpg";

export const navLinks = [
  { href: "#about", label: "About me" },
  { href: "#skills", label: "Skills" },
  { href: "#portfolio", label: "Portfolio" },
];

export const links = [
  {
    element: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>`,
    href: "https://linkedin.com/in/omerdamour",
  },
  {
    element: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>`,
    href: "https://github.com/linkbroken",
  },
];

export const navBarProps = {
  links: navLinks,
  logo: logo,
  logoAlt: "Omer | Portfolio",
};

export const heroProps = {
  greeting: "Hi, I am",
  image: user.src,
  jobTitle: "Mid-level Software engineer",
  socialLinks: links,
  name: "Omer Damour",
  imageProp: "Omer Damour",
};

export const footerProps = {
  title: "Engineering Excellence",
  description: "Crafting scalable, high-performance systems with passion and precision.",
};

export const aboutTeaserProps = {
  image: aboutTeaserImage,
  description:
    "I am a Mid-level Software Engineer with over 4 years of experience specializing in Web, mobile and cloud ecosystems. I thrive on building resilient architectures, optimizing CI/CD pipelines, and delivering visually stunning user experiences. My expertise spans across Kotlin, Swift, React Native, and robust backend systems like NestJS and PostgreSQL.",
  author: "Omer Damour",
};

export interface Skill {
  name: string;
  image: string;
  years: number;
  level: "Strong" | "Moderate";
  proficiency: number;
  category: "Technical" | "Soft Skills";
}

const unfilteredSkills: Skill[] = [
  // --- TECHNICAL SKILLS ---
  {
    name: "Kotlin",
    years: 2,
    level: "Moderate",
    proficiency: 85,
    category: "Technical",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
  },
  {
    name: "Swift",
    years: 1,
    level: "Moderate",
    proficiency: 80,
    category: "Technical",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
  },
  {
    name: "Next.js",
    years: 3,
    level: "Strong",
    proficiency: 95,
    category: "Technical",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "NextAuth",
    years: 2,
    level: "Strong",
    proficiency: 90,
    category: "Technical",
    image: "/icons/nextauth.png",
  },
  {
    name: "Supabase",
    years: 2,
    level: "Strong",
    proficiency: 92,
    category: "Technical",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
  },
  {
    name: "Firebase",
    years: 3,
    level: "Strong",
    proficiency: 90,
    category: "Technical",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  {
    name: "Express",
    years: 2,
    level: "Strong",
    proficiency: 92,
    category: "Technical",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "NestJS",
    years: 2,
    level: "Moderate",
    proficiency: 82,
    category: "Technical",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
  },
  {
    name: "Shadcn UI",
    years: 2,
    level: "Strong",
    proficiency: 92,
    category: "Technical",
    image: "/icons/shadcn.png",
  },
  {
    name: "Material UI",
    years: 3,
    level: "Strong",
    proficiency: 92,
    category: "Technical",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
  },
  {
    name: "Internationalization",
    years: 3,
    level: "Strong",
    proficiency: 88,
    category: "Technical",
    image: "/icons/Internationlization.svg",
  },
  {
    name: "Responsive Design",
    years: 4,
    level: "Strong",
    proficiency: 95,
    category: "Technical",
    image: "/icons/responsive-design-custom.png",
  },
  {
    name: "WebSockets",
    years: 1,
    level: "Strong",
    proficiency: 90,
    category: "Technical",
    image: "/icons/websockets.png",
  },
  {
    name: "Cloud Computing",
    years: 2,
    level: "Strong",
    proficiency: 88,
    category: "Technical",
    image: "/icons/cloud.png",
  },
  {
    name: "Google Play",
    years: 1,
    level: "Strong",
    proficiency: 90,
    category: "Technical",
    image: "/icons/googleplay.png",
  },
  {
    name: "App Store Connect",
    years: 1,
    level: "Strong",
    proficiency: 90,
    category: "Technical",
    image: "/icons/AppStore-Connect.svg",
  },
  {
    name: "TestFlight",
    years: 1,
    level: "Strong",
    proficiency: 92,
    category: "Technical",
    image: "/icons/testflight.png",
  },
  {
    name: "Xcode",
    years: 2,
    level: "Strong",
    proficiency: 95,
    category: "Technical",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xcode/xcode-original.svg",
  },
  {
    name: "Android Studio",
    years: 2,
    level: "Strong",
    proficiency: 95,
    category: "Technical",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",
  },
  {
    name: "Gradle",
    years: 2,
    level: "Strong",
    proficiency: 88,
    category: "Technical",
    image: "https://simpleicons.org/icons/gradle.svg",
  },
  {
    name: "CocoaPods",
    years: 2,
    level: "Strong",
    proficiency: 88,
    category: "Technical",
    image: "/icons/cocoa-pods.svg",
  },
  {
    name: "Push Notifications",
    years: 2,
    level: "Strong",
    proficiency: 92,
    category: "Technical",
    image: "/icons/push-notifications-custom.jpg",
  },
  {
    name: "Azure DevOps",
    years: 3,
    level: "Strong",
    proficiency: 85,
    category: "Technical",
    image: "/icons/azure-custom.png",
  },
  {
    name: "System Design",
    years: 2,
    level: "Moderate",
    proficiency: 82,
    category: "Technical",
    image: "/icons/system-design.png",
  },
  {
    name: "OOP",
    years: 2,
    level: "Strong",
    proficiency: 95,
    category: "Technical",
    image: "https://www.svgrepo.com/show/495393/object-oriented-programming.svg",
  },
  {
    name: "Manual Testing",
    years: 4,
    level: "Strong",
    proficiency: 90,
    category: "Technical",
    image: "/icons/manuel-testing.svg",
  },
  {
    name: "Package Management",
    years: 2,
    level: "Strong",
    proficiency: 92,
    category: "Technical",
    image: "/icons/package-management.svg",
  },
  {
    name: "Docker",
    years: 1,
    level: "Moderate",
    proficiency: 85,
    category: "Technical",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "PostgreSQL",
    years: 2,
    level: "Strong",
    proficiency: 88,
    category: "Technical",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },

  // --- NON-TECHNICAL (SOFT SKILLS) ---
  {
    name: "Teamwork",
    years: 5,
    level: "Strong",
    proficiency: 98,
    category: "Soft Skills",
    image: "/icons/teamwork-custom.jpg",
  },
  {
    name: "Stakeholder Comms",
    years: 5,
    level: "Strong",
    proficiency: 95,
    category: "Soft Skills",
    image: "/icons/stakeholders-custom.jpg",
  },
  // {
  //   name: "Cross-functional",
  //   years: 5,
  //   level: "Strong",
  //   proficiency: 92,
  //   category: "Soft Skills",
  //   image: "/icons/cross-functional-custom.png",
  // },
];

export const skills = unfilteredSkills
  .slice()
  .sort((a, b) => {
    const levelPriority = { Strong: 1, Moderate: 2 };
    if (levelPriority[a.level] !== levelPriority[b.level]) {
      return levelPriority[a.level] - levelPriority[b.level];
    }
    // If same level, sort by proficiency descending
    return b.proficiency - a.proficiency;
  });
