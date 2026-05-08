import { useState } from 'react'
import { motion } from 'framer-motion'
import { introCopy, heroVideos } from '../data/content'

// Single video cell with error handling — shows a deep-oxblood gradient if missing
function HeroVideoCell({ src, index }) {
  const [errored, setErrored] = useState(false)

  if (errored) {
    return <div className="hero__bg-cell hero__bg-cell--fallback" />
  }

  return (
    <div className="hero__bg-cell">
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onError={() => setErrored(true)}
      />
    </div>
  )
}

// Portrait video triptych behind massive italic "Kenny" — Joseph's preferred direction
export default function Intro({ onBegin }) {
  return (
    <section className="section hero">
      <div className="hero__bg">
        {heroVideos.map((src, i) => (
          <HeroVideoCell key={i} src={src} index={i} />
        ))}
      </div>

      <div className="hero__dim" />

      <div className="hero__fg">
        <motion.h1
          className="hero__name"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, ease: [0.65, 0, 0.35, 1], delay: 0.2 }}
        >
          {introCopy.name}
        </motion.h1>

        <motion.p
          className="hero__sub"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 1.2 }}
        >
          {introCopy.line}
        </motion.p>

        <motion.button
          type="button"
          onClick={onBegin}
          className="hero__begin"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, delay: 2.0 }}
        >
          <span>{introCopy.cta}</span>
        </motion.button>

        <motion.p
          className="hero__hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1.6, delay: 2.8 }}
        >
          use ← → to navigate
        </motion.p>
      </div>
    </section>
  )
}
