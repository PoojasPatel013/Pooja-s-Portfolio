"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Button } from "./ui/button"
import { Home, User, Briefcase, Folder, Mail, BookOpen, Menu, X } from "lucide-react"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
      setMenuOpen(false)
    }
  }

  const navItems = [
    { id: "home", icon: <Home className="w-4 h-4" />, label: "Home" },
    { id: "about", icon: <User className="w-4 h-4" />, label: "About" },
    { id: "experience", icon: <Briefcase className="w-4 h-4" />, label: "Experience" },
    { id: "projects", icon: <Folder className="w-4 h-4" />, label: "Projects" },
    { id: "contact", icon: <Mail className="w-4 h-4" />, label: "Contact" },
  ]

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-1 px-6 transition-all duration-300",
        scrolled ? "bg-white/60 backdrop-blur-md shadow-sm" : "bg-white",
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Left: Hamburger toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-black hover:text-gray-600 transition-colors duration-200 p-2 rounded-lg hover:bg-gray-50"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Right: Book button */}
        <Button
          variant="outline"
          size="sm"
          className="border-black text-black hover:bg-black hover:text-white transition-all duration-300 bg-white font-serif"
          asChild
        >
          <Link href="/book" className="flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            <span className="hidden sm:inline">My Book</span>
          </Link>
        </Button>
      </div>

      {/* Dropdown menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border-t border-gray-100 shadow-artistic backdrop-blur-artistic">
          <div className="container mx-auto py-6 px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-2xl mx-auto">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  className="flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-gray-50 transition-all duration-200 group cursor-pointer border border-transparent hover:border-gray-200"
                  onClick={() => scrollToSection(item.id)}
                >
                  <div className="text-black group-hover:text-gray-700 transition-colors duration-200">{item.icon}</div>
                  <span className="text-sm font-serif text-black group-hover:text-gray-700 transition-colors duration-200">
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
