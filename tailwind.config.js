/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				cafe: "#886242",
				crema: "#fbf9f8",
			},
			fontFamily: {
				cormorant: ["Cormorant Garamond", "sans-serif"],
				instrumentSans: ["Instrument Sans", "sans-serif"],
			},
		},
	},
	plugins: [],
};
