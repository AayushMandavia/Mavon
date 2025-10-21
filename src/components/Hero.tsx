import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import heroForest from '@/assets/hero-forest.jpg';

interface HeroProps {
  onScrollToServices: () => void;
  liteMode: boolean;
}

const Hero = ({ onScrollToServices, liteMode }: HeroProps) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroForest}
          alt="Bioluminescent forest"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/80 via-forest-deep/60 to-background" />
        
        {/* Animated Mist Effect */}
        {!liteMode && (
          <>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-leaf/10 to-transparent animate-shimmer" />
            <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent" />
          </>
        )}
      </div>

      {/* Fireflies */}
      {!liteMode && (
        <div className="absolute inset-0 z-10">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-amber rounded-full animate-firefly opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${4 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-scale-in">
            <Sparkles className="text-leaf" size={16} />
            <span className="text-sm text-leaf-light font-medium">Sustainable Technology Solutions</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-holographic animate-fade-in">
            Moving Innovation Forward
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-foreground/90 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Futuristic software solutions that grow with nature. Build the future while preserving tomorrow.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Button
              size="lg"
              onClick={onScrollToServices}
              className="bg-primary hover:bg-primary-glow text-primary-foreground font-semibold px-8 py-6 text-lg rounded-xl hover-tilt glow group"
            >
              Explore Services
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="glass-card hover:glow px-8 py-6 text-lg rounded-xl hover-tilt"
            >
              Get in Touch
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {[
              { value: 'Innovation', label: '' }, //Driven by Technology & Vision
              { value: 'Excellence', label: '' }, //Building the Future'
              { value: 'Creativity', label: '' }, //Transforming Ideas into Reality'
            ].map((stat, index) => (
              <div key={index} className="glass-card rounded-xl p-6 hover-tilt">
                <div className="text-2xl md:text-3xl font-bold text-holographic mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      /* {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-leaf flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-leaf rounded-full animate-pulse" />
        </div>
      </div> */} */
    </div>
  );
};

export default Hero;
