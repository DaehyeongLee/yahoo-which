/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './templates/**/*.{js,ts,jsx,tsx,mdx}',
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    fontSize: {
      xs: '0.6rem',
      sm: '0.7rem',
      md: '0.9rem',
    },
    extend: {
      keyframes: {
        'bottom-sheet-up': {
          '0%': { transform: 'translateY(420px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [require('flowbite/plugin'), require('tailwind-scrollbar-hide')],
}
