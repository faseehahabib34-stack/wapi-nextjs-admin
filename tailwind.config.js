/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      // Admin dashboard brand colour (same green the admin already used). Adding it changes nothing on the public site.
      colors: {
        brand: { 50: "#ECFBF4", 100: "#D3F5E6", 500: "#0FAF7A", 600: "#08966A", 700: "#067955" },
      },
    },
  },
  plugins: [],
};
