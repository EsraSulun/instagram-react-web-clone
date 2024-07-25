/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#4cb5f9",
        facebook: "#385185",
        link: "#00376b",
      },
      backgroundImage: {
        'logo-pattern': "url(https://static.cdninstagram.com/images/instagram/xig/homepage/phones/home-phones.png?__makehaste_cache_breaker=HOgRclNOosk)",
      },
    },
  },
  plugins: [],
}

