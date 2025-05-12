/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			colors: {
				primary: '#f0f2f5',
				secondary: '#ff813f',
				tertiary: '#222222',
				slate: {
					10: '#f1f3f5'
				},
				green: {
					50: '#30AF5B',
					90: '#202C27'
				},
				gray: {
					10: '#EEEEEE',
					20: '#A2A2A2',
					30: '#7B7B7B',
					50: '#585858',
					90: '#141414'
				}
			},
			fontFamily: {
				nunito: [ 'var(--font-nunito)' ]
			},
			screens: {
				xs: '400px',
				'3xl': '1680px',
				'4xl': '2200px'
			},
			maxwidth: {
				'10xl': '1512px'
			},
			borderRadius: {
				'5xl': '40x'
			}
		}
	},
	plugins: []
};
