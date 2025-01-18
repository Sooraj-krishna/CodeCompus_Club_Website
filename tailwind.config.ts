import type { Config } from "tailwindcss";
const textShadowPlugin = require('tailwindcss-textshadow');

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'custom-blue': '#2BD1CF',
        'custom-dark': '#27272A',
      },
    },
  },
  plugins: [
    textShadowPlugin,
  ],
} satisfies Config;
