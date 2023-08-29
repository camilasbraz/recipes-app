// Arquivo desatualizado!!


const request = require('supertest');
// const app = require('./receitas'); // Importe a função do arquivo
const app = require('./index'); // Importe a função do arquivo

// describe('Testando a rota /receitas', () => {
//   it('Deve retornar um JSON com as receitas', async () => {
//     const response = await request(app).get('/receitas');
//     expect(response.status).toBe(200);
//     expect(response.body).toBeDefined();
//   });
// });

describe('Testando a rota padrão', () => {
  it('Deve retornar a mensagem "Servidor está funcionando!"', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Servidor está funcionando!');
  });
});
