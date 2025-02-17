import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Skills } from "@/components/sections/skills"
import { Projects } from "@/components/sections/projects"
import { Contact } from "@/components/sections/contact"
import { AIChat } from "@/components/ai-chat"
import { Navigation } from "@/components/navigation"
import { Analytics } from "@/components/analytics"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Analytics />
      <Navigation />
      <div className="space-y-20 pt-16 pb-8">
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
      <AIChat />
    </main>
  )
}
