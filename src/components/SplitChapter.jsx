import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ContinueButton from './ContinueButton'
import Lightbox from './Lightbox'

function posterFor(videoSrc) {
  return videoSrc.replace(/\.mp4$/, '-poster.jpg')
}

// Big panel: image OR video that autoplays (only 2 visible at once = OK for iOS)
function PanelMedia({ item }) {
  if (!item) return null
  if (item.type === 'video') {
    return (
      <video
        src={item.src}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={posterFor(item.src)}
      />
    )
  }
  return (
    <img
      src={item.src}
      alt={item.label || ''}
      loading="lazy"
      onError={(e) => { e.currentTarget.style.opacity = '0.3' }}
    />
  )
}

// Thumb: just shows poster image for videos (no autoplay — too many tiles)
function ThumbMedia({ item }) {
  if (!item) return null
  if (item.type === 'video') {
    return (
      <>
        <img
          src={posterFor(item.src)}
          alt={item.label || ''}
          loading="lazy"
          onError={(e) => { e.currentTarget.style.display = 'none' }}
        />
        <span className="split__thumb-play" aria-hidden="true">▶</span>
      </>
    )
  }
  return (
    <img
      src={item.src}
      alt={item.label || ''}
      loading="lazy"
      onError={(e) => { e.currentTarget.style.opacity = '0.3' }}
    />
  )
}

export default function SplitChapter({ chapter, onCollectClue, collected, onContinue }) {
  const [activeIdx, setActiveIdx] = useState([0, 1])
  const [nextSlot, setNextSlot] = useState(0)
  const [preview, setPreview] = useState(null)

  const all = chapter.panels || []
  const leftItem = all[activeIdx[0]]
  const rightItem = all[activeIdx[1]]

  const swapIn = (i) => {
    if (activeIdx.includes(i)) return
    const newActive = [...activeIdx]
    newActive[nextSlot] = i
    setActiveIdx(newActive)
    setNextSlot(nextSlot === 0 ? 1 : 0)
  }

  return (
    <section className="section split">
      <motion.div
        className="split__head"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
      >
        <p className="eyebrow">{chapter.eyebrow} · {chapter.number}</p>
        <h2 className="split__title" dangerouslySetInnerHTML={{ __html: chapter.title }} />
      </motion.div>

      <motion.div
        className="split__stage"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.4 }}
      >
        <button
          className="split__panel split__panel--left"
          onClick={() => leftItem && setPreview(leftItem)}
          aria-label="Open left panel"
          type="button"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`left-${activeIdx[0]}`}
              className="split__panel-inner"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
            >
              <PanelMedia item={leftItem} />
            </motion.div>
          </AnimatePresence>
          {leftItem?.label && (
            <div className="split__caption">
              <span className="split__caption-name">{leftItem.label}</span>
              <span className="split__caption-meta">/ {chapter.id}</span>
            </div>
          )}
        </button>

        <div className="split__thumbs">
          {all.map((item, i) => {
            const isActive = activeIdx.includes(i)
            return (
              <motion.button
                key={i}
                type="button"
                className={`split__thumb ${isActive ? 'split__thumb--active' : ''}`}
                onClick={(e) => { e.stopPropagation(); swapIn(i) }}
                onDoubleClick={(e) => { e.stopPropagation(); setPreview(item) }}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.9 + i * 0.04 }}
                aria-label={item.label}
              >
                <ThumbMedia item={item} />
                <span className="split__thumb-num">{String(i + 1).padStart(2, '0')}</span>
              </motion.button>
            )
          })}
        </div>

        <button
          className="split__panel split__panel--right"
          onClick={() => rightItem && setPreview(rightItem)}
          aria-label="Open right panel"
          type="button"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`right-${activeIdx[1]}`}
              className="split__panel-inner"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
            >
              <PanelMedia item={rightItem} />
            </motion.div>
          </AnimatePresence>
          {rightItem?.label && (
            <div className="split__caption">
              <span className="split__caption-name">{rightItem.label}</span>
              <span className="split__caption-meta">/ {chapter.id}</span>
            </div>
          )}
        </button>
      </motion.div>

      <motion.div
        className="split__body"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.6 }}
      >
        {chapter.body.map((p, i) => <p key={i}>{p}</p>)}

        {chapter.date && <p className="split__date">{chapter.date}</p>}

        {chapter.closingLine && (
          <p className="split__close">{chapter.closingLine}</p>
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

      <Lightbox item={preview} onClose={() => setPreview(null)} />

      <ContinueButton onClick={onContinue} />
    </section>
  )
}
