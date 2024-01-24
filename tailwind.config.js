/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      'xs': '10px',
      'sm': '12px',
      'md': '14px',
      'lg': '16px',
      'xl': '18px'
    },
    extend: {
      colors: {
        'primary': '#34CAA5',
        'secondary': '#0D062D',
        'success': '#66C87B',
        'error': '#ED544E',
        'warning': '#F4C700',
        'white': '#FFFFFF',
        'background': '#F7F8FA',
        'grayscale': {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#B2ABAB',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      }, 
      screens: {
        'max-lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'max-md': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
  
        'max-sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
      }
    },
    
  },
  plugins: [],
}