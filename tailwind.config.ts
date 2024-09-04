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
        'dark': '#272B31',
        'darker': '#1A1C1E',
        'darkest': '#111315',
        'light': '#A4A4A4',
        'lighter': '#D2D2D2',
        'lightest': '#fff'
      },

      strokeWidth: {
        '1.5': '1.5px',
      },
    },

    
  },
  plugins: [],
};
export default config;
