const light = {
  base: '#eff1f5',
  text: '#4c4f69',
  crust: '#dce0e8',
  accent: '#df8e1d',
  surface: '#ccd0da',
  link: '#7287fd'
}

const dark = {
  base: '#1e1e2e',
  text: '#cdd6f4',
  crust: '#11111b',
  accent: '#f9e2af',
  surface: '#313244',
  link: '#7287fd'
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
            fontFamily: {
              "satoshi": ['Satoshi', "sans-serif"],
            },
            color: light.text,
            a: {
              color: light.link,
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            h1: {
              color: light.text,
              fontWeight: '700',
            },
            h2: {
              color: light.text,
              fontWeight: '600',
            },
            blockquote: {
              fontStyle: 'italic',
              borderLeftWidth: '4px',
              borderColor: '#ccc',
              paddingLeft: '1rem',
              color: '#555',
            },
            code: {
              backgroundColor: '#f5f5f5',
              padding: '0.2rem 0.4rem',
              borderRadius: '4px',
              color: '#d63384',
            },
          },
        },

        // dark mode
        dark: {
          css: {
            color: dark.text,
            a: {
              color: dark.link,
              '&:hover': {
                color: '#63b3ed',
              },
            },
            h1: {
              color: dark.text,
            },
            blockquote: {
              color: '#ccc',
              borderColor: '#444',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
};
