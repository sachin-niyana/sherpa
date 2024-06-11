/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "rich-black": "#030303",
      },
      fontFamily: {
        Raleway: "Raleway",
        Poppins: "Poppins",
      },
      fontSize: {
        "4xxl": "40px",
      },
      lineHeight: {
        sm: "160%",
        md: "117%",
      },
      boxShadow: {
        basecamp: "0px 12px 0px 0px #00000029",
        basecampHover: "4px 4px 52px 0px #00000029",
      },
    },
  },
  plugins: [],
};
