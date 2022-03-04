import React from 'react';
import spin from '../../assets/img/spin.gif';
import { Container } from './styles';

export function Loader() {
  return (
    <Container>
      <img src={spin} alt="loader" />
    </Container>
  );
}
