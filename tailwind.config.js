/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Colores primarios
        "m-lime-green": "hsl(163, 72%, 41%)",
        "m-bright-red": "hsl(356, 69%, 56%)",
        "m-facebook": "hsl(208, 92%, 53%)",
        "m-twitter": "hsl(203, 89%, 53%)",
        "m-instagram": "linear-gradient(hsl(37, 97%, 70%), hsl(329, 70%, 58%))",
        "m-youtube": "hsl(348, 97%, 39%)",

        // Dark Theme
        "m-toggle-gradient":
          "linear-gradient(hsl(210, 78%, 56%), hsl(146, 68%, 55%))",

        // Light Theme
        "m-toggle-color": "hsl(230, 22%, 74%)",
        
        // Dark Theme
        "m-dark-bg": "hsl(230, 17%, 14%)",
        "m-dark-top-bg-pattern": "hsl(232, 19%, 15%)",
        "m-dark-card-bg": "hsl(228, 28%, 20%)",
        "m-dark-text": "hsl(228, 34%, 66%)",
        "m-white-text": "hsl(0, 0%, 100%)",

        // Light Theme
        "m-light-bg": "hsl(0, 0%, 100%)",
        "m-light-top-bg-pattern": "hsl(225, 100%, 98%)",
        "m-light-card-bg": "hsl(227, 47%, 96%)",
        "m-light-text": "hsl(228, 12%, 44%)",
        "m-very-dark-text": "hsl(230, 17%, 14%)",

        // 
      },
    },
    plugins: [],
  },
};
