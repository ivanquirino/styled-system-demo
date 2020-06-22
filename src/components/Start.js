/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Fragment } from 'react';
import { Box, Heading } from 'theme-ui';

function Start() {
  return (
    <Fragment>
      <Box>
        <Heading as="h1" sx={{ textAlign: 'center', mb: 5 }}>
          Styled System
        </Heading>
        <Heading sx={{ textAlign: 'center' }}>Ivan Quirino</Heading>
      </Box>
    </Fragment>
  );
}

export default Start;
