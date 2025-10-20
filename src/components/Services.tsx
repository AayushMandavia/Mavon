import { useState, useEffect, useRef } from 'react';
import { Code, Palette, PenTool, TrendingUp, ChevronDown } from 'lucide-react';
import ServiceCard from './ServiceCard';
import { servicesData } from '@/lib/servicesData';

interface ServicesProps {
  liteMode: boolean;
}

type ServiceColor = 'software' | 'digital' | 'branding' | 'marketing';

const Services = ({ liteMode }: ServicesProps) => {
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const serviceCategories = [
    {
      id: 'software-web-retail',
      title: 'Software Solutions – Web & Retail',
      icon: Code,
      color: 'software' as ServiceColor,
      description: 'Enterprise-grade web applications and retail systems',
      subcategories: servicesData.softwareWebRetail,
    },
    {
      id: 'software-mobile-ai',
      title: 'Software Solutions – Mobile & AI',
      icon: Code,
      color: 'software' as ServiceColor,
      description: 'Smart mobile apps and intelligent chatbot solutions',
      subcategories: servicesData.softwareMobileAI,
    },
    {
      id: 'software-dbms',
      title: 'Database Management',
      icon: Code,
      color: 'software' as ServiceColor,
      description: 'Robust database systems for data management',
      subcategories: servicesData.softwareDBMS,
    },
    {
      id: 'software-automation',
      title: 'Automation Tools',
      icon: Code,
      color: 'software' as ServiceColor,
      description: 'Streamline workflows with intelligent automation',
      subcategories: servicesData.softwareAutomation,
    },
    {
      id: 'digital',
      title: 'Digital Products',
      icon: Palette,
      color: 'digital' as ServiceColor,
      description: 'Stunning designs that capture attention',
      subcategories: servicesData.digital,
    },
    {
      id: 'branding',
      title: 'Branding & Design',
      icon: PenTool,
      color: 'branding' as ServiceColor,
      description: 'Brand identity that stands out',
      subcategories: servicesData.branding,
    },
    {
      id: 'marketing',
      title: 'Marketing Automation',
      icon: TrendingUp,
      color: 'marketing' as ServiceColor,
      description: 'Automated campaigns that convert',
      subcategories: servicesData.marketing,
    },
  ];

  // Ambient glow loop - random card pulses every 6 seconds
  useEffect(() => {
    if (liteMode) return;
    
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * serviceCategories.length);
      const randomId = serviceCategories[randomIndex].id;
      setHoveredCard(randomId);
      setTimeout(() => setHoveredCard(null), 1500);
    }, 6000);

    return () => clearInterval(interval);
  }, [liteMode]);

  const handleCardClick = (categoryId: string) => {
    setExpandedService(expandedService === categoryId ? null : categoryId);
    
    // Smooth scroll to expanded section
    setTimeout(() => {
      const element = document.getElementById(`service-${categoryId}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const getColorClasses = (color: ServiceColor) => {
    const colorMap = {
      software: {
        bg: 'bg-service-software/20',
        border: 'border-service-software/30',
        text: 'text-service-software',
        glow: 'text-service-software-glow',
        gradient: 'from-service-software to-service-software-glow',
        hover: 'hover:border-service-software hover:shadow-[0_0_20px_hsl(var(--service-software)/0.3)]',
      },
      digital: {
        bg: 'bg-service-digital/20',
        border: 'border-service-digital/30',
        text: 'text-service-digital',
        glow: 'text-service-digital-glow',
        gradient: 'from-service-digital to-service-digital-glow',
        hover: 'hover:border-service-digital hover:shadow-[0_0_20px_hsl(var(--service-digital)/0.3)]',
      },
      branding: {
        bg: 'bg-service-branding/20',
        border: 'border-service-branding/30',
        text: 'text-service-branding',
        glow: 'text-service-branding-glow',
        gradient: 'from-service-branding to-service-branding-glow',
        hover: 'hover:border-service-branding hover:shadow-[0_0_20px_hsl(var(--service-branding)/0.3)]',
      },
      marketing: {
        bg: 'bg-service-marketing/20',
        border: 'border-service-marketing/30',
        text: 'text-service-marketing',
        glow: 'text-service-marketing-glow',
        gradient: 'from-service-marketing to-service-marketing-glow',
        hover: 'hover:border-service-marketing hover:shadow-[0_0_20px_hsl(var(--service-marketing)/0.3)]',
      },
    };
    return colorMap[color];
  };

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-forest-deep/50 to-background" />
      
      {/* Floating particle overlay */}
      {!liteMode && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-leaf-light/40 rounded-full animate-particle-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      )}

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-holographic mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions powered by innovation and sustainability
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {serviceCategories.map((category, index) => {
            const Icon = category.icon;
            const isExpanded = expandedService === category.id;
            const isHovered = hoveredCard === category.id;
            const colors = getColorClasses(category.color);

            return (
              <div
                key={category.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <button
                  onClick={() => handleCardClick(category.id)}
                  onMouseEnter={() => setHoveredCard(category.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`
                    group relative w-full glass-card rounded-2xl p-8 text-left
                    transition-all duration-400 border-2
                    ${colors.border} ${colors.hover}
                    ${isExpanded ? 'ring-2 ring-current ' + colors.text : ''}
                    ${isHovered && !liteMode ? 'animate-tilt-hover' : ''}
                  `}
                >
                  {/* Glow effect */}
                  <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 ${colors.bg} blur-xl`} />
                  
                  {/* Icon Container */}
                  <div className="relative flex items-start justify-between mb-4">
                    <div className={`w-16 h-16 rounded-xl ${colors.bg} flex items-center justify-center ${!liteMode ? 'group-hover:animate-icon-morph' : ''}`}>
                      <Icon className={colors.text} size={32} strokeWidth={2} />
                    </div>
                    <ChevronDown
                      className={`${colors.text} transition-transform duration-300 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                      size={24}
                    />
                  </div>

                  {/* Title with gradient */}
                  <h3 className={`text-2xl font-bold mb-2 bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent`}>
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground">{category.description}</p>

                  {/* Hover particle burst */}
                  {!liteMode && isHovered && (
                    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className={`absolute w-1.5 h-1.5 ${colors.bg} rounded-full animate-particle-float`}
                          style={{
                            left: '50%',
                            top: '50%',
                            transform: `rotate(${i * 45}deg) translateX(40px)`,
                          }}
                        />
                      ))}
                    </div>
                  )}
                </button>
              </div>
            );
          })}
        </div>

        {/* Expanded Subsections */}
        {serviceCategories.map((category) => {
          const isExpanded = expandedService === category.id;
          const colors = getColorClasses(category.color);

          return (
            isExpanded && (
              <div
                key={`${category.id}-expanded`}
                id={`service-${category.id}`}
                className="animate-leaf-bloom mb-16 scroll-mt-24"
              >
                <div className={`glass-card rounded-3xl p-8 border-2 ${colors.border}`}>
                  {Object.entries(category.subcategories).map(([subKey, subData], subIndex) => (
                    <div 
                      key={subKey} 
                      className="mb-12 last:mb-0 animate-fade-in"
                      style={{ animationDelay: `${subIndex * 0.1}s` }}
                    >
                      {/* Subsection Title */}
                      <h4 className={`text-2xl font-semibold mb-6 flex items-center gap-3 bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent`}>
                        <div className={`w-2 h-2 rounded-full ${colors.bg} ${!liteMode ? 'animate-pulse' : ''}`} />
                        {subData.title}
                      </h4>

                      {/* Example Cards Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {subData.examples.map((example, exIndex) => (
                          <div
                            key={exIndex}
                            className="animate-fade-in-up"
                            style={{ animationDelay: `${(subIndex * 0.1) + (exIndex * 0.15)}s` }}
                          >
                            <ServiceCard
                              example={example}
                              color={category.color}
                              liteMode={liteMode}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          );
        })}
      </div>
    </section>
  );
};

export default Services;
