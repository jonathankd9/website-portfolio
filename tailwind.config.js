/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				"space-grotesk": ["Space Grotesk", "sans-serif"],
			},
			colors: {
				lightash: "#232226",
				black: "#17161A",
			},
			container: {
				padding: {
					DEFAULT: "1rem",
					sm: "2rem",
					lg: "4rem",
					xl: "5rem",
					"2xl": "6rem",
				},
				center: true,
				width: "80rem",
			},
		},
	},
	plugins: [],
};
