/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      keyframes: {
        flame: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05) rotate(1deg)', backgroundColor: '#f97316' }
        },
        blocks: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' }
        },
        doors: {
          '0%': { transform: 'scaleX(1)' },
          '50%': { transform: 'scaleX(0.9)' },
          '100%': { transform: 'scaleX(1)' }
        }
      },
      animation: {
        flame: 'flame 0.6s ease-in-out',
        blocks: 'blocks 0.6s ease-in-out',
        doors: 'doors 0.6s ease-in-out'
      }
    }
  },
  plugins: []
}