const light = {
  base: '#eff1f5',
  text: '#4c4f69',
  text2: '#6c6f85',
  crust: '#dce0e8',
  accent: '#df8e1d',
  surface: '#ccd0da',
  link: '#7287fd',
  red: '#d20f39'
}

const dark = {
  base: '#1e1e2e',
  text: '#cdd6f4',
  text2: '#a6adc8',
  crust: '#11111b',
  accent: '#f9e2af',
  surface: '#313244',
  link: '#7287fd',
  red: '#f38ba8'
}

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./src/**/*.{html,js,svelte,ts,md}"],
  theme: {
    extend: {
      fontFamily: {
        "satoshi": ['Satoshi', "sans-serif"],
      },
      colors: {
        base: {
          light: light.base,
          dark: dark.base,
        },
        text: {
          light: light.text,
          dark: dark.text,
        },
        crust: {
          light: light.crust,
          dark: dark.crust,
        },
        accent: {
          light: light.accent,
          dark: dark.accent,
        },
        surface: {
          light: light.surface,
          dark: dark.surface,
        },
      },

      // blog styles
      typography: {
        DEFAULT: {
          css: {
            fontFamily: { "satoshi": ['Satoshi', "sans-serif"] },
            lineHeight: '1.8',
            color: light.text,
            a: {
              color: light.link,
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            strong: { color: light.text },
            h1: { color: light.text, },
            h2: { color: light.text },
            h3: { color: light.text },
            h4: { color: light.text },
            blockquote: {
              fontStyle: 'italic',
              borderLeftWidth: '4px',
              borderColor: light.crust,
              paddingLeft: '1rem',
              color: light.text2,
            },
            code: {
              backgroundColor: light.crust,
              padding: '0.2rem 0.4rem',
              borderRadius: '4px',
              color: light.red,
            },
          },
        },

        // dark mode
        dark: {
          css: {
            color: dark.text,
            a: { color: dark.link },
            strong: { color: dark.text },
            h1: { color: dark.text },
            h2: { color: dark.text, },
            h3: { color: dark.text },
            h4: { color: dark.text, },
            blockquote: {
              color: dark.text2,
              borderColor: dark.surface,
            },
            code: {
              color: dark.text,
            }
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
};
