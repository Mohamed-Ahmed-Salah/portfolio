'use client'

import AnimatedText from '../common/AnimatedText'
import Image from 'next/image'
import GradientBackground from '../common/GradientBackground'
import ExperienceModal from './Motal'
import { useState } from 'react'

// Define experience entry type
type Experience = {
  id: number          // Unique identifier
  title: string       // Position title
  company: string     // Company name
  period: string      // Work period
  logo: string        // Company logo path (stored in public/companyicon/)
  skills: string[]    // Skills list (corresponding icons stored in public/skills/, filename in lowercase)
  description: string // Work description
}

// Example data
// Usage instructions:
// 1. Copy template below and modify content as needed
// 2. Place logo images in public/companyicon/ directory
// 3. Skills icons will be automatically fetched from public/skills/ directory
//    Example: "JavaScript" -> public/skills/javascript.png
// 4. Recommended to sort experience entries in reverse chronological order
const experiences: Experience[] = [
  {
    id: 6, // Matches Clean Life in PROJECT_DATA so the card opens its details
    title: "Mobile Developer",
    company: "Clean Life",
    period: "August 2026 - Present",
    logo: "/portfolio/apps/cleanlife.jpg",
    skills: ["SwiftUI", "Flutter", "NestJS", "Next.js", "Tabby & Tamara", "Tap Payments", "Apple Pay", "TinyMDM"], // Skills list
    description: "Shipped Clean Life, a home services booking platform with 80,000+ downloads, building the iOS app natively in SwiftUI and the Android app in Flutter. Built an in-app messaging module for an AI agent and live customer support with image, video and voice note attachments, and added Tabby and Tamara buy-now-pay-later alongside Tap card, Apple Pay and wallet payments. Maintained 3 internal role-based Flutter apps for the pricing, field and supervisor teams, working in a team of 20 with feature branches and code reviews."
  },
  {
    id: 1,
    title: "Flutter Developer",
    company: "Marcom Arabia",
    period: "August 2025 - July 2026",
    logo: "/portfolio/images/marcomArabia.svg", 
    skills: ["Flutter", "iOS Live Activities", "Firebase", "Firebase Remote Config", "Gemini AI", "Google Maps", "Jira"], // Skills list
    description: "Built iOS Live Activities and Android/iOS home widgets that show attendance status in real time, reducing missed check-outs by 40%, and an AI attendance assistant using Gemini. Released 2 event management apps with 3,000+ combined downloads, refactored 10,000+ lines into clean architecture, cut app size by 10%, and added Google Maps geofencing, Firebase-driven theming, monitoring and in-app review prompts, and full Arabic/English support."
  },
  {
    id: 2,
    title: "Flutter Developer",
    company: "Theqah",
    period: "April 2024 - January 2025",
    logo: "/portfolio/images/theqah.jpeg", 
    skills: ["Flutter", "Bloc", "Restful APIs","Flutter Flavors", "Firebase Crashlytics","Domain-Driven Design (DDD)"], // Skills list
    description: "Developed and maintained two Flutter applications with over 500 active users, implementing Clean Architecture, secure payment integration and improving apps performance"
  },
  {
    id: 3, 
    title: "Full Stack Software Engineer",
    company: "MAXNET Digital Services",
    period: "October 2022 - April 2023",
    logo: "/portfolio/images/mds.jpeg",
    skills: ["Flutter", "Java Spring boot", "Spring Security","JWT", "Swagger UI", "API Documentation","MVC"],
    description: "Integrated the Electronic Banking System (EBS) Consumer API for payment processing, card operations, and service payments such as university tuition, internet bills, and other utilities."
  }

   
];

export default function Experience() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null)

  return (
    <section id="experience" className="container mx-auto px-4 sm:px-8 md:px-12">
      <div className="
        min-h-screen
        flex flex-col items-center justify-center
        py-16 md:py-20
        relative
        overflow-hidden
      ">
        {/* Optional gradient background component */}
        {/* You can adjust background colors by modifying gradientColors */}
        {/* Examples:
          Blue theme: start:'#3B82F6' end:'#1E40AF'
          Green theme: start:'#10B981' end:'#047857'
          Pink theme: start:'#EC4899' end:'#BE185D'
        */}
        <GradientBackground 
          sectionId="experience"
          gradientColors={{
            start: '#7C3AED',  // Light violet
            end: '#5B21B6'     // Deep violet
          }}
        />

        <AnimatedText>
          <h1 className="text-3xl sm:text-4xl font-bold mb-12 text-center relative z-10">
            Experience
          </h1>
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative z-0 max-w-6xl w-full">
          {experiences.map((experience) => (
            <div key={experience.id}>
              <AnimatedText>
                <div 
                  onClick={() => {
                    //id 2 is empty and has no apps
                    if(experience.id==2){
                      return;
                    }else{
                    setSelectedExperience(experience.id)
                    setModalOpen(true)
                    }
                 
                  }}
                  className="
                    bg-white/10 dark:bg-black/20
                    backdrop-blur-[20px]
                    rounded-2xl
                    border border-white/10 dark:border-white/10
                    p-6
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:shadow-xl
                    cursor-pointer
                    h-full
                  "
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0">
                      <Image
                        src={experience.logo}
                        alt={experience.company}
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="
                        text-base sm:text-lg md:text-xl  /* Mobile: 16px, sm:18px, md:20px */
                        font-bold 
                        mb-1
                      ">
                        {experience.title}
                      </h3>
                      
                      <p className="text-base text-gray-600 dark:text-gray-400">
                        {experience.company}
                      </p>
                    </div>
                  </div>

                  <p className="text-base text-gray-600 dark:text-gray-400 mb-4">
                    {experience.period}
                  </p>
                  
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                    {experience.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill) => (
                      <span
                        key={skill}
                        className="
                          px-3 py-1
                          text-sm
                          rounded-full
                          bg-white/5 dark:bg-white/5
                          backdrop-blur-sm
                          border border-white/5
                          text-gray-600 dark:text-gray-400
                        "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedText>
            </div>
          ))}
        </div>
      </div>

      <ExperienceModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        experienceId={selectedExperience ?? 1}
      />
    </section>
  )
}
