import Typography from 'typography'

const typography = new Typography({
  googleFonts: [
    {
      name: 'Ubuntu',
      styles: ['400', '500', '700'],
    },
  ],
  baseFontSize: '16px',
  baseLineHeight: 1.666,
  bodyColor: 'inherit',
  headerFontFamily: [
    'Ubuntu',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  bodyFontFamily: ['Ubuntu', 'Helvetica Neue', 'Arial', 'sans-serif'],
})

export default typography
