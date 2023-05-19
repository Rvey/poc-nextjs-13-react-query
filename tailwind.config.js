/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		colors: {
			...colors,
			transparent: "transparent",
			current: "currentColor",
			black: colors.black,
			white: colors.white,
			primary: "#006cff",
			"primary-light": "#eaf1ff",
			pink: "#ff0084",
			"secondary-light": "#eaecee",
			secondary: "#414141",
			"secondary-dark": "#cccccc",
			warning: "#fff8c6",
			yellow: "#ffcc00",
			// red: "#FF0000",
			"primary-normal": "#b8c8ea",
		},
		screens: {
			'2xl': { 'max': '1535px' },
			// => @media (max-width: 1535px) { ... }

			'xl': { 'max': '1279px' },
			// => @media (max-width: 1279px) { ... }

			'lg': { 'max': '1023px' },
			// => @media (max-width: 1023px) { ... }

			'md': { 'max': '767px' },
			// => @media (max-width: 767px) { ... }

			'sm': { 'max': '639px' },
			// => @media (max-width: 639px) { ... }
			'desktop': { 'min': '1024px' },
		},
	},
	plugins: [],
};
