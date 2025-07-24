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
