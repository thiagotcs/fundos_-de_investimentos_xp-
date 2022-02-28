import React from 'react';
import PropTypes from 'prop-types';
import { FiSearch } from 'react-icons/fi';
import { AppButton } from '../AppButton/AppButton';
import { AppInput } from '../AppInput/AppInput';
import { TransactionsTable } from '../TransactionsTable';
import { Wrapper, Topo, Content } from './styles';

export function AppContainer({ onOpenSideSheet, onOpenSideSheetEdit }) {
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
        <AppInput type="text" placeholder="Buscar..." icon={FiSearch} />
        <div>
          <AppButton type="button" onClick={onOpenSideSheet}>
            Simular aporte
          </AppButton>
          <AppButton type="button" onClick={onOpenSideSheetEdit}>
            Alterar regra para aporte
          </AppButton>
        </div>
      </Content>
      <TransactionsTable />
    </Wrapper>
  );
}
AppContainer.propTypes = {
  onOpenSideSheet: PropTypes.func,
  onOpenSideSheetEdit: PropTypes.func,
};
