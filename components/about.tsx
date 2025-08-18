"use client"

export function About() {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center py-24 relative">
      {/* Clean watercolor background */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `url('/images/watercolor-clean.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          transform: "scaleX(-1)",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Centered About Content */}
          <div className="text-center space-y-16">
            <div className="space-y-10">
              <div className="inline-block">
                <span className="bg-black/90 text-white px-6 py-3 rounded-full text-xs font-sans font-medium tracking-[0.2em] uppercase">
                  ✦ About Me ✦
                </span>
              </div>
              <h2 className="text-7xl lg:text-8xl font-script text-black leading-tight tracking-wide">
                passionate learner
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-10">
              <p className="text-2xl text-gray-700 leading-relaxed font-serif tracking-wide">
                Passionate about technical coordination, developer communication, and technology policy. Skilled in
                cloud-native tools (GCP, Kubernetes, Docker), user-focused platform development, and cybersecurity
                fundamentals.
              </p>

              <p className="text-2xl text-gray-700 leading-relaxed font-serif tracking-wide">
                A published author and NCC cadet with a strong foundation in leadership, public speaking, and
                service-oriented thinking. Eager to contribute to mission-driven roles in program management, developer
                advocacy, or public policy at global tech organizations.
              </p>
            </div>

            {/* Resume Download Section */}
            <div className="flex justify-center pt-8">
              <div
                onClick={() => {
                  // Create a temporary link to download the resume
                  const link = document.createElement("a")
                  link.href = "./resume/pooja-patel-resume.pdf" // You'll need to add your PDF to public/resume/
                  link.download = "Pooja_Patel_Resume.pdf"
                  document.body.appendChild(link)
                  link.click()
                  document.body.removeChild(link)
                }}
                className="bg-white/90 backdrop-blur-sm border-2 border-black p-8 rounded-sm shadow-artistic hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-black rounded-sm flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                      <path
                        d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <polyline
                        points="14,2 14,8 20,8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <line
                        x1="16"
                        y1="13"
                        x2="8"
                        y2="13"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <line
                        x1="16"
                        y1="17"
                        x2="8"
                        y2="17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <polyline
                        points="10,9 9,9 8,9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-serif text-black mb-2 group-hover:text-gray-800 transition-colors">
                      Download Resume
                    </h3>
                    <p className="text-gray-600 font-serif tracking-wide">
                      Get a comprehensive overview of my experience, skills, and achievements
                    </p>
                  </div>
                  <div className="w-8 h-8 border-2 border-black rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="current">
                      <path
                        d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <polyline
                        points="7,10 12,15 17,10"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <line
                        x1="12"
                        y1="15"
                        x2="12"
                        y2="3"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-16 pt-12">
              <div className="text-center p-10 bg-white/80 backdrop-blur-sm rounded-sm border border-gray-200 shadow-lg">
                <div className="text-5xl font-script text-black mb-4">8.0</div>
                <div className="text-sm text-gray-600 uppercase tracking-[0.2em] font-serif">CGPA</div>
              </div>
              <div className="text-center p-10 bg-white/80 backdrop-blur-sm rounded-sm border border-gray-200 shadow-lg">
                <div className="text-5xl font-script text-black mb-4">4+</div>
                <div className="text-sm text-gray-600 uppercase tracking-[0.2em] font-serif">Projects</div>
              </div>
            </div>
          </div>

          {/* Growth mindset illustration */}
          <div className="flex justify-center mt-20">
            <div className="w-48 h-48 flex items-center justify-center">
              <img
                src="/images/growth-mindset.png"
                alt="Growth mindset illustration"
                width={160}
                height={160}
                className="animate-float-slow opacity-80"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
