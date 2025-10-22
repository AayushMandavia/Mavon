import { Mail, MessageSquare, Sparkles, Instagram } from 'lucide-react';

interface ContactProps {
  liteMode: boolean;
}

const Contact = ({ liteMode }: ContactProps) => {

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

        <div className="grid md:grid-cols-3 gap-6">
          {/* Email Card */}
          <div className="animate-fade-in">
            <div className="glass-card rounded-xl p-6 hover-tilt">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-sky-500/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-sky-500" size={24} />
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
          </div>

          {/* Phone Card */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="glass-card rounded-xl p-6 hover-tilt">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="text-emerald-500" size={24} />
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
          </div>

          {/* Instagram Card */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="glass-card rounded-xl p-6 hover-tilt">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-pink-600/20 flex items-center justify-center flex-shrink-0">
                  <Instagram className="text-pink-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Follow Us</h3>
                  <p className="text-muted-foreground">
                    <a
                      href="https://www.instagram.com/_mavon_?igsh=MWl3MmpmbHoyenB5"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      @_mavon_
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
