/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

delete colors['lightBlue'];
delete colors['warmGray'];
delete colors['trueGray'];
delete colors['coolGray'];
delete colors['blueGray'];

module.exports = {
  'content': [
    './index.html',
    './src/**/*.{vue,js}',
  ],
  theme: {
    extend: {},
    colors: {
      ...colors,
      primary: '#2E3191',
      'success-hover': '#6ec496',
      'success-pressed': '#43a370',
      'success-accent': '#edf8f2',
      secondary: '#41BBC7',
      success: '#04DB90',
      alert: '#FFC700',
      danger: '#FF0000',
    }
  },
  plugins: [],
};