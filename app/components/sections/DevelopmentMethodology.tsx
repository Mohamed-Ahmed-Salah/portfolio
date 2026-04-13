'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedText from '../common/AnimatedText'

// Phase configuration
const phases = [
  {
    id: 1,
    title: 'Requirements & Analysis',
    shortTitle: 'REQUIREMENTS',
    description: 'Before a single line of code. Understand the feature, the edge cases, and what can go wrong. Find the best way to implement it',
    
    tags: ['Feature Scoping', 'User Stories', 'API Contracts', 'Risk Assessment', 'Documentation'],
    icon: (
      
      <svg width="25" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.2739 16.8602C19.371 15.9386 20.2474 14.7827 20.8386 13.4776C21.4298 12.1724 21.7208 10.7513 21.69 9.31883C21.5815 4.36173 17.6113 0.274378 12.6629 0.0141057C11.3861 -0.0553886 10.1084 0.132403 8.90562 0.566328C7.70284 1.00025 6.59952 1.67146 5.66119 2.54009C4.72286 3.40872 3.96866 4.45706 3.44338 5.62284C2.9181 6.78863 2.63244 8.04809 2.60338 9.32642L0.168756 14.0091C0.158996 14.0287 0.149236 14.0482 0.14056 14.0677C-0.033985 14.4745 -0.0464252 14.9327 0.105786 15.3484C0.257998 15.7641 0.563349 16.1059 0.959332 16.3039L0.986444 16.3158L3.47096 17.4534V20.8218C3.47096 21.2819 3.65376 21.7233 3.97917 22.0487C4.30457 22.3741 4.74591 22.5569 5.2061 22.5569H10.4115C10.6416 22.5569 10.8623 22.4655 11.025 22.3028C11.1877 22.1401 11.2791 21.9194 11.2791 21.6893C11.2791 21.4592 11.1877 21.2386 11.025 21.0759C10.8623 20.9132 10.6416 20.8218 10.4115 20.8218H5.2061V16.8971C5.20623 16.7308 5.15856 16.568 5.06877 16.428C4.97898 16.288 4.85086 16.1768 4.69966 16.1076L1.73581 14.7487L4.23767 9.94023C4.30288 9.81802 4.33749 9.68182 4.33853 9.54331C4.33828 7.77383 4.93905 6.05674 6.04242 4.67339C7.14579 3.29004 8.6863 2.32249 10.4115 1.92927V3.61996C9.83268 3.82461 9.34481 4.22732 9.03415 4.75689C8.7235 5.28647 8.61005 5.90882 8.71388 6.51395C8.8177 7.11908 9.1321 7.66802 9.60152 8.06376C10.0709 8.45949 10.6651 8.67654 11.2791 8.67654C11.8931 8.67654 12.4873 8.45949 12.9567 8.06376C13.4261 7.66802 13.7405 7.11908 13.8443 6.51395C13.9482 5.90882 13.8347 5.28647 13.5241 4.75689C13.2134 4.22732 12.7255 3.82461 12.1467 3.61996V1.73515C12.2877 1.73515 12.4286 1.73515 12.5696 1.746C14.1081 1.83413 15.5865 2.37392 16.8198 3.29786C18.0532 4.2218 18.9867 5.48887 19.5037 6.94059H17.3521C17.2248 6.94054 17.0991 6.9685 16.9839 7.02248C16.8686 7.07645 16.7666 7.15512 16.6852 7.25292L13.9187 10.5736C13.3417 10.3586 12.7073 10.3545 12.1277 10.5622C11.548 10.7699 11.0605 11.1758 10.7513 11.7083C10.4421 12.2407 10.3311 12.8654 10.4381 13.4718C10.545 14.0781 10.863 14.6271 11.3357 15.0217C11.8084 15.4162 12.4054 15.6309 13.0211 15.6278C13.6368 15.6246 14.2316 15.4038 14.7002 15.0044C15.1688 14.605 15.481 14.0527 15.5817 13.4453C15.6824 12.8379 15.5651 12.2144 15.2504 11.6851L17.7588 8.67574H19.905C19.931 8.90131 19.9469 9.12904 19.9527 9.35895C19.9797 10.6016 19.7108 11.8328 19.1681 12.951C18.6254 14.0692 17.8245 15.0422 16.8316 15.7898C16.7092 15.8816 16.6133 16.004 16.5535 16.1447C16.4937 16.2855 16.4722 16.4395 16.4911 16.5913L17.3586 23.5318C17.385 23.7414 17.4869 23.9341 17.6453 24.0738C17.8036 24.2136 18.0074 24.2908 18.2186 24.291C18.2549 24.291 18.2911 24.2888 18.3271 24.2845C18.4401 24.2704 18.5493 24.2342 18.6484 24.1779C18.7475 24.1216 18.8345 24.0463 18.9045 23.9564C18.9745 23.8665 19.0261 23.7636 19.0563 23.6537C19.0866 23.5439 19.0949 23.4291 19.0808 23.316L18.2739 16.8602ZM11.2791 6.94059C11.1075 6.94059 10.9398 6.88971 10.7971 6.79438C10.6544 6.69905 10.5432 6.56355 10.4776 6.40503C10.4119 6.2465 10.3947 6.07206 10.4282 5.90376C10.4617 5.73547 10.5443 5.58088 10.6656 5.45955C10.787 5.33822 10.9416 5.25559 11.1099 5.22212C11.2781 5.18864 11.4526 5.20582 11.6111 5.27149C11.7696 5.33715 11.9051 5.44835 12.0005 5.59102C12.0958 5.73369 12.1467 5.90143 12.1467 6.07302C12.1467 6.30311 12.0553 6.52378 11.8926 6.68649C11.7299 6.84919 11.5092 6.94059 11.2791 6.94059ZM13.0143 13.8812C12.8427 13.8812 12.6749 13.8303 12.5323 13.735C12.3896 13.6396 12.2784 13.5041 12.2127 13.3456C12.1471 13.1871 12.1299 13.0126 12.1634 12.8443C12.1968 12.6761 12.2795 12.5215 12.4008 12.4001C12.5221 12.2788 12.6767 12.1962 12.845 12.1627C13.0133 12.1292 13.1877 12.1464 13.3463 12.2121C13.5048 12.2777 13.6403 12.3889 13.7356 12.5316C13.8309 12.6743 13.8818 12.842 13.8818 13.0136C13.8818 13.2437 13.7904 13.4644 13.6277 13.6271C13.465 13.7898 13.2444 13.8812 13.0143 13.8812Z" fill="currentColor"></path></svg>
      // <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
       //sssssssssssssss {/* <path fillRule="evenodd" clipRule="evenodd" d="M15.719 0.852382C16.0246 1.00923 16.189 1.34988 16.1216 1.68673L14.7129 8.73019L20.2485 10.806C20.4887 10.8961 20.6681 11.1001 20.7268 11.3499C20.7854 11.5997 20.7155 11.8623 20.5404 12.0498L9.78252 23.5761C9.54813 23.8273 9.17553 23.8923 8.86991 23.7355C8.56428 23.5786 8.39989 23.238 8.46726 22.9011L9.87596 15.8577L4.34042 13.7819C4.10019 13.6918 3.92077 13.4877 3.86214 13.238C3.80351 12.9882 3.87341 12.7256 4.04847 12.538L14.8064 1.01172C15.0408 0.760586 15.4134 0.695532 15.719 0.852382Z" fill="currentColor"/> */}
      // </svg>
    ),
    colors: {
      fill: '#B9DEF8',
      stroke: '#8DCAF5',
      primary: '#0088DF',
      tagBg: 'bg-sky-100',
      tagBorder: 'border-sky-400',
      tagText: 'text-sky-900',
      iconBg: 'bg-sky-50'
    }
  },
  
  {
    id: 2,
    title: 'UI/UX Research',
    shortTitle: 'DESIGN RESEARCH',
    description: 'I don\'t design from scratch. I find what works, understand why it works, then make it mine. Dribbble and Mobbin before Figma.',
    tags: ['Dribbble', 'Mobbin', 'Color Systems', 'Accessibility'],
    icon: (
      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    ),
    colors: {
      fill: '#FFE4D1',
      stroke: '#FFB980',
      primary: '#F26905',
      tagBg: 'bg-orange-100',
      tagBorder: 'border-orange-400',
      tagText: 'text-orange-900',
      iconBg: 'bg-orange-50'
    }
  },
  {
    id: 3,
    title: 'Data & Logic Design',
    shortTitle: 'DATA ARCHITECTURE',
    description: 'Most bugs don\'t start in the code. They start in the design. Getting the data flow and architecture right here saves everything downstream.',
    tags: ['Domain Layer', 'Repository Interfaces', 'Use Cases', 'Data Flow'],
    icon: (
      <svg width="21" height="23" viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.4109 0C4.57319 0 0 2.66779 0 6.07301V16.4839C0 19.8891 4.57319 22.5569 10.4109 22.5569C16.2486 22.5569 20.8218 19.8891 20.8218 16.4839V6.07301C20.8218 2.66779 16.2486 0 10.4109 0ZM19.0866 11.2785C19.0866 12.3217 18.232 13.3856 16.7431 14.1978C15.0665 15.112 12.8173 15.6163 10.4109 15.6163C8.00445 15.6163 5.75526 15.112 4.07868 14.1978C2.58971 13.3856 1.73515 12.3217 1.73515 11.2785V9.4739C3.58525 11.1006 6.74863 12.146 10.4109 12.146C14.0731 12.146 17.2365 11.0963 19.0866 9.4739V11.2785ZM4.07868 3.15363C5.75526 2.23942 8.00445 1.73515 10.4109 1.73515C12.8173 1.73515 15.0665 2.23942 16.7431 3.15363C18.232 3.96589 19.0866 5.02976 19.0866 6.07301C19.0866 7.11627 18.232 8.18013 16.7431 8.99239C15.0665 9.9066 12.8173 10.4109 10.4109 10.4109C8.00445 10.4109 5.75526 9.9066 4.07868 8.99239C2.58971 8.18013 1.73515 7.11627 1.73515 6.07301C1.73515 5.02976 2.58971 3.96589 4.07868 3.15363ZM16.7431 19.4033C15.0665 20.3175 12.8173 20.8218 10.4109 20.8218C8.00445 20.8218 5.75526 20.3175 4.07868 19.4033C2.58971 18.591 1.73515 17.5271 1.73515 16.4839V14.6793C3.58525 16.306 6.74863 17.3515 10.4109 17.3515C14.0731 17.3515 17.2365 16.3017 19.0866 14.6793V16.4839C19.0866 17.5271 18.232 18.591 16.7431 19.4033Z" fill="currentColor"/>
      </svg>
    ),
    colors: {
      fill: '#E8DFF0',
      stroke: '#CBB8DF',
      primary: '#8659B4',
      tagBg: 'bg-purple-100',
      tagBorder: 'border-purple-400',
      tagText: 'text-purple-800',
      iconBg: 'bg-purple-50'
    }
  },
  {
    id: 4,
    title: 'Development',
    shortTitle: 'IMPLEMENTATION',
    description: 'Write clean code. Predictable structure. BLoC, SOLID, widget organization. Code someone else can read — including future me.',
    tags: ['Clean Code', 'BLoC Pattern', 'SOLID', 'Widget Organization', 'State Management'],
    icon: (
      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    ),
    colors: {
      fill: '#D4F0C4',
      stroke: '#8AD243',
      primary: '#329200',
      tagBg: 'bg-green-100',
      tagBorder: 'border-green-500',
      tagText: 'text-green-900',
      iconBg: 'bg-green-50'
    }
  },
  {
    id: 5,
    title: 'Code Review',
    shortTitle: 'AI REVIEW',
    description: 'Code that works isn\'t always code that\'s good, that\'s why I use Claude Code to help review and audit my code before shipping. Architecture check, SOLID violations, performance flags. A second set of eyes that doesn\'t get tired.',
    tags: ['Claude Code', 'SOLID Check', 'Architecture Audit', 'Performance'],
    icon: (
      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    ),
    colors: {
      fill: '#FFE5E4',
      stroke: '#F5A3A0',
      primary: '#D75450',
      tagBg: 'bg-red-100',
      tagBorder: 'border-red-400',
      tagText: 'text-red-900',
      iconBg: 'bg-red-50'
    }
  },
  {
    id: 6,
    title: 'Refactor & Optimize',
    shortTitle: 'OPTIMIZATION',
    description: 'Every review finds something. The code works. Now we make it last. Cleaner patterns, shared logic, less repetition.',
    tags: ['Performance', 'Code Quality', 'Pattern Application', 'Continuous Improvement'],
    icon: (
      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    ),
    colors: {
      fill: '#FFF3D1',
      stroke: '#FFD14D',
      primary: '#FFB000',
      tagBg: 'bg-amber-100',
      tagBorder: 'border-amber-500',
      tagText: 'text-amber-900',
      iconBg: 'bg-amber-50'
    }
  }
]

