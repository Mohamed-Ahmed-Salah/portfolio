'use client'

import GalleryVideo from './GalleryVideo'
import { GALLERY_ITEMS } from './data'

// Videos fanned out like a hand of cards; hovering one straightens and lifts it.
// On mobile it becomes a horizontal swipe row.
const FAN = [
  'md:-rotate-[8deg] md:translate-y-6 md:hover:-translate-y-4',
  'md:z-10 md:-translate-y-2 md:hover:-translate-y-8',
  'md:rotate-[8deg] md:translate-y-6 md:hover:-translate-y-4',
]

export default function FannedVideos({ onOpen }: { onOpen: (src: string) => void }) {
  return (
    <div className="w-full">
      <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-4 pb-6 md:overflow-visible md:justify-center md:gap-0 md:px-0 md:pt-10 md:pb-4">
        {GALLERY_ITEMS.map((item, i) => (
          <button
            key={item.id}
            onClick={() => onOpen(item.video)}
            className={`group relative shrink-0 snap-center w-[220px] sm:w-[240px] md:-mx-4 md:hover:z-20 md:hover:rotate-0 transition-all duration-300 ease-out ${FAN[i % FAN.length]}`}
          >
            <GalleryVideo src={item.video} />
            <div className="mt-4 text-center md:opacity-0 md:group-hover:opacity-100 transition-opacity">
              <p className="font-semibold">{item.title}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
