/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "special-green": "#337D53",
        "special-red": "#DC383E",
        "special-red-two": "#c23633",
        "special-yellow": "#B0A96C",
        "special-gray": "#EFF0ED",
        "special-white": "rgb(255 255 255 / 60%)",
      },
    },
  },
  plugins: [],
};
