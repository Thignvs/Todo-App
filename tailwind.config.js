/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: '"Josefin Sans", sans-serif',
    },
    colors: {
      // ### Light Theme
      'transparent': 'transparent',
      "VeryLightGray": "hsl(0, 0%, 98%)",
      "VeryLightGrayishBlue": "hsl(236, 33%, 92%)",
      "LightGrayishBlue": "hsl(233, 11%, 84%)",
      "DarkGrayishBlue": "hsl(236, 9%, 61%)",
      "VeryDarkGrayishBlue": "hsl(235, 19%, 35%)",
      "GradientBlue": "hsl(192, 100%, 67%)",
      "GradientPurple": "hsl(286, 87%, 65%)",

      // ### Dark Theme
      "BlueSelected": "#3A7CFD",
      "VeryDarkBlueDark": "hsl(235, 21%, 11%)",
      "VeryDarkDesaturatedBlueDark": "hsl(235, 24%, 19%)",
      "LightGrayishBlueDark": "hsl(234, 39%, 85%)",
      "LightGrayishBlueDark": "hsl(236, 33%, 92%)", //Hover
      "DarkGrayishBlueDark": "hsl(234, 11%, 52%)",
      "VeryDarkGrayishBlueDark2": "hsl(233, 14%, 35%)",
      "VeryDarkGrayishBlueDark": "hsl(237, 14%, 26%)",
    },
    extend: {
      backgroundImage: {
        'HeaderLight': '/src/assets/images/bg-mobile-light.jpg',
        'HeaderDark': '/src/assets/images/bg-mobile-dark.jpg',
        'HeaderLightDesktop': '/src/assets/images/bg-desktop-light.jpg',
        'HeaderDarkDesktop': '/src/assets/images/bg-desktop-dark.jpg',
        
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
