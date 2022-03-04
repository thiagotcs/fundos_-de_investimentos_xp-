import React from 'react';
import SideSheet from 'react-side-sheet';
import { useDispatch, useSelector } from 'react-redux';

import { AppButton } from '../AppButton/AppButton';
import { AppInput } from '../AppInput/AppInput';
import { Container, Content, DistributionContainer } from './styles';
import {
  closeSideSheet,
  closeSideSheetEdit,
  selectSideSheet,
} from '../../features/sideSheet/sideSheetSlice';

export function AppSideSheet() {
  const { changeSideSheet, changeSideSheetEdit } = useSelector(selectSideSheet);
  const dispatch = useDispatch();
  const handleCloseSideSheet = () => dispatch(closeSideSheet());
  const handleCloseSideSheetEdit = () => dispatch(closeSideSheetEdit());

  return (
    <SideSheet
      isOpen={[changeSideSheet, changeSideSheetEdit]}
      onDismiss={[handleCloseSideSheet, closeSideSheetEdit]}
    >
      {changeSideSheetEdit && (
        <Container>
          <button
            type="button"
            onClick={handleCloseSideSheetEdit}
            className="sideSheetClose"
          >
            X
          </button>
          <h2>Alterar regra para aporte </h2>
          <p>Fundo</p>
          <p>Selection Fundo de investimento</p>
          <p>Valor do aporte</p>
          <section>
            <div>
              <AppInput type="number" placeholder="De (R$)" />
              <AppInput type="number" placeholder="De (R$)" />
            </div>
            <div>
              <AppInput type="number" placeholder="Até (R$)" />
              <AppInput type="number" placeholder="Até (R$)" />
            </div>
          </section>
          <DistributionContainer>
            <p>Distribuição dos valores(%)</p>
            <section>
              <div>
                <p>TICK1</p>
                <AppInput type="text" />
                <AppInput type="text" />
              </div>
              <div>
                <p>TICK2</p>
                <AppInput type="text" />
                <AppInput type="text" />
              </div>
              <div>
                <p>TICK3</p>
                <AppInput type="text" />
                <AppInput type="text" />
              </div>
            </section>
            <div className="sideSheetButton">
              <AppButton type="button" onClick={handleCloseSideSheetEdit}>
                Cancelar
              </AppButton>
              <AppButton type="button">Salvar</AppButton>
            </div>
          </DistributionContainer>
        </Container>
      )}
      {changeSideSheet && (
        <Content>
          <button
            type="button"
            onClick={handleCloseSideSheet}
            className="sideSheetClose"
          >
            X
          </button>
          <h2>Simular aporte</h2>
          <span>Valor (R$)</span>
          <section>
            <div>
              <AppInput type="number" placeholder="(R$)" />
            </div>
          </section>
          <p>Distribuição do aporte</p>
          <div>
            <table>
              <thead>
                <tr>
                  <th>Ativo</th>
                  <th>Valor</th>
                  <th>Percentual</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>TICK1</td>
                  <td>R$ 10.000,00</td>
                  <td>33,33</td>
                </tr>
                <tr>
                  <td>TICK2</td>
                  <td>R$ 10.000,00</td>
                  <td>33,33</td>
                </tr>
                <tr>
                  <td>TICK3</td>
                  <td>R$ 10.000,00</td>
                  <td>33,33</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Content>
      )}
    </SideSheet>
  );
}
