// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Certa Sans",
      regular: "Open Sans",
    },
    extend: {
      backdropBlur: { xs: "2px", xxs: "1px" },
      fontSize: {
        xxs: ["10px", "12px"],
      },
      transitionProperty: {
        width: "width",
      },
      boxShadow: {
        carosuleCard: "0 8px 24px 0 rgba(0, 0, 0, 0.07)",
      },
      width: {
        cardWidth: "350px",
      },
      maxWidth: {
        xxs: "16rem",
        carosuleMax: "1390px",
        screenSize: "1440px",
      },
      colors: {
        "theme-green": {
          10: "#30c6ac33",
          50: "#fff",
          100: "#e8f5f2",
          200: "#C1E4DC",
          300: "#d1ffd1",
          400: "#18a990",
          500: "#008b73",
          600: "#01826c",
          700: "#027a65",
          800: "#03725f",
          900: "#025143",
        },
        "theme-purple": {
          50: "#fff",
          100: "#a7a8eb",
          200: "#8081d7",
          300: "#5a5bbd",
          400: "#4748a8",
          500: "#373895",
          600: "#333485",
          700: "#303077",
          800: "#292958",
          900: "#1f1f4b",
        },
        "theme-gray": {
          50: "#fff",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
        "theme-yellow": {
          10: "#e1b20833",
          500: "#927204",
        },
        "theme-red": {
          10: "#d63f0f1a",
          500: "#d63f0f",
        },
        "footer-bg": "#061a2a",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp"), require("@tailwindcss/forms")],
};
