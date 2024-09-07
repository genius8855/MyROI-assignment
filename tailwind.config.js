// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Enable dark mode based on a CSS class
  theme: {
    extend: {
      colors : {
        clr1 : '#F05A7E',
        clr2 : '#E90074',
      },
    },
  },
  plugins: [],
}
