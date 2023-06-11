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
		},
	},
	plugins: [],
};
