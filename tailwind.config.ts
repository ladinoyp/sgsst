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
        "color-gray-dark": "#4B5563", // Fondo gris oscuro
        "color-gray-light": "#F9FAFB", // Fondo gris claro
        "color-yellow": "#FBBF24", // Amarillo cálido
        "color-orange": "#FB923C", // Naranja intenso
        "color-black": "#000000", // Negro
        "color-white": "#FFFFFF", // Blanco

        "color-blue-light": "#BFDBFE", // Azul claro
        "color-red": "#FF0000", // rojo

        "cl-status-blue": "#1E90FF", // Programado
        "cl-status-yellow": "#FFFF00", // En proceso
        "cl-status-green": "#32CD32", // Ejecutada a tiempo
        "cl-status-orange": "#FFA500", // Ejecutada fuera de tiempo
        "cl-status-red": "#FF0000", // Retrasada

      },
    },
  },
  plugins: [],
};

export default config;
