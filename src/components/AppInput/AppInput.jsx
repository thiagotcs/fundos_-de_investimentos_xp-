import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export function AppInput({ icon: Icon, ...rest }) {
  return (
    <Container>
      <input {...rest} />
      {Icon && <Icon size={20} />}
    </Container>
  );
}

AppInput.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.node.isRequired,
};
