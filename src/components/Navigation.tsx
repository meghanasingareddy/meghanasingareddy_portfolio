import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id], div[id='home']");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-inner">
          <a
            href="#home"
            className="nav-logo"
            onClick={(e) => { e.preventDefault(); scrollTo("#home"); }}
          >
            MEGHANA<span>.</span>
          </a>

          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-8">
            <div className="nav-links">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`nav-link ${active === item.href ? "active" : ""}`}
                  onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/meghanasingareddy"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-cta"
              >
                GitHub ↗
              </a>
              <a
                href="https://leetcode.com/u/meghanasingareddy/"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-cta"
              >
                LeetCode ↗
              </a>
            </div>
            </div>

            <ThemeToggle />
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              style={{ cursor: "none", background: "none", border: "none" }}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="mob-menu">
          <button
            className="absolute top-6 right-6 text-foreground"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            style={{ cursor: "none", background: "none", border: "none" }}
          >
            <X size={32} />
          </button>

          <div className="flex flex-col gap-6">
            {navItems.map((item, i) => (
              <button
                key={item.label}
                className="mob-nav-item"
                style={{ animationDelay: `${i * 0.05}s` }}
                onClick={() => scrollTo(item.href)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap gap-6">
            <a
              href="https://github.com/meghanasingareddy"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              GitHub ↗
            </a>
            <a
              href="https://leetcode.com/u/meghanasingareddy/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              LeetCode ↗
            </a>
            <a
              href="https://www.linkedin.com/in/meghana-reddy-singareddy-030527292/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;