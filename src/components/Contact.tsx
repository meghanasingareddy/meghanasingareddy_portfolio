import { Github, Linkedin, Mail, Code2 } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container-inner">
        <div className="section-label reveal">CONTACT</div>
        
        <h2 className="contact-headline reveal d1">
          LET'S BUILD<br />SOMETHING.
        </h2>
        
        <div className="mt-12 flex flex-col reveal d2">
          <a href="mailto:meghanasingareddy@gmail.com" className="contact-link">
            <div className="contact-link-dot" />
            <Mail size={18} />
            <span>EMAIL</span>
          </a>
          <a href="https://github.com/meghanasingareddy" target="_blank" rel="noopener noreferrer" className="contact-link">
            <div className="contact-link-dot" />
            <Github size={18} />
            <span>GITHUB</span>
          </a>
          <a href="https://leetcode.com/u/meghanasingareddy/" target="_blank" rel="noopener noreferrer" className="contact-link">
            <div className="contact-link-dot" />
            <Code2 size={18} />
            <span>LEETCODE</span>
          </a>
          <a href="https://www.linkedin.com/in/meghana-reddy-singareddy-030527292/" target="_blank" rel="noopener noreferrer" className="contact-link">
            <div className="contact-link-dot" />
            <Linkedin size={18} />
            <span>LINKEDIN</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
