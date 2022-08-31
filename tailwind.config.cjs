/* eslint-disable @typescript-eslint/no-var-requires */
// const { fontFamily } = require('tailwindcss/defaultTheme')
// const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html','./src/**/*.{js,jsx,ts,tsx}'],
  // darkMode: 'class',
  theme: {
    backgroundImage: {
      'checkmark': "url('/../assets/images/icon-check.svg')",
    },
    colors: {
      primary: {
        'dark-gray': 'hsl(247, 11%, 15%)',
        gray: '#817D92',
        'almost-white': '#E6E5EA',
        'very-dark-gray': '#18171F'
      },
      secondary: {
        'neon-green': '#A4FFAF',
        red: '#F64A4A',
        orange: '#FB7C58',
        yellow: '#F8CD65'
      },

      transparent: 'transparent'
    },
    fontFamily: {
      primary: ['JetBrains Mono', 'monospace']
    },
    fontSize: {
      base: '62.5%',
      body: ['1.8rem', '2.3rem'],
      'heading-sm': ['1.6rem', '2.1rem'],
      'heading-md': ['2.4rem', '3.1rem'],
      'heading-lg': ['3.2rem', '4.3rem']
    }
  },
  plugins: []
}
