/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		screens: {
			sm: "440px",
			// => @media (min-width: 640px) { ... }

			md: "900px",
			// => @media (min-width: 768px) { ... }

			// lg: "1024px",
			// => @media (min-width: 1024px) { ... }

			// xl: "1280px",
			// => @media (min-width: 1280px) { ... }

			// "2xl": "1536px",
			// => @media (min-width: 1536px) { ... }
		},
		extend: {
			fontFamily: {
				inter: ["Inter", "sans-serif"],
			},
			colors: {
				primary: "#000000",
				// second: "#B6B3B3",
				second: "#EEEEF0",
			},
			container: {
				padding: {
					DEFAULT: "1rem",
					sm: "1rem",
					// lg: "22rem",
					// xl: "22rem",
					// "2xl": "6rem",
				},
				center: true,
			},
		},
	},
};
