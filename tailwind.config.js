/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*.html'],
  theme: {
    extend: {
      backgroundImage: {
        'bg1': "url('dist/images/gradient.jpg')",
      }
    }
  },
  plugins: [],
}

