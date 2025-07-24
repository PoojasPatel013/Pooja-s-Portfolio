"use client"

const projects = [
  {
    title: "Disaster Risk Prediction Platform",
    role: "Project Creator & Lead Architect",
    description:
      "Designed and implemented a full-stack, containerized ML platform to predict and visualize global disaster risks.",
    highlights: [
      "Built a PyTorch-based prediction model",
      "Developed interactive UI using Streamlit",
      "Deployed via Docker & Kubernetes",
      "Prioritized explainability and user accessibility",
    ],
    tech: ["PyTorch", "Streamlit", "Docker", "Kubernetes", "ML"],
  },
  {
    title: "CarbonTrace – Carbon Footprint Tracker",
    role: "Sole Developer & Product Designer",
    description:
      "Created an AI-powered sustainability tracking app to estimate individual carbon footprints based on user habits.",
    highlights: [
      "Integrated external APIs for data collection",
      "Used gamification to improve user retention",
      "Built with Streamlit UI and MongoDB",
      "Emphasized accessible and actionable recommendations",
    ],
    tech: ["AI/ML", "Streamlit", "MongoDB", "API Integration"],
  },
  {
    title: "FemPlan – Women's Wellness & Productivity App",
    role: "End-to-End Developer & UX Designer",
    description: "Developed a women-centric health platform for cycle tracking, wellness tips, and journaling.",
    highlights: [
      "Implemented backend in Flask with cycle prediction logic",
      "Emphasized privacy, inclusivity, and digital health compliance",
      "Created comprehensive wellness tracking system",
    ],
    tech: ["Flask", "Python", "Health Tech", "UX Design"],
  },
  {
    title: "ChronoVault – Mental Wellness Platform",
    role: "Founder & Technical Product Lead",
    description:
      "Built a community-based platform combining AI-assisted therapy, journaling, and behavioral analytics.",
    highlights: [
      "Integrated GPT-powered conversational support",
      "Launched mood tracker and goal dashboard",
      "Prioritized ethical AI practices in mental health tech",
      "Created personalized wellness insights",
    ],
    tech: ["GPT Integration", "Mental Health Tech", "Analytics"],
  },
]

export function Projects() {
  return (
    <section className="min-h-screen bg-white py-24">
      {/* Watercolor background */}
      <div
        className="absolute inset-0 opacity-12"
        style={{
          backgroundImage: `url('/images/watercolor-clean.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          transform: "rotate(270deg)",
        }}
      />
      {/* Elegant grid background */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='140' height='140' viewBox='0 0 140 140' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='28' height='28' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 28 0 L 0 0 0 28' fill='none' stroke='%23000000' strokeWidth='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='140' height='140' fill='url(%23grid)' /%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="bg-black text-white px-6 py-3 rounded-full text-xs font-bold tracking-[0.2em] uppercase">
                ✦ Featured Works ✦
              </span>
            </div>
            <h2 className="text-6xl font-script text-black mb-6 tracking-wide">Projects</h2>
            <div className="w-16 h-px bg-black mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mb-20">
            {projects.map((project, index) => (
              <div key={index} className="group">
                <div className="bg-white/80 backdrop-blur-sm border border-gray-100 p-10 rounded-sm hover:border-gray-300 transition-all duration-500 h-full shadow-artistic">
                  {/* Project number */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-7xl font-extralight text-gray-200 group-hover:text-black transition-colors tracking-wider">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="w-16 h-px bg-gray-200 group-hover:bg-black transition-colors"></div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-serif text-black mb-3 group-hover:text-gray-800 transition-colors tracking-wide">
                        {project.title}
                      </h3>
                      <p className="text-gray-500 font-light text-sm uppercase tracking-[0.1em]">{project.role}</p>
                    </div>

                    <p className="text-gray-600 leading-relaxed font-light tracking-wide">{project.description}</p>

                    <div>
                      <h4 className="text-black font-light mb-4 text-sm uppercase tracking-[0.1em]">Key Highlights</h4>
                      <ul className="space-y-3">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-4">
                            <div className="w-1 h-1 bg-black rounded-full mt-3 flex-shrink-0"></div>
                            <span className="text-gray-500 text-sm leading-relaxed font-light tracking-wide">
                              {highlight}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6 border-t border-gray-100">
                      <h4 className="text-black font-light mb-4 text-sm uppercase tracking-[0.1em]">Technologies</h4>
                      <div className="flex flex-wrap gap-3">
                        {project.tech.map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-white border border-gray-200 px-4 py-2 rounded-full text-black text-xs font-light"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Meditation illustration */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 flex items-center justify-center">
                <img
                  src="/images/meditation-illustration.png"
                  alt="Meditation illustration"
                  width={260}
                  height={260}
                  className="animate-float-slow opacity-80"
                />
              </div>

              {/* Elegant floating labels */}
              <div className="absolute -top-6 -left-12 animate-float-medium">
                <div className="bg-white text-black px-4 py-2 rounded-full text-xs font-light tracking-wider shadow-lg border border-gray-100">
                  FOCUS
                </div>
              </div>

              <div className="absolute -bottom-6 -right-12 animate-float-fast">
                <div className="bg-gray-800 text-white px-4 py-2 rounded-full text-xs font-light tracking-wider shadow-lg">
                  BALANCE
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
