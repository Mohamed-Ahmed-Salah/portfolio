import React, { useState, ReactNode } from 'react';

interface ExperienceCardProps {
  children: ReactNode;
  className?: string;
}
export default function ExperienceCard({ children, className = '' }: ExperienceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`experience-wrapper ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        perspective: '1000px',
        width: '100%',
        height: '100%',
        display: 'flex',
        transition: 'color 0.3s ease'
      }}
    >
      <div 
        className="experience-card-2"
        style={{
          zIndex: 5,
          backgroundColor: '#30363d',
          borderRadius: '26px',
          justifyContent: 'center',
          width: '100%',
          display: 'flex',
          position: 'relative',
          overflow: 'hidden',
          transition: 'transform 0.3s ease'
        }}
      >
        {/* Light Effect - Front */}
        <div 
          className="light-wrapper-in-front"
          style={{
            zIndex: 6,
            opacity: isHovered ? 1 : 0,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            display: 'flex',
            position: 'absolute',
            transition: 'opacity 0.3s ease',
            pointerEvents: 'none'
          }}
        >
          <div 
            className="light"
            style={{
              opacity: 1,
              borderRadius: '110px',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '100%',
              display: 'flex',
              position: 'absolute'
            }}
          >
            <div 
              className="light-outside"
              style={{
                opacity: 0.1,
                filter: 'blur(70px)',
                backgroundColor: '#fff',
                width: '200px',
                height: '200px'
              }}
            />
          </div>
        </div>

        {/* Content Area */}
        <div 
          className="experience-card-content"
          style={{
            zIndex: 5,
            opacity: 1,
            backgroundColor: '#161b22',
            borderRadius: '25px',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '100%',
            margin: '1px',
            display: 'flex',
            position: 'relative'
          }}
        >
          {children}
        </div>

        {/* Light Effect - Back */}
        <div 
          className="light-wrapper"
          style={{
            zIndex: 4,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            display: 'flex',
            position: 'absolute',
            pointerEvents: 'none'
          }}
        >
          <div 
            className="light"
            style={{
              opacity: isHovered ? 1 : 0.5,
              borderRadius: '110px',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '100%',
              display: 'flex',
              position: 'absolute',
              transition: 'opacity 0.3s ease'
            }}
          >
            <div 
              className="light-inside"
              style={{
                filter: 'blur(70px)',
                backgroundColor: '#fff',
                width: '200px',
                height: '200px',
                opacity: isHovered ? 0.15 : 0.05,
                transition: 'opacity 0.3s ease'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};