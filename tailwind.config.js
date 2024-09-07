/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        base: {
          light: '#eff1f5',
          dark: '#1e1e2e'
        },
        text: {
          light: '#4c4f69',
          dark: '#cdd6f4',
        },
        crust: {
          light: '#dce0e8',
          dark: '#11111b',
        },
        accent: {
          light: '#df8e1d',
          dark: '#f9e2af',
        },
      }
    },
  },
  plugins: [],
}

