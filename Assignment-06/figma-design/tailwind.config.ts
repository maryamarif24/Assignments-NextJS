import type { Config } from "tailwindcss";

module.exports ={
	purge: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./Components/**/*. {js,ts,jsx,tsx}'
	],
    content: [
		'./app/**/*.{js,ts,jsx,tsx}', // Include all files in the 'app' directory
		'./pages/**/*.{js,ts,jsx,tsx}', // Include all files in the 'pages' directory (if still used)
		'./components/**/*.{js,ts,jsx,tsx}', // Include all files in the 'components' directory
	  ],
	  theme: {
		extend: {},
	  },
	  plugins: [],
	  safelist: ['bg-red-500', 'text-lg', 'hover:bg-blue-700'],
	};
	