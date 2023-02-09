/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      "light-1": "#F2F7F7",
      "light-2": "#E6EFEE",
      "light-3": "#CEE1DE",
      "light-content": "#1D3557",
      primary: "#457B9D",
      "primary-content": "#D5E3EC",
      secondary: "#A8DADC",
      "secondary-content": "#F0F9F9",
      error: "#E63946",
      "error-content": "#FDEDEE",
    }
  },
  plugins: [],
}
