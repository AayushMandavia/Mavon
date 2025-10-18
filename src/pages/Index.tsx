import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import FloatingMascot from '@/components/FloatingMascot';

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [liteModeEnabled, setLiteModeEnabled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Floating Mascot */}
      {!liteModeEnabled && <FloatingMascot />}

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('home')}
              className="text-2xl font-bold text-holographic hover:scale-105 transition-transform"
            >
              Mavon
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-foreground hover:text-primary transition-colors relative ${
                    activeSection === item.id ? 'text-primary font-medium' : ''
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary animate-scale-in" />
                  )}
                </button>
              ))}

              {/* Lite Mode Toggle */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setLiteModeEnabled(!liteModeEnabled)}
                className="glass-card"
              >
                {liteModeEnabled ? '🌟 Full' : '⚡ Lite'}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 animate-fade-in">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left py-2 px-4 rounded-lg hover:bg-card transition-colors ${
                    activeSection === item.id ? 'bg-card text-primary font-medium' : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => setLiteModeEnabled(!liteModeEnabled)}
                className="block w-full text-left py-2 px-4 mt-2 rounded-lg hover:bg-card transition-colors"
              >
                {liteModeEnabled ? '🌟 Enable Full Mode' : '⚡ Enable Lite Mode'}
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20">
        <Hero onScrollToServices={() => scrollToSection('services')} liteMode={liteModeEnabled} />
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <Services liteMode={liteModeEnabled} />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <Contact liteMode={liteModeEnabled} />
      </section>

      {/* Scroll to Top Indicator */}
      <button
        onClick={() => scrollToSection('home')}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full glass-card flex items-center justify-center hover:glow-strong transition-all hover:scale-110 z-40"
        aria-label="Scroll to top"
      >
        <ChevronDown className="rotate-180 text-primary" size={20} />
      </button>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2025 Mavon. Moving Innovation Forward.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
