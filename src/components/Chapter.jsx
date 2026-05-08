import { useState } from 'react'
import { motion } from 'framer-motion'
import ContinueButton from './ContinueButton'
import Lightbox from './Lightbox'

// For a video like /media/adventures/foo.mp4 — return /media/adventures/foo-poster.jpg
function posterFor(videoSrc) {
  return videoSrc.replace(/\.mp4$/, '-poster.jpg')
}

// One tile in a marquee row. Videos show their poster (no autoplay in marquee — that's
// a recipe for iOS Safari freezing). Click opens fullscreen video in the lightbox.
function MediaTile({ item, onOpen }) {
  const [errored, setErrored] = useState(false)

  if (errored) {
    return (
      <div className="rail__tile rail__tile--missing">
        <span className="rail__missing-label">{item.label || 'missing'}</span>
      </div>
    )
  }

  if (item.type === 'video') {
    const poster = posterFor(item.src)
    return (
      <button
        className="rail__tile rail__tile--video"
        onClick={() => onOpen(item)}
        type="button"
        aria-label={item.label || 'open video'}
      >
        <img
          src={poster}
          alt={item.label || ''}
          loading="lazy"
          onError={(e) => { e.currentTarget.style.display = 'none' }}
        />
        <span className="rail__play" aria-hidden="true">▶</span>
      </button>
    )
  }

  return (
    <button
      className="rail__tile"
      onClick={() => onOpen(item)}
      type="button"
      aria-label={item.label || 'open image'}
    >
      <img
        src={item.src}
        alt={item.label || ''}
        loading="lazy"
        onError={() => setErrored(true)}
      />
    </button>
  )
}

// One row of horizontally-scrolling tiles. Doubled for seamless loop.
function MarqueeRow({ items, onOpen, direction = 'left', speed = 80 }) {
  if (!items.length) return null
  const looped = [...items, ...items]
  const animClass = direction === 'left' ? 'rail__track--left' : 'rail__track--right'
  return (
    <div className="rail">
      <div
        className={`rail__track ${animClass}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {looped.map((item, i) => (
          <MediaTile key={i} item={item} onOpen={onOpen} />
        ))}
      </div>
    </div>
  )
}

export default function Chapter({ chapter, onCollectClue, collected, onContinue }) {
  const [preview, setPreview] = useState(null)

  const half = Math.ceil(chapter.media.length / 2)
  const row1 = chapter.media.slice(0, half)
  const row2 = chapter.media.slice(half)

  return (
    <section className="section chapter-v">
      <motion.div
        className="chapter-v__head"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
      >
        <p className="eyebrow">{chapter.eyebrow} · {chapter.number}</p>
        <h2
          className="chapter-v__title"
          dangerouslySetInnerHTML={{ __html: chapter.title }}
        />

        <div className="chapter-v__body">
          {chapter.body.map((p, i) => <p key={i}>{p}</p>)}
        </div>

        {chapter.date && <p className="chapter-v__date">{chapter.date}</p>}

        {chapter.closingLine && (
          <p className="chapter-v__close">{chapter.closingLine}</p>
        )}

        {chapter.clueLabel && (
          <button
            type="button"
            onClick={onCollectClue}
            disabled={collected}
            className={`chapter__clue ${collected ? 'chapter__clue--collected' : ''}`}
          >
            {collected ? `kept — ${chapter.clueLabel}` : `keep ${chapter.clueLabel}`}
          </button>
        )}
      </motion.div>

      <motion.div
        className="chapter-v__rails"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 0.4, ease: [0.65, 0, 0.35, 1] }}
      >
        <MarqueeRow items={row1} onOpen={setPreview} direction="left" speed={Math.max(60, row1.length * 6)} />
        <MarqueeRow items={row2} onOpen={setPreview} direction="right" speed={Math.max(60, row2.length * 6)} />
      </motion.div>

      <p className="chapter-v__rail-hint">hover to pause · tap any to open</p>

      <Lightbox item={preview} onClose={() => setPreview(null)} />

      <ContinueButton onClick={onContinue} />
    </section>
  )
}
