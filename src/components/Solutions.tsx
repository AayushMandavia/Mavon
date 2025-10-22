import { Package, Zap, Shield, TrendingUp } from 'lucide-react';

interface SolutionsProps {
  liteMode: boolean;
}

const Solutions = ({ liteMode }: SolutionsProps) => {
  const solutions = [
    {
      icon: Package,
      title: 'Enterprise Solutions',
      description: '', //Scalable systems designed for growing businesses
      features: ['Custom ERP Systems', 'Business Intelligence', 'Process Automation']
    },
    {
      icon: Zap,
      title: 'Rapid Development',
      description: '', //Fast-track your digital transformation
      features: ['MVP Development', 'Prototype Design', 'Quick Deployment']
    },
    {
      icon: Shield,
      title: 'Secure Infrastructure',
      description: '', //Enterprise-grade security for your applications
      features: ['Data Encryption', 'Compliance Management', 'Security Audits']
    },
    {
      icon: TrendingUp,
      title: 'Growth Solutions',
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {solutions.map((solution, index) => {
          const Icon = solution.icon;
          return (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl hover:glow-medium transition-all duration-300 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {solution.description}
                  </p>
                </div>
              </div>
              <ul className="space-y-2 mt-6">
                {solution.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-foreground/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
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
