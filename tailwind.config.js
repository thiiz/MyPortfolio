/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: "#FFF",
      gray: {
        50: "#ABB2BF",
        950: "#282C33"
      },
      aqua: "#55B6C2",
      green: "#98C379",
      yellow: "#E5C07A",
      purple: "#C778DD",
      red: "#E06B74",
      blue: "#62AEEF",
    },
  },
  plugins: [],
}
