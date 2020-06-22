import { range } from 'ramda';

const colors = {
  vermelho: 'red',
  verde: 'green',
  amarelo: 'yellow',
  preto: 'black',
  cinza: 'grey',
  branco: '#FFF',
  default: '#383838',
};

const fontSizes = [0, '12px', '16px', '20px'];
fontSizes.small = fontSizes[1];
fontSizes.medium = fontSizes[2];
fontSizes.large = fontSizes[3];

const lineHeights = [0, '14px', '18px', '22px'];
lineHeights.small = lineHeights[1];
lineHeights.medium = lineHeights[2];
lineHeights.large = fontSizes[3];

const space = [0, 2, 4, 8, 16, 32, 64, 128, 256, 512];

const fonts = {
  body: 'sans-serif',
  title: 'serif',
};
const breakpoints = ['40em', '52em', '64em'];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];

const percent = (value) => `${(1 / value) * 100}%`;

const columns = [0, ...range(1, 13).map(percent)];
console.log(columns)

const theme = {
  colors,
  fonts,
  fontSizes,
  lineHeights,
  space,
  breakpoints,
  columns,
};

export default theme;
