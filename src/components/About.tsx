import { Target, Users, Leaf, Award } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface AboutProps {
  liteMode: boolean;
}

const About = ({ liteMode }: AboutProps) => {
  useScrollAnimation();
  
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      color: 'text-amber-500',
      bgColor: 'bg-amber-500/20',
      description: 'To deliver innovative technology solutions that empower businesses while maintaining environmental responsibility.'
    },
    {
      icon: Users,
      title: 'Innovative Solutions',
      color: 'text-sky-500',
      bgColor: 'bg-sky-500/20',
      description: 'Driven by Technology & Vision.'
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-500/20',
      description: 'Building eco-conscious solutions that grow with nature and contribute to a sustainable future.'
    },
    {
      icon: Award,
      title: 'Excellence Focused',
      color: 'text-violet-500',
      bgColor: 'bg-violet-500/20',
      description: 'Building the Future'
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-holographic mb-4">
          About Mavon
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Moving Innovation Forward with sustainable technology solutions
        </p>
      </div>

      <div className="max-w-4xl mx-auto mb-16">
        <div className="glass-card p-8 rounded-2xl">
          <p className="text-lg text-foreground/90 leading-relaxed mb-6">
            At Mavon, we believe in the power of technology to transform businesses while preserving our planet. 
            Our team combines cutting-edge development practices with sustainable approaches to create solutions 
            that not only meet your needs today but also contribute to a better tomorrow.
          </p>
          <p className="text-lg text-foreground/90 leading-relaxed">
            From custom software development to digital marketing strategies, we're your partner in digital transformation. 
            We take pride in delivering exceptional results that drive growth and innovation.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {values.map((value, index) => {
          const Icon = value.icon;
          const rotationClass = [
            'animate-pulse-glow',
            'animate-rotate-tilt', 
            'animate-float-rotate',
            'animate-rotate-reverse'
          ][index % 4];
          
          return (
            <div
              key={index}
              className="glass-card p-7 rounded-xl hover:glow-medium transition-all duration-300 group scroll-animate"
            >
              <div className="flex items-start gap-5">
                {/* Rotating Icon Container */}
                <div className={`p-4 rounded-xl ${value.bgColor} group-hover:scale-110 transition-all flex-shrink-0 relative`}>
                  {/* Glow effect */}
                  {!liteMode && (
                    <div className={`absolute inset-0 ${value.bgColor} blur-md opacity-0 group-hover:opacity-100 transition-opacity`} />
                  )}
                  {/* Rotating Icon */}
                  <div className={`relative ${!liteMode ? rotationClass : ''}`}>
                    <Icon className={`w-7 h-7 ${value.color}`} strokeWidth={2} />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;