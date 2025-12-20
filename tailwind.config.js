/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        blob: "blob 10s infinite",
      },
      backgroundImage: {
        "skills-gradient": `
          linear-gradient(30.73deg, rgba(201,32,184, 0) 0%, rgba(201,32,184, 1) 50%),
          linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%)
        `,
      },
    },
  },
  plugins: [],
};
