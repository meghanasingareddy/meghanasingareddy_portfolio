import { Github, Linkedin, Instagram, ExternalLink } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/singareddy-meghana-reddy-030527292",
      icon: Linkedin
    },
    {
      name: "GitHub", 
      url: "https://github.com/meghanasingareddy",
      icon: Github
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/meghanasingareddy",
      icon: ExternalLink
    },
    {
      name: "Instagram",
      url: "https://instagram.com/flashamour",
      icon: Instagram
    }
  ];

  return (
    <footer className="section-gradient border-t border-portfolio-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-portfolio-text-dark">Meghana</span>
              <span className="text-gradient">.</span>
            </div>
            <p className="text-portfolio-text-muted max-w-sm">
              Passionate developer specializing in AI/ML, web development, and innovative technology solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-portfolio-text-dark mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Portfolio", "Skills", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-portfolio-text-muted hover:text-portfolio-accent transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-semibold text-portfolio-text-dark mb-4">Connect</h3>
            <p className="text-portfolio-text-muted mb-4">meghanasingareddy@gmail.com</p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-portfolio-card/30 hover:bg-portfolio-card/50 transition-colors"
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5 text-portfolio-text-dark" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-portfolio-border mt-8 pt-8 text-center">
          <p className="text-portfolio-text-muted">
            © 2024 Meghana Reddy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;