import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import meghanPortrait from "@/assets/meghana-profile.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-background flex items-center relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-20 h-20 rounded-full border-2 border-primary/30 animate-float"></div>
      <div className="absolute bottom-32 right-32 w-12 h-12 rounded-full bg-accent/20 animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 right-10 w-6 h-6 rounded-full bg-primary animate-float" style={{animationDelay: '4s'}}></div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <div className="mb-6">
              <p className="text-muted-foreground text-lg mb-2">meghanasingareddy@gmail.com</p>
              <h1 className="text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Hi,<br />
                I'm <span className="text-gradient">S Meghana Reddy</span>
              </h1>
              <p className="text-xl text-muted-foreground mt-4">
                AI/ML Engineer & Data Analyst
              </p>
              <p className="text-lg text-muted-foreground mt-2">
                Building intelligent, data-driven solutions with a strong foundation in computer science.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 group">
                <a href="https://www.linkedin.com/in/meghana-reddy-singareddy-030527292/" target="_blank" rel="noopener noreferrer">
                  Let’s Connect <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-border text-foreground hover:bg-accent">
                <a href="mailto:meghanasingareddy@gmail.com">
                  Hire Me
                </a>
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button asChild variant="outline" size="lg" className="border-border text-foreground hover:bg-accent">
                <a href="https://github.com/meghanasingareddy" target="_blank" rel="noopener noreferrer">
                  View Full Portfolio
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="https://github.com/meghanasingareddy" 
                className="p-3 rounded-lg bg-card hover:bg-accent transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 text-foreground" />
              </a>
              <a 
                href="https://www.linkedin.com/in/meghana-reddy-singareddy-030527292/" 
                className="p-3 rounded-lg bg-card hover:bg-accent transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5 text-foreground" />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative animate-slide-up">
            <div className="relative lg:ml-auto lg:max-w-md">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
              <img
                src={meghanPortrait}
                alt="S Meghana Reddy - AI/ML Engineer & Data Analyst"
                className="relative w-full rounded-3xl shadow-2xl"
              />
            </div>
            
            {/* Expertise Badge */}
            <div className="absolute -top-4 -right-4 bg-card glass-card rounded-xl p-4">
              <div className="text-sm text-primary font-semibold">Passionate about</div>
              <div className="text-foreground font-bold">AI/ML & Data</div>
              <div className="text-xs text-muted-foreground mt-1">
                B.Tech CSM Student
              </div>
            </div>

            {/* Info Card */}
            <div className="absolute -bottom-6 left-4 bg-card glass-card rounded-xl p-6 max-w-xs">
              <div className="text-foreground font-semibold mb-2">
                Looking for an AI/ML Engineer or Data Analyst? Let's connect!
              </div>
              <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 mt-3">
                <a href="mailto:meghanasingareddy@gmail.com">Let's Chat</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
