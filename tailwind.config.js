module.exports = {
  purge: {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx}',
      './src/components/**/*.{js,ts,jsx,tsx}',
    ],
  },
  plugins: [],
  darkMode: false,
  theme: {
    colors: {
      primary: '#060F12',
      secondary: '#122025',
      tertiary: '#59F5BC',
      quaternary: '#EFF1F2',
      white: '#FFFFFF',
      black: '#000000',
      red: {
        100: '#FC7F88',
        200: '#EB555F',
        300: '#D53E48',
        400: '#E63946',
      },
      yellow: {
        100: '#FFECBE',
        200: '#FDE19B',
        300: '#F1CF7A',
        400: '#FCAF58',
      },
      green: {
        100: '#B0E9D7',
        200: '#7FE3C3',
        300: '#66D4B1',
        400: '#2BA84A',
      },
      pink: {
        100: '#E5B2C7',
        200: '#E994B7',
        300: '#DB759F',
      },
      blue: {
        100: '#4D869C',
        200: '#004C6A',
        300: '#033b51',
        400: '#033042',
        500: '#022533',
      },
      gray: {
        100: '#9296AD',
        200: '#E8E8E8',
        300: '#EFF1F2',
        400: '#353535',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Source Sans Pro'],
      },
    },
  },
  variants: {
    extend: {},
  },
};
