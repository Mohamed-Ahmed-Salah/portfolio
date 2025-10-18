'use client'
import React, { useState, useRef } from 'react';
import "../../exp.css";

import AnimatedText from '../common/AnimatedText'
import Image from 'next/image'
import { Typography, Container, Box, Card, CardContent, Grid } from '@mui/material'
import GradientBackground from '../common/GradientBackground'
import ExperienceCard from "../common/ExperianceCard";

import { X } from 'lucide-react';


type Photo = {
  id: number
  image: string
  date: string
  location: string
  inspiration: string
}

const photos: Photo[] = [
  {
    id: 1,
    image: "/portfolio/gallery/medicover.MOV",
    date: "2025.10",
    location: "MediCover",
    inspiration: "https://dribbble.com/shots/26111189-MediCover-Medical-Insurance-App-UI-Design"
  },
  {
    id: 2,
    image: "/portfolio/gallery/3dcar.MOV",
    date: "2025.09",
    location: "Car Selection Interaction",
    inspiration: "https://dribbble.com/shots/11385883-Car-Selection-Interaction"
  },
  {
    id: 3,
    image: "/portfolio/gallery/camera.MOV",
    date: "2025.09",
    location: "Camera Access Interaction",
    inspiration: "https://dribbble.com/shots/24204854-Enable-Camera-Access-Interaction"
  }
]

