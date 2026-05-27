import { LayoutDashboard, Coffee, Boxes } from 'lucide-react'

export const projects = [
  {
    id: 1,
    title: "Admin Panel",
    icon: LayoutDashboard,
    description: "A full-stack admin dashboard built solo from scratch. Features JWT authentication, protected routes, role-based access control, full CRUD for products and users, and data visualizations — all wired to a Xano backend.",
    tech: ["React 19", "Tailwind CSS", "Xano", "Recharts", "JWT", "Axios"],
    githubUrl: "https://github.com/LexTarasov/admin-panel",
    liveUrl: "https://adminpanel002.netlify.app/",
    featured: true,
  },
  {
    id: 2,
    title: "Coffee Tracker",
    icon: Coffee,
    description: "A React app for tracking daily coffee intake. Built to practice React fundamentals — component architecture, state management, and local persistence.",
    tech: ["React", "JavaScript", "CSS"],
    githubUrl: "https://github.com/LexTarasov/Coffie-Tracker-ReactJS",
    liveUrl: "https://coffee-tracker001.netlify.app/",
    featured: true,
  },
  {
  id: 3,
  title: "NodeJS Microservices Architecture",
  icon: Boxes,
  description: "A backend system built with a microservices pattern, featuring an API gateway, identity service for authentication, post service, media service, and search service — each running as an independent Node.js service. Containerized with Docker Compose.",
  tech: ["Node.js", "Express", "Docker", "JWT", "REST APIs", "Microservices"],
  githubUrl: "https://github.com/LexTarasov/NodeJS-micro-services",
  liveUrl: null,
  type: "backend",
}
  
]