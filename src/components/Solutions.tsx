import { Lightbulb, Rocket, Shield, Zap } from 'lucide-react';

interface SolutionsProps {
  liteMode: boolean;
}

const Solutions = ({ liteMode }: SolutionsProps) => {
  const solutions = [
    {
      icon: Rocket,
      title: 'Rapid Development',
      description: 'Launch your product in weeks, not months. Our agile approach delivers results fast without compromising quality.',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security built into every solution. Your data and your customers are protected at all times.',
    },
    {
      icon: Zap,
      title: 'Scalable Architecture',
      description: 'Start small, grow big. Our solutions scale seamlessly from startup to enterprise.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'Stay ahead with cutting-edge technology. We implement the latest AI, automation, and cloud solutions.',
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-forest-deep/30 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-holographic mb-4">
            Why Choose Mavon
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions designed for the future of your business
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={index}
                className="group glass-card rounded-2xl p-8 border border-primary/20 hover:border-primary/40 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-primary" size={28} strokeWidth={2} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3 text-primary">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {solution.description}
                </p>

                {/* Hover glow */}
                {!liteMode && (
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 bg-primary/5 blur-xl pointer-events-none" />
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <p className="text-lg text-muted-foreground mb-6">
            Ready to transform your business?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:scale-105 transition-transform duration-300 shadow-glow"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
