import React from 'react';
import SideSheet from 'react-side-sheet';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { AppButton } from '../AppButton';
import { AppInput } from '../AppInput';
import { Container, Content, DistributionContainer } from './styles';
import {
  closeSideSheet,
  closeSideSheetEdit,
  selectSideSheet,
} from '../../features/sideSheet/sideSheetSlice';

const newTransactionFormSchema = yup.object().shape({
  num1: yup.number().required('Preencha o campo'),
  num2: yup
    .number()
    .oneOf(
      [null, yup.ref('num1')],
      'O valor dever ser maior que o valor anterior'
    )
    .required('Preencha o campo'),
  num3: yup
    .number()
    .oneOf(
      [null, yup.ref('num2')],
      'O valor dever ser maior que o valor anterior'
    )
    .required('Preencha o campo'),
  num4: yup.number().required('Preencha o campo'),
});

export function AppSideSheet() {
  const { changeSideSheet, changeSideSheetEdit } = useSelector(selectSideSheet);
  const { register, handleSubmit, formState } = useForm({
    resolve: yupResolver(newTransactionFormSchema),
  });
  const dispatch = useDispatch();
  const handleCloseSideSheet = () => dispatch(closeSideSheet());
  const handleCloseSideSheetEdit = () => dispatch(closeSideSheetEdit());

  const { errors } = formState;

  function handleNewTransaction(values) {
    console.log(values);
  }

  return (
    <SideSheet
      isOpen={[changeSideSheet, changeSideSheetEdit]}
      onDismiss={[handleCloseSideSheet, closeSideSheetEdit]}
    >
      {changeSideSheetEdit && (
        <Container as="form" onSubmit={handleSubmit(handleNewTransaction)}>
          <button
            type="button"
            onClick={handleCloseSideSheetEdit}
            className="sideSheetClose"
          >
            X
          </button>
          <h2>Alterar regra para aporte </h2>
          <p>Fundo</p>
          <p>Valor do aporte</p>

          <section>
            <div>
              <AppInput
                type="number"
                name="num1"
                placeholder="De (R$)"
                {...register('num1')}
                error={errors.num1}
              />
              <AppInput
                type="number"
                name="num2"
                placeholder="De (R$)"
                {...register('num2')}
                error={errors.num2}
              />
            </div>
            <div>
              <AppInput
                type="number"
                name="num3"
                placeholder="Até (R$)"
                {...register('num3')}
                error={errors.num3}
              />
              <AppInput
                type="number"
                name="num4"
                placeholder="Até (R$)"
                {...register('num4')}
                error={errors.num4}
              />
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
              <AppButton type="submit">Salvar</AppButton>
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
