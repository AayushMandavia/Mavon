import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          glow: "hsl(var(--primary-glow))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          glow: "hsl(var(--secondary-glow))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
          glow: "hsl(var(--card-glow))",
        },
        forest: {
          deep: "hsl(var(--forest-deep))",
          canopy: "hsl(var(--forest-canopy))",
        },
        leaf: {
          DEFAULT: "hsl(var(--leaf-green))",
          light: "hsl(var(--leaf-light))",
        },
        teal: {
          DEFAULT: "hsl(var(--teal))",
          glow: "hsl(var(--teal-glow))",
        },
        amber: {
          DEFAULT: "hsl(var(--amber))",
          glow: "hsl(var(--amber-glow))",
        },
        violet: {
          DEFAULT: "hsl(var(--violet))",
          glow: "hsl(var(--violet-glow))",
        },
        sky: {
          DEFAULT: "hsl(var(--sky))",
          glow: "hsl(var(--sky-glow))",
        },
        service: {
          software: {
            DEFAULT: "hsl(var(--service-software))",
            glow: "hsl(var(--service-software-glow))",
            accent: "hsl(var(--service-software-accent))",
          },
          digital: {
            DEFAULT: "hsl(var(--service-digital))",
            glow: "hsl(var(--service-digital-glow))",
            accent: "hsl(var(--service-digital-accent))",
          },
          branding: {
            DEFAULT: "hsl(var(--service-branding))",
            glow: "hsl(var(--service-branding-glow))",
            accent: "hsl(var(--service-branding-accent))",
          },
          marketing: {
            DEFAULT: "hsl(var(--service-marketing))",
            glow: "hsl(var(--service-marketing-glow))",
            accent: "hsl(var(--service-marketing-accent))",
          },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0", opacity: "0" },
          to: { height: "var(--radix-accordion-content-height)", opacity: "1" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)", opacity: "1" },
          to: { height: "0", opacity: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px hsl(127, 53%, 51% / 0.3)" },
          "50%": { boxShadow: "0 0 40px hsl(127, 53%, 51% / 0.6)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "particle-rise": {
          "0%": { transform: "translateY(0) scale(1)", opacity: "1" },
          "100%": { transform: "translateY(-100px) scale(0)", opacity: "0" },
        },
        "holographic-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        "bounce-subtle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "expand": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "firefly": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)", opacity: "0.4" },
          "25%": { transform: "translate(10px, -10px) scale(1.2)", opacity: "0.8" },
          "50%": { transform: "translate(-10px, -5px) scale(0.9)", opacity: "0.6" },
          "75%": { transform: "translate(5px, 10px) scale(1.1)", opacity: "0.9" },
        },
        "leaf-bloom": {
          "0%": { transform: "scale(0.6)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "tilt-hover": {
          "0%": { transform: "perspective(1000px) rotateX(0deg) translateY(0)" },
          "100%": { transform: "perspective(1000px) rotateX(-5deg) translateY(-4px)" },
        },
        "border-pulse": {
          "0%, 100%": { boxShadow: "0 0 10px currentColor" },
          "50%": { boxShadow: "0 0 20px currentColor, 0 0 30px currentColor" },
        },
        "icon-morph": {
          "0%, 100%": { transform: "scale(1) rotate(0deg)" },
          "50%": { transform: "scale(1.1) rotate(5deg)" },
        },
        "ripple": {
          "0%": { transform: "scale(0)", opacity: "1" },
          "100%": { transform: "scale(4)", opacity: "0" },
        },
        "pulse-text": {
          "0%, 100%": { opacity: "0.7" },
          "50%": { opacity: "1" },
        },
        "particle-float": {
          "0%": { transform: "translateY(0) scale(1)", opacity: "1" },
          "100%": { transform: "translateY(-60px) scale(0.5)", opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.3s ease-out",
        "accordion-up": "accordion-up 0.3s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "fade-in-up": "fade-in-up 0.6s ease-out",
        "scale-in": "scale-in 0.4s ease-out",
        "slide-in-right": "slide-in-right 0.5s ease-out",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
        "particle-rise": "particle-rise 1.5s ease-out forwards",
        "holographic-shift": "holographic-shift 3s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "bounce-subtle": "bounce-subtle 2s ease-in-out infinite",
        "expand": "expand 0.4s ease-out",
        "firefly": "firefly 4s ease-in-out infinite",
        "leaf-bloom": "leaf-bloom 0.8s ease-out",
        "tilt-hover": "tilt-hover 0.4s ease-in-out",
        "border-pulse": "border-pulse 2.5s ease-in-out infinite",
        "icon-morph": "icon-morph 5s ease-in-out infinite",
        "ripple": "ripple 0.6s ease-out",
        "pulse-text": "pulse-text 2s linear infinite",
        "particle-float": "particle-float 1.5s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
