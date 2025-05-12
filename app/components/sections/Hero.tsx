'use client'

import Image from "next/image"
import AnimatedText from "../common/AnimatedText"
import FloatingElements from "../common/FloatingElements"

export default function Hero() {
  return (
    <section id="home" className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <FloatingElements />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <AnimatedText className="flex flex-col items-center sm:items-start gap-4">
          <Image
            className="rounded-full"
            src="/portfolio/images/me.jpg" 
            alt="Profile Picture"
            width={120}
            height={120}
            priority
          />
          <h1 className="text-4xl font-bold">Mohamed Ahmed</h1>
          <p className="text-lg text-foreground/80 font-[family-name:var(--font-geist-mono)]">
            Flutter Developer
          </p>
        </AnimatedText>

        <AnimatedText 
          className="max-w-2xl text-center sm:text-left"
        >
          <p className="text-foreground/80 leading-relaxed">
           Hi stranger! I'm Mohamed, a Flutter developer dedicated to turning ideas into creative solutions. I specialize in creating seamless and intuitive user experiences.
          </p>
        </AnimatedText>

        <AnimatedText 
          className="flex gap-4 items-center flex-row"
        >
          <a
            className="
              relative
              z-20
              rounded-full border border-solid border-black/[.08] dark:border-white/[.145] 
              transition-colors flex items-center justify-center 
              hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] 
              h-12                                    // Fixed height
              px-5                                   // Fixed padding
              text-base                              // Fixed font size
            "
            href="https://github.com/Mohamed-Ahmed-Salah" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="invert dark:invert-0 mr-2"
              src="/portfolio/github.svg"
              alt="GitHub"
              width={20}
              height={20}
              sizes="20px"
            />
            <span className="relative z-20">GitHub</span>
          </a>
          <a
            className="
              rounded-full border border-solid border-black/[.08] dark:border-white/[.145] 
              transition-colors flex items-center justify-center 
              hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] 
              hover:border-transparent 
              h-12                                   // Fixed height
              px-5                                   // Fixed padding
              text-base                              // Fixed font size
              min-w-44                              // Fixed minimum width
            "
            href="/resume.pdf" // Replace with your resume PDF path in public folder
            target="_blank"
          >
            <Image
              className="dark:invert mr-2"
              src="/portfolio/resume.svg"
              alt="Resume"
              width={20}
              height={20}
              sizes="20px"
            />
            View Resume
          </a>
        </AnimatedText>
      </main>

      <AnimatedText 
        className="row-start-3 flex gap-6 flex-wrap items-center justify-center"
      >
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="mailto:mohameda249@hotmail.com" // Replace with your email address
        >
          <Image
            aria-hidden
            className="dark:invert"
            src="/portfolio/mail.svg"
            alt="Email"
            width={16}
            height={16}
          />
          Send Email
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/mohamed-ahmed-972543208/" 
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            className="dark:invert"
            src="/portfolio/linkedin.svg"
            alt="LinkedIn"
            width={16}
            height={16}
          />
          LinkedIn
        </a>
      </AnimatedText>
    </section>
  )
} 