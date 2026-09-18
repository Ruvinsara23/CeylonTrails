import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'forest': {
          DEFAULT: '#0A1A14',
          50: '#F2F6F4',
          100: '#E1EBE6',
          200: '#C2D6CA',
          300: '#9EBCAB',
          400: '#769E87',
          500: '#548067',
          600: '#3D634E',
          700: '#2F4D3D',
          800: '#253D31',
          900: '#1F3329',
          950: '#0A1A14',
        },
        'gold': {
          DEFAULT: '#D4AF37',
          50: '#FDFBF4',
          100: '#FAF5E3',
          200: '#F3E5BB',
          300: '#EBD18E',
          400: '#E1BA5C',
          500: '#D4AF37',
          600: '#B59025',
          700: '#8C6C18',
          800: '#71561B',
          900: '#5D461A',
          950: '#342509',
        },
        'pearl': {
          DEFAULT: '#FDFCF8',
          50: '#FFFFFF',
          100: '#FDFCF8',
          200: '#F9F7F1',
          300: '#F3EFE4',
          400: '#EBE4D3',
          500: '#DFD5BD',
          600: '#CDC0A3',
          700: '#B8AA8A',
          800: '#9E9276',
          900: '#837A63',
          950: '#474134',
        },
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
