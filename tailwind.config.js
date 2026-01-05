const { mauve, violet } = require("@radix-ui/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                // Radix color scales are exposed to Tailwind
                // to keep design tokens consistent with Radix UI components.
                ...mauve,
                ...violet,
            },
        },
    },
    plugins: [],
};
