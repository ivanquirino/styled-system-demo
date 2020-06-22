/** @jsx jsx */
import { jsx } from 'theme-ui';
import styled from 'styled-components';
import { variant } from 'styled-system';
import SystemProvider from 'components/SystemProvider';
import css from '@styled-system/css';

function Variants() {
  return (
    <div sx={{ mb: 5 }}>
      <h1>Variants</h1>
      <ul>
        <li>Aplique conjuntos de estilos usando uma única prop</li>
      </ul>

      <SystemProvider>
        <Title>Título padrão</Title>
        <Title variant="sucesso">Título sucesso</Title>
        <Title variant="erro">Título erro</Title>
        <Title variant="inativo">Título inativo</Title>
        <Title2>Título com variants</Title2>
      </SystemProvider>
    </div>
  );
}

export default Variants;

const variants = variant({
  variants: {
    sucesso: {
      color: 'verde',
    },
    erro: {
      color: 'vermelho',
    },
    inativo: {
      color: 'cinza',
    },
  },
});

const Title = styled.h1(css({ color: 'preto' }), variants);

const Title2 = styled.h1(
  variant({
    variants: {
      padrao: {
        color: 'default',
      },
      sucesso: {
        color: 'verde',
      },
      erro: {
        color: 'vermelho',
      },
      inativo: {
        color: 'cinza',
      },
    },
  })
);

Title2.defaultProps = { variant: 'padrao' };
