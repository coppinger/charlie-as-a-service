/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        extend: {
            fontFamily: {
                manrope: ["Manrope Variable", "sans-serif"],
            },
            backgroundImage: {
                "sand-dunes": "url('/sand-dunes.jpg')",
            },
        },
    },
    plugins: [],
};
