/** @jsx jsx */
import { Fragment, useState } from 'react';
import { jsx, Input, Button, Label, Flex } from 'theme-ui';

function ThemeSpecification() {
  return (
    <Fragment>
      <h1>Theme Specification</h1>
      <ul>
        <li>Convenção de como organizar o tema</li>
      </ul>

      <ul>
        <li>
          <a
            href="https://styled-system.com/theme-specification"
            target="_blank"
            rel="noopener noreferrer"
          >
            Theme Specification
          </a>
        </li>
        <li>
          <a
            href="https://styled-system.com/table"
            target="_blank"
            rel="noopener noreferrer"
          >
            Reference Table
          </a>
        </li>
      </ul>
    </Fragment>
  );
}

export default ThemeSpecification;