// Hexagon component with exact SVG paths from original design
function Hexagon({
  phase,
  transform,
  tagsPosition,
  tagsX,
  tagsY,
  isHovered,
  onHover,
  onLeave,
  scale = 1
}: {
  phase: typeof phases[0]
  transform: string
  tagsPosition: 'left' | 'right'
  tagsX: number
  tagsY: number
  isHovered: boolean
  onHover: () => void
  onLeave: () => void
  scale?: number
}) {
  // Base hexagon paths (scaled version of the original)
  const baseWidth = 243
  const baseHeight = 287

  return (
    <g
      className="group cursor-pointer"
      transform={transform}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Background fill */}
      <path
        opacity={isHovered ? "1" : "0.5"}
        d={`M${113.406 * scale} ${9.41736 * scale}C${117.088 * scale} ${7.29196 * scale} ${121.623 * scale} ${7.29197 * scale} ${125.304 * scale} ${9.41736 * scale}L${232.762 * scale} ${71.4581 * scale}C${236.443 * scale} ${73.5835 * scale} ${238.711 * scale} ${77.5114 * scale} ${238.711 * scale} ${81.7622 * scale}V${205.844 * scale}C${238.711 * scale} ${210.094 * scale} ${236.443 * scale} ${214.022 * scale} ${232.762 * scale} ${216.148 * scale}L${125.304 * scale} ${278.188 * scale}C${121.623 * scale} ${280.314 * scale} ${117.088 * scale} ${280.314 * scale} ${113.406 * scale} ${278.188 * scale}L${5.949 * scale} ${216.148 * scale}C${2.267 * scale} ${214.022 * scale} ${0 * scale} ${210.094 * scale} ${0 * scale} ${205.844 * scale}V${81.7621 * scale}C${0 * scale} ${77.5113 * scale} ${2.267 * scale} ${73.5835 * scale} ${5.949 * scale} ${71.4581 * scale}L${113.406 * scale} ${9.41736 * scale}Z`}
        fill={phase.colors.fill}
        className="transition-all duration-300"
      />

      {/* White stroke border */}
      <path
        opacity="0.8"
        d={`M${110.233 * scale} ${8.50122 * scale}C${115.878 * scale} ${5.24231 * scale} ${122.833 * scale} ${5.24229 * scale} ${128.478 * scale} ${8.50122 * scale}L${231.969 * scale} ${68.2522 * scale}C${237.613 * scale} ${71.5111 * scale} ${241.091 * scale} ${77.5341 * scale} ${241.091 * scale} ${84.052 * scale}V${203.554 * scale}C${241.091 * scale} ${210.072 * scale} ${237.613 * scale} ${216.095 * scale} ${231.969 * scale} ${219.354 * scale}L${128.478 * scale} ${279.104 * scale}C${122.833 * scale} ${282.363 * scale} ${115.878 * scale} ${282.363 * scale} ${110.233 * scale} ${279.104 * scale}L${6.742 * scale} ${219.354 * scale}C${1.098 * scale} ${216.095 * scale} ${-2.38 * scale} ${210.072 * scale} ${-2.38 * scale} ${203.554 * scale}V${84.052 * scale}C${-2.38 * scale} ${77.5341 * scale} ${1.098 * scale} ${71.5111 * scale} ${6.742 * scale} ${68.2522 * scale}L${110.233 * scale} ${8.50122 * scale}Z`}
        stroke="white"
        strokeWidth={4.75926 * scale}
        fill="none"
      />

      {/* Colored border with detail */}
      <path
        d={`M${0 * scale} ${203.553 * scale}V${84.0511 * scale}C${0 * scale} ${78.4719 * scale} ${2.93 * scale} ${73.31 * scale} ${7.703 * scale} ${70.447 * scale}L${7.932 * scale} ${70.3124 * scale}L${111.423 * scale} ${10.5614 * scale}C${116.332 * scale} ${7.72757 * scale} ${122.379 * scale} ${7.72757 * scale} ${127.288 * scale} ${10.5614 * scale}L${230.779 * scale} ${70.3124 * scale}C${235.688 * scale} ${73.1463 * scale} ${238.711 * scale} ${78.3835 * scale} ${238.711 * scale} ${84.0513 * scale}V${203.553 * scale}L${238.709 * scale} ${203.818 * scale}C${238.616 * scale} ${209.384 * scale} ${235.611 * scale} ${214.502 * scale} ${230.779 * scale} ${217.292 * scale}L${127.288 * scale} ${277.043 * scale}L${127.057 * scale} ${277.173 * scale}C${122.268 * scale} ${279.833 * scale} ${116.443 * scale} ${279.833 * scale} ${111.654 * scale} ${277.173 * scale}L${111.423 * scale} ${277.043 * scale}L${7.932 * scale} ${217.292 * scale}C${3.024 * scale} ${214.458 * scale} ${0 * scale} ${209.221 * scale} ${0 * scale} ${203.553 * scale}ZM${4.759 * scale} ${203.553 * scale}C${4.759 * scale} ${207.52 * scale} ${6.876 * scale} ${211.186 * scale} ${10.312 * scale} ${213.17 * scale}L${113.803 * scale} ${272.921 * scale}C${117.239 * scale} ${274.905 * scale} ${121.472 * scale} ${274.905 * scale} ${124.908 * scale} ${272.921 * scale}L${228.4 * scale} ${213.17 * scale}C${231.835 * scale} ${211.186 * scale} ${233.952 * scale} ${207.52 * scale} ${233.952 * scale} ${203.553 * scale}V${84.0513 * scale}C${233.952 * scale} ${80.0838 * scale} ${231.836 * scale} ${76.4177 * scale} ${228.4 * scale} ${74.434 * scale}L${124.908 * scale} ${14.6832 * scale}C${121.472 * scale} ${12.6995 * scale} ${117.239 * scale} ${12.6995 * scale} ${113.803 * scale} ${14.6832 * scale}L${10.312 * scale} ${74.434 * scale}C${6.876 * scale} ${76.4177 * scale} ${4.759 * scale} ${80.0837 * scale} ${4.759 * scale} ${84.0511 * scale}V${203.553 * scale}Z`}
        fill={phase.colors.stroke}
      />

      {/* Phase number text */}
      <text
        x={119 * scale}
        y={155 * scale}
        textAnchor="middle"
        fontSize={14 * scale}
        fontWeight="500"
        fill={phase.colors.primary}
        opacity="0.6"
        className="pointer-events-none"
      >
        Phase {phase.id}
      </text>

      {/* Tags foreignObject */}
      <foreignObject
        x={tagsX}
        y={tagsY}
        width="200"
        height="220"
        className="pointer-events-none overflow-visible"
      >
        <div className={`flex flex-col gap-1.5 ${tagsPosition === 'left' ? 'items-end' : 'items-start'}`}>
          {phase.tags.map((tag, idx) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0.7 }}
              animate={{
                opacity: isHovered ? 1 : 0.7,
                scale: isHovered ? 1.02 : 1
              }}
              transition={{ delay: idx * 0.03, duration: 0.2 }}
              className={`
                pointer-events-auto rounded-lg border px-2 py-1
                text-[10px] font-semibold transition-colors
                ${phase.colors.tagText} ${phase.colors.tagBg} ${phase.colors.tagBorder}
                ${isHovered ? 'shadow-sm' : ''}
              `}
            >
              {tag}
            </motion.span>
          ))}

          {/* Label badge */}
          <motion.div
            className="mt-1.5 flex items-center gap-2 rounded-lg border border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-600 p-2 pointer-events-auto"
            animate={{
              scale: isHovered ? 1.02 : 1,
              boxShadow: isHovered ? '0 4px 12px rgba(0,0,0,0.1)' : 'none'
            }}
            transition={{ duration: 0.2 }}
          >
            <div className={`${phase.colors.iconBg} rounded-lg p-1`}>
              <div style={{ color: phase.colors.primary }}>
                {phase.icon}
              </div>
            </div>
            <span
              className="text-[11px] font-semibold"
              style={{ color: phase.colors.primary }}
            >
              {phase.shortTitle}
            </span>
          </motion.div>
        </div>
      </foreignObject>
    </g>
  )
}

