/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'header-color': "#1E1E1E",
        'bg-color-menu': "#D9D9D9",
        'search-bar': "#F7F1F1",
        'menu-button-1': '#F4B7B7',
        'menu-button-2': '#FAD1D1',
        'profile-neck': '#F55C5C',
        'todo-bar-1': '#A9A7FF',
        'todo-bar-2': '#F4DBDB',
        'category-color-urgent': '#FF2F2F',
        'button-finish': '#5E9B65',
        'button-view-image': '#8A88FF',
        'button-view-files': '#E88741',
      }
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
    function ({addUtilities}) {
      const newUtilities = {
        '.text-stroke-1' : {
          '-webkit-text-stroke-width' : '1px',
          '-webkit-text-stroke-color' : 'black',
        },
        'text-stroke-2' : {
          '-webkit-text-stroke-width' : '2px',
          '-webkit-text-stroke-color' : 'black',
        }
      }
      addUtilities(newUtilities);
    }
  ],
};
