import SectionTitle from '../ui/SectionTitle'
import ProjectCard from '../ui/ProjectCard'
import ScrollReveal from '../ui/ScrollReveal'
import { projects } from '../../../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="py-24 max-w-5xl mx-auto px-6">
      <SectionTitle title="Projects" subtitle="Things I've built" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ScrollReveal key={project.id} delay={index * 0.1}>
            <ProjectCard
              title={project.title}
              description={project.description}
              tech={project.tech}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              featured={project.featured}
            />
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
