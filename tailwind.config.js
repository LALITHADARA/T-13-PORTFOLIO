module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: '640px',   
      md: '768px',    
      lg: '1024px',   
      xl: '1280px',
      '2xl': '1536px'
    },
    extend: {
      colors: {
        // Primary Colors
        primary: {
          text: "var(--text-primary)",
          background: "var(--bg-primary)",
          border: "var(--border-primary)"
        },
        // Secondary Colors
        secondary: {
          text: "var(--text-secondary)",
          background: "var(--bg-secondary)",
          border: "var(--border-secondary)"
        },
        // Text Colors
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)"
        },
        // Background Colors
        background: {
          primary: "var(--bg-primary)",
          secondary: "var(--bg-secondary)"
        },
        // Border Colors
        border: {
          primary: "var(--border-primary)",
          secondary: "var(--border-secondary)"
        },
        // Component-specific colors
        header: {
          text: "var(--header-text)",
          background: "var(--header-bg)"
        },
        button: {
          text: "var(--button-text)",
          border: "var(--button-border)",
          borderMuted: "var(--button-border-muted)"
        },
        line: {
          background: "var(--line-bg)"
        }
      },
      // Typography
      fontSize: {
        'xs': 'var(--font-size-xs)',
        'sm': 'var(--font-size-sm)',
        'base': 'var(--font-size-base)',
        'lg': 'var(--font-size-lg)',
        'xl': 'var(--font-size-xl)',
        '2xl': 'var(--font-size-2xl)',
        '3xl': 'var(--font-size-3xl)'
      },
      fontWeight: {
        'light': 'var(--font-weight-light)',
        'normal': 'var(--font-weight-normal)',
        'semibold': 'var(--font-weight-semibold)'
      },
      lineHeight: {
        'xs': 'var(--line-height-xs)',
        'sm': 'var(--line-height-sm)',
        'base': 'var(--line-height-base)',
        'lg': 'var(--line-height-lg)',
        'xl': 'var(--line-height-xl)',
        '2xl': 'var(--line-height-2xl)',
        '3xl': 'var(--line-height-3xl)',
        '4xl': 'var(--line-height-4xl)',
        '5xl': 'var(--line-height-5xl)'
      },
      letterSpacing: {
        'wide': 'var(--letter-spacing-wide)'
      },
      // Spacing
      spacing: {
        'xs': 'var(--margin-xs)',
        'sm': 'var(--margin-sm)',
        'md': 'var(--margin-md)',
        'lg': 'var(--margin-lg)',
        'xl': 'var(--margin-xl)',
        '2xl': 'var(--margin-2xl)',
        '3xl': 'var(--margin-3xl)',
        '4xl': 'var(--margin-4xl)',
        '5xl': 'var(--margin-5xl)',
        '6xl': 'var(--margin-6xl)',
        '7xl': 'var(--margin-7xl)',
        '8xl': 'var(--margin-8xl)',
        '9xl': 'var(--margin-9xl)',
        '10xl': 'var(--margin-10xl)'
      },
      padding: {
        'xs': 'var(--padding-xs)',
        'sm': 'var(--padding-sm)',
        'md': 'var(--padding-md)',
        'lg': 'var(--padding-lg)',
        'xl': 'var(--padding-xl)',
        '2xl': 'var(--padding-2xl)',
        '3xl': 'var(--padding-3xl)',
        '4xl': 'var(--padding-4xl)'
      },
      gap: {
        'xs': 'var(--gap-xs)',
        'sm': 'var(--gap-sm)',
        'md': 'var(--gap-md)',
        'lg': 'var(--gap-lg)',
        'xl': 'var(--gap-xl)',
        '2xl': 'var(--gap-2xl)',
        '3xl': 'var(--gap-3xl)',
        '4xl': 'var(--gap-4xl)',
        '5xl': 'var(--gap-5xl)',
        '6xl': 'var(--gap-6xl)',
        '7xl': 'var(--gap-7xl)',
        '8xl': 'var(--gap-8xl)'
      },
      // Borders
      borderRadius: {
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
        'xl': 'var(--radius-xl)'
      },
      borderWidth: {
        'thin': 'var(--border-width-thin)'
      }
    }
  },
  plugins: []
};