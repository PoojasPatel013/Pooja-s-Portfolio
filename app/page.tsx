import Hero from "@/components/hero"
import { Contents } from "@/components/contents"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Navbar } from "@/components/navbar"
import { FloatingDoodleSection } from "@/components/floating-doodle-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <Contents />
      <FloatingDoodleSection />

      <section id="about">
        <About />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </main>
  )
}
