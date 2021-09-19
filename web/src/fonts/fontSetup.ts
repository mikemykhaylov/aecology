import ManropeVariable from './Manrope.woff2';
import RubikVariable from './Rubik.woff2';

const fontFaces = `
@font-face {
  font-family: 'Manrope';
  src: url(${ManropeVariable}) format('woff2-variations');
  font-weight: 200 800;
  font-stretch: 75% 125%;
  font-style: normal;
 }
 @font-face {
  font-family: 'Rubik';
  src: url(${RubikVariable}) format('woff2-variations');
  font-weight: 400;
  font-stretch: 75% 125%;
  font-style: normal;
 }
`;

export default fontFaces;
