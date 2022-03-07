import React from 'react';
import PropTypes from 'prop-types';
import { Uldropdown } from './styles';
import { AppButton } from '../AppButton';
import { useDispatch } from 'react-redux';
import { openSideSheetEdit } from '../../features/sideSheet/sideSheetSlice';

export function Dropdown({ submenus, dropdown }) {
  const dispatch = useDispatch();
  const handleopenSideSheetEdit = () => dispatch(openSideSheetEdit());
  return (
    <>
      {dropdown ? (
        <Uldropdown>
          {submenus.map((submenu, index) => (
            <li key={index} className="menu-items">
              <AppButton type="button" onClick={handleopenSideSheetEdit}>
                {submenu.icon}
                {submenu.title}
              </AppButton>
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
