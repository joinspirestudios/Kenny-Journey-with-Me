import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Full-screen preview of an image or video. Used by Chapter and SplitChapter.
// Click anywhere outside the media (or press Esc) to close.
export default function Lightbox({ item, onClose }) {
  useEffect(() => {
    if (!item) return
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [item, onClose])

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="lightbox"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <button className="lightbox__close" onClick={onClose} aria-label="Close">×</button>

          <motion.div
            className="lightbox__inner"
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {item.type === 'video'
              ? <video src={item.src} autoPlay loop controls playsInline />
              : <img src={item.src} alt={item.label || ''} />
            }
            {item.label && <div className="lightbox__label">{item.label}</div>}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
