/** @type {import('tailwindcss').Config} */

module.exports = {
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
