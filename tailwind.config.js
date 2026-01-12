/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx}", // for app folder
//     "./pages/**/*.{js,ts,jsx,tsx}", // for pages folder
//     "./components/**/*.{js,ts,jsx,tsx}" // for components
//   ],
//   theme: {
//     extend: {
//         colors: {
//         brand: {
//           text: "#E6E6E6",     // main text color
//           primary: "#2563EB",  // blue
//           accent: "#9EFF00",   // green
//           textBg: "#262626", // semi-transparent black for text backgrounds
//         },
//     },
//     fontSize: {
//         xs: ["12px", { lineHeight: "16px" }],
//         sm: ["14px", { lineHeight: "20px" }],
//         base: ["16px", { lineHeight: "24px" }],
//         lg: ["18px", { lineHeight: "28px" }],
//         xl: ["20px", { lineHeight: "30px" }],

//         h1: ["48px", { lineHeight: "56px", fontWeight: "700" }],
//         h2: ["36px", { lineHeight: "44px", fontWeight: "700" }],
//         h3: ["28px", { lineHeight: "36px", fontWeight: "600" }],
//         h4: ["22px", { lineHeight: "30px", fontWeight: "600" }],
//       },
//     fontFamily: {
//         sans: ['var(--font-barlow)', 'sans-serif'], // Sets Barlow as the default sans font
//       }
//     },
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
  "bg-brand-textBg",
  "text-brand-text",
  "hover:bg-brand-textBg",
  "hover:text-brand-text",
],
  theme: {
    extend: {
      colors: {
        brand: {
          text: "#E6E6E6",
          primary: "#2563EB",
          accent: "#9EFF00",
          textBg: "#262626",
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
      fontFamily: {
        sans: ["var(--font-barlow)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

module.exports = config;