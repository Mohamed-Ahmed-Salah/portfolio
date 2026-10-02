'use client'

import { forwardRef } from 'react'

type Props = {
  src: string
  className?: string
  autoPlay?: boolean
  loop?: boolean
  onEnded?: () => void
  onTimeUpdate?: (e: React.SyntheticEvent<HTMLVideoElement>) => void
}

// A plain portrait video; the recordings already include the app UI, so no device frame
const GalleryVideo = forwardRef<HTMLVideoElement, Props>(function GalleryVideo(
  { src, className = '', autoPlay = true, loop = true, onEnded, onTimeUpdate },
  ref
) {
  return (
    <video
      ref={ref}
      key={src}
      src={src}
      className={`block aspect-[9/16] w-full rounded-3xl bg-black object-cover shadow-2xl ${className}`}
      autoPlay={autoPlay}
      loop={loop}
      muted
      playsInline
      preload="metadata"
      onEnded={onEnded}
      onTimeUpdate={onTimeUpdate}
    />
  )
})

export default GalleryVideo
