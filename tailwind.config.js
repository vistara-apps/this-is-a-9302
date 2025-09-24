/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        bg: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        text: 'var(--color-text)',
        'text-secondary': 'var(--color-text-secondary)',
        border: 'var(--color-border)',
        // Retro gradient colors
        'retro-pink': 'hsl(330 80% 60%)',
        'retro-purple': 'hsl(280 70% 65%)',
        'retro-cyan': 'hsl(180 70% 50%)',
        'retro-yellow': 'hsl(50 90% 65%)',
      },
      borderRadius: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 300ms cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-up': 'slideUp 300ms cubic-bezier(0.4, 0, 0.2, 1)',
        'retro-glow': 'retroGlow 2s ease-in-out infinite alternate',
        'toggle-switch': 'toggleSwitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'neon-pulse': 'neonPulse 1.5s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        retroGlow: {
          '0%': { 
            boxShadow: '0 0 5px hsl(330 80% 60%), 0 0 10px hsl(330 80% 60%), 0 0 15px hsl(330 80% 60%)',
          },
          '100%': { 
            boxShadow: '0 0 10px hsl(280 70% 65%), 0 0 20px hsl(280 70% 65%), 0 0 30px hsl(280 70% 65%)',
          },
        },
        toggleSwitch: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        neonPulse: {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}