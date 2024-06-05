/** @type {import('tailwindcss').Config} */
export default {
  // content: ["./src/*.{html,jsx,js}"],
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url(./altumcode2.jpg)"
      },
      spacing:{
        13:"3.25 rem"
      },
      colors:{
        'special-gray':"#7f7a7e"
      },
      keyframes:{
        scrolling:{
          '100%':{
            transform:"translate(calc(-200% - 0.5rem))"
          }
        },
        swap:{
          '0% 50%':{
            transform:'translate(6rem)'
          },
          '60%':{
            'z-index':'10',
          },
          '75%':{
            transform:'translate(-6rem)'
          },
          '100%':{
            transform:'scaleY(125%)'
          }
        }
      }
    },
    container: {
      center: true,
    }
  },
  plugins: [],
  safelist: [
    'row-start-1',
    'row-start-2',
    'row-start-3',
    'row-start-4',
    'row-start-5',
    'row-start-6',
    'row-start-7'
  ]
}

