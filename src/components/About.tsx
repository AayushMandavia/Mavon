import { Target, Users, Award, TrendingUp } from 'lucide-react';

interface AboutProps {
  liteMode: boolean;
}

const About = ({ liteMode }: AboutProps) => {
  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Award, value: '1000+', label: 'Projects Completed' },
    { icon: TrendingUp, value: '98%', label: 'Success Rate' },
    { icon: Target, value: '24/7', label: 'Support Available' },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-forest-deep/20 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-holographic mb-4">
            About Mavon
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Moving Innovation Forward
          </p>
        </div>

        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="glass-card rounded-3xl p-8 md:p-12 border border-primary/20">
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed text-center">
              At Mavon, we believe in the power of technology to transform businesses. 
              With a team of passionate innovators, we deliver custom software solutions, 
              stunning digital designs, and marketing automation that drives real results. 
              Our commitment to sustainability and cutting-edge technology sets us apart.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group text-center glass-card rounded-2xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-primary" size={24} />
                </div>

                {/* Value */}
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>

                {/* Label */}
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>

                {/* Hover glow */}
                {!liteMode && (
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 bg-primary/5 blur-xl pointer-events-none" />
                )}
              </div>
            );
          })}
        </div>

        {/* Values */}
        <div className="mt-16 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-primary">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Innovation', desc: 'Pushing boundaries with cutting-edge solutions' },
              { title: 'Quality', desc: 'Excellence in every line of code' },
              { title: 'Partnership', desc: 'Your success is our success' },
            ].map((value, idx) => (
              <div
                key={idx}
                className="glass-card rounded-xl p-6 border border-primary/20 text-center"
              >
                <h4 className="text-lg font-semibold text-primary mb-2">{value.title}</h4>
                <p className="text-muted-foreground text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
