import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Code,
  Database,
  BrainCircuit,
  Globe,
  Server,
  Cpu,
  GitMerge,
  Github,
  Terminal,
  Smartphone,
  Cloud,
  PenTool,
  CodeXml,
  Eye,
  Ear,
  FunctionSquare
} from "lucide-react";
import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", icon: <FunctionSquare className="w-5 h-5" /> },
        { name: "Python", icon: <Code className="w-5 h-5" /> },
        { name: "C", icon: <Code className="w-5 h-5" /> },
      ],
    },
    {
      title: "Web & App Development",
      skills: [
        { name: "HTML", icon: <CodeXml className="w-5 h-5" /> },
        { name: "CSS", icon: <PenTool className="w-5 h-5" /> },
        { name: "JavaScript", icon: <Code className="w-5 h-5" /> },
        { name: "React.js", icon: <Code className="w-5 h-5" /> },
        { name: "Next.js", icon: <Globe className="w-5 h-5" /> },
        { name: "Flutter", icon: <Smartphone className="w-5 h-5" /> },
      ],
    },
    {
      title: "Backend & Databases",
      skills: [
        { name: "Flask", icon: <Server className="w-5 h-5" /> },
        { name: "Firebase", icon: <Cloud className="w-5 h-5" /> },
        { name: "Supabase", icon: <Cloud className="w-5 h-5" /> },
        { name: "SQL", icon: <Database className="w-5 h-5" /> },
        { name: "PostgreSQL", icon: <Database className="w-5 h-5" /> },
      ],
    },
    {
      title: "AI / Machine Learning",
      highlight: true,
      skills: [
        { name: "Machine Learning", icon: <BrainCircuit className="w-5 h-5" /> },
        { name: "Computer Vision (OpenCV)", icon: <Eye className="w-5 h-5" /> },
        { name: "EEG Signal Processing", icon: <Cpu className="w-5 h-5" /> },
        { name: "Speech Processing", icon: <Ear className="w-5 h-5" /> },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", icon: <GitMerge className="w-5 h-5" /> },
        { name: "GitHub", icon: <Github className="w-5 h-5" /> },
        { name: "VS Code", icon: <Terminal className="w-5 h-5" /> },
        { name: "Android Studio", icon: <Smartphone className="w-5 h-5" /> },
        { name: "Vercel", icon: <Cloud className="w-5 h-5" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-portfolio-text-dark mb-6">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-portfolio-text-muted max-w-2xl mx-auto">
            A structured overview of my technical capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className={`glass-card h-full animate-fade-in-up ${category.highlight ? 'border-primary' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <CardTitle className="text-portfolio-text-dark text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {category.skills.map((skill) => (
                    <li key={skill.name} className="flex items-center space-x-3 group">
                      <div className="text-primary group-hover:scale-110 transition-transform">
                        {skill.icon}
                      </div>
                      <span className="text-portfolio-text-muted group-hover:text-portfolio-text-dark transition-colors">
                        {skill.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;