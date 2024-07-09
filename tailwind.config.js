
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    screens: {
      'laptop': {
        'max': '1024px'
      },
      'tablet': {
        'max': '767px'
      },
      'mobile': {
        'max': '390px'
      }
      // 'desktop': '1280px',
    },
    colors: {
      'blue': '#007ace',
      'red': '#f00',
    },
    fontFamily: {
      sans: ['Helvetica', 'Arial', 'sans-serif'],
      serif: ['Georgia', 'serif'],
    },
    extend: {
      spacing: {
        '72': '18rem',
        '84': '21rem',
      },
      borderRadius: {
        'xl': '1.5rem',
      },
      gridTemplateColumns: {
        'autoFit': 'repeat(auto-fit, minmax(250px, 1fr))',
      },
    }
  },
  plugins: [
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
  ],
}

// .recipe-list__tiles {
//   width: 100%;
//   /* grid-auto-flow: column; */
//   /* grid-template-columns: auto; */
//   grid-template-rows: minmax();
//   /* grid: repeat(3, 80px) / auto-flow; */
//   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//   flex-shrink: 0;
//   flex-grow: 1;
// }