// Center hexagon (larger, green)
function CenterHexagon({
  isHovered,
  onHover,
  onLeave
}: {
  isHovered: boolean
  onHover: () => void
  onLeave: () => void
}) {
  const scale = 1.6
  const hexWidth = 238.711 * scale
  const hexHeight = 287 * scale

  // Center tags for the Quality Center
  const centerTags = {
    left: ['Claude AI', 'Code Review', 'Architecture'],
    right: ['Best Practices', 'Clean Code', 'Testing']
  }

  return (
    <g
      className="group cursor-pointer"
      transform={`translate(${400 - hexWidth / 2}, ${134})`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Background fill */}
      <path
        opacity={isHovered ? "1" : "0.5"}
        d={`M${113.406 * scale} ${9.41736 * scale}C${117.088 * scale} ${7.29196 * scale} ${121.623 * scale} ${7.29197 * scale} ${125.304 * scale} ${9.41736 * scale}L${232.762 * scale} ${71.4581 * scale}C${236.443 * scale} ${73.5835 * scale} ${238.711 * scale} ${77.5114 * scale} ${238.711 * scale} ${81.7622 * scale}V${205.844 * scale}C${238.711 * scale} ${210.094 * scale} ${236.443 * scale} ${214.022 * scale} ${232.762 * scale} ${216.148 * scale}L${125.304 * scale} ${278.188 * scale}C${121.623 * scale} ${280.314 * scale} ${117.088 * scale} ${280.314 * scale} ${113.406 * scale} ${278.188 * scale}L${5.949 * scale} ${216.148 * scale}C${2.267 * scale} ${214.022 * scale} ${0 * scale} ${210.094 * scale} ${0 * scale} ${205.844 * scale}V${81.7621 * scale}C${0 * scale} ${77.5113 * scale} ${2.267 * scale} ${73.5835 * scale} ${5.949 * scale} ${71.4581 * scale}L${113.406 * scale} ${9.41736 * scale}Z`}
        fill="#BDE596"
        className="transition-all duration-300"
      />

      {/* White stroke border */}
      <path
        opacity="0.8"
        d={`M${110.233 * scale} ${8.50122 * scale}C${115.878 * scale} ${5.24231 * scale} ${122.833 * scale} ${5.24229 * scale} ${128.478 * scale} ${8.50122 * scale}L${231.969 * scale} ${68.2522 * scale}C${237.613 * scale} ${71.5111 * scale} ${241.091 * scale} ${77.5341 * scale} ${241.091 * scale} ${84.052 * scale}V${203.554 * scale}C${241.091 * scale} ${210.072 * scale} ${237.613 * scale} ${216.095 * scale} ${231.969 * scale} ${219.354 * scale}L${128.478 * scale} ${279.104 * scale}C${122.833 * scale} ${282.363 * scale} ${115.878 * scale} ${282.363 * scale} ${110.233 * scale} ${279.104 * scale}L${6.742 * scale} ${219.354 * scale}C${1.098 * scale} ${216.095 * scale} ${-2.38 * scale} ${210.072 * scale} ${-2.38 * scale} ${203.554 * scale}V${84.052 * scale}C${-2.38 * scale} ${77.5341 * scale} ${1.098 * scale} ${71.5111 * scale} ${6.742 * scale} ${68.2522 * scale}L${110.233 * scale} ${8.50122 * scale}Z`}
        stroke="white"
        strokeWidth={4.75926 * scale}
        fill="none"
      />

      {/* Colored border with detail */}
      <path
        d={`M${0 * scale} ${203.553 * scale}V${84.0511 * scale}C${0 * scale} ${78.4719 * scale} ${2.93 * scale} ${73.31 * scale} ${7.703 * scale} ${70.447 * scale}L${7.932 * scale} ${70.3124 * scale}L${111.423 * scale} ${10.5614 * scale}C${116.332 * scale} ${7.72757 * scale} ${122.379 * scale} ${7.72757 * scale} ${127.288 * scale} ${10.5614 * scale}L${230.779 * scale} ${70.3124 * scale}C${235.688 * scale} ${73.1463 * scale} ${238.711 * scale} ${78.3835 * scale} ${238.711 * scale} ${84.0513 * scale}V${203.553 * scale}L${238.709 * scale} ${203.818 * scale}C${238.616 * scale} ${209.384 * scale} ${235.611 * scale} ${214.502 * scale} ${230.779 * scale} ${217.292 * scale}L${127.288 * scale} ${277.043 * scale}L${127.057 * scale} ${277.173 * scale}C${122.268 * scale} ${279.833 * scale} ${116.443 * scale} ${279.833 * scale} ${111.654 * scale} ${277.173 * scale}L${111.423 * scale} ${277.043 * scale}L${7.932 * scale} ${217.292 * scale}C${3.024 * scale} ${214.458 * scale} ${0 * scale} ${209.221 * scale} ${0 * scale} ${203.553 * scale}ZM${4.759 * scale} ${203.553 * scale}C${4.759 * scale} ${207.52 * scale} ${6.876 * scale} ${211.186 * scale} ${10.312 * scale} ${213.17 * scale}L${113.803 * scale} ${272.921 * scale}C${117.239 * scale} ${274.905 * scale} ${121.472 * scale} ${274.905 * scale} ${124.908 * scale} ${272.921 * scale}L${228.4 * scale} ${213.17 * scale}C${231.835 * scale} ${211.186 * scale} ${233.952 * scale} ${207.52 * scale} ${233.952 * scale} ${203.553 * scale}V${84.0513 * scale}C${233.952 * scale} ${80.0838 * scale} ${231.836 * scale} ${76.4177 * scale} ${228.4 * scale} ${74.434 * scale}L${124.908 * scale} ${14.6832 * scale}C${121.472 * scale} ${12.6995 * scale} ${117.239 * scale} ${12.6995 * scale} ${113.803 * scale} ${14.6832 * scale}L${10.312 * scale} ${74.434 * scale}C${6.876 * scale} ${76.4177 * scale} ${4.759 * scale} ${80.0837 * scale} ${4.759 * scale} ${84.0511 * scale}V${203.553 * scale}Z`}
        fill="#8AD243"
      />

      {/* Left tags */}
      <foreignObject
        x={-160}
        y={hexHeight / 2 - 80}
        width="150"
        height="160"
        className="pointer-events-none overflow-visible"
      >
        <div className="flex flex-col items-end gap-1.5">
          {centerTags.left.map((tag, idx) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0.7 }}
              animate={{
                opacity: isHovered ? 1 : 0.7,
                scale: isHovered ? 1.02 : 1
              }}
              transition={{ delay: idx * 0.03, duration: 0.2 }}
              className={`
                pointer-events-auto rounded-lg border px-2 py-1
                text-[10px] font-semibold transition-colors
                text-green-900 bg-green-100 border-green-500
                ${isHovered ? 'shadow-sm' : ''}
              `}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </foreignObject>

      {/* Right tags */}
      <foreignObject
        x={hexWidth + 10}
        y={hexHeight / 2 - 80}
        width="150"
        height="160"
        className="pointer-events-none overflow-visible"
      >
        <div className="flex flex-col items-start gap-1.5">
          {centerTags.right.map((tag, idx) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0.7 }}
              animate={{
                opacity: isHovered ? 1 : 0.7,
                scale: isHovered ? 1.02 : 1
              }}
              transition={{ delay: idx * 0.03, duration: 0.2 }}
              className={`
                pointer-events-auto rounded-lg border px-2 py-1
                text-[10px] font-semibold transition-colors
                text-green-900 bg-green-100 border-green-500
                ${isHovered ? 'shadow-sm' : ''}
              `}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </foreignObject>

      {/* Center label */}
      <foreignObject x={hexWidth / 2 - 80} y={hexHeight / 2 - 40} width="160" height="80" className="pointer-events-none">
        <div className="flex flex-col items-center justify-center text-center h-full">
          <span className="text-gray-700 dark:text-gray-300 font-semibold text-sm">Quality</span>
          <span className="text-gray-700 dark:text-gray-300 font-semibold text-sm">Center</span>
          <span className="text-gray-500 dark:text-gray-400 text-xs mt-1">AI-Assisted</span>
        </div>
      </foreignObject>
    </g>
  )
}

