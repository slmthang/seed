import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        // colors
        "dark-primary-color": '#6200EE',
        "dark-secondary-color": "#03DAC6",
        "dark-background-color": "#0A0A0A",
        "dark-surface-1": "#252525",
        "dark-surface-2": "#212121",
        "dark-surface-3": "#1e1e1e",
        "dark-error": "#CF6679",

        // text colors
        "dark-primary-text": "#dadada",
        "dark-secondary-text": "#A4A4A4",
        "dark-title-text": "#a4a4a4",
        "dark-on-primary": '#121212',
        "dark-on-secondary": "#121212",
        "dark-on-background-1": "#D2D2D2",
        "dark-on-background-2": "#979797",
        "dark-on-surface-1": "#D2D2D2",
        "dark-on-surface-2": "#979797",
        "dark-on-error": "#121212",
        "dark-error-text": '#CF6679',

        // colors
        "light-primary-color": '#6200EE',
        "light-secondary-color": "#03DAC6",
        "light-background-color": "#0A0A0A",
        "light-surface-1": "#212121",
        "light-surface-2": "#1f1f1f",
        "light-surface-3": "#121212",
        "light-error": "#CF6679",

        // text colors
        "light-primary-text": "#000000",
        "light-secondary-text": "#979797",
        "light-title-text": "#979797",
        "light-on-primary": '#121212',
        "light-on-secondary": "#121212",
        "light-on-background-1": "#D2D2D2",
        "light-on-background-2": "#979797",
        "light-on-surface-1": "#D2D2D2",
        "light-on-surface-2": "#979797",
        "light-on-error": "#121212",
        "light-error-text": '#CF6679',

        // border
        "dark-border": "#303030",
        "light-border": "#121212",


        'dark': '#282828',
        'darker': '#121212',
        'darkest': '#0a0a0a',
        'light': '#979797',
        'lighter': '#D2D2D2',
        'lightest': '#fff',

        // border color
        'dark-green': '#013220',
        'dark-red': '#500000'
      },

      strokeWidth: {
        '1.5': '1.5px',
      },
    },

    
  },
  plugins: [],
};
export default config;
