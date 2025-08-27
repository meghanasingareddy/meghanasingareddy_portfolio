import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Instagram, ExternalLink } from "lucide-react";
import meghanPortrait from "@/assets/meghana-profile.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen hero-gradient flex items-center relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-20 h-20 rounded-full border-2 border-portfolio-cyan/30 animate-float"></div>
      <div className="absolute bottom-32 right-32 w-12 h-12 rounded-full bg-portfolio-accent/20 animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 right-10 w-6 h-6 rounded-full bg-portfolio-cyan animate-float" style={{animationDelay: '4s'}}></div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <div className="mb-6">
              <p className="text-portfolio-text-muted text-lg mb-2">helloinaya7@gmail.com</p>
              <h1 className="text-6xl lg:text-7xl font-bold text-portfolio-text-light leading-tight">
                Hi,<br />
                I'm <span className="text-gradient">Meghana Reddy</span>
              </h1>
              <p className="text-xl text-portfolio-text-muted mt-4">
                AI/ML Student & Developer
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 group"
              >
                Hire Me
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-portfolio-border text-portfolio-text-light hover:bg-portfolio-card/50"
              >
                View Portfolio
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                className="p-3 rounded-lg bg-portfolio-card/30 hover:bg-portfolio-card/50 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 text-portfolio-text-light" />
              </a>
              <a 
                href="https://linkedin.com/in/singareddy-meghana-reddy-030527292" 
                className="p-3 rounded-lg bg-portfolio-card/30 hover:bg-portfolio-card/50 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5 text-portfolio-text-light" />
              </a>
              <a 
                href="https://instagram.com/fillysboutique" 
                className="p-3 rounded-lg bg-portfolio-card/30 hover:bg-portfolio-card/50 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5 text-portfolio-text-light" />
              </a>
            </div>

            <div className="mt-8 pt-8 border-t border-portfolio-border">
              <a 
                href="#" 
                className="inline-flex items-center text-portfolio-accent hover:text-portfolio-cyan transition-colors"
              >
                Download CV
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative animate-slide-up">
            <div className="relative lg:ml-auto lg:max-w-md">
              <div className="absolute inset-0 bg-gradient-to-r from-portfolio-accent/20 to-portfolio-cyan/20 rounded-3xl blur-3xl"></div>
              <img
                src={meghanPortrait}
                alt="Meghana Reddy - AI/ML Student & Developer"
                className="relative w-full rounded-3xl shadow-2xl"
              />
            </div>
            
            {/* Expertise Badge */}
            <div className="absolute -top-4 -right-4 bg-portfolio-card glass-card rounded-xl p-4">
              <div className="text-sm text-portfolio-accent font-semibold">Expert on</div>
              <div className="text-portfolio-text-light font-bold">AI & Machine Learning</div>
              <div className="text-xs text-portfolio-text-muted mt-1">
                Based in India<br />
                I'm developer and<br />
                UI/UX enthusiast.
              </div>
            </div>

            {/* Info Card */}
            <div className="absolute -bottom-6 left-4 bg-portfolio-card glass-card rounded-xl p-6 max-w-xs">
              <div className="text-portfolio-text-light font-semibold mb-2">
                Hey are looking for developer to build your brand and grow your business? let's shake hands with me.
              </div>
              <Button 
                size="sm" 
                className="bg-portfolio-cyan text-portfolio-dark hover:bg-portfolio-cyan/90 mt-3"
              >
                Let's Chat
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;