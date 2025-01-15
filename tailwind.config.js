/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
          borderRadius: {
              lg: 'var(--radius)',
              md: 'calc(var(--radius) - 2px)',
              sm: 'calc(var(--radius) - 4px)',
          },
          colors: {
              lightBackground: "#f9fafb", // Define a light mode background color
              darkBackground: "#1a202c", // Optional: define a dark mode background color
          },
      },
  },
  plugins: [require("tailwindcss-animate")],
};
