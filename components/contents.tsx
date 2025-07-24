"use client"

export function Contents() {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center relative">
      {/* Clean watercolor background */}
      <div
        className="absolute inset-0 opacity-20 transform rotate-180"
        style={{
          backgroundImage: `url('/images/watercolor-clean.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Side - Contents */}
          <div className="bg-black/95 text-white p-16 rounded-sm shadow-2xl backdrop-blur-sm">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-script text-white mb-6 tracking-wide">Contents</h2>
              <div className="w-16 h-px bg-white mx-auto"></div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-8 group hover:bg-white/5 p-6 rounded-sm transition-all duration-500">
                <span className="text-4xl font-serif text-white/40 group-hover:text-white transition-colors tracking-wider">
                  01
                </span>
                <div>
                  <h3 className="text-2xl font-serif group-hover:text-gray-100 transition-colors tracking-wide">
                    About
                  </h3>
                  <p className="text-white/50 text-sm font-serif tracking-wide mt-2">Profile & Background</p>
                </div>
              </div>

              <div className="flex items-start gap-8 group hover:bg-white/5 p-6 rounded-sm transition-all duration-500">
                <span className="text-4xl font-serif text-white/40 group-hover:text-white transition-colors tracking-wider">
                  02
                </span>
                <div>
                  <h3 className="text-2xl font-serif group-hover:text-gray-100 transition-colors tracking-wide">
                    Experience
                  </h3>
                  <p className="text-white/50 text-sm font-serif tracking-wide mt-2">Professional Journey</p>
                </div>
              </div>

              <div className="flex items-start gap-8 group hover:bg-white/5 p-6 rounded-sm transition-all duration-500">
                <span className="text-4xl font-serif text-white/40 group-hover:text-white transition-colors tracking-wider">
                  03
                </span>
                <div>
                  <h3 className="text-2xl font-serif group-hover:text-gray-100 transition-colors tracking-wide">
                    Projects
                  </h3>
                  <p className="text-white/50 text-sm font-serif tracking-wide mt-2">Featured Works</p>
                </div>
              </div>

              <div className="flex items-start gap-8 group hover:bg-white/5 p-6 rounded-sm transition-all duration-500">
                <span className="text-4xl font-serif text-white/40 group-hover:text-white transition-colors tracking-wider">
                  04
                </span>
                <div>
                  <h3 className="text-2xl font-serif group-hover:text-gray-100 transition-colors tracking-wide">
                    Contact
                  </h3>
                  <p className="text-white/50 text-sm font-serif tracking-wide mt-2">Get In Touch</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Community Illustration */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-96 h-96 flex items-center justify-center">
                <img
                  src="/images/community-illustration.png"
                  alt="Community illustration"
                  width={320}
                  height={320}
                  className="animate-float-slow opacity-90"
                />
              </div>

              {/* Artistic floating labels */}
              <div className="absolute -top-6 -left-6 animate-float-medium">
                <div className="bg-white/90 backdrop-blur-sm text-black px-5 py-3 rounded-full text-sm font-serif tracking-wider shadow-lg border border-gray-200">
                  CONNECT
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 animate-float-fast">
                <div className="bg-black/90 backdrop-blur-sm text-white px-5 py-3 rounded-full text-sm font-serif tracking-wider shadow-lg">
                  COLLABORATE
                </div>
              </div>

              <div className="absolute top-1/4 -right-12 animate-float-slow">
                <div className="bg-gray-800/90 backdrop-blur-sm text-white px-5 py-3 rounded-full text-sm font-serif tracking-wider shadow-lg">
                  SUPPORT
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
