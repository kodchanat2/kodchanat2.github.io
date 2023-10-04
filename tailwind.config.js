/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'text': 'var(--text)',
        'background': 'var(--background)',
        'primary': 'var(--primary)',
        'secondary': 'var(--secondary)',
        'accent': 'var(--accent)',
      },
      height: {
        "screen": "100dvh",
        "screen-small": "100svh",
        "screen-large": "100lvh"
      },
      spacing: {
        "navbar": "3rem",
      },
    },
  },
  plugins: [],
}

