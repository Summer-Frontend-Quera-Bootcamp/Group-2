/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "gray-light": "#F1F3F5",
      "gray": "#868E96",
      "gray-dark": "#343A40",
      "red-secondary": "#FFE3E3",
      "red-primary": "#FA5252",
      "pink-secondary": "#E64980",
      "pink-primary": "#E64980",
      "grape-secondary": "#F3D9FA",
      "grape-primary": "#BE4BDB",
      "violet-secondary": "#E5DBFF",
      "violet-primary": "#E5DBFF",
      "indigo-secondary": "#DBE4FF",
      "indigo-primary": "#4C6EF5",
      "blue-secondary": "#D0EBFF",
      "blue-primary": "#228BE6",
      "cyan-secondary": "#C5F6FA",
      "cyan-primary": "#15AABF",
      "teal-secondary": "#C3FAE8",
      "teal-primary": "#12B886",
      "brand-secondary": "#C2F7FA",
      "brand-primary": "#208D8E",
      "green-secondary": "#D3F9D8",
      "green-primary": "#208D8E",
      "lime-secondary": "#E9FAC8",
      "lime-primary": "#82C91E",
      "yellow-secondary": "#FFF3BF",
      "yellow-primary": "#FAB005",
      "orange-secondary": "#FFE8CC",
      "orange-primary": "#FD7E14",
      "white":"color:#fff"
    },
    extend: {
      fontFamily: {
        yekan: ["Iran-Yekan"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
