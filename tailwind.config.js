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
    screens: {
      'sm': '500px',
      'md': [
        // Sidebar appears at 768px, so revert to `sm:` styles between 768px
        // and 868px, after which the main content area is wide enough again to
        // apply the `md:` styles.
        {'min': '845px', 'max': '1000px'},
        {'min': '1000px'}
      ],
      'lg': '1100px',
      'xl': '1320px',
    }
    },
    plugins: [],
  }