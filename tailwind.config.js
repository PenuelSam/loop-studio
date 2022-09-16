/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        White: "hsl(0, 0%, 100%)",
        black: "hsl(0, 0%, 0%)",
        darkGray: "hsl(0, 0%, 55%)",
        veryDarkGray: "hsl(0, 0%, 41%)",
      },
      fontFamily: {
        Alata: ["Alata"],
        JosefinSans: ["Josefin Sans"],
      },
      backgroundImage: {
        'heroDesk': "url('../src/images/desktop/image-hero.jpg')",
        'heromob': "url('../src/images/mobile/image-hero.jpg')",
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
