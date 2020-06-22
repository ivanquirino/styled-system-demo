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

const breakpoints = ['320px', '560px', '960px', '1280px', '1920px'];

breakpoints.xs = breakpoints[0];
breakpoints.sm = breakpoints[1];
breakpoints.md = breakpoints[2];
breakpoints.lg = breakpoints[3];
breakpoints.xl = breakpoints[4];

const percent = (value) => `${(1 / value) * 100}%`;
const columns = [0, ...range(1, 13).map(percent)];

const col12 = (value) => `${(value / 12) * 100}%`;
const columns12 = [0, ...range(1, 13).map(col12)];

const theme = {
  colors,
  fonts,
  fontSizes,
  lineHeights,
  space,
  breakpoints,
  columns,
  columns12
};

export default theme;
