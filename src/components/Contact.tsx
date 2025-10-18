import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Mail, MessageSquare, User, Sparkles } from 'lucide-react';

interface ContactProps {
  liteMode: boolean;
}

const Contact = ({ liteMode }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully!', {
        description: 'We\'ll get back to you soon.',
        icon: <Sparkles className="text-leaf" />,
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-holographic mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground">
            Let's bring your ideas to life. Reach out and we'll respond within 24 hours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in">
            <div className="glass-card rounded-xl p-6 hover-tilt">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-teal/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-teal" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email Us</h3>
                  <p className="text-muted-foreground">
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=mavontechsolutions@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      mavontechsolutions@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-xl p-6 hover-tilt">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-violet/20 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="text-violet" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Contact Us</h3>
                  <p><a href="tel:7678046520" className="text-muted-foreground hover:underline">
                    +91 7678046520
                  </a></p>
                  <p><a href="tel:7977457097" className="text-muted-foreground hover:underline">
                    +91 7977457097
                  </a></p>
                </div>
              </div>
            </div>

            {/* Additional Info Card */}
            <div className="glass-card rounded-xl p-6 bg-gradient-to-br from-leaf/10 to-teal/10 border-leaf/30">
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <Sparkles className="text-leaf" size={18} />
                Why Choose Mavon?
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-leaf" />
                  Eco-conscious technology solutions
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-leaf" />
                  24/7 dedicated support
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-leaf" />
                  Cutting-edge innovation
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-leaf" />
                  Transparent pricing
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="glass-card rounded-xl p-6">
              <div className="space-y-4">
                {/* Name Field */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground flex items-center gap-2">
                    <User size={16} className="text-leaf" />
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="glass-card border-leaf/30 focus:border-leaf focus:ring-leaf/20 transition-all"
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Mail size={16} className="text-teal" />
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="glass-card border-teal/30 focus:border-teal focus:ring-teal/20 transition-all"
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground flex items-center gap-2">
                    <MessageSquare size={16} className="text-violet" />
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    required
                    rows={5}
                    className="glass-card border-violet/30 focus:border-violet focus:ring-violet/20 transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary-glow text-primary-foreground font-semibold py-6 rounded-xl hover-tilt glow group"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-primary-foreground/20 border-t-primary-foreground rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Sparkles className="group-hover:rotate-12 transition-transform" size={18} />
                      Send Message
                    </span>
                  )}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
