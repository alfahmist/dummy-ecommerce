const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,jsx}', './src/components/**/*.{jsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter var', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [
		// ...
		require('@tailwindcss/aspect-ratio'),
	],
};
