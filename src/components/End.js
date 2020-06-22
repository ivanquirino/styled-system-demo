/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Fragment } from 'react';

function End() {
  return (
    <Fragment>
      <h1 sx={{ textAlign: 'center' }}>Fim</h1>
      <h2 sx={{ textAlign: 'center' }}>Obrigado!</h2>
      <h3 sx={{ textAlign: 'center' }}>
        <a
          href="https://github.com/ivanquirino/styled-system-demo"
          target="__blank"
        >
          github.com/ivanquirino/styled-system-demo
        </a>
      </h3>
    </Fragment>
  );
}

export default End;
