module.exports = {
  purge: [
    './resources/views/**/*.blade.php',
    './resources/views/*.blade.php'
  ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui')
  ],
}
