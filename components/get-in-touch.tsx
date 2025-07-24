"use client"

export function GetInTouch() {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Get in Touch */}
          <div className="space-y-8">
            <div>
              <h2 className="text-6xl font-bold text-black mb-8">Get in</h2>
              <h2 className="text-6xl font-bold text-black mb-8">Touch</h2>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-black/80">Ready to discuss your</p>
              <p className="text-lg text-black/80">next project or have</p>
              <p className="text-lg text-black/80">questions?</p>
              <p className="text-lg font-semibold text-black">Contact us today!</p>
            </div>

            <div className="space-y-3 pt-8">
              <div className="text-black">
                <p className="font-semibold">Email</p>
                <p className="text-black/70">hello@example.com</p>
              </div>
              <div className="text-black">
                <p className="font-semibold">Phone</p>
                <p className="text-black/70">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>

          {/* Right Side - Hand Illustration */}
          <div className="flex justify-center">
            <div className="relative">
              <svg width="250" height="300" viewBox="0 0 250 300" className="text-black/20">
                {/* Pointing hand */}
                <g transform="translate(50, 50)">
                  <path
                    d="M80 200 Q70 180 75 160 Q80 140 90 130 Q100 120 110 125 Q120 110 130 115 Q140 100 150 110 Q160 105 165 115 Q170 125 165 140 Q160 160 150 180 Q140 200 130 210 Q120 215 110 210 Q100 205 90 200 Q85 200 80 200"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Index finger pointing */}
                  <path
                    d="M130 115 Q125 80 130 50 Q135 20 140 10 Q145 20 150 50 Q155 80 150 115"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />

                  {/* Other fingers folded */}
                  <path
                    d="M110 125 Q105 110 110 100 Q115 110 120 125"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M150 110 Q155 95 160 90 Q165 95 170 110"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M165 115 Q170 100 175 95 Q180 100 185 115"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />

                  {/* Thumb */}
                  <path
                    d="M75 160 Q50 150 40 130 Q50 110 70 120 Q80 130 80 160"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </g>

                {/* Decorative dots */}
                <circle cx="200" cy="100" r="2" fill="currentColor" />
                <circle cx="30" cy="250" r="3" fill="currentColor" />
                <circle cx="220" cy="200" r="2" fill="currentColor" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
