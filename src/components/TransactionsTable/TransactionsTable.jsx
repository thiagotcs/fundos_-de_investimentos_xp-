import React from 'react';
import { Wrapper } from './styles';

export function TransactionsTable() {
  return (
    <Wrapper>
      <table>
        <thead>
          <tr>
            <th>Ticker</th>
            <th>Nome</th>
            <th>Cotação</th>
            <th>Percentual no fundo</th>
            <th>Valor Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>TICK1</td>
            <td>Ação XPTO 01</td>
            <td>R$ 21,00</td>
            <td>45%</td>
            <td>R$ 22.500.000,00</td>
          </tr>
          <tr>
            <td>TICK2</td>
            <td>Ação XPTO 02</td>
            <td>R$ 12,00</td>
            <td>25%</td>
            <td>R$ 12.500.000,00</td>
          </tr>
          <tr>
            <td>TICK3</td>
            <td>Ação XPTO 03</td>
            <td>R$ 50,00</td>
            <td>30%</td>
            <td>R$ 15.000.000,00</td>
          </tr>
        </tbody>
      </table>
    </Wrapper>
  );
}
