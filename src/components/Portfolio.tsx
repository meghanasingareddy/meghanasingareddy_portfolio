import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "SecureFL Guard",
      description: "A centralized ML-based intrusion detection system for federated learning in IIoT, designed to identify Sybil-based collusion attacks by analyzing network traffic patterns and preventing malicious model poisoning.",
      technologies: ["Python", "Machine Learning", "Django", "Network Security"],
      github: "https://github.com/meghanasingareddy/SCA-Sybil-based-Collusion-Attacks",
    },
    {
      title: "CleaRoute",
      description: "An AI-based pothole detection system built using YOLOv8 for real-time object detection. Implemented video preprocessing, dataset annotation, model training, and evaluation pipelines, applying computer vision techniques for accurate detection and optimization.",
      technologies: ["Python", "Computer Vision", "Machine Learning", "YOLOv8"],
      github: "https://github.com/meghanasingareddy/Clearoute",
    },
    {
      title: "Chatridge",
      description: "An offline peer-to-peer messaging application enabling real-time communication without internet connectivity. Built a mobile-based system for seamless message exchange using local connectivity.",
      technologies: ["Flutter", "Mobile Development", "Real-Time Communication"],
      github: "https://github.com/meghanasingareddy/Chatridge",
    },
    {
      title: "NeuroVoice",
      description: "A brain–computer interface system that converts EEG signals into text and audio output. Applied machine learning models for pattern recognition on EEG data and integrated signal processing techniques for reliable interpretation.",
      technologies: ["Python", "Machine Learning", "EEG Signal Processing", "Speech Processing"],
      github: "https://github.com/meghanasingareddy/NeuroVoice",
    },
    {
      title: "MindMate",
      description: "An AI-focused mental wellness application that provides a safe space for users to express emotions and receive intelligent support through a thoughtfully designed interface.",
      technologies: ["React", "TypeScript", "Vite", "Supabase", "AI"],
      github: "https://github.com/meghanasingareddy/MindMate",
    },
    {
      title: "Virtual Study Group Platform",
      description: "A collaborative platform built to enable students to form virtual study groups, interact in real time, and manage shared learning activities.",
      technologies: ["React", "Web Technologies", "Collaboration Features"],
      github: "https://github.com/meghanasingareddy/Virtual-Study-Group-Platform",
    }
  ];

  return (
    <section id="portfolio" className="py-20 hero-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-portfolio-text-dark mb-6">
            Projects
          </h2>
          <p className="text-xl text-portfolio-text-muted max-w-2xl mx-auto">
            Showcasing my journey through innovative projects that combine creativity with technical expertise
          </p>
        </div>

        {/* All Projects Grid */}
        <div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="glass-card group hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex space-x-1">
                      <Button size="sm" variant="ghost" className="p-1.5 hover:bg-portfolio-card/50" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-3 h-3 text-portfolio-text-dark" />
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
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline"
                        className="border-portfolio-border text-portfolio-text-muted text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="https://github.com/meghanasingareddy" target="_blank" rel="noopener noreferrer">
              Explore more projects on my GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;