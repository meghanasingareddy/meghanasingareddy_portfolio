import { useState } from "react";
import emailjs from '@emailjs/browser';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Instagram, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // EmailJS configuration
  const EMAILJS_SERVICE_ID = 'service_3hiau6c';
  const EMAILJS_TEMPLATE_ID = 'template_75uwq4a';
  const EMAILJS_PUBLIC_KEY = 'TfGcViXUth2gUvCwW';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'meghanasingareddy@gmail.com'
        },
        EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      content: "meghanasingareddy@gmail.com",
      href: "mailto:meghanasingareddy@gmail.com"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      content: "India",
      href: null
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Let's Connect",
      content: "Available for projects",
      href: null
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/singareddy-meghana-reddy-030527292",
      color: "hover:text-blue-500"
    },
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/meghanasingareddy",
      color: "hover:text-gray-400"
    },
    {
      name: "LeetCode",
      icon: <ExternalLink className="w-5 h-5" />,
      href: "https://leetcode.com/meghanasingareddy",
      color: "hover:text-yellow-500"
    },
    {
      name: "Instagram - Meghana",
      icon: <Instagram className="w-5 h-5" />,
      href: "https://instagram.com/meghanasingareddy",
      color: "hover:text-pink-500"
    },
  ];

  return (
    <section id="contact" className="py-20 hero-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-portfolio-text-light mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-xl text-portfolio-text-muted max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss how we can work together to create something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-portfolio-text-light text-2xl">Send me a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-portfolio-card/30 border-portfolio-border text-portfolio-text-light placeholder:text-portfolio-text-muted"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-portfolio-card/30 border-portfolio-border text-portfolio-text-light placeholder:text-portfolio-text-muted"
                    />
                  </div>
                </div>
                <div>
                  <Input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="bg-portfolio-card/30 border-portfolio-border text-portfolio-text-light placeholder:text-portfolio-text-muted"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="bg-portfolio-card/30 border-portfolio-border text-portfolio-text-light placeholder:text-portfolio-text-muted min-h-32"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 group"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-portfolio-text-light mb-6">Get in touch</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-portfolio-card/30 text-portfolio-cyan">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-portfolio-text-light">{info.title}</h4>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="text-portfolio-text-muted hover:text-portfolio-cyan transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-portfolio-text-muted">{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold text-portfolio-text-light mb-6">Follow me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-3 p-4 rounded-lg bg-portfolio-card/30 hover:bg-portfolio-card/50 transition-all duration-300 text-portfolio-text-light ${social.color} group`}
                  >
                    <div className="group-hover:scale-110 transition-transform">
                      {social.icon}
                    </div>
                    <span className="text-sm font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <Card className="glass-card">
              <CardContent className="p-6">
                <h4 className="text-portfolio-text-light font-semibold mb-4">Quick Stats</h4>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-gradient">4+</div>
                    <div className="text-sm text-portfolio-text-muted">Projects Completed</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gradient">1+</div>
                    <div className="text-sm text-portfolio-text-muted">Years Learning</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gradient">100+</div>
                    <div className="text-sm text-portfolio-text-muted">DSA Problems Solved</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gradient">6+</div>
                    <div className="text-sm text-portfolio-text-muted">Tech Stacks</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;