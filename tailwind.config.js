/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainTextColor: "#111111",
        mainColor: "#FF7425",
        lightOrangeColor: "#FF7425E5",
      },
      padding: {
        minusTenPixel: "-10px",
      },
      maxWidth: {
        NavLargeScreenWidth: "92%",
        contentLargeScreenWidth: "84%",
        contentSmallScreenWidth: "92%",
      },
      height: {
        vh60: "60vh",
        vh100: "100vh",
        vh140: "140vh",
      },
      minHeight: {
        vh100: "100vh"
      },
      fontSize: {
        eightyPixel: "80px",
      },
      borderRadius: {
        sixtyThreePixel: "63px"
      },
    },
  },
  plugins: [],
}