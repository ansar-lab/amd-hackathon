import { Leaf } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass-nav" : ""}`}>
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Leaf className="w-6 h-6 text-primary" />
          <span className="font-display text-lg font-bold">AgriVision AI</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#architecture" className="hover:text-primary transition-colors">Architecture</a>
          <a href="#" className="hover:text-primary transition-colors">Demo</a>
          <a href="#" className="hover:text-primary transition-colors">GitHub</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
