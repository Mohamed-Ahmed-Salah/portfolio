'use client'

import AnimatedText from "../common/AnimatedText"

export default function About() {
  return (
    <section id="about" className="min-h-screen w-full flex items-center justify-center p-8">
      <div className="max-w-2xl space-y-12">
        <AnimatedText>
          <h1 className="text-4xl font-bold mb-8">About Me</h1>
        </AnimatedText>

        <div className="space-y-8">
          <AnimatedText>
            <div className="space-y-4">
              <p className="text-lg text-foreground/80 leading-relaxed">
                Outside of daily development work, I spend time learning about software design and system architecture and how systems scale.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                I also practice offensive cybersecurity. Hack The Box, PortSwigger, TryHackMe. Understanding how common vulnerabilities and attacks work makes me design software with security in mind from the start.
              </p>
            </div>
          </AnimatedText>

          <AnimatedText>
            <div className="space-y-4">
              <p className="text-lg text-foreground/80 leading-relaxed">
              Outside of tech, I enjoy playing the piano and listening to Arabic oud. I'm also an enthusiast about horses and horse riding, embracing the spirit of فروسيه (furusiyyah). I enjoy exploring cultural traditions through music and learning about their history, crafts and arts.
              </p>
              <blockquote className="text-sm text-foreground/70 italic border-l-4 border-primary/50 pl-4 py-2">
                <p className="mb-1">
                  <span className="font-bold">ركوب الخيل عز، لا يعرفه إلا الفرسان</span>
                </p>
                <p className="text-foreground/60">
                  "Horse riding is a form of honor only true horsemen understand."
                </p>
              </blockquote>
            </div>
          </AnimatedText>
        </div>
      </div>
    </section>
  )
}