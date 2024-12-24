import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./widgets/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
    "./shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./entities/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#FFFFFF",
      black: "#000000",
      theme: "#FFE500",
      "primary-bg": "#111111",
    },
    fontFamily: {
      primary: ["Exo2"],
      "ru-primary": ["Exo2"],
      secondary: ["Insignia"],
      "en-secondary": ["fsSinclaire"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        mlarge: { max: "480px" },
        mmedium: { max: "380px" },
        msmall: { max: "320px" },
        deskWide: { min: "1550px" },
      },
    },
  },
  plugins: [],
};
export default config;
