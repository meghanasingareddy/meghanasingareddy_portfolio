import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Smartphone, Brain, Database, Palette, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Full-stack web applications using modern technologies like React, Firebase, and responsive design principles.",
      skills: ["React", "HTML/CSS", "JavaScript", "Firebase", "Responsive Design"],
      color: "text-blue-500"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Development",
      description: "Native Android applications with focus on user experience, performance, and innovative features.",
      skills: ["Android", "Java", "UI/UX Design", "Bluetooth Integration"],
      color: "text-green-500"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI/ML Solutions",
      description: "Machine learning models, data analysis, and AI concept implementations for various domains.",
      skills: ["Python", "Machine Learning", "Data Science", "Algorithm Design"],
      color: "text-purple-500"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Algorithm Development",
      description: "Efficient data structures and algorithms solutions with optimization and performance focus.",
      skills: ["DSA", "Problem Solving", "Optimization", "Competitive Programming"],
      color: "text-yellow-500"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "User-centered design approach with modern interfaces that prioritize usability and aesthetics.",
      skills: ["User Research", "Prototyping", "Interface Design", "User Experience"],
      color: "text-pink-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "IoT Development",
      description: "Internet of Things solutions using Arduino, ESP32, and embedded systems programming.",
      skills: ["Arduino", "ESP32", "Sensors", "Hardware Integration"],
      color: "text-orange-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technical solutions combining innovation with practical expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:scale-105 transition-all duration-300 border-border hover:border-primary/30 hover:shadow-lg"
            >
              <CardHeader>
                <div className={`p-3 rounded-lg w-fit mb-4 bg-primary/10 ${service.color} group-hover:bg-primary/20 transition-colors`}>
                  {service.icon}
                </div>
                <CardTitle className="text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Key Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded-full border border-border"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-20 pt-16 border-t border-border">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">My Process</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Research & Analysis", description: "Understanding requirements and target audience" },
              { step: "02", title: "Design & Planning", description: "Creating wireframes and technical architecture" },
              { step: "03", title: "Development", description: "Building with clean, efficient, and scalable code" },
              { step: "04", title: "Testing & Deployment", description: "Quality assurance and successful launch" }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg group-hover:bg-primary/20 transition-colors">
                  {process.step}
                </div>
                <h4 className="font-semibold text-foreground mb-2">{process.title}</h4>
                <p className="text-sm text-muted-foreground">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;