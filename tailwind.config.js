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
    screens: {
      sm: { min: '320px' },
      lg: { min: '1024px' }
    },
    extend: {
      colors: {
        primary: '#ffffff',
        primary_2: '#fafafa',
        secondary: '#fa4a0c',
        title: '#252b42',
        subtitle: '#737373',
        footer: '#5c5c5c',
        divider: '#e4e4e4'
      }
    }
  },
  plugins: []
}
