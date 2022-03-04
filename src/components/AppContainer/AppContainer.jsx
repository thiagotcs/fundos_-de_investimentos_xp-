import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FiSearch } from 'react-icons/fi';
import { AppButton } from '../AppButton/AppButton';
import { AppInput } from '../AppInput/AppInput';
import { TransactionsTable } from '../TransactionsTable';
import { Wrapper, Topo, Content } from './styles';
import {
  openSideSheet,
  openSideSheetEdit,
} from '../../features/sideSheet/sideSheetSlice';

export function AppContainer() {
  const [search, setSearch] = useState('');
  console.log(
    '🚀 ~ file: AppContainer.jsx ~ line 15 ~ AppContainer ~ search',
    search
  );
  const dispatch = useDispatch();
  const handleOpenSideSheet = () => dispatch(openSideSheet());
  const handleopenSideSheetEdit = () => dispatch(openSideSheetEdit());

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
        <AppInput
          type="text"
          placeholder="Buscar..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          icon={FiSearch}
        />
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
