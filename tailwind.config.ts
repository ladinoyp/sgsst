import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "color-gray-dark": "#4B5563", // Fondo oscuro
        "color-yellow": "#FBBF24", // Amarillo cálido
        "color-orange": "#FB923C", // Naranja intenso
        "color-gray-light": "#F9FAFB", // Fondo gris claro
        "color-white": "#FFFFFF", // Blanco
        "color-black": "#000000", // Negro
      },
    },
  },
  plugins: [],
};

export default config;
