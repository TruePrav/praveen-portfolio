/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['"Space Grotesk"', 'sans-serif'],
      },
      colors: {
        background: '#0D1117',
        'bg-card': 'rgba(22, 27, 34, 0.8)',
        accent: '#22D3EE',
        'accent-dim': '#0891B2',
        purple: '#8B5CF6',
        'purple-dim': '#6D28D9',
        text: {
          primary: '#F0F6FC',
          secondary: '#8B949E',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.7s ease-out forwards',
        'gradient-shift': 'gradientShift 6s ease infinite',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
        'grid-move': 'gridMove 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'scale-up': 'scaleUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(0.85)' },
        },
        gridMove: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(60px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        scaleUp: {
          '0%': { transform: 'scale(1)', boxShadow: '0 0 0 rgba(0,0,0,0)' },
          '100%': { transform: 'scale(1.02)', boxShadow: '0 10px 20px rgba(34,211,238,0.15)' },
        },
      },
      backgroundSize: {
        '300%': '300%',
      },
    },
  },
  plugins: [],
}
