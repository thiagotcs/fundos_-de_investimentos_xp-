import React from 'react';
import logo from '../../assets/logo-xpi.svg';
import { MenuItems } from './MenuItems';
import { menuItems } from './menuItems';
import { Wrapper, Topo, Ul } from './styles';

export function Sidebar() {
  return (
    <>
      <Wrapper>
        <Topo>
          <h1>Investimentos</h1>
          <img src={logo} alt="Logo XP" />
        </Topo>
        <nav>
          <Ul>
            {menuItems.map((menu, index) => {
              return <MenuItems items={menu} key={index} />;
            })}
          </Ul>
        </nav>
      </Wrapper>
    </>
  );
}
