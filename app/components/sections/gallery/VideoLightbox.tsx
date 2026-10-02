'use client'

import { useEffect } from 'react'
import { X } from 'lucide-react'

// Full-screen video player shared by every gallery variation
export default function VideoLightbox({ src, onClose }: { src: string | null; onClose: () => void }) {
  useEffect(() => {
    if (!src) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [src, onClose])

  if (!src) return null

  return (
    <div
      className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 p-2 rounded-full hover:bg-white/10 transition-colors"
        aria-label="Close video"
      >
        <X size={32} />
      </button>
      <video key={src} className="max-w-full max-h-full rounded-2xl" controls autoPlay playsInline>
        <source src={src} type="video/quicktime" />
        <source src={src} type="video/mp4" />
      </video>
    </div>
  )
}
