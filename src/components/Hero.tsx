import { useEffect, useRef } from "react";

export const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const mouse = { x: -1000, y: -1000 };
    
    // Create grid
    const spacing = 50;
    const cols = Math.floor(width / spacing) + 2;
    const rows = Math.floor(height / spacing) + 2;
    
    interface Point {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      vx: number;
      vy: number;
    }
    
    const points: Point[][] = [];
    for (let i = 0; i < cols; i++) {
      points[i] = [];
      for (let j = 0; j < rows; j++) {
        points[i][j] = {
          x: i * spacing,
          y: j * spacing,
          baseX: i * spacing,
          baseY: j * spacing,
          vx: 0,
          vy: 0
        };
      }
    }

    let animationId: number;
    
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      
      const mouseInfluenceRadius = 180;
      const spring = 0.05;
      const friction = 0.85;
      
      // Update points
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const p = points[i][j];
          
          const dx = mouse.x - p.baseX;
          const dy = mouse.y - p.baseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < mouseInfluenceRadius) {
            const force = (mouseInfluenceRadius - dist) / mouseInfluenceRadius;
            const angle = Math.atan2(dy, dx);
            const targetX = p.baseX - Math.cos(angle) * force * 40;
            const targetY = p.baseY - Math.sin(angle) * force * 40;
            
            p.vx += (targetX - p.x) * spring;
            p.vy += (targetY - p.y) * spring;
          } else {
            p.vx += (p.baseX - p.x) * spring;
            p.vy += (p.baseY - p.y) * spring;
          }
          
          p.vx *= friction;
          p.vy *= friction;
          p.x += p.vx;
          p.y += p.vy;
        }
      }
      
      // Draw grid
      ctx.strokeStyle = "rgba(255, 255, 255, 0.04)";
      ctx.lineWidth = 1;
      
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const p = points[i][j];
          
          if (i < cols - 1) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(points[i+1][j].x, points[i+1][j].y);
            ctx.stroke();
          }
          if (j < rows - 1) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(points[i][j+1].x, points[i][j+1].y);
            ctx.stroke();
          }
        }
      }
      
      animationId = requestAnimationFrame(render);
    };
    
    render();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToWork = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="home" className="hero-section">
      <canvas ref={canvasRef} className="hero-canvas" />
      
      <div className="hero-inner">
        <div className="hero-eyebrow reveal">
          COMPUTER SCIENCE <span>·</span> AI/ML <span>·</span> SOFTWARE
        </div>
        
        <h1 className="hero-name reveal d1">
          S MEGHANA
          <span className="hero-name-line2">REDDY</span>
        </h1>
        
        <p className="hero-desc reveal d2">
          I build software across artificial intelligence, modern web infrastructure, and interactive digital products. Focus on elegant systems and technical depth.
        </p>
        
        <div className="hero-actions reveal d3">
          <button className="btn-primary" onClick={scrollToWork}>
            VIEW WORK
          </button>
          <a href="https://github.com/meghanasingareddy" target="_blank" rel="noopener noreferrer" className="btn-ghost">
            GITHUB ↗
          </a>
        </div>
      </div>
      
      <div className="hero-scroll reveal d4">
        <div className="hero-scroll-line" />
        <span className="hero-scroll-label">SCROLL</span>
      </div>
    </div>
  );
};

export default Hero;
