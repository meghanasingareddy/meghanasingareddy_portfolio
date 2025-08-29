import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "DataDock",
      description: "A data management and visualization platform designed to simplify handling of large datasets. Features include secure storage, quick search, and intuitive dashboards for analysis.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind"],
      category: "Web Application",
      github: "#",
      live: "#"
    },
    {
      title: "ExpenseFlow",
      description: "A comprehensive finance management application featuring expense tracking, budget management, and financial insights with intuitive UI/UX design.",
      technologies: ["React", "Firebase", "JavaScript", "CSS"],
      category: "Web Application",
      github: "#",
      live: "#"
    },
    {
      title: "Virtual Study Group Platform",
      description: "Collaborative learning platform that connects students for virtual study sessions. Built with React and real-time communication features to enhance remote learning experience.",
      technologies: ["React", "Firebase", "Real-time DB", "CSS"],
      category: "Education Platform",
      github: "#",
      live: "#"
    },
    {
      title: "ChatterBug",
      description: "Bluetooth-based private chat Android application developed as a group project. Enables secure local communication without internet dependency using Bluetooth technology.",
      technologies: ["Android", "Java", "Bluetooth API", "UI/UX"],
      category: "Mobile Application",
      github: "#",
      live: "#"
    },
    {
      title: "AI Concept Prototypes",
      description: "Collection of machine learning and AI concept implementations including data analysis, predictive models, and algorithm visualizations for academic and practical learning.",
      technologies: ["Python", "Machine Learning", "Data Science", "Jupyter"],
      category: "AI/ML Projects",
      github: "#",
      live: "#"
    },
    {
      title: "DSA Problem Solutions",
      description: "Comprehensive collection of Data Structures and Algorithms solutions with optimized approaches. Regular contributions to competitive programming platforms.",
      technologies: ["Python", "Java", "C++", "Algorithms"],
      category: "Problem Solving",
      github: "https://leetcode.com/meghanasingareddy",
      live: "https://leetcode.com/meghanasingareddy"
    }
  ];

  const categories = ["All", "Web Application", "Mobile Application", "AI/ML Projects", "Education Platform"];

  return (
    <section id="portfolio" className="py-20 hero-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-portfolio-text-dark mb-6">
            My <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-xl text-portfolio-text-muted max-w-2xl mx-auto">
            Showcasing my journey through innovative projects that combine creativity with technical expertise
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              className="border-portfolio-border text-portfolio-text-dark hover:bg-portfolio-card/50"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* All Projects Grid */}
        <div>
          <h3 className="text-2xl font-bold text-portfolio-text-dark mb-8">All Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="glass-card group hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="border-portfolio-border text-portfolio-text-muted text-xs">
                      {project.category}
                    </Badge>
                    <div className="flex space-x-1">
                      <Button size="sm" variant="ghost" className="p-1.5 hover:bg-portfolio-card/50" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-3 h-3 text-portfolio-text-dark" />
                        </a>
                      </Button>
                      <Button size="sm" variant="ghost" className="p-1.5 hover:bg-portfolio-card/50" asChild>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3 h-3 text-portfolio-text-dark" />
                        </a>
                      </Button>
                    </div>
                  </div>
                  <CardTitle className="text-lg text-portfolio-text-dark group-hover:text-gradient transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-portfolio-text-muted text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline"
                        className="border-portfolio-border text-portfolio-text-muted text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="border-portfolio-border text-portfolio-text-muted text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-portfolio-text-muted mb-6">
            Interested in seeing more of my work or discussing a project?
          </p>
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            View Full Portfolio on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;