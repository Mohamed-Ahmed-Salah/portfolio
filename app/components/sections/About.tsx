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
                I'm a Software Engineer from Sudan. I graduated with honors in BSc Software Engineering from Eastern Mediterranean University in 2021.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
              I love building Mobile Applications with Flutter, focusing on creating scalable, high-performing applications tailored to both user needs and business objectives.
              I follow clean architecture and state management best practices to ensure maintainable, scalable and testable code.
              I also work with Java Spring Boot to build robust backend restful services that integrate seamlessly with mobile and web frontends.
              </p>
            </div>
          </AnimatedText>

          <AnimatedText>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Personal Interests</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
              Outside of tech, I enjoy playing the piano and listening to Arabic oud.I'm also an enthusiast about horses and horse riding, embracing the spirit of فروسيه (furusiyyah). I enjoy exploring cultural traditions through music and learning about their hitsory, crafts and arts.
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

          <AnimatedText>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Career Goals</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Seeking to advance my career as a senior Flutter developer, with a focus on leveraging my cybersecurity background to create innovative, secure and beautiful mobile applications that solve real-world problems.  
              </p>
              <blockquote className="text-sm text-foreground/70 italic border-l-4 border-primary/50 pl-4 py-2">
                
                <p className="text-foreground/60">
                  "I have not failed. I've just found 10,000 ways that won't work." Thomas A. Edison
                </p>
              </blockquote>
            </div>
          </AnimatedText>
        </div>
      </div>
    </section>
  )
}