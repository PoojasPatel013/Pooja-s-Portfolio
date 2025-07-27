"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const projectsData = [
    {
      id: 1,
      title: "Disaster Risk Prediction Platform",
      role: "Project Creator & Lead Architect",
      description:
        "Designed and implemented a full-stack, containerized ML platform to predict and visualize global disaster risks.",
      highlights: [
        "Built PyTorch-based neural network for risk prediction",
        "Integrated geospatial visualization with GeoPandas",
        "Deployed interactive Streamlit dashboard via Docker & Kubernetes",
        "Automated model retraining workflows using Python scheduling",
      ],
      technologies: ["PyTorch", "Streamlit", "FastAPI", "Kubernetes", "Docker", "GeoPandas"],
      category: "DevOps",
      featured: true,
      links: {
        github: "https://github.com/yourusername/disaster-risk",
        external: "https://devpost.com/software/disaster-risk"
      }
    },
    {
      id: 2,
      title: "CarbonTrace – Carbon Footprint Tracker",
      role: "Sole Developer & Product Designer",
      description:
        "Created an AI-powered sustainability tracking app to estimate individual carbon footprints based on user habits.",
      highlights: [
        "Integrated Kaggle API for datasets and Carbon Interface API",
        "Implemented gamification to boost user engagement",
        "Built RandomForest and GradientBoosting models",
        "Enhanced sustainability awareness through data-driven insights",
      ],
      technologies: ["Streamlit", "MongoDB", "RandomForest", "GradientBoost", "Kaggle API"],
      category: "DevOps",
      featured: true,
      links: {
        github: "https://github.com/yourusername/carbontrace",
        external: null
      }
    },
    {
      id: 3,
      title: "FemPlan – Women's Wellness & Productivity App",
      role: "End-to-End Developer & UX Designer",
      description: "Developed a women-centric health platform for cycle tracking, wellness tips, and journaling.",
      highlights: [
        "Created Flask backend with cycle prediction logic",
        "Applied Bootstrap for UI responsiveness",
        "Used DSA algorithms for personalized habit tracking",
        "Emphasized privacy, inclusivity, and digital health compliance",
      ],
      technologies: ["Flask", "Bootstrap", "Python", "API Integration"],
      category: "web",
      featured: true,
      links: {
        github: "https://github.com/PoojasPatel013/femplan",
        external: "https://femplan.demo.link"
      }
    },
    {
      id: 4,
      title: "ChronoVault – Mental Wellness Platform",
      role: "Founder & Technical Product Lead",
      description:
        "Built a community-based platform combining AI-assisted therapy, journaling, and behavioral analytics.",
      highlights: [
        "Integrated GPT-powered conversational AI support",
        "Enabled human consultancy and peer-driven community space",
        "Launched mood tracker, goal dashboard, and wellness reports",
        "Prioritized ethical AI practices in mental health tech",
      ],
      technologies: ["MERN Stack", "GPT Integration", "AI", "Community Features"],
      category: "ai",
      featured: false,
      links: {
        github: "https://github.com/PoojasPatel013/chrono-vault",
        external: "https://techarhive.org/chronovault-research"
      }
    },
    {
      id: 5,
      title: "PUF – Python Universal Framework for Model Version Control",
      role: "Creator & DevOps Engineer",
      description:
        "A Git-style version control system for machine learning models with support for CLI operations, analytics, web UI, GitHub integration, and model metrics comparison across TensorFlow, PyTorch, and scikit-learn.",
      highlights: [
        "Implements Git-like CLI commands: init, add, commit, push, checkout",
        "Tracks versioned models with timestamped metadata and analytics",
        "Includes web UI for model uploads, comparisons, statistics, and metrics",
        "Supports PyTorch (.pt), TensorFlow (.h5/.pb), scikit-learn (.pkl)"
      ],
      technologies: ["Python", "Flask", "Click", "TensorFlow", "PyTorch", "scikit-learn"],
      category: "DevOps",
      featured: true,
      links: {
        github: "https://github.com/PoojasPatel013/puf",
        external: null
      }
    }
    
  ]
  
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [showAll, setShowAll] = useState(false)

  const categories = [
    { key: "all", label: "All Projects" },
    { key: "DevOps", label: "DevOps" },
    { key: "ai", label: "AI Integration" },
    { key: "web", label: "Web Development" },
  ]

  const filteredProjects =
    selectedCategory === "all" ? projectsData : projectsData.filter((project) => project.category === selectedCategory)

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3)

  return (
    <section id="projects" className="py-20 bg-white relative">
      {/* Clean watercolor background */}
      <div
        className="absolute inset-0 opacity-12"
        style={{
          backgroundImage: `url('/images/project.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          transform: "rotate(270deg)",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="bg-black text-white px-6 py-3 rounded-full text-xs font-bold tracking-[0.2em] uppercase">
                ✦ Featured Works ✦
              </span>
            </div>
            <h2 className="text-6xl font-script text-black mb-6 tracking-wide">Projects</h2>
            <div className="w-16 h-px bg-black mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 font-serif tracking-wide max-w-3xl mx-auto">
              Worked on several innovative projects using technologies like PyTorch, React.js, Flask, and cloud
              platforms, focusing on sustainability, wellness, and disaster prediction.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`font-serif px-6 py-3 rounded-sm border transition-all duration-300 ${
                  selectedCategory === category.key
                    ? "bg-black text-white border-black"
                    : "bg-white text-black border-gray-200 hover:bg-gray-50"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Tip Section */}
          <div className="mb-12 bg-blue-50 border border-blue-200 p-6 rounded-sm">
            <div className="flex items-start gap-4">
              <span className="text-2xl">💡</span>
              <div>
                <h4 className="font-serif text-lg font-semibold text-black mb-2">Tip</h4>
                <p className="font-serif text-gray-700">
                  To filter the projects, click on the category tags above to explore different types of work.
                </p>
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {displayedProjects.map((project, index) => (
              <Card
                key={project.id}
                className="group shadow-artistic border border-gray-200 hover:shadow-lg transition-all duration-500"
              >
                <CardContent className="p-8">
                  {/* Project Number */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-6xl font-extralight text-gray-200 group-hover:text-black transition-colors">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="w-12 h-px bg-gray-200 group-hover:bg-black transition-colors"></div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-serif text-black mb-2 group-hover:text-gray-800 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-500 text-sm font-serif uppercase tracking-wider">{project.role}</p>
                    </div>

                    <p className="text-gray-600 font-serif leading-relaxed text-sm">{project.description}</p>

                    <div>
                      <h4 className="text-black font-serif mb-3 text-sm uppercase tracking-wider">Key Highlights</h4>
                      <ul className="space-y-2">
                        {project.highlights.slice(0, 2).map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-1 h-1 bg-black rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-500 text-sm font-serif leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-black font-serif mb-3 text-sm uppercase tracking-wider">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs font-serif">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-3 pt-4">
                      {project.links?.external && (
                        <a href={project.links.external} target="_blank" rel="noopener noreferrer">
                          <Button size="sm" className="bg-black hover:bg-gray-800 text-white font-serif">
                            <ExternalLink className="w-3 h-3 mr-2" />
                            View
                          </Button>
                        </a>
                      )}
                      {project.links?.github && (
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                          <Button size="sm" variant="outline" className="font-serif bg-transparent">
                            <Github className="w-3 h-3 mr-2" />
                            Code
                          </Button>
                        </a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Show More/Less Button */}
          {filteredProjects.length > 3 && (
            <div className="text-center">
              <Button
                onClick={() => setShowAll(!showAll)}
                className="bg-black hover:bg-gray-800 text-white font-serif px-8 py-3"
              >
                {showAll ? "Show Less Projects" : "Show All Projects"}
              </Button>
            </div>
          )}
        </div>
      </div>
      
    </section>
  )
}
