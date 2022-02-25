import React from 'react';
import PropTypes from 'prop-types';
import { Uldropdown } from './styles';

export function Dropdown({ submenus, dropdown }) {
  return (
    <>
      {dropdown ? (
        <Uldropdown>
          {submenus.map((submenu, index) => (
            <li key={index} className="menu-items">
              <a href="/#">
                {submenu.icon}
                {submenu.title}
              </a>
            </li>
          ))}
        </Uldropdown>
      ) : (
        ''
      )}
    </>
  );
}
Dropdown.propTypes = {
  submenus: PropTypes.array,
  dropdown: PropTypes.bool,
};
