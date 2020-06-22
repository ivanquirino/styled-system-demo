import React, { Fragment } from 'react';
import styled from 'styled-components';
import SystemProvider from 'components/SystemProvider';
import get from '@styled-system/theme-get';
import css from '@styled-system/css';

function AcessandoTema() {
  return (
    <Fragment>
      <SystemProvider>
        <Title>Acessando valores do tema</Title>
        <Title2>Accessando valores com função themeGet</Title2>
        <Title3>Acessando valores com a função css</Title3>
      </SystemProvider>
    </Fragment>
  );
}

export default AcessandoTema;

const Title = styled.h1`
  font-family: ${(props) => props.theme.fonts.title};
  font-size: ${(props) => props.theme.fontSizes.large};
  line-height: ${(props) => props.theme.lineHeights[3]};
  color: ${(props) => props.theme.colors.vermelho};
`;

const Title2 = styled.h1`
  font-family: ${get('fonts.body', 'serif')};
  font-size: ${get('fontSizes.large')};
  color: ${get('colors.amarelo')};
  background-color: ${get('colors.preto')};
`;

const Title3 = styled.h1(
  css({
    fontFamily: 'Ubuntu',
    fontSize: 30,
    lineHeight: '32px',
    color: 'verde',
    bg: 'cinza'
  })
);
