module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	// or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				'd-text': 'var(--d-text)',
				'd-body-text': 'var(--d-body-text)',
				'd-faded-text': 'var(--d-faded-text)',
				'd-gray': 'var(--d-gray)',
				'd-border-gray': 'var(--d-border-gray)',
				'd-primary': 'var(--d-primary)',
				'd-secondary': 'var(--d-secondary)',
				'd-bg-color': 'var(--d-bg-color)',
			},
		},
	},

	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
	],
};
