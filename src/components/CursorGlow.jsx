import useMousePosition from '../hooks/useMousePosition'

export default function CursorGlow() {
  const { x, y } = useMousePosition()
  const hasMoved = x !== 0 || y !== 0

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 hidden [@media(hover:hover)]:block"
      style={{
        opacity: hasMoved ? 1 : 0,
        background: `radial-gradient(600px circle at ${x}px ${y}px, rgba(127, 119, 221, 0.10), transparent 80%)`,
        transition: 'opacity 300ms ease-out',
      }}
    />
  )
}
