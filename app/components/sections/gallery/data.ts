// Videos shown in the Gallery section (portrait 720x1280 screen recordings)
export type GalleryItem = {
  id: number
  video: string        // Video path (stored in public/gallery/)
  title: string        // Display title
  inspiration?: string // Optional link to the design that inspired it
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    video: "/portfolio/gallery/medicover.MOV",
    title: "MediCover",
    inspiration: "https://dribbble.com/shots/26111189-MediCover-Medical-Insurance-App-UI-Design"
  },
  {
    id: 2,
    video: "/portfolio/gallery/3dcar.MOV",
    title: "Car Selection Interaction",
    inspiration: "https://dribbble.com/shots/11385883-Car-Selection-Interaction"
  },
  {
    id: 3,
    video: "/portfolio/gallery/camera.MOV",
    title: "Camera Access Interaction",
    inspiration: "https://dribbble.com/shots/24204854-Enable-Camera-Access-Interaction"
  }
]
