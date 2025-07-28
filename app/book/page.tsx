"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Heart, Star, BookOpen, Quote } from "lucide-react"

export default function BookPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-rose-50">
      {/* Subtle watercolor background - placeholder for now */}
      <div
        className="absolute inset-0 opacity-10 animate-watercolor-flow"
        style={{
          backgroundImage: `url('/images/watercolor-clean.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            {/* Book Cover */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-200 to-rose-200 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-gentle-sway"></div>
                <div className="relative bg-white p-6 rounded-2xl shadow-watercolor transform hover:scale-105 transition-transform duration-500">
                  <img
                    src="/images/book-cover.png"
                    alt="Weight of Empty Hands book cover"
                    className="w-80 h-auto rounded-lg shadow-artistic"
                  />
                </div>
              </div>
            </div>

            {/* Book Details */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-amber-600 animate-float-slow">
                  <Heart className="w-5 h-5 fill-current" />
                  <span className="text-sm font-medium tracking-wide">A Journey of Healing</span>
                </div>

                <h1 className="text-5xl lg:text-6xl font-serif text-gray-900 leading-tight text-artistic">
                  Weight of
                  <span className="block text-amber-600 font-script text-handwritten">Empty Hands</span>
                </h1>

                <p className="text-xl text-gray-600 font-light leading-relaxed text-elegant-serif">
                  When sunflowers meet the spirit
                </p>

                <p className="text-lg text-gray-700 font-script-small">by Pooja Patel</p>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-amber-400 text-amber-400 animate-float-fast"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </div>
                <span className="text-gray-600">Available on Amazon</span>
              </div>

              <div className="space-y-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-amber-600 to-rose-600 hover:from-amber-700 hover:to-rose-700 text-white px-8 py-6 text-lg font-medium rounded-full shadow-watercolor hover:shadow-xl transition-all duration-300"
                  asChild
                >
                  <a
                    href="https://www.amazon.in/Weight-empty-hands-sunflowers-spirit/dp/9369535055"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BookOpen className="w-5 h-5 mr-2" />
                    Get Your Copy
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>

                <p className="text-sm text-gray-500">Available in paperback • ISBN: 9369535055</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Description */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Quote className="w-12 h-12 text-amber-600 mx-auto mb-6 animate-gentle-sway" />
              <h2 className="text-4xl font-serif text-gray-900 mb-6 text-elegant-serif">About the Story</h2>
              <div className="w-24 h-px bg-gradient-to-r from-amber-600 to-rose-600 mx-auto"></div>
            </div>

            <Card className="bg-white/80 backdrop-blur-artistic border-0 shadow-watercolor">
              <CardContent className="p-12">
                <blockquote className="text-xl text-gray-700 leading-relaxed font-light text-center italic mb-8 text-elegant-serif">
                  "This is the story of a woman's journey to reclaim her light after enduring rejection and fear. It's
                  about learning to accept the scars and the beauty they hold, discovering that the love she thought
                  impossible began within herself."
                </blockquote>

                <div className="prose prose-lg prose-gray max-w-none">
                  <p className="text-gray-600 leading-relaxed">
                    Along the way, she encountered someone extraordinary—a soul who refused to give up on her, who saw
                    her worth when she couldn't. <em>Weight of Empty Hands</em> is a story for anyone who's ever felt
                    lost, but dared to keep searching.
                  </p>

                  <p className="text-gray-600 leading-relaxed">
                    It's about the courage to heal, the power of love, and the rare, precious people who help us carry
                    the weight until we learn to let it go.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Themes Section */}
      <section className="py-20 bg-gradient-to-r from-amber-50 to-rose-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif text-gray-900 mb-6 text-elegant-serif">Themes That Resonate</h2>
              <p className="text-xl text-gray-600 font-light">A story that speaks to the heart</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white/90 backdrop-blur-artistic border-0 shadow-artistic hover:shadow-watercolor transition-shadow duration-300 animate-float-slow">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-gentle-sway">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-serif text-gray-900 mb-4 text-elegant-serif">Self-Love</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Discovering that the love we seek begins within ourselves, learning to embrace our worth and beauty.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-artistic border-0 shadow-artistic hover:shadow-watercolor transition-shadow duration-300 animate-float-medium">
                <CardContent className="p-8 text-center">
                  <div
                    className="w-16 h-16 bg-gradient-to-br from-rose-400 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-gentle-sway"
                    style={{ animationDelay: "1s" }}
                  >
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-serif text-gray-900 mb-4 text-elegant-serif">Healing</h3>
                  <p className="text-gray-600 leading-relaxed">
                    The courage to heal from rejection and fear, accepting our scars as part of our beautiful story.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-artistic border-0 shadow-artistic hover:shadow-watercolor transition-shadow duration-300 animate-float-fast">
                <CardContent className="p-8 text-center">
                  <div
                    className="w-16 h-16 bg-gradient-to-br from-amber-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-gentle-sway"
                    style={{ animationDelay: "2s" }}
                  >
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7.5V9M15 11.5L21 12V14L15 13.5V11.5ZM21 16V18L15 17.5V16M12 7.5C11.2 7.5 10.5 7.7 9.9 8.1L11 10.5L8.5 11L7.4 8.6C7.1 9.2 7 9.8 7 10.5V16.5C7 17.3 7.7 18 8.5 18S10 17.3 10 16.5V14L12 13L14 14V16.5C14 17.3 14.7 18 15.5 18S17 17.3 17 16.5V10.5C17 8.6 15.4 7 13.5 7H12.5" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-serif text-gray-900 mb-4 text-elegant-serif">Connection</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Finding those rare souls who see our worth and help us carry the weight until we learn to let it go.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-amber-600 to-rose-600 rounded-3xl p-12 text-white shadow-watercolor">
              <h2 className="text-4xl font-serif mb-6 text-handwritten">Begin Your Journey</h2>
              <p className="text-xl font-light mb-8 opacity-90">
                For anyone who's ever felt lost, but dared to keep searching
              </p>

              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-6 text-lg font-medium rounded-full shadow-artistic hover:shadow-watercolor transition-all duration-300"
                asChild
              >
                <a
                  href="https://www.amazon.in/Weight-empty-hands-sunflowers-spirit/dp/9369535055"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  Order on Amazon
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>

              <p className="text-sm mt-6 opacity-75">Available worldwide • Free shipping on eligible orders</p>
            </div>
          </div>
        </div>
      </section>

      {/* Floating elements for ambiance */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-10 animate-float-slow opacity-20">
          <svg width="40" height="40" viewBox="0 0 40 40" className="text-amber-400">
            <circle cx="20" cy="8" r="6" fill="currentColor" />
            <path d="M20 14 L16 30 L20 28 L24 30 Z" fill="currentColor" />
          </svg>
        </div>

        <div className="absolute top-3/4 right-16 animate-float-medium opacity-20">
          <Heart className="w-8 h-8 text-rose-400 fill-current" />
        </div>

        <div className="absolute top-1/2 right-1/4 animate-float-fast opacity-15">
          <svg width="32" height="32" viewBox="0 0 32 32" className="text-amber-500">
            <path
              d="M16 2L18 10L26 8L20 14L28 16L20 18L26 24L18 22L16 30L14 22L6 24L12 18L4 16L12 14L6 8L14 10Z"
              fill="currentColor"
            />
          </svg>
        </div>

        <div className="absolute bottom-1/4 left-1/4 animate-gentle-sway opacity-10">
          <svg width="36" height="36" viewBox="0 0 36 36" className="text-rose-300">
            <path d="M18 4 L22 14 L32 14 L24 20 L28 30 L18 24 L8 30 L12 20 L4 14 L14 14 Z" fill="currentColor" />
          </svg>
        </div>
      </div>
    </div>
  )
}
