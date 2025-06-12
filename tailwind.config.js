/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-navy': '#020c1b',
        'navy': '#0a192f',
        'light-navy': '#112240',
        'lightest-navy': '#233554',
        'navy-shadow': 'rgba(2, 12, 27, 0.7)',
        'dark-slate': '#495670',
        'slate': '#8892b0',
        'light-slate': '#a8b2d1',
        'lightest-slate': '#ccd6f6',
        'white': '#e6f1ff',
        'green': '#64ffda',
        'green-tint': 'rgba(100, 255, 218, 0.1)',
        'pink': '#f57dff',
        'blue': '#57cbff'
      },
      typography: {
        DEFAULT: {
          css: {
           color: '#8892b0',
            h1: {
              fontSize: '5.25rem',
              fontWeight: '800',
              marginTop: '1rem',
              marginBottom: '1rem',
            },
            h2: {
              color: '#8892b0',
              fontSize: '3.875rem',
              fontWeight: '700',
              marginTop: '1rem',
              marginBottom: '0.75rem',
            },
            h3: {
              color: '#ccd6f6',
              fontSize: '2.5rem',
              fontWeight: '700',
              marginTop: '1rem',
              marginBottom: '0.75rem',
            },
            h4: {
              color: '#ccd6f6',
              fontSize: '2rem',
              fontWeight: '700',
              marginTop: '1rem',
              marginBottom: '0.75rem',
            },
             h5: {
              color: '#ccd6f6',
              fontSize: '1.5rem',
              fontWeight: '700',
              marginTop: '1rem',
              marginBottom: '0.75rem',
            },
            p: {
              marginTop: '1.25rem',
              marginBottom: '1.25rem',
            },
           
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 