/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        container: '1440px',
        contentContainer: '1240px',
        containerSmall: '1024px',
        containerxs: '768px'
      },
    

      screens: {
        xs: '320px',
        sm: '500px',
        md: '667px',
        lg: '1024px',
        xl: '1280px',
       '2xl': '1440px',
       '2Issue': {'min': '1500px', 'max': '1600px'},
       '2l': {'min': '1050px', 'max': '1250px'}
      },


      fontFamily: {
        Teko: ['Teko', 'sans-serif'],
        Lato: ['Lato', 'sans-serif']
      },
      colors: {
        primary: '#504594',
        secondaryColor: '#F90',
        textColor: '#717070',
        hoverColor: 'rgba(100,255,218,0.3)',
        iconBackground: 'rgba(254, 255, 254, 0.06)',
        boxShadow: '0px 16px 24px 4px rgba(1, 21, 41, 0.2)',
        background: 'linear-gradient(151.76deg, rgba(66, 112, 251, 0) -8.92%, #4270FB 115.63%)'
      }
     

    },
  },
  plugins: [],
}

