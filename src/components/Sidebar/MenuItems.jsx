import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from './Dropdown';

export function MenuItems({ items }) {
  const [dropdown, setDropdown] = useState(false);
  return (
    <li>
      {items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.icon}
            {items.title}
            {dropdown ? items.iconOpen : items.iconClosed}
          </button>
          <Dropdown submenus={items.submenu} dropdown={dropdown} />
        </>
      ) : (
        <a href="/#">{items.title}</a>
      )}
    </li>
  );
}
MenuItems.propTypes = {
  items: PropTypes.object,
};
