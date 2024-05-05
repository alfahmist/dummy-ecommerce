const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/pages/**/*.jsx', './src/components/**/*.jsx'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter var', ...defaultTheme.fontFamily.sans],
			},
			gridTemplateRows: {
				'[auto,auto,1fr]': 'auto auto 1fr',
			},
		},
	},
	plugins: [
		// ...
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/forms'),
	],
};
