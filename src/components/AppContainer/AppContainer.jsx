import React from 'react';
import { useDispatch } from 'react-redux';
import { FiSearch } from 'react-icons/fi';
import { AppButton } from '../AppButton';
import { SearchInput } from '../SearchInput';
import { TransactionsTable } from '../TransactionsTable';
import {
  openSideSheet,
  openSideSheetEdit,
} from '../../features/sideSheet/sideSheetSlice';
import { Wrapper, Topo, Content } from './styles';

export function AppContainer() {
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
        <SearchInput icon={FiSearch} />
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
