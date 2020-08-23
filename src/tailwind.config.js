module.exports = {
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Teko'],
      },
    },
    colors: {
      light: {
        50: '#FEFFFE',
        100: '#FEFEFE',
        200: '#FCFDFB',
        300: '#FAFCF9',
        400: '#F7F9F5',
        500: '#F3F7F0',
        600: '#DBDED8',
        700: '#929490',
        800: '#6D6F6C',
        900: '#494A48',
      },
      dark: {
        50: '#F4F5F5',
        100: '#E8EBEC',
        200: '#C6CCCE',
        300: '#A3ADB1',
        400: '#5E7077',
        500: '#19323C',
        600: '#172D36',
        700: '#0F1E24',
        800: '#0B171B',
        900: '#080F12',
      },
      shade: {
        50: '#F8F9F9',
        100: '#F1F3F3',
        200: '#DDE1E2',
        300: '#C9CFD1',
        400: '#A0ABAE',
        500: '#77878B',
        600: '#6B7A7D',
        700: '#475153',
        800: '#363D3F',
        900: '#24292A',
      },
      primary: {
        50: '#F7FBFD',
        100: '#EEF6FB',
        200: '#D6E9F5',
        300: '#BDDBEF',
        400: '#8BC0E4',
        500: '#59A5D8',
        600: '#5095C2',
        700: '#356382',
        800: '#284A61',
        900: '#1B3241',
      },
      secondary: {
        50: '#FEF7F7',
        100: '#FDEFEE',
        200: '#FAD7D5',
        300: '#F7BFBB',
        400: '#F18E88',
        500: '#EB5E55',
        600: '#D4554D',
        700: '#8D3833',
        800: '#6A2A26',
        900: '#471C1A',
      },
    },
  },
  variants: {},
  plugins: [
    require('tailwind-heropatterns')({
      // as per tailwind docs you can pass variants
      variants: [],

      // the list of patterns you want to generate a class for
      // the names must be in kebab-case
      // an empty array will generate all 87 patterns
      patterns: [],

      // The foreground colors of the pattern
      colors: {
        default: '#59A5D8',
        'blue-dark': '#000044', //also works with rgb(0,0,205)
      },

      // The foreground opacity
      opacity: {
        default: '0.4',
        '100': '1.0',
      },
    }),
  ],
}
