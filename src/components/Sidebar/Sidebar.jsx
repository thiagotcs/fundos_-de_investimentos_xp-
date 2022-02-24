import React from 'react';
import { Wrapper, Topo } from './styles';
import logo from '../../assets/logo-xpi.svg';

export function Sidebar() {
  return (
    <>
      <Wrapper>
        <Topo>
          <h1>Investimentos</h1>
          <img src={logo} alt="Logo XP" />
        </Topo>
      </Wrapper>
    </>
  );
}
