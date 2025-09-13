import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

// --- 1. Define a type for a single project ---
type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
};

// --- 2. Project Data ---
const projectData: Project[] = [
  {
    title: "AI-Powered Chatbot",
    description: "A customer service chatbot that uses natural language processing to understand and respond to user queries in real-time.",
    tech: ["React", "Python", "TensorFlow", "FastAPI"],
    github: "https://github.com/your-username/your-repo",
    live: "https://your-live-site.com",
  },
  {
    title: "E-commerce Analytics Dashboard",
    description: "A web application that visualizes sales data and provides insights into customer behavior and product performance.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "D3.js"],
    github: "https://github.com/your-username/your-repo",
    live: "https://your-live-site.com",
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio site built with modern web technologies to showcase my skills and projects.",
    tech: ["Vite", "React", "TypeScript", "shadcn/ui"],
    github: "https://github.com/meghana-codes-space/meghana-codes-space",
    live: "https://meghanasingareddy.site",
  },
];

// --- 3. The Main Projects Section Component ---
const Projects = () => {
  return (
    <section id="projects" className="container py-12 md:py-24">
      <div className="mx-auto flex max-w-xl flex-col items-center text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">My Projects</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Here are some of the projects I'm proud to have worked on.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projectData.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

// --- 4. The Individual Project Card Component ---
const ProjectCard = ({ title, description, tech, github, live }: Project) => {
  return (
    <Card className="flex h-full flex-col">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((t) => (
            <Badge key={t} variant="secondary">{t}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button asChild variant="outline" size="icon">
          <a href={github} target="_blank" rel="noopener noreferrer">
            <Github className="h-4 w-4" />
          </a>
        </Button>
        <Button asChild variant="outline" size="icon">
          <a href={live} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Projects;
