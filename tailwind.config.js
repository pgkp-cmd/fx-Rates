/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5',
        secondary: '#3B82F6',
        accent: '#9333EA',
        neutral: '#64748B',
        'base-100': '#F9FAFB',
        info: '#3ABFF8',
        success: '#36D399',
        warning: '#FBBD23',
        error: '#F87272',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'], // Add Poppins
      },
    },
  },
  plugins: [],
}

