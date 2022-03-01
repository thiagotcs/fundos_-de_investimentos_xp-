import { createServer, Model } from 'miragejs';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: '1',
          ticker: 'TICK1',
          name: 'Ação XPTO 01',
          cost: '21',
          percents: '45',
          price: '22500',
        },
        {
          id: '2',
          ticker: 'TICK2',
          name: 'Ação XPTO 02',
          cost: '12',
          percents: '25',
          price: '12500000',
        },
        {
          id: '3',
          ticker: 'TICK3',
          name: 'Ação XPTO 03',
          cost: '50',
          percents: '30',
          price: '150000000',
        },
      ],
    });
  },
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    });
  },
});
