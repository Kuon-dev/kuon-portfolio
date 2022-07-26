module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			screens: {
				xsm: '370px',
				'3xl': '2048px',
				'4xl': '2348px',
				'5xl': '2500px',
				'6xl': '3700px',
				'65x': '3800px',
				'7xl': '4758px',
				'8xl': '7516px',
			},
			colors: {
				'hover-highlight': 'var(--text-highlight)',
			},
		},
	},
	plugins: [],
};
