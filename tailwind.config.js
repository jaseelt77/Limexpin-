/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        brand: {
          text: "#ffffff",
          primary: "#2563EB",
          accent: "#9EFF00",
          textBg: "#000000",
          black: "#262626",
          
        },
      },

      fontSize: {
        xs: ["12px", { lineHeight: "16px" }],
        sm: ["14px", { lineHeight: "20px" }],
        base: ["16px", { lineHeight: "24px" }],
        lg: ["18px", { lineHeight: "28px" }],
        xl: ["20px", { lineHeight: "30px" }],

        h1: ["48px", { lineHeight: "56px", fontWeight: "700" }],
        h2: ["36px", { lineHeight: "44px", fontWeight: "700" }],
        h3: ["28px", { lineHeight: "36px", fontWeight: "600" }],
        h4: ["22px", { lineHeight: "30px", fontWeight: "600" }],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
        marqueeReverse: 'marqueeReverse 20s linear infinite',
      },

      fontFamily: {
        sans: ["var(--font-barlow)", "system-ui", "sans-serif"],
      },
    },
  },

  plugins: [],
};
module.exports = config;