// Hover detail panel
function HoverPanel({
  phase,
  isVisible
}: {
  phase: typeof phases[0] | null
  isVisible: boolean
}) {
  if (!phase) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.98 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
//                      fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2

          className="
            fixed 
            w-full max-w-xl mx-4
            bg-white/95 dark:bg-gray-900/95
            backdrop-blur-xl
            rounded-2xl
            border border-gray-200 dark:border-gray-700
            shadow-2xl
            overflow-hidden
            z-40
          "
        >
          <div className="grid grid-cols-[120px_1fr] gap-0">
            {/* Left side - Visual */}
            <div
              className="relative p-5 flex items-center justify-center"
              style={{ backgroundColor: `${phase.colors.primary}15` }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: phase.colors.primary }}
              >
                <div className="text-white scale-125">
                  {phase.icon}
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="p-5 flex flex-col justify-center">
              <span
                className="text-xs font-bold tracking-wider mb-1"
                style={{ color: phase.colors.primary }}
              >
                PHASE {phase.id}
              </span>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                {phase.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {phase.description}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Isometric grid background
function IsometricBackground() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.12] dark:opacity-[0.06]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="iso-grid" width="56" height="100" patternUnits="userSpaceOnUse">
          <circle cx="28" cy="10" r="1.2" fill="#94a3b8" />
          <circle cx="0" cy="35" r="1.2" fill="#94a3b8" />
          <circle cx="56" cy="35" r="1.2" fill="#94a3b8" />
          <circle cx="28" cy="60" r="1.2" fill="#94a3b8" />
          <circle cx="0" cy="85" r="1.2" fill="#94a3b8" />
          <circle cx="56" cy="85" r="1.2" fill="#94a3b8" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#iso-grid)" />
    </svg>
  )
}

