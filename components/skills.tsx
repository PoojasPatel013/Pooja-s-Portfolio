import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Program & Product Management",
    skills: ["Project ownership", "Feature planning", "Stakeholder coordination"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["Google Cloud", "Kubernetes", "Docker", "GitHub Actions", "CI/CD"],
  },
  {
    title: "Developer Tools & Communication",
    skills: ["Markdown", "API integration", "GitHub docs", "Streamlit"],
  },
  {
    title: "Ethics & Security",
    skills: ["Cybersecurity fundamentals", "User-first design", "Tech policy awareness"],
  },
  {
    title: "Soft Skills",
    skills: ["Technical writing", "Public speaking", "Team leadership"],
  },
]

export function Skills() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Skills</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
                  <CardTitle className="text-lg text-slate-900">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="mb-2">
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
