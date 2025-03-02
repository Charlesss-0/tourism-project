import type { Config } from 'tailwindcss'

export default {
	darkMode: ['class'],
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				'instrument-sans': ['var(--font-instrument-sans)', 'sans-serif'],
				nuchileda: ['var(--font-nuchileda)', 'sans-serif'],
			},
		},
	},
} satisfies Config
