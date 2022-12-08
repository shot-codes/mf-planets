/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: ({ colors }) => ({
        base: colors.neutral,
        primary: colors.indigo,
      }),
    },
  },
  plugins: [],
};
