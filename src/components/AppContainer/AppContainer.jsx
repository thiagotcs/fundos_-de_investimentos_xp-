import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FiSearch } from 'react-icons/fi';
import { AppButton } from '../AppButton';
import { AppInput } from '../AppInput';
import { TransactionsTable } from '../TransactionsTable';
import { Wrapper, Topo, Content } from './styles';
import { changeSearch } from '../../features/search/searchSlice';
import {
  openSideSheet,
  openSideSheetEdit,
} from '../../features/sideSheet/sideSheetSlice';

export function AppContainer() {
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();
  const handleOpenSideSheet = () => dispatch(openSideSheet());
  const handleopenSideSheetEdit = () => dispatch(openSideSheetEdit());

  const searchDispatch = useDispatch();
  const handleSearch = (event) => {
    event.preventDefault();
    searchDispatch(changeSearch(search));
  };

  return (
    <Wrapper>
      <Topo>
        <h1>Fundos de Investimentos FIC FIM</h1>
        <p>
          Descrição do Fundo: Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. At nobis natus deleniti tempora voluptates
          reprehenderit doloremque saepe harum veniam minus vero, officiis ex
          illo maiores possimus nesciunt in fugit rerum? Lorem ipsum, dolor sit
          amet consectetur adipisicing elit. At nobis natus deleniti tempora
          voluptates reprehenderit doloremque saepe harum veniam minus vero,
          officiis ex illo maiores possimus nesciunt in fugit rerum?
        </p>
      </Topo>
      <Content>
        <form onSubmit={handleSearch}>
          <AppInput
            type="text"
            placeholder="Buscar..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            icon={FiSearch}
          />
        </form>
        <div>
          <AppButton type="button" onClick={handleOpenSideSheet}>
            Simular aporte
          </AppButton>
          <AppButton type="button" onClick={handleopenSideSheetEdit}>
            Alterar regra para aporte
          </AppButton>
        </div>
      </Content>
      <TransactionsTable />
    </Wrapper>
  );
}
