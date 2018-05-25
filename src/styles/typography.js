import Typography from 'typography';

import { black, red } from './colors';

const typography = new Typography({
  baseFontSize: '15px',
  baseLineHeight: 1.6,
  scaleRatio: 2.7,
  googleFonts: [
    {
      name: 'Lora',
      styles: ['400']
    },
    {
      name: 'Poppins',
      styles: ['300', '300i']
    }
  ],
  headerFontFamily: ['Lora', 'serif'],
  bodyFontFamily: ['Poppins', 'sans-serif'],
  includeNormalize: true,
  headerColor: red.default,
  bodyWeight: 300,
  bodyColor: black,
  overrideStyles: ({ adjustFontSizeTo }) => ({
    a: {
      color: red.default,
      textDecoration: 'none',
    },
    '@media (max-width: 768px)': {
      html: {
        ...adjustFontSizeTo('13px'),
      }
    },
    blockquote: {
      padding: '18px',
      margin: '18px 0',
      fontStyle: 'italic',
    }
  }),
});

export default typography;
