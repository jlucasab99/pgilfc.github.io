/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      zIndex: {
				'navbar': '1000',
				'modal':	'1001',
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0928c1",
          secondary: "#812a0e",
          accent: "#af43ff",
          neutral: "#27272A",
          "base-100": "#f3f4f6",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