export default function Gallery() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string>('');
  const videoRef = useRef<HTMLVideoElement>(null);

  const openVideo = (videoSrc: string) => {
    setSelectedVideo(videoSrc);
    setIsVideoOpen(true);
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeVideo();
    }
  };

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
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center relative z-10">Gallery</h1>
        </AnimatedText>
       
        <section className=''>
          <div className="container">
            <div className="experience-section">
              <div className="experience-cards-holder">
                <div className="experience-grid">
                  {photos.map((photo) => (
                    <div
                      key={photo.id}
                      style={{ cursor: 'pointer' }}
                      id={`w-node-experience-wrapper-${photo.id}`}
                      className="experience-wrapper" 
                      onDoubleClick={() => openVideo(photo.image)}
                      onClick={() => openVideo(photo.image)}
                    >
                      <div
                        id={`w-node-experience-card-${photo.id}`}
                        data-w-id={`experience-card-${photo.id}`}
                        className="experience-card-2"
                      >
                        <div
                          data-w-id={`light-wrapper-front-${photo.id}`}
                          className="light-wrapper-in-front"
                        >
                          <div className="light">
                            <div className="light-outside"></div>
                          </div>
                        </div>
                        <div className="experience-card-content">
                          <div className="experience-card-image-holder">
                            <video
                              src={photo.image}
                              className="experience-card-image"
                              autoPlay
                              loop
                              muted
                              playsInline
                            />
                            <div className="experience-gradient"></div>
                          </div>
                          <div className="experience-card-text-holder">
                            <div className="card-title">
                              {photo.location}
                            </div>
                            <div className="experience-paragraph-holder">
                              <p className="gray-paragraoh">
                                 Inspiration: {photo.inspiration}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="light-wrapper">
                          <div className="light">
                            <div className="light-inside"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Single Modal - Outside the map loop */}
        {isVideoOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            onClick={handleOverlayClick}
          >
            <button
              onClick={closeVideo}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Close video"
            >
              <X size={32} />
            </button>

            <div className="relative w-full h-full flex items-center justify-center p-4">
              <video
                ref={videoRef}
                className="max-w-full max-h-full w-auto h-auto"
                controls
                autoPlay
                onClick={(e) => e.stopPropagation()}
              >
                <source src={selectedVideo} type="video/quicktime" />
                <source src={selectedVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}
      </Box>
    </Container>
  )
}

 {/* <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} sx={{ position: 'relative', zIndex: 1 }}>
        {photos.map((photo, index) => {
          const TiltCard = () => {
            const { ref, tilt, handleMouseMove, handleMouseLeave } = useTilt();
            
            return (
              <Grid 
                item 
                xs={6} 
                sm={4} 
                md={4} 
                key={photo.id} 
                sx={{ 
                  transform: index % 2 === 0 ? 'translateY(40px)' : 'translateY(0)'
                }}
              >
                <AnimatedText>
                  <Card 
                    ref={ref}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    elevation={0}
                    sx={{
                      height: '100%',
                      background: theme => theme.palette.mode === 'dark' 
                        ? 'rgba(0, 0, 0, 0.2)' 
                        : 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(20px)',
                      borderRadius: 4,
                      border: theme => `1px solid ${
                        theme.palette.mode === 'dark' 
                          ? 'rgba(255, 255, 255, 0.1)' 
                          : 'rgba(255, 255, 255, 0.2)'
                      }`,
                      transition: 'all 0.3s ease',
                      transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale(1)`,
                      transformStyle: 'preserve-3d',
                      '&:hover': {
                        transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale(1.02) translateY(-8px)`,
                        background: theme => theme.palette.mode === 'dark'
                          ? 'rgba(0, 0, 0, 0.3)'
                          : 'rgba(255, 255, 255, 0.15)',
                        boxShadow: theme => theme.palette.mode === 'dark'
                          ? '0 20px 40px rgba(0, 0, 0, 0.3)'
                          : '0 20px 40px rgba(0, 0, 0, 0.1)',
                      }
                    }}
                  >
                    <CardContent sx={{ 
                      p: { xs: 1.5, sm: 2, md: 3 }
                    }}>
                      <Box sx={{ mb: { xs: 1, sm: 1.5, md: 2 } }}>
                      <video
                        src={photo.image}
                        // alt={photo.description}
                        width={400}
                        height={300}
                        controls // adds play/pause controls
                        preload="metadata" // loads video metadata
                        className="rounded-lg object-cover w-full"
                      />
                    </Box>
                      <Typography variant="body1" sx={{ 
                        fontWeight: 500,
                        mb: { xs: 0.5, sm: 0.75, md: 1 },
                        fontSize: { 
                          xs: '0.875rem',
                          sm: '1rem',
                          md: '1.125rem'
                        }
                      }}>
                        {photo.location}
                      </Typography>
                      <Typography variant="body2" sx={{ 
                        opacity: 0.7,
                        fontSize: { 
                          xs: '0.75rem',
                          sm: '0.875rem',
                          md: '1rem'
                        }
                      }}>
                        {photo.date}
                      </Typography>
                      <Typography variant="body2" sx={{ 
                        opacity: 0.7,
                        mt: { xs: 0.5, sm: 0.75, md: 1 },
                        fontSize: { 
                          xs: '0.75rem',
                          sm: '0.875rem',
                          md: '1rem'
                        }
                      }}>
                        {photo.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </AnimatedText>
              </Grid>
            );
          };
          
          return <TiltCard key={photo.id} />;
        })}
      </Grid> */}

// Custom hook for 3D tilt effect
// const useTilt = () => {
//   const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
//   const ref = useRef<HTMLDivElement>(null);

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (!ref.current) return;

//     const card = ref.current;
//     const rect = card.getBoundingClientRect();
    
//     // Calculate mouse position relative to card center
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;
    
//     const centerX = rect.width / 2;
//     const centerY = rect.height / 2;
    
//     // Calculate rotation (max 15 degrees)
//     const rotateY = ((x - centerX) / centerX) * 15;
//     const rotateX = ((centerY - y) / centerY) * 15;
    
//     setTilt({ rotateX, rotateY });
//   };

//   const handleMouseLeave = () => {
//     setTilt({ rotateX: 0, rotateY: 0 });
//   };

//   return { ref, tilt, handleMouseMove, handleMouseLeave };
// };



 {/* <div
                id="w-node-_18b7b7cc-ea33-b170-adeb-1ab1fafcde94-0949b286"
                className="experience-wrapper"
              >
                <div
                  id="w-node-_18b7b7cc-ea33-b170-adeb-1ab1fafcde95-0949b286"
                  data-w-id="18b7b7cc-ea33-b170-adeb-1ab1fafcde95"
                  className="experience-card-2"
                >
                  <div
                    data-w-id="18b7b7cc-ea33-b170-adeb-1ab1fafcde96"
                    className="light-wrapper-in-front"
                  >
                    <div className="light"><div className="light-outside"></div></div>
                  </div>
                  <div className="experience-card-content">
                    <div className="experience-card-image-holder">
                      <video
                        src="/portfolio/gallery/medicover.MOV"
                        className="experience-card-image"
                      />
                      <div className="experience-gradient"></div>
                    </div>
                    <div className="experience-card-text-holder">
                      <div className="card-title">
                        Effortlessly tracking with Lumenis
                      </div>
                      <div className="experience-paragraph-holder">
                        <p className="gray-paragraoh">
                          Effortlessly monitor your team's KPIs, call metrics,
                          and top-performing products in real-time.&quot;
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="light-wrapper">
                    <div className="light"><div className="light-inside"></div></div>
                  </div>
                </div>
              </div> */}