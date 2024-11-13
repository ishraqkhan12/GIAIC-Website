import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sky: "rgb(46, 182, 232)",
        lightBlue : 'rgb(185, 216, 243)',
        darkCerulean: 'rgb(4, 78, 131)',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontWeight: {
        780: '795', 
      },
    },
  },
  plugins: [],
};
export default config;
