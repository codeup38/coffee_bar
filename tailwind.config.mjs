import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        paper: "#f8f2e7",
        roast: "#563c2e",
        crema: "#d2ad7a",
        ink: "#2a1e16",
        olive: "#647255"
      },
      fontFamily: {
        sans: ["Nanum Gothic", ...defaultTheme.fontFamily.sans],
        display: ["Noto Serif KR", ...defaultTheme.fontFamily.serif]
      },
      boxShadow: {
        sticker: "0 10px 30px rgba(62, 44, 32, 0.12)"
      }
    }
  },
  plugins: []
};
