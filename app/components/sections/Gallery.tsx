'use client'

import { useState } from 'react'
import { Container, Box } from '@mui/material'
import AnimatedText from '../common/AnimatedText'
import GradientBackground from '../common/GradientBackground'
import FannedVideos from './gallery/FannedVideos'
import VideoLightbox from './gallery/VideoLightbox'

// Gallery section - add or edit videos in ./gallery/data.ts
export default function Gallery() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)

  return (
    <Container id="gallery" maxWidth="xl" component="section">
      <Box sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        py: { xs: 4, md: 4 },
        px: { xs: 2, sm: 4, md: 8 },
        position: 'relative',
        overflow: 'hidden',
      }}>
        <GradientBackground
          sectionId="gallery"
          gradientColors={{
            start: '#60A5FA',
            end: '#3B82F6'
          }}
        />

        <AnimatedText>
          <h1 className="text-3xl sm:text-4xl font-bold mb-10 text-center relative z-10">Gallery</h1>
        </AnimatedText>

        <div className="relative z-10 flex w-full justify-center">
          <FannedVideos onOpen={setLightboxSrc} />
        </div>

        <VideoLightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
      </Box>
    </Container>
  )
}
