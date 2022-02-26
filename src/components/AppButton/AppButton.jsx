import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export function AppButton({ children, ...rest }) {
  return (
    <Container type="button" {...rest}>
      {children}
    </Container>
  );
}

AppButton.propTypes = {
  children: PropTypes.node.isRequired,
};
