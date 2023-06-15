/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'ubuntu': ['Ubuntu', 'sans-serif']
      },
      colors:{
        'marine-blue': 'var(--color-marine-blue)',
        'purplish-blue': 'var(--color-purplish-blue)',
        'pastel-blue': 'var(--color-pastel-blue)',
        'light-blue': 'var(--color-light-blue)',
        'strawberry-red': 'var(--color-strawberry-red)',
        'cool-gray': 'var(--color-cool-gray)',
        'magnolia': 'var(--color-magnolia)',
        'alabaster': 'var(--color-alabaster)',
        'light-gray': 'var(--color-light-gray)',
        'color-white': 'var(--color-white)'
      }
    },
    backgroundImage:{
      'sidebar-image':'url(./assets/bg-sidebar-desktop.svg)'
    }
  },
  plugins: [],
}

