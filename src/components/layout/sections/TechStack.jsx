import TechPill from "../ui/TechPill";
import ScrollReveal from "../ui/ScrollReveal";
import {
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiTailwindcss,
  SiStripe,
  SiGit,
  SiGithub,
  SiHtml5,
  SiClaude,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { Database, Layers } from "lucide-react";

const TECH = [
  { label: "HTML / CSS", icon: SiHtml5 },
  { label: "JavaScript", icon: SiJavascript },
  { label: "React", icon: SiReact },
  { label: "Tailwind CSS", icon: SiTailwindcss },
  { label: "Node.js", icon: SiNodedotjs },
  { label: "Xano", icon: Database },
  { label: "REST APIs", icon: TbApi },
  { label: "Stripe", icon: SiStripe },
  { label: "Git", icon: SiGit },
  { label: "GitHub", icon: SiGithub },
  { label: "Nordcraft", icon: Layers },
  { label: "Claude Code", icon: SiClaude },
];

export default function TechStack() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal delay={0}>
          <h2 className="text-center text-2xl sm:text-3xl font-medium text-white mb-8">
            Tech Stack
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-2 lg:gap-3">
            {TECH.map(({ label, icon }) => (
              <TechPill key={label} label={label} icon={icon} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
