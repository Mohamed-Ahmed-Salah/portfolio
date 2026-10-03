'use client'

import AnimatedText from "../common/AnimatedText"
import AppShowcase from "../common/AppShowcase"

// Fine paper-like grain, generated as an SVG noise tile
const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"

// Simple, friendly hero: greeting with photo, one strong headline, then shipped apps
export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden min-h-screen flex flex-col items-center justify-center gap-10 px-6 py-24 text-center font-(family-name:--font-geist-sans)"
    >
      {/* Soft background (dark theme only): one blurred glow behind the text, plus faint grain; fades out at the bottom */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 hidden dark:block"
        style={{ maskImage: 'linear-gradient(to bottom, black 65%, transparent)' }}
      >
        <div className="absolute left-1/2 top-[42%] h-[480px] w-[760px] max-w-[150vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-400/10 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.05] mix-blend-screen"
          style={{ backgroundImage: GRAIN }}
        />
      </div>

      <AnimatedText className="flex items-center justify-center gap-2 text-base sm:text-lg font-medium tracking-tight text-zinc-600 dark:text-zinc-300">
        <span>Hello</span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/portfolio/images/me-avatar.jpg"
          alt="Mohamed Ahmed"
          width={30}
          height={30}
          className="size-[30px] shrink-0 max-w-none rounded-full object-cover shadow-sm"
        />
        <span>I&apos;m Mohamed</span>
      </AnimatedText>

      <AnimatedText>
        <h1 className="max-w-3xl text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.15] text-zinc-900 dark:text-zinc-50">
          I build software
          <br className="hidden sm:block" />

          <em className="font-(family-name:--font-instrument-serif) font-normal italic">engineered</em> to scale{' '}
          <br className="hidden sm:block" />
          with simple experiences.
        </h1>
        <p className="mt-6 text-base sm:text-lg text-zinc-500 dark:text-zinc-400">
          Mobile developer in Riyadh · iOS &amp; Android · 8+ apps, 80,000+ downloads
        </p>
      </AnimatedText>

      <AnimatedText className="flex flex-col items-center gap-8">
        <div className="text-zinc-500 dark:text-zinc-400">
          <AppShowcase label="Apps I've shipped" />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
          <a
            className="rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-5 py-2.5 font-medium hover:opacity-85 transition-opacity"
            href="mailto:&#x6d;&#x6f;&#x68;&#x61;&#x6d;&#x65;&#x64;&#x61;&#x32;&#x34;&#x39;&#x40;&#x68;&#x6f;&#x74;&#x6d;&#x61;&#x69;&#x6c;&#x2e;&#x63;&#x6f;&#x6d;"
          >
            Say hello
          </a>
          <a
            className="rounded-full border border-zinc-200 dark:border-zinc-800 px-5 py-2.5 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            href="https://github.com/Mohamed-Ahmed-Salah"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="rounded-full border border-zinc-200 dark:border-zinc-800 px-5 py-2.5 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            href="https://www.linkedin.com/in/mohamed-ahmed-972543208/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </AnimatedText>
    </section>
  )
}
