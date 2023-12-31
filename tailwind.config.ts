import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: "#C778DD",
      white: "#FFF",
      gray: {
        50: "#ABB2BF",
        950: "#282C33"
      },
      aqua: "#55B6C2",
      green: "#98C379",
      yellow: "#E5C07A",
      red: "#E06B74",
      blue: "#62AEEF",
    },
  },
  plugins: [],
}
export default config
