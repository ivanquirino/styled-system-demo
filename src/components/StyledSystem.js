import React, { Fragment } from 'react';
import styled from 'styled-components';
import {
  typography,
  color,
  space,
  layout,
  flexbox,
  compose,
} from 'styled-system';
import SystemProvider from 'components/SystemProvider';
import css from '@styled-system/css';

function StyledSystem() {
  return (
    <Fragment>
      <h1>Styled System</h1>

      <ul>
        <li>Props de estilo para desenvolvimento de UI rápido</li>
        <li>
          Funções auxiliares para styled-components que acessam propriedades do
          tema
        </li>
        <li>
          <pre>compose</pre> função para otimizar o uso de múltiplas funções do styled-system
        </li>
      </ul>
      <SystemProvider>
        <Box color="amarelo" p={5} m={2} bg="grey" display="flex" width={200}>
          Isso é uma caixa
        </Box>
        <Box2 bg="preto">Isso é outra caixa</Box2>
        <Box3>Isso é uma caixa diferente</Box3>
        <Box3 bg="verde" color="preto">
          Isso é uma caixa diferente
        </Box3>
      </SystemProvider>
    </Fragment>
  );
}

export default StyledSystem;

const Box = styled.div`
  ${typography}
  ${color}
  ${space}
  ${layout}
  ${flexbox}
`;

const Box2 = styled.div`
  width: 200px;
  ${compose(typography, color, space, layout, flexbox)}
`;

Box2.defaultProps = { color: 'branco', p: 4 };

const Box3 = styled.div(
  css({
    color: 'verde',
    bg: 'vermelho',
    fontSize: 'large',
    width: 300,
    p: 3,
    m: 3,
  }),
  compose(typography, color, space, layout, flexbox)
);
