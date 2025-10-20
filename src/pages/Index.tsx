import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Solutions from '@/components/Solutions';
import About from '@/components/About';
import Contact from '@/components/Contact';
import FloatingMascot from '@/components/FloatingMascot';
import FireflyCursor from '@/components/FireflyCursor';
import { Navigation } from '@/components/Navigation';

const Index = () => {
  const [liteModeEnabled, setLiteModeEnabled] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden cursor-firefly">
      {/* Firefly cursor effect */}
      {!liteModeEnabled && <FireflyCursor />}

      {/* Floating Mascot */}
      {!liteModeEnabled && <FloatingMascot />}

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="pt-20">
        <Hero onScrollToServices={() => scrollToSection('services')} liteMode={liteModeEnabled} />
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <Services liteMode={liteModeEnabled} />
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20">
        <Solutions liteMode={liteModeEnabled} />
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <About liteMode={liteModeEnabled} />
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
