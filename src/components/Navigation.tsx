import { Home, Settings, Package, Briefcase, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import mavonLogo from '@/assets/Mavon Logo.jpg';

export const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Settings, label: "Services", path: "#services" },
    { icon: Package, label: "Solutions", path: "#solutions" },
    { icon: Briefcase, label: "About", path: "#about" },
    { icon: Mail, label: "Contact", path: "#contact" },
  ];

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full backdrop-blur-xl bg-card/30 border border-primary/20 shadow-glow">
      <ul className="flex items-center gap-8">
        <li className="flex items-center gap-2 mr-2">
          <img 
            src={mavonLogo} 
            alt="Mavon Logo" 
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="text-lg font-bold text-primary">Mavon</span>
        </li>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path || location.hash === item.path;
          
          return (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`group flex items-center gap-2 transition-all duration-300 ${
                  isActive 
                    ? "text-primary" 
                    : "text-foreground/70 hover:text-primary"
                }`}
              >
                <Icon 
                  className={`w-5 h-5 transition-all duration-500 ease-out group-hover:scale-125 group-hover:rotate-12 ${
                    isActive ? "animate-glow-pulse drop-shadow-[0_0_8px_hsl(var(--glow-primary))]" : ""
                  }`} 
                />
                <span className="text-sm font-medium group-hover:translate-x-1 transition-transform">
                  {item.label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
