import { useEffect } from 'react';
import { Package, Zap, Shield, TrendingUp } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface SolutionsProps {
  liteMode: boolean;
}

const Solutions = ({ liteMode }: SolutionsProps) => {
  useScrollAnimation();
  
  const solutions = [
    {
      icon: Package,
      title: 'Enterprise Solutions',
      color: 'text-amber-500',
      bgColor: 'bg-amber-500/20',
      description: '', //Scalable systems designed for growing businesses
      features: ['Custom ERP Systems', 'Business Intelligence', 'Process Automation']
    },
    {
      icon: Zap,
      title: 'Rapid Development',
      color: 'text-cyan-500',
      bgColor: 'bg-cyan-500/20',
      description: '', //Fast-track your digital transformation
      features: ['MVP Development', 'Prototype Design', 'Quick Deployment']
    },
    {
      icon: Shield,
      title: 'Secure Infrastructure',
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-500/20',
      description: '', //Enterprise-grade security for your applications
      features: ['Data Encryption', 'Compliance Management', 'Security Audits']
    },
    {
      icon: TrendingUp,
      title: 'Growth Solutions',
      color: 'text-violet-500',
      bgColor: 'bg-violet-500/20',
      description: '', //Tools to scale your business effectively
      features: ['Analytics Dashboard', 'Performance Monitoring', 'Growth Strategy']
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-holographic mb-4">
          Our Solutions
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Comprehensive technology solutions tailored to your business needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {solutions.map((solution, index) => {
          const Icon = solution.icon;
          const rotationClass = index % 2 === 0 ? 'animate-rotate-slow' : 'animate-rotate-reverse';
          
          return (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl hover:glow-medium transition-all duration-300 group scroll-animate"
            >
              <div className="flex items-start gap-6 mb-6">
                {/* Rotating Icon Container */}
                <div className={`p-4 rounded-xl ${solution.bgColor} group-hover:scale-110 transition-all relative flex-shrink-0`}>
                  {/* Background glow ring */}
                  {!liteMode && (
                    <div className={`absolute inset-0 ${solution.bgColor} blur-lg opacity-0 group-hover:opacity-100 transition-opacity`} />
                  )}
                  {/* Rotating Icon */}
                  <div className={`relative ${!liteMode ? rotationClass : ''}`}>
                    <Icon className={`w-8 h-8 ${solution.color}`} strokeWidth={2} />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {solution.description}
                  </p>
                </div>
              </div>
              
              <ul className="space-y-3 mt-6">
                {solution.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-foreground/80 group/item hover:text-foreground transition-colors">
                    <div className={`w-2 h-2 rounded-full ${solution.color.replace('text-', 'bg-')} group-hover/item:scale-125 transition-transform`} />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Solutions;
