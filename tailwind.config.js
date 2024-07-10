/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    colors:{
      Blue:"#090979",
      lightBlue:"#00d4ff"
    },
    extend: {

    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}

