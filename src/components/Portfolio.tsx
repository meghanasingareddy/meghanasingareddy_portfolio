import { useState, useEffect } from "react";
import { ArrowUpRight, Github, ExternalLink, X } from "lucide-react";

interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  tech: string[];
  github: string;
  live?: string;
  image: string;
}

const projects: Project[] = [
  {
    id: "p1",
    number: "01",
    title: "CleaRoute",
    tagline: "Computer Vision Road Analysis",
    image: "/projects/clearoute.png",
    overview: "Real-time pothole detection system utilizing YOLOv8 object detection. Includes a full pipeline from custom dataset annotation to evaluation.",
    problem: "Manual road surface inspection is inefficient and costly, while existing automated solutions lacked the accuracy needed for real-time deployment.",
    solution: "Trained a custom YOLOv8 model on annotated road datasets, integrating video preprocessing pipelines to optimize detection accuracy in varying conditions.",
    features: [
      "Real-time YOLOv8 object detection",
      "Custom video frame extraction pipeline",
      "Automated dataset annotation workflow",
      "Performance evaluation and optimization"
    ],
    tech: ["Python", "Computer Vision", "YOLOv8", "Machine Learning"],
    github: "https://github.com/meghanasingareddy/Clearoute",
  },
  {
    id: "p2",
    number: "02",
    title: "SecureFL Guard",
    tagline: "AI-powered Network Security",
    image: "/projects/securefl.png",
    overview: "A centralized ML-based intrusion detection system for federated learning in IIoT environments. Designed to identify Sybil-based collusion attacks.",
    problem: "Federated learning models in Industrial IoT are highly vulnerable to adversarial nodes collaborating to poison the global model via Sybil attacks.",
    solution: "Developed a centralized monitoring layer that analyzes network traffic signatures and behavioral patterns, using ML classifiers to quarantine malicious nodes before aggregation.",
    features: [
      "Machine learning traffic pattern analysis",
      "Sybil node detection and quarantine protocol",
      "Django-based monitoring dashboard",
      "Real-time threat alerting system"
    ],
    tech: ["Python", "Machine Learning", "Django", "Network Security"],
    github: "https://github.com/meghanasingareddy/SCA-Sybil-based-Collusion-Attacks",
  },
  {
    id: "p3",
    number: "03",
    title: "MindMate",
    tagline: "AI Wellness Platform",
    image: "/projects/mindmate.png",
    overview: "An AI-focused mental wellness application offering users a secure, judgment-free space to express emotions with intelligent conversational support.",
    problem: "Access to private, immediately available emotional support is limited. Users needed a safe digital environment for guided emotional expression.",
    solution: "Built a full-stack platform combining secure user authentication with AI-driven supportive conversations and mood tracking in a calming UI.",
    features: [
      "AI conversational support agent",
      "Secure user authentication (Supabase)",
      "Real-time mood tracking and journaling",
      "Accessible and minimal UI design"
    ],
    tech: ["React", "TypeScript", "Vite", "Supabase", "AI"],
    github: "https://github.com/meghanasingareddy/MindMate",
  },
  {
    id: "p4",
    number: "04",
    title: "Chatridge",
    tagline: "P2P Offline Messaging",
    image: "/projects/chatridge.jpg",
    overview: "A mobile application enabling real-time peer-to-peer communication without relying on internet connectivity.",
    problem: "In network-constrained environments or disaster zones, traditional cloud-based messaging applications completely fail.",
    solution: "Leveraged local network protocols to discover nearby devices and establish direct P2P connections for seamless offline messaging.",
    features: [
      "Offline-first P2P architecture",
      "Local device discovery",
      "Real-time message synchronization",
      "Cross-platform mobile support"
    ],
    tech: ["Flutter", "Mobile Development", "Real-Time Communication", "P2P Networking"],
    github: "https://github.com/meghanasingareddy/Chatridge",
  }
];

export const Portfolio = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveProject(null);
    };
    if (activeProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [activeProject]);

  return (
    <>
      <section id="projects" className="section">
        <div className="container-inner">
          <div className="section-label reveal">SELECTED PROJECTS</div>
          
          <div className="flex flex-col">
            {projects.map((proj, idx) => (
              <div key={proj.id} className={`proj-item reveal ${idx % 2 !== 0 ? 'rev' : ''}`}>
                
                <div className="proj-info">
                  <div className="proj-index">{proj.number}</div>
                  <h3 className="proj-title">{proj.title}</h3>
                  <div className="text-[var(--violet)] text-sm font-semibold mb-4 font-['Plus_Jakarta_Sans']">{proj.tagline}</div>
                  
                  <div className="proj-tags">
                    {proj.tech.map((t) => (
                      <span key={t} className="proj-tag">{t}</span>
                    ))}
                  </div>
                  
                  <button 
                    className="mt-6 flex items-center gap-2 text-sm font-bold text-[var(--fg)] tracking-wide hover:text-[var(--violet)] transition-colors"
                    onClick={() => setActiveProject(proj)}
                  >
                    VIEW CASE STUDY <ArrowUpRight size={16} />
                  </button>
                </div>

                <div 
                  className="proj-visual cursor-pointer group" 
                  onClick={() => setActiveProject(proj)}
                >
                  <div className="proj-visual-inner w-full h-full overflow-hidden bg-[var(--bg-card)]">
                    <img 
                      src={proj.image} 
                      alt={proj.title} 
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {activeProject && (
        <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && setActiveProject(null)}>
          <div className="modal-box">
            <button className="modal-close" onClick={() => setActiveProject(null)}>
              <X size={18} />
            </button>
            
            <div className="w-full h-64 sm:h-80 overflow-hidden bg-[var(--bg-card)] border-b border-[var(--border-c)]">
              <img 
                src={activeProject.image} 
                alt={activeProject.title} 
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="modal-content">
              <div className="modal-section-label">CASE STUDY</div>
              <h2 className="h-lg mb-4">{activeProject.title}</h2>
              <p className="modal-body mb-6">{activeProject.overview}</p>
              
              <div className="flex gap-4 mb-8">
                <a href={activeProject.github} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: "0.5rem 1rem", fontSize: "0.7rem" }}>
                  <Github size={14} /> GITHUB
                </a>
                {activeProject.live && (
                  <a href={activeProject.live} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ padding: "0.5rem 1rem", fontSize: "0.7rem" }}>
                    <ExternalLink size={14} /> LIVE DEMO
                  </a>
                )}
              </div>
              
              <div className="modal-divider" />
              
              <div className="modal-two">
                <div>
                  <div className="modal-section-label">THE PROBLEM</div>
                  <p className="modal-body">{activeProject.problem}</p>
                </div>
                <div>
                  <div className="modal-section-label">THE SOLUTION</div>
                  <p className="modal-body">{activeProject.solution}</p>
                </div>
              </div>
              
              <div className="modal-divider" />
              
              <div className="mb-8">
                <div className="modal-section-label">KEY FEATURES</div>
                <div className="modal-feat mt-3">
                  {activeProject.features.map((f, i) => (
                    <div key={i} className="modal-feat-item">
                      <div className="modal-feat-dot" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <div className="modal-section-label">TECHNOLOGIES</div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {activeProject.tech.map(t => (
                    <span key={t} className="proj-tag">{t}</span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Portfolio;