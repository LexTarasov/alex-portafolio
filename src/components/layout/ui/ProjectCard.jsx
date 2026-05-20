import TechPill from './TechPill'

export default function ProjectCard({ title, description, tech, githubUrl, liveUrl, featured }) {
  return (
    <div
      className={`relative flex flex-col h-full bg-white/5 border border-white/10 rounded-xl p-6 ${
        featured ? 'border-l-2 border-l-primary-400' : ''
      }`}
    >
      {featured && (
        <span className="absolute top-4 right-4 text-xs text-primary-400 bg-primary-400/10 rounded-full px-2 py-0.5">
          Featured
        </span>
      )}

      <h3 className="text-lg font-medium text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-400 leading-relaxed mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((label) => (
          <TechPill key={label} label={label} />
        ))}
      </div>

      <div className="mt-auto flex gap-4">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary-400 hover:underline"
          >
            GitHub ↗
          </a>
        )}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary-400 hover:underline"
          >
            Live demo ↗
          </a>
        )}
      </div>
    </div>
  )
}
