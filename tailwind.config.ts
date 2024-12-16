import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "larger-screens": "768",
      tablet: { min: "768px", max: "1023px" },
      laptop: "1024",
    },
    extend: {
      colors: {
        colorLight: "var(--color-light)",
        colorDark: "var(--color-dark)",
        colorAccent: "var(--color-accent)",
      },
      fontFamily: {
        heading: ["var(--font-big-shoulders)"],
        body: ["var(--font-outfit)"],
      },
      fontSize: {
        'header-big': "var(--header-size-big)",
        'header-medium': "var(--header-size-medium)",
        'header-small': "var(--header-size-small)",
        'p-big': "var(--p-size-big)",
        'p-small': "var(--p-size-small)",
      },
    },
  },
  plugins: [],
} satisfies Config;
