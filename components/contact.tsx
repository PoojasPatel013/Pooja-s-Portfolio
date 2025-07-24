"use client"

import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import emailjs from "@emailjs/browser"

export function Contact() {
  const form = useRef<HTMLFormElement>(null)
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    if (!form.current) return

    emailjs
      .sendForm(
        "service_6q69q0d",     // ✅ replace with your EmailJS service ID
        "template_6q69q0d",    // ✅ replace with your EmailJS template ID
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

      )
      .then(
        () => {
          setSent(true)
          setLoading(false)
          form.current?.reset()
        },
        (error) => {
          console.error("FAILED...", error.text)
          setLoading(false)
        }
      )
  }

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center py-24 relative overflow-hidden">
      {/* Elegant grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='%23000000' strokeWidth='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23grid)' /%3E%3C/svg%3E")`,
        }}
      />

      {/* Watercolor background */}
      <div
        className="absolute inset-0 opacity-25 transform scale-x-[-1]"
        style={{
          backgroundImage: `url('/images/watercolor-clean.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Side - Contact Info */}
            <div className="space-y-10">
              <div>
                <div className="inline-block mb-6">
                  <span className="bg-black text-white px-6 py-3 rounded-full text-xs font-bold tracking-[0.2em] uppercase">
                    ✦ Let's Connect ✦
                  </span>
                </div>
                <h2 className="text-7xl font-script text-black mb-10 leading-tight tracking-wide">
                  get in touch
                </h2>
              </div>

              <div className="space-y-8">
                <p className="text-xl text-gray-600 leading-relaxed font-serif tracking-wide">
                  Ready to discuss opportunities in cloud infrastructure, ethical AI, or digital wellness? I'm always
                  excited to connect with like-minded professionals and explore new possibilities.
                </p>
                <p className="text-xl font-serif text-black tracking-wide">Let's create something amazing together!</p>
              </div>

              <div className="space-y-8 pt-10">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">📧</span>
                  </div>
                  <div>
                    <p className="text-black font-serif tracking-wide">Email</p>
                    <p className="text-gray-500 font-serif tracking-wide">poojaspatel1375@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">📱</span>
                  </div>
                  <div>
                    <p className="text-black font-serif tracking-wide">Phone</p>
                    <p className="text-gray-500 font-serif tracking-wide">+91 9023562773</p>
                  </div>
                </div>

              <div className="pt-10">
                <h4 className="text-black font-serif mb-6 uppercase tracking-[0.1em] text-sm">Connect With Me</h4>
                <div className="flex gap-6">
                <a
                  href="https://www.linkedin.com/in/pooja-p-77329933b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-black hover:bg-gray-800 text-white border border-black font-serif tracking-wide">
                    LinkedIn
                  </Button>
                </a>

                <a
                  href="https://github.com/PoojasPatel013"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-white hover:bg-gray-50 text-black border border-black font-serif tracking-wide">
                    GitHub
                  </Button>
                </a>

                </div>
              </div>
            </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-white/90 backdrop-blur-sm border border-gray-100 p-12 rounded-sm shadow-artistic">
              <div className="mb-10">
                <h3 className="text-3xl font-serif text-black mb-4 tracking-wide">Send a Message</h3>
                <div className="w-12 h-px bg-black"></div>
              </div>

              <form ref={form} onSubmit={sendEmail} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-serif text-black mb-3 uppercase tracking-[0.1em]">
                      First Name
                    </label>
                    <Input name="first_name" required />
                  </div>
                  <div>
                    <label className="block text-sm font-serif text-black mb-3 uppercase tracking-[0.1em]">
                      Last Name
                    </label>
                    <Input name="last_name" required />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-serif text-black mb-3 uppercase tracking-[0.1em]">Email</label>
                  <Input name="email" type="email" required />
                </div>

                <div>
                  <label className="block text-sm font-serif text-black mb-3 uppercase tracking-[0.1em]">Subject</label>
                  <Input name="subject" />
                </div>

                <div>
                  <label className="block text-sm font-serif text-black mb-3 uppercase tracking-[0.1em]">Message</label>
                  <Textarea name="message" rows={6} required />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-black hover:bg-gray-800 text-white font-serif py-4 tracking-wide"
                  disabled={loading}
                >
                  {loading ? "Sending..." : sent ? "Message Sent!" : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Elegant background elements */}
      <div className="absolute top-1/3 right-1/4 opacity-[0.03] animate-float-slow">
        <img src="/images/faces-pattern.png" alt="Artistic faces pattern" width={180} height={180} />
      </div>

      {/* Minimalist envelope doodle */}
      <div className="absolute bottom-24 left-16 animate-float-medium">
        <svg width="32" height="24" viewBox="0 0 32 24" className="text-black/8">
          <rect x="4" y="6" width="24" height="16" rx="1" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M4 8 L16 14 L28 8" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" />
          <circle cx="6" cy="4" r="1.5" fill="currentColor" opacity="0.4" />
          <circle cx="26" cy="4" r="1" fill="currentColor" opacity="0.5" />
        </svg>
      </div>
    </section>
  )
}