import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lumenai_green: "var(--green)",
        dark_blue: "var(--dark-blue)",
        light_blue: "var(--light-blue)",
      },
      fontFamily: {
        sans: ["var(--font-opensans)"],
      },
      rotate: {
        "75": "75deg",
        "25": "25deg",
      },
    },
  },
  plugins: [],
}
export default config
