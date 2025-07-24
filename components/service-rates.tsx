"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function ServiceRates() {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-black mb-4">Service Rates</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Starter Package */}
          <Card className="border-2 border-gray-200 hover:border-black transition-colors">
            <CardHeader className="text-center p-8">
              <CardTitle className="text-2xl font-bold text-black mb-2">Starter Package</CardTitle>
              <div className="text-4xl font-bold text-black mb-4">$500</div>
              <p className="text-gray-600">Perfect for small projects</p>
            </CardHeader>
            <CardContent className="p-8 pt-0">
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-black">Logo Design</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-black">Business Card</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-black">Basic Brand Guidelines</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-black">2 Revisions</span>
                </li>
              </ul>
              <Button className="w-full bg-black hover:bg-gray-800 text-white">Get Started</Button>
            </CardContent>
          </Card>

          {/* Premium Package */}
          <Card className="border-2 border-black bg-black text-white relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-white text-black px-4 py-1 rounded-full text-sm font-semibold">MOST POPULAR</span>
            </div>
            <CardHeader className="text-center p-8">
              <CardTitle className="text-2xl font-bold mb-2">Premium Package</CardTitle>
              <div className="text-4xl font-bold mb-4">$1200</div>
              <p className="text-white/80">Ideal for growing businesses</p>
            </CardHeader>
            <CardContent className="p-8 pt-0">
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Complete Brand Identity</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Website Design</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Marketing Materials</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>5 Revisions</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Priority Support</span>
                </li>
              </ul>
              <Button className="w-full bg-white hover:bg-gray-100 text-black">Get Started</Button>
            </CardContent>
          </Card>

          {/* Growth Package */}
          <Card className="border-2 border-gray-200 hover:border-black transition-colors">
            <CardHeader className="text-center p-8">
              <CardTitle className="text-2xl font-bold text-black mb-2">Growth Package</CardTitle>
              <div className="text-4xl font-bold text-black mb-4">$2500</div>
              <p className="text-gray-600">For established companies</p>
            </CardHeader>
            <CardContent className="p-8 pt-0">
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-black">Full Brand Strategy</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-black">Website + E-commerce</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-black">Digital Marketing</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-black">Unlimited Revisions</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-black">24/7 Support</span>
                </li>
              </ul>
              <Button className="w-full bg-black hover:bg-gray-800 text-white">Get Started</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
