/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
        "solid": '2px 2px var(--tw-shadow-color)',
        "solid-sm": '1px 1px var(--tw-shadow-color)',
      },
    },
  },
  plugins: [],
}

