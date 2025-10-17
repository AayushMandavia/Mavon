export const Footer = () => {
  return (
    <footer className="relative py-12 px-4 border-t border-primary/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-leaf bg-clip-text text-transparent mb-2">
              Mavon
            </h3>
            <p className="text-foreground/60 text-sm">
              Growing Innovation, Naturally
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-8 text-sm">
            <a 
              href="#services" 
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              Services
            </a>
            <a 
              href="#solutions" 
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              Solutions
            </a>
            <a 
              href="#about" 
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              About
            </a>
            <a 
              href="#contact" 
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Copyright */}
          <div className="text-foreground/60 text-sm">
            © 2025 Mavon. All rights reserved.
          </div>
        </div>

        {/* Decorative Line */}
        <div className="mt-8 h-px bg-gradient-leaf opacity-20" />
      </div>
    </footer>
  );
};
