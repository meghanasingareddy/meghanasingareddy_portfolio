export const About = () => {
  return (
    <section id="about" className="section">
      <div className="container-inner">
        <div className="section-label reveal">ABOUT</div>
        
        <div className="about-grid">
          <div className="reveal-l">
            <h2 className="h-display">
              S Meghana<br />Reddy
            </h2>
            <div className="mt-6 text-[var(--violet)] font-bold text-sm tracking-widest uppercase font-['Plus_Jakarta_Sans']">
              Computer Science / AI & ML Student
            </div>
          </div>
          
          <div className="reveal-r">
            <div className="text-[1.05rem] text-[var(--fg-2)] leading-[1.8] font-light max-w-[50ch] flex flex-col gap-6">
              <p>
                I am a Computer Science engineering student specializing in Artificial Intelligence and Machine Learning. I focus on building software that bridges complex backend algorithms with clean, accessible user interfaces.
              </p>
              <p>
                My work spans federated learning security, computer vision systems, and full-stack web applications. I am drawn to problems that require deep technical understanding and translate them into intuitive digital experiences.
              </p>
              <p>
                Currently, I am expanding my knowledge in system design, data structures, and advanced machine learning models while actively seeking internship opportunities to apply these skills in real-world environments.
              </p>
            </div>
            
            <div className="stat-row">
              <div className="stat-item">
                <div className="stat-num">6+</div>
                <div className="stat-lbl">Projects Built</div>
              </div>
              <div className="stat-item">
                <div className="stat-num">200+</div>
                <div className="stat-lbl">DSA Problems</div>
              </div>
              <div className="stat-item">
                <div className="stat-num">B.Tech</div>
                <div className="stat-lbl">CSE — AI/ML</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;