const skillsData = [
  {
    category: "Languages",
    items: ["Java", "Python", "C", "JavaScript", "TypeScript"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Vite", "HTML/CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "FastAPI", "Firebase"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MongoDB", "Supabase", "SQLite"],
  },
  {
    category: "AI / ML",
    items: ["PyTorch", "TensorFlow", "YOLOv8", "OpenCV"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "VS Code", "Flutter"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container-inner">
        <div className="section-label reveal">SKILLS</div>
        
        <h2 className="h-lg mb-12 reveal">Technical Toolkit</h2>
        
        <div className="skills-grid reveal d1">
          {skillsData.map((group, idx) => (
            <div key={idx} className="skill-cell">
              <div className="skill-cat">{group.category}</div>
              <div className="skill-list">
                {group.items.map((item, i) => (
                  <span key={i}>
                    <strong>{item}</strong>
                    {i < group.items.length - 1 && <span className="mx-2 text-[var(--border-c)]">/</span>}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;