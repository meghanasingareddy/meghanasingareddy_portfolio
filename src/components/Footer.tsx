export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container-inner flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-['Plus_Jakarta_Sans'] font-bold text-sm tracking-wide">
          S MEGHANA REDDY
        </div>
        <div className="text-[var(--fg-3)] text-xs font-['Inter']">
          © {currentYear}. ALL RIGHTS RESERVED.
        </div>
        <div className="flex gap-6 text-[var(--fg-3)] text-xs font-bold font-['Plus_Jakarta_Sans'] tracking-wider">
          <a href="#home" className="hover:text-[var(--fg)] transition-colors">HOME</a>
          <a href="#projects" className="hover:text-[var(--fg)] transition-colors">WORK</a>
          <a href="https://leetcode.com/u/meghanasingareddy/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--fg)] transition-colors">LEETCODE</a>
          <a href="https://github.com/meghanasingareddy" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--fg)] transition-colors">GITHUB</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;