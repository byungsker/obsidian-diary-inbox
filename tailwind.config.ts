import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1f2933",
        parchment: "#f7f2e8",
        obsidian: "#5b4b8a",
      },
    },
  },
  plugins: [],
};

export default config;
