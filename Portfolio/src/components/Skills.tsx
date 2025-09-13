import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Core Programming",
      skills: [
        { name: "JavaScript", level: 85, icon: "🚀" },
        { name: "Python", level: 90, icon: "🐍" },
        { name: "Java", level: 85, icon: "☕" }
      ]
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "HTML", level: 90, icon: "🎨" },
        { name: "CSS", level: 90, icon: "🎨" },
        { name: "React", level: 85, icon: "⚛️" },
        { name: "Tailwind", level: 80, icon: "💨" }
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", level: 80, icon: "📚" },
        { name: "GitHub", level: 85, icon: "🐙" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-portfolio-text-dark mb-6">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-portfolio-text-muted max-w-2xl mx-auto">
            A comprehensive overview of my technical abilities and expertise levels
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="glass-card hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-portfolio-text-dark text-xl">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="text-portfolio-text-dark font-medium">{skill.name}</span>
                      </div>
                      <span className="text-portfolio-text-muted text-sm font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-portfolio-border"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "100+", label: "LeetCode Problems Solved", icon: "🎯" },
            { number: "4+", label: "Major Projects Completed", icon: "🚀" },
            { number: "1+", label: "Years of Learning", icon: "📚" },
            { number: "6+", label: "Technologies Mastered", icon: "⚡" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 glass-card hover:scale-105 transition-transform">
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-gradient mb-1">{stat.number}</div>
              <div className="text-sm text-portfolio-text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;