// Center phase data for hover panel
const centerPhase = {
  id: 0,
  title: 'Quality Center',
  shortTitle: 'QUALITY CENTER',
  description: 'AI-assisted development hub ensuring code quality, best practices, and architectural consistency across all phases.',
  tags: ['Claude AI', 'Code Review', 'Architecture', 'Best Practices', 'Clean Code', 'Testing'],
  icon: (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  ),
  colors: {
    fill: '#BDE596',
    stroke: '#8AD243',
    primary: '#329200',
    tagBg: 'bg-green-100',
    tagBorder: 'border-green-500',
    tagText: 'text-green-900',
    iconBg: 'bg-green-50'
  }
}

export default function DevelopmentMethodology() {
  const [hoveredPhase, setHoveredPhase] = useState<number | null>(null)
  const activePhase = hoveredPhase === 0 ? centerPhase : phases.find(p => p.id === hoveredPhase) || null

  // Hexagon positions and configurations - centered around x=400
  const hexagonConfigs = [
    { id: 1, transform: 'translate(144, 0)', tagsPosition: 'left' as const, tagsX: -160, tagsY: 15 },
    { id: 2, transform: 'translate(414, 0)', tagsPosition: 'right' as const, tagsX: 250, tagsY: 25 },
    { id: 6, transform: 'translate(24, 220)', tagsPosition: 'left' as const, tagsX: -180, tagsY: 15 },
    { id: 3, transform: 'translate(534, 220)', tagsPosition: 'right' as const, tagsX: 250, tagsY: 15 },
    { id: 5, transform: 'translate(144, 440)', tagsPosition: 'left' as const, tagsX: -160, tagsY: 15 },
    { id: 4, transform: 'translate(414, 440)', tagsPosition: 'right' as const, tagsX: 250, tagsY: 15 },
  ]

  return (
    <section id="methodology" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950" />
      <IsometricBackground />

      <div className="container mx-auto px-4 sm:px-8 relative z-10">
        {/* Header */}
        <AnimatedText>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Development Methodology
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              A systematic, AI-assisted approach to building scalable applications
              with clean architecture and modern design principles.
            </p>
          </div>
        </AnimatedText>

        {/* Desktop: Honeycomb SVG Layout */}
        <div className="hidden lg:block relative">
          <AnimatedText>
            <div className="relative grid place-items-center" style={{ height: '780px' }}>
              <svg
                viewBox="0 0 800 780"
                className="w-full h-full"
              >
                {/* Center hexagon (rendered first when not hovered so others overlap it) */}
                {hoveredPhase !== 0 && (
                  <CenterHexagon
                    isHovered={false}
                    onHover={() => setHoveredPhase(0)}
                    onLeave={() => setHoveredPhase(null)}
                  />
                )}

                {/* Phase hexagons */}
                {hexagonConfigs.map((config) => {
                  const phase = phases.find(p => p.id === config.id)!
                  return (
                    <Hexagon
                      key={config.id}
                      phase={phase}
                      transform={config.transform}
                      tagsPosition={config.tagsPosition}
                      tagsX={config.tagsX}
                      tagsY={config.tagsY}
                      isHovered={hoveredPhase === config.id}
                      onHover={() => setHoveredPhase(config.id)}
                      onLeave={() => setHoveredPhase(null)}
                    />
                  )
                })}

                {/* Center hexagon (rendered last when hovered so it appears on top) */}
                {hoveredPhase === 0 && (
                  <CenterHexagon
                    isHovered={true}
                    onHover={() => setHoveredPhase(0)}
                    onLeave={() => setHoveredPhase(null)}
                  />
                )}
              </svg>

              {/* Hover detail panel */}
              <HoverPanel phase={activePhase} isVisible={hoveredPhase !== null} />
            </div>
          </AnimatedText>
        </div>

        {/* Mobile/Tablet: Card-based layout */}
        <div className="lg:hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {phases.map((phase, idx) => (
              <AnimatedText key={phase.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="
                    bg-white dark:bg-gray-800
                    rounded-2xl
                    border border-gray-200 dark:border-gray-700
                    p-5
                    shadow-sm
                    hover:shadow-lg
                    transition-all duration-300
                  "
                  style={{
                    borderTopColor: phase.colors.primary,
                    borderTopWidth: '3px'
                  }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${phase.colors.primary}20` }}
                    >
                      <div style={{ color: phase.colors.primary }}>
                        {phase.icon}
                      </div>
                    </div>
                    <div>
                      <span
                        className="text-xs font-bold"
                        style={{ color: phase.colors.primary }}
                      >
                        Phase {phase.id}
                      </span>
                      <h3 className="font-bold text-gray-900 dark:text-white text-sm">
                        {phase.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                    {phase.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {phase.tags.slice(0, 3).map(tag => (
                      <span
                        key={tag}
                        className={`
                          px-2 py-1 text-[10px] font-semibold rounded-lg border
                          ${phase.colors.tagText} ${phase.colors.tagBg} ${phase.colors.tagBorder}
                        `}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatedText>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}