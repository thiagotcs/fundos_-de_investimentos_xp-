import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { Container } from './styles';
import { filteredTransactions } from '../../features/search/searchSlice';

export function SearchInput({ icon: Icon, ...rest }) {
  const inputRef = useRef('');
  const dispatch = useDispatch();
  const filterTransaction = () => {
    dispatch(filteredTransactions(inputRef.current.value));
  };
  return (
    <Container>
      <input
        {...rest}
        type="text"
        name=""
        placeholder="Buscar..."
        ref={inputRef}
        onChange={filterTransaction}
      />
      {Icon && <Icon size={20} />}
    </Container>
  );
}

SearchInput.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.func,
};
