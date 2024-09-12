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
        'dark': '#2e2e2e',
        'darker': '#222226',
        'darkest': '#0a0a0a',
        'light': '#A4A4A4',
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
