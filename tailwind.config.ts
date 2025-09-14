import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        success: {
          DEFAULT: "hsl(142 76% 36%)", // green base
          foreground: "hsl(0 0% 98%)", // white text on green
        },
        warning: {
          DEFAULT: "hsl(38 92% 50%)",
          foreground: "hsl(20 14% 4%)",
        },
        error: {
          DEFAULT: "hsl(0 84% 60%)",
          foreground: "hsl(0 0% 98%)",
        },
        info: {
          DEFAULT: "hsl(221 83% 53%)",
          foreground: "hsl(0 0% 98%)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
