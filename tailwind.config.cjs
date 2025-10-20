/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#1E40AF", // blue-800
          secondary: "#3B82F6", // blue-500
        },
      },
    },
    plugins: [],
  };
  