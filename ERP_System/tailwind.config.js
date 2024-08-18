/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-blue-start": "#14ADD6",
        "custom-blue-end": "#384295",
      },
      backgroundImage: {
        // Пример кастомного градиента
        "gradient-custom": "linear-gradient(to right, #14ADD6, #384295)",
      },
    },
  },
  plugins: [],
};
