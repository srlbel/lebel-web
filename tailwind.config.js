const light = {
  base: '#eff1f5',
  text: '#4c4f69',
  text2: '#6c6f85',
  crust: '#dce0e8',
  accent: '#df8e1d',
  surface: '#ccd0da',
  link: '#7287fd'
}

const dark = {
  base: '#1e1e2e',
  text: '#cdd6f4',
  text2: '#a6adc8',
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
            lineHeight: '1.8',
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
            h3: {
              color: light.text,
              fontWeight: '500'
            },
            h4: {
              color: light.text,
              fontWeight: '500'
            },
            blockquote: {
              fontStyle: 'italic',
              borderLeftWidth: '4px',
              borderColor: light.crust,
              paddingLeft: '1rem',
              color: light.text2,
            },
            code: {
              backgroundColor: light.surface,
              padding: '0.2rem 0.4rem',
              borderRadius: '4px',
              color: '#d20f39',
            },
          },
        },

        // dark mode
        dark: {
          css: {
            color: dark.text,
            a: {
              color: dark.link,
            },
            h1: {
              color: dark.text,
            },
            h2: {
              color: dark.text,
            },
            h3: {
              color: dark.text,
              fontWeight: '500'
            },
            h4: {
              color: dark.text,
              fontWeight: '500'
            },
            blockquote: {
              color: dark.text2,
              borderColor: dark.surface,
            },
            code: {
              backgroundColor: dark.surface,
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
