"use client"

export function Experience() {
  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center py-24">
      {/* Watercolor background */}
      <div
        className="absolute inset-0 opacity-18 transform rotate-90"
        style={{
          backgroundImage: `url('/images/watercolor-clean.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Elegant grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='%23000000' strokeWidth='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23grid)' /%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Elegant floating doodles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Minimalist graduation cap */}
            <div className="absolute top-24 right-16 animate-float-slow">
              <svg width="32" height="32" viewBox="0 0 32 32" className="text-black/8">
                <path d="M4 16 L16 12 L28 16 L16 20 Z" fill="currentColor" opacity="0.4" />
                <path d="M16 20 L16 24 L20 25.5 L16 24" stroke="currentColor" strokeWidth="1" fill="none" />
                <circle cx="25" cy="17.5" r="2" fill="none" stroke="currentColor" strokeWidth="1" />
              </svg>
            </div>

            {/* Elegant lightbulb */}
            <div className="absolute bottom-40 left-12 animate-float-medium">
              <svg width="28" height="36" viewBox="0 0 28 36" className="text-black/10">
                <circle cx="14" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1" />
                <path d="M8 20 L20 20" stroke="currentColor" strokeWidth="1" />
                <path d="M10 24 L18 24" stroke="currentColor" strokeWidth="1" />
                <path d="M12 28 L16 28" stroke="currentColor" strokeWidth="1" />
                <path d="M12 10 Q14 6 16 10" stroke="currentColor" strokeWidth="0.5" fill="none" />
              </svg>
            </div>
          </div>

          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="bg-black text-white px-6 py-3 rounded-full text-xs font-bold tracking-[0.2em] uppercase">
                ✦ Professional Journey ✦
              </span>
            </div>
            <h2 className="text-6xl font-script text-black mb-6 tracking-wide">Experience</h2>
            <div className="w-16 h-px bg-black mx-auto"></div>
          </div>

          <div className="relative">
            {/* Elegant timeline line */}
            <div className="absolute left-10 top-0 bottom-0 w-px bg-gray-200"></div>

            {/* Experience Item */}
            <div className="relative pl-24 pb-16">
              {/* Refined timeline dot */}
              <div className="absolute left-8 top-10 w-5 h-5 bg-black rounded-full border-4 border-white shadow-lg"></div>

              <div className="bg-white border border-gray-100 p-10 rounded-sm shadow-lg">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
                  <div>
                    <h3 className="text-3xl font-serif text-black mb-3 tracking-wide">Cybersecurity Trainee</h3>
                    <p className="text-xl text-gray-600 font-serif tracking-wide">Pregard</p>
                  </div>
                  <div className="text-right mt-6 lg:mt-0">
                    <div className="bg-black text-white px-5 py-2 rounded-full inline-block">
                      <span className="text-sm font-light tracking-wide">Jul 2023 – Oct 2023</span>
                    </div>
                    <p className="text-gray-400 text-sm mt-3 font-light tracking-wide">Remote</p>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="flex items-start gap-5">
                    <div className="w-1.5 h-1.5 bg-black rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-600 leading-relaxed font-light tracking-wide">
                      Developed practical understanding of access control, penetration testing, and digital risk
                      prevention strategies.
                    </p>
                  </div>
                  <div className="flex items-start gap-5">
                    <div className="w-1.5 h-1.5 bg-black rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-600 leading-relaxed font-light tracking-wide">
                      Strengthened knowledge of secure system configurations across Linux and Windows operating systems.
                    </p>
                  </div>
                  <div className="flex items-start gap-5">
                    <div className="w-1.5 h-1.5 bg-black rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-600 leading-relaxed font-light tracking-wide">
                      Gained exposure to the ethical and operational foundations of cybersecurity in a real-world
                      context.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-100">
                  <h4 className="text-black font-light mb-4 tracking-wide">Skills Developed</h4>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-gray-50 border border-gray-200 px-4 py-2 rounded-full text-black text-sm font-light">
                      Access Control
                    </span>
                    <span className="bg-gray-50 border border-gray-200 px-4 py-2 rounded-full text-black text-sm font-light">
                      Penetration Testing
                    </span>
                    <span className="bg-gray-50 border border-gray-200 px-4 py-2 rounded-full text-black text-sm font-light">
                      Risk Assessment
                    </span>
                    <span className="bg-gray-50 border border-gray-200 px-4 py-2 rounded-full text-black text-sm font-light">
                      System Security
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Education Item */}
            <div className="relative pl-24">
              {/* Timeline dot */}
              <div className="absolute left-8 top-10 w-5 h-5 bg-gray-400 rounded-full border-4 border-white shadow-lg"></div>

              <div className="bg-white border border-gray-100 p-10 rounded-sm shadow-lg">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
                  <div>
                    <h3 className="text-3xl font-serif text-black mb-3 tracking-wide">Bachelor of Technology</h3>
                    <p className="text-xl text-gray-600 font-serif tracking-wide">Computer Science Engineering</p>
                    <p className="text-gray-400 font-light tracking-wide">Parul University</p>
                  </div>
                  <div className="text-right mt-6 lg:mt-0">
                    <div className="bg-gray-600 text-white px-5 py-2 rounded-full inline-block">
                      <span className="text-sm font-light tracking-wide">2022 – 2026</span>
                    </div>
                    <p className="text-gray-400 text-sm mt-3 font-light tracking-wide">Vadodara, India</p>
                  </div>
                </div>

                <div className="flex items-center gap-5 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-black text-xl">🏆</span>
                    <span className="text-black font-light tracking-wide">CGPA: 8.0/10</span>
                    <span className="text-gray-400 text-sm font-light">(First Class with Distinction)</span>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-100">
                  <h4 className="text-black font-light mb-4 tracking-wide">Relevant Coursework</h4>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-gray-50 border border-gray-200 px-4 py-2 rounded-full text-black text-sm font-light">
                      Cloud Computing
                    </span>
                    <span className="bg-gray-50 border border-gray-200 px-4 py-2 rounded-full text-black text-sm font-light">
                      Web Development
                    </span>
                    <span className="bg-gray-50 border border-gray-200 px-4 py-2 rounded-full text-black text-sm font-light">
                      Computer Networks
                    </span>
                    <span className="bg-gray-50 border border-gray-200 px-4 py-2 rounded-full text-black text-sm font-light">
                      Cybersecurity
                    </span>
                    <span className="bg-gray-50 border border-gray-200 px-4 py-2 rounded-full text-black text-sm font-light">
                      DSA
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
