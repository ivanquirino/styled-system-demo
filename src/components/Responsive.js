import React, { Fragment } from 'react';

import css from '@styled-system/css';
import styled from 'styled-components';
import SystemProvider from 'components/SystemProvider';
import { layout, system } from 'styled-system';
import { range } from 'ramda';

function Responsive() {
  return (
    <Fragment>
      <h1>Responsividade</h1>
      <ul>
        <li>Breakpoints definidos na propriedade 'breakpoints' do tema</li>
      </ul>

      <SystemProvider>
        <Row>
          <Col>
            <Box>BOX 1</Box>
          </Col>
          <Col>
            <Box>BOX 2</Box>
          </Col>
          <Col width={[1, null, 1 / 2]}>
            <Box>BOX 3</Box>
          </Col>
          <Col width={1}>
            <Box>BOX 4</Box>
          </Col>
        </Row>
        <Row>
          <Col2>
            <Box>BOX 1</Box>
          </Col2>
          <Col2>
            <Box>BOX 2</Box>
          </Col2>
          <Col2>
            <Box>BOX 3</Box>
          </Col2>
          <Col2>
            <Box>BOX 4</Box>
          </Col2>
          <Col2>
            <Box>BOX 5</Box>
          </Col2>
          <Col2>
            <Box>BOX 6</Box>
          </Col2>
          <Col2>
            <Box>BOX 7</Box>
          </Col2>
          <Col2>
            <Box>BOX 8</Box>
          </Col2>
        </Row>
        <Row>
          {range(1, 13).map((n) => (
            <Col12 size={{ _: 12, md: 6, lg: 1 }}>
              <Box>COL {n}</Box>
            </Col12>
          ))}
        </Row>
      </SystemProvider>
    </Fragment>
  );
}

export default Responsive;

const Box = styled.div(
  css({
    bg: 'cinza',
    height: 100,
    borderColor: 'preto',
    border: '1px solid',
  })
);

const Col = styled.div(
  css({
    px: 3,
    display: 'flex',
    flexDirection: 'column',
    mb: 1,
  }),
  layout
);

Col.defaultProps = {
  width: [1, null, 1 / 2, 1 / 4],
};

const Row = styled.div(
  css({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    mb: 3,
  })
);

const columns = system({
  col: {
    property: 'width',
    scale: 'columns',
    transform: (value, scale) => {
      if (value === 0) return 0;
      return scale[value] || (value < 1 ? `${value * 100}%` : `${value}px`);
    },
  },
});

const Col2 = styled.div(
  css({
    px: 3,
    display: 'flex',
    flexDirection: 'column',
    mb: 1,
  }),
  columns
);
Col2.defaultProps = {
  col: { _: 1, sm: 2, md: 4, lg: 8 },
};

const columns12 = system({
  size: {
    property: 'width',
    scale: 'columns12',
  },
});

const Col12 = styled.div(
  css({
    px: 2,
    display: 'flex',
    flexDirection: 'column',
    mb: 1,
  }),
  columns12
);
