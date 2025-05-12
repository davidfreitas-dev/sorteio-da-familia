/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

// Remover cores obsoletas
delete colors['lightBlue'];
delete colors['warmGray'];
delete colors['trueGray'];
delete colors['coolGray'];
delete colors['blueGray'];

module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js}',
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        'primary': '#27c497',
        'primary-hover': '#3bd0a3',
        'primary-focus': '#20af87',
        'primary-pressed': '#1a9a76',
        'primary-accent': '#e4f8f2',

        'success': '#3cbf8e',
        'success-hover': '#54cfa0',
        'success-focus': '#32a87a',
        'success-pressed': '#278a65',
        'success-accent': '#193a30',

        'warning': '#e5a84a',
        'warning-hover': '#ecb55f',
        'warning-focus': '#d19a3b',
        'warning-pressed': '#b37f27',
        'warning-accent': '#3f2e14',

        'danger': '#d35c5c',
        'danger-hover': '#df7373',
        'danger-focus': '#c54f4f',
        'danger-pressed': '#a73e3e',
        'danger-accent': '#3b1f1f',

        'secondary': '#7a7a7a',
        'disabled': '#444444',
        'neutral': '#2e2f2e',

        'font': '#ffffff',
        'font-accent': '#c7c7c9',

        'background': '#131413',
        'background-accent': '#222423',
      }
    }
  },
  plugins: [],
};
