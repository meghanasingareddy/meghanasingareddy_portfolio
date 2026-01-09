import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Brain, Code, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Education",
      description: "B.Tech CSE (AI/ML) • 2nd Year • Started 2024"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Specialization",
      description: "Artificial Intelligence & Machine Learning"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Development",
      description: "Java, Python, and modern web technologies"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Problem Solving",
      description: "Data Structures & Algorithms Enthusiast"
    }
  ];

  const skills = {
    "Programming Languages": ["Java", "Python"],
    "Web Technologies": ["HTML", "CSS", "JavaScript", "React"],
    "AI / Data": ["Machine Learning fundamentals", "Data Analysis", "Pandas", "NumPy"],
    "Tools & Platforms": ["Git", "GitHub"]
  };

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                About <span className="text-gradient">Me</span>
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  I'm S Meghana Reddy, a B.Tech Computer Science student specializing in
                  Artificial Intelligence and Machine Learning. Analytical, curious, and impact-driven, 
                  I have a strong interest in Machine Learning, Data Analytics, and problem-solving.
                </p>
                <p>
                  My journey combines academic learning with hands-on experience on real-world projects.
                  I am comfortable working with Java, Python, and modern web technologies.
                </p>
                <p>
                  My clear career goal is to become an AI/ML Engineer or a Data Analyst.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                <span className="text-primary font-medium">Problem Solver</span>
              </div>
              <div className="px-4 py-2 bg-accent/50 rounded-full border border-accent">
                <span className="text-accent-foreground font-medium">AI Enthusiast</span>
              </div>
              <div className="px-4 py-2 bg-secondary rounded-full border border-border">
                <span className="text-secondary-foreground font-medium">Data-Driven</span>
              </div>
            </div>
          </div>

          {/* Right Content - Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card 
                key={index} 
                className="glass-card hover:bg-card/80 transition-all duration-300 group hover:scale-105"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-16 pt-16 border-t border-border">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">Technical Skills</h3>
          <div className="space-y-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category}>
                <h4 className="text-lg font-semibold text-center text-primary mb-4">{category}</h4>
                <div className="flex flex-wrap justify-center gap-4">
                  {skillList.map((skill, index) => (
                    <div 
                      key={index}
                      className="text-center py-2 px-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors group"
                    >
                      <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {skill}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;