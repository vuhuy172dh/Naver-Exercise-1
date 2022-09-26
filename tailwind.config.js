module.exports = {
  content: [
    './src/pages/*.{js,ts,jsx,tsx}',
    './src/*.{js,jsx,ts,tsx}',
    './src/components/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    fontFamily: {
      mont: ['Montserrat', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif']
    },
    extend: {
      colors: {
        primary: '#ffffff',
        secondary: '#fa4a0c',
        title: '#252b42',
        subtitle: '#737373',
        footer: '#5c5c5c'
      }
    }
  },
  plugins: []
}
