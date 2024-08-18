/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-btn-gradient":
          "linear-gradient(135deg, rgb(20, 173, 214), rgb(56, 66, 149) 100%)",
      },
      borderColor: {
        "input-color": "rgb(208, 208, 208)",
      },
      colors: {
        "custom-blue-start": "#14ADD6",
        "custom-blue-end": "#384295",
        backgroundColor: "#F8F9FD",
        textColor: "rgb(81,81,81)",
      },
    },
  },
  plugins: [],
};
