/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'text': 'rgb(var(--text))',
        'background': 'rgb(var(--background))',
        'primary': 'rgb(var(--primary))',
        'secondary': 'rgb(var(--secondary))',
        'accent': 'rgb(var(--accent))',
      },
      height: {
        "screen": "100dvh",
        "screen-small": "100svh",
        "screen-large": "100lvh"
      },
      spacing: {
        "navbar": "3rem",
      },
      boxShadow: {
        "line": "2px 4px 4px 2px var(--tw-shadow-color)",
        "grow": "0px 0px 6px 0px var(--tw-shadow-color)",
      }
    },
  },
  plugins: [],
}

