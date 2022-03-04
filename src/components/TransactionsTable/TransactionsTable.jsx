import React, { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Loader } from '../Loader/Loader';
import { Wrapper } from './styles';

export function TransactionsTable() {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    api
      .get('transactions')
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  return (
    <Wrapper>
      {transactions.length < 1 && <Loader />}
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
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.ticker}</td>
              <td>{transaction.name}</td>
              <td>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(transaction.cost)}
              </td>
              <td>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'percent',
                }).format(transaction.percents / 100)}
              </td>
              <td>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(transaction.price)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Wrapper>
  );
}
