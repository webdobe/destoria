const colors = require('tailwindcss/colors')

module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'dneon': '#F24A7C',
          'dorange': '#FF7C1E',
          'dhOrange': '#F83600',
          'dpurple': '#161D5E',
          'dblue': '#070D31',
          'dblack': '#050D1D',
          'dwhite': '#F0F0F0',
          'borders': 'rgba(100 116 139 0.5)',
        },
        backgroundImage: {
          'hero-first-half': "url('bgfirsthalf.png')",
          'hero-second-half': "url('bgsecondhalf.png')",
          'hero-full': "url('bgfull.png')",
        },
        animation: {
          'spin-slow': 'spin 3s linear infinite',
        }
      },
    },
    plugins: [],
  }