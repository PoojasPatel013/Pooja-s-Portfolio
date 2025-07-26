"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Certifications() {
  return (
    <section className="py-20 bg-white relative">
      {/* Clean watercolor background */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `url('/images/watercolor-clean.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          transform: "scaleY(-1)",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="bg-black text-white px-6 py-3 rounded-full text-xs font-bold tracking-[0.2em] uppercase">
                ✦ Professional Growth ✦
              </span>
            </div>
            <h2 className="text-6xl font-script text-black mb-6 tracking-wide">Certifications</h2>
            <div className="w-16 h-px bg-black mx-auto"></div>
          </div>

          <div className="space-y-8">
            {/* Certifications */}
            <Card className="shadow-artistic border border-gray-200">
              <CardHeader className="bg-gradient-to-r from-gray-50 to-white">
                <CardTitle className="text-2xl text-black font-serif tracking-wide">
                  Professional Certifications
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Award className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="font-serif text-xl text-black mb-2">Google Cloud CyberSecurity Certificate</h4>
                      <p className="text-gray-600 font-serif">Google Cloud • 2025</p>
                      <Badge variant="outline" className="mt-2">
                        Cloud Security
                      </Badge>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Award className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="font-serif text-xl text-black mb-2">Computer Networks</h4>
                      <p className="text-gray-600 font-serif">NPTEL • 2020</p>
                      <Badge variant="outline" className="mt-2">
                        Networking
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Credly Profile CTA */}
            <div className="bg-black text-white p-8 rounded-sm shadow-artistic">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-serif mb-3">Explore My Complete Certification Portfolio</h3>
                  <p className="text-gray-300 font-serif">
                    View detailed certification badges, skills assessments, and professional achievements on my Credly
                    profile.
                  </p>
                </div>
                <Button
                  className="bg-white hover:bg-gray-100 text-black font-serif tracking-wide flex items-center gap-2 w-fit"
                  onClick={() => window.open("https://www.credly.com/users/pooja-patel.8070755d", "_blank")}
                >
                  <ExternalLink className="w-4 h-4" />
                  Check Out Credly Profile
                </Button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
