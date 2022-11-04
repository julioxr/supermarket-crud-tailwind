/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        screens: {
            sm: "480px",
            md: "768px",
            lg: "976px",
            xl: "1440px",
        },
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#467691",
                    50: "#F1F6F8",
                    100: "#DDE8EE",
                    200: "#B3CDDB",
                    300: "#8AB1C7",
                    400: "#6196B3",
                    500: "#467691",
                    600: "#386075",
                    700: "#2B495A",
                    800: "#1E333E",
                    900: "#111C22",
                },
                "bright-sun": {
                    DEFAULT: "#FDDE35",
                    50: "#FFFCEB",
                    100: "#FFF8D7",
                    200: "#FEF2AE",
                    300: "#FEEB86",
                    400: "#FDE55D",
                    500: "#FDDE35",
                    600: "#F7D102",
                    700: "#C0A202",
                    800: "#887301",
                    900: "#514401",
                },
            },
        },
    },
    plugins: [require("tailwind-scrollbar-hide")],
};
