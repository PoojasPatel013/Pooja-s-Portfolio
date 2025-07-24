import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Award } from "lucide-react"

export function Education() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Education & Certifications</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="space-y-8">
            {/* Education */}
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle className="text-2xl text-slate-900">Bachelor of Technology</CardTitle>
                    <p className="text-lg text-blue-600 font-semibold">Computer Science Engineering</p>
                    <p className="text-gray-600">Parul University</p>
                  </div>
                  <div className="flex flex-col md:items-end mt-2 md:mt-0">
                    <div className="flex items-center text-gray-600 mb-1">
                      <Calendar className="w-4 h-4 mr-2" />
                      2022 – 2026
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      Vadodara, India
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Award className="w-5 h-5 text-yellow-600 mr-2" />
                  <span className="font-semibold text-slate-900">CGPA: 8.0/10 (First Class with Distinction)</span>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-slate-900">Relevant Coursework:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Cloud Computing</Badge>
                    <Badge variant="outline">Web Development</Badge>
                    <Badge variant="outline">Computer Networks</Badge>
                    <Badge variant="outline">Cybersecurity</Badge>
                    <Badge variant="outline">Data Structures & Algorithms</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50">
                <CardTitle className="text-xl text-slate-900">Certifications</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Award className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-slate-900">Google Cloud CyberSecurity Certificate</h4>
                      <p className="text-gray-600">Google Cloud (2025)</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Award className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-slate-900">Computer Networks</h4>
                      <p className="text-gray-600">NPTEL (2020)</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Credly Profile:</span> Available upon request
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
