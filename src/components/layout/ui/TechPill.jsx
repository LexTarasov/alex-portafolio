export default function TechPill({ label, icon: Icon }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-xs lg:text-sm rounded-full px-2.5 py-1 lg:px-3 lg:py-1.5 bg-primary-400/10 text-primary-400 border border-primary-400/40 whitespace-nowrap shrink-0">
      {Icon && <Icon className="w-3.5 h-3.5 lg:w-4 lg:h-4" aria-hidden="true" />}
      {label}
    </span>
  )
}
