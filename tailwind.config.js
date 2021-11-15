module.exports = {
  mode: 'jit',
  purge: ['index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)"
      },
      animation: {
        'bounce-lr': 'bounce-lr .5s infinite',
      },
      // animation: ['hover', 'focus'],
      keyframes: {
        'bounce-lr': {
          '0%, 100%': {
            transform: 'translateX(0)',
            "animation-timing-function": 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': { 
            transform: 'translateX(10%)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)'
           },
        }
      }
    },
  },
  plugins: [],
}
