import SectionTitle from '../ui/SectionTitle'
import TechPill from '../ui/TechPill'
import ScrollReveal from '../ui/ScrollReveal'
import { experience } from '../../../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="py-24 max-w-5xl mx-auto px-6">
      <SectionTitle
        title="Experience"
        subtitle="Where I've worked and what I've been building"
      />

      <div className="flex flex-col">
        {experience.map((entry, index) => (
          <ScrollReveal key={entry.id} delay={index * 0.15}>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 pb-8">
              <div className="sm:min-w-[120px] md:min-w-[140px] pt-1 pl-6 sm:pl-0 text-sm text-gray-400">
                {entry.period}
              </div>

              <div className="relative pl-6 flex-1 border-l border-white/10">
                <span className="absolute left-0 top-2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary-400" />

                <div className="bg-white/5 border border-white/10 rounded-xl p-5 sm:p-6">
                  <h3 className="text-lg font-medium text-white">{entry.role}</h3>

                  <div className="mt-1 flex items-center gap-2">
                    {entry.url ? (
                      <a
                        href={entry.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-400 hover:underline"
                      >
                        {entry.company}
                      </a>
                    ) : (
                      <span className="text-primary-400">{entry.company}</span>
                    )}
                    {entry.type === 'work' && (
                      <span className="text-xs text-primary-400 bg-primary-400/10 rounded-full px-2 py-0.5">
                        Work
                      </span>
                    )}
                    {entry.type === 'learning' && (
                      <span className="text-xs text-gray-400 bg-white/5 rounded-full px-2 py-0.5">
                        Learning
                      </span>
                    )}
                  </div>

                  <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                    {entry.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {entry.tech.map((label) => (
                      <TechPill key={label} label={label} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
