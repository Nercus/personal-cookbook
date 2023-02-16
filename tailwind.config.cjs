/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      "light-1": "#f0eae5",
      "light-2": "#e9dfd8",
      "light-3": "#e1d3c8",
      "light-content": "#142844",
      primary: "#ffd864",
      "primary-content": "#fff5d6",
      success:"#A7E067",
      warning: "#E4D762",
      error: "#D86F6F",
      info: "#7BD6DB",
    }
  },
  plugins: [],
}
