export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-10">
      <h2 className="text-3xl font-medium text-white">{title}</h2>
      {subtitle && (
        <p className="mt-2 text-gray-400">{subtitle}</p>
      )}
    </div>
  )
}
