import { motion } from 'motion/react'
import { useEffect, useState } from 'react'

const INTRO = "Hi, I'm Alexandra —"
const TYPE_SPEED_MS = 60
const INTRO_DURATION_S = (INTRO.length * TYPE_SPEED_MS) / 1000

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

function useTypewriter(text, speed) {
  const [typed, setTyped] = useState('')
  useEffect(() => {
    setTyped('')
    let i = 0
    const id = setInterval(() => {
      i += 1
      setTyped(text.slice(0, i))
      if (i >= text.length) clearInterval(id)
    }, speed)
    return () => clearInterval(id)
  }, [text, speed])
  return typed
}

function handleViewWork(e) {
  e.preventDefault()
  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  const typed = useTypewriter(INTRO, TYPE_SPEED_MS)

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="flex flex-col items-center text-center max-w-2xl">
        <p
          className="text-sm tracking-wider text-primary-400 mb-5"
          aria-label={INTRO}
        >
          <span>{typed}</span>
          <motion.span
            aria-hidden="true"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.9, repeat: Infinity, ease: 'linear' }}
            className="inline-block w-[2px] h-3.5 ml-1 bg-primary-400 align-middle"
          />
        </p>

        <motion.h1
          {...fadeUp}
          transition={{ duration: 0.5, delay: INTRO_DURATION_S + 0.1 }}
          className="text-5xl md:text-6xl font-medium text-white leading-tight mb-6"
        >
          Full-stack software
          <br />
          developer.
        </motion.h1>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.5, delay: INTRO_DURATION_S + 0.3 }}
          className="text-gray-400 leading-relaxed max-w-[480px] mb-8"
        >
          I build web applications end to end — from backend APIs and
          authentication systems to polished React interfaces. Currently
          building at Nexierge.
        </motion.p>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: INTRO_DURATION_S + 0.5 }}
          className="flex items-center gap-3"
        >
          <a
            href="#projects"
            onClick={handleViewWork}
            className="px-5 py-2.5 rounded-lg bg-primary-400 hover:bg-primary-500 text-white font-medium transition-colors"
          >
            View my work
          </a>
          <a
            href="https://github.com/LexTarasov"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-lg border border-white/15 hover:border-white/30 text-gray-200 font-medium transition-colors"
          >
            GitHub ↗
          </a>
        </motion.div>
      </div>
    </section>
  )
}
