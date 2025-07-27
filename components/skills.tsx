"use client"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "Program & Product Management",
    key: "ppm",
    skills: ["Project ownership", "Feature planning", "Stakeholder coordination"],
  },
  {
    title: "Cloud & DevOps",
    key: "cloud",
    skills: ["Google Cloud", "Kubernetes", "Docker", "GitHub Actions", "CI/CD"],
  },
  {
    title: "Developer Tools & Communication",
    key: "devtools",
    skills: ["Markdown", "API integration", "GitHub docs", "Streamlit"],
  },
  {
    title: "Ethics & Security",
    key: "security",
    skills: ["Cybersecurity fundamentals", "User-first design", "Tech policy awareness"],
  },
  {
    title: "Soft Skills",
    key: "soft",
    skills: ["Technical writing", "Public speaking", "Team leadership"],
  },
]

export function Skills() {
  const [activeTab, setActiveTab] = useState("ppm")

  const baseClass =
    "font-medium bg-white shadow-md py-2 px-4 rounded-lg cursor-pointer hover:bg-slate-100 active:text-black shadow-lg active:bg-blue-600 transition ease-in-out select-none"

  return (
    <section
      className="py-20 bg-cover bg-center relative"
      style={{ backgroundImage: "url('/images/skill.png')" }}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="bg-black text-white px-6 py-3 rounded-full text-xs font-bold tracking-[0.2em] uppercase">
                ✦ Core Competencies ✦
              </span>
            </div>
            <h2 className="text-5xl font-script text-slate-900 mb-4 tracking-wide">Skills</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {skillCategories.map((category) => (
              <motion.button
                key={category.key}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setActiveTab(category.key)}
                className={
                  activeTab === category.key
                    ? `bg-blue-600 text-gray-400 shadow-lg ${baseClass}`
                    : baseClass
                }
              >
                {category.title}
              </motion.button>
            ))}
          </div>

          {/* Skills Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories
              .filter((category) => category.key === activeTab)
              .map((category, index) => (
                <Card
                  key={index}
                  className="w-full max-w-[1100px] mx-auto shadow-lg hover:shadow-xl transition-shadow"
                >
                  <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
                    <CardTitle className="text-xxl text-slate-900 font-script tracking-wide">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, idx) => (
                        <Badge key={idx} variant="secondary" className="mb-2 text-xl font-medium font-serif">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}
