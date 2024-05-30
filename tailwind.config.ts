import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				'body': ['"Open Sans"', 'sans-serif'],
				'display': ['"Montserrat"', 'sans-serif']
			}
		}
	},

	plugins: []
} as Config;
