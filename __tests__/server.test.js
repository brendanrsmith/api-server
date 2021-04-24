'use strict';

const { server } = require('../src/server');
const supertest = require('supertest');
const request = supertest(server);

describe('WEB SERVER', () => {
  it('should respond with 404 on bad route', async () => {
    const response = await request.get('/foo');
    expect(response.status).toBe(404);
  });

  it('should respond with 404 on bad method', async () => {
    const response = await request.put('/foo');
    expect(response.status).toBe(404);
  });

  it('should respond with 200 on GET /foods', async () => {
    const response = await request.get('/foods');
    expect(response.status).toBe(200);
  });
  
  it('should respond with 201 on POST /foods', async () => {
    const response = await request.post('/foods').send({name: 'testFoodName', color: "testColor" });
    console.log(response.body);
    expect(response.status).toBe(201);
    expect(response.body.name).toEqual('testFoodName');
  });
  
  // it('should respond with 200 on GET /foods', async () => {
  //   const response = await request.get('/foods');
  //   expect(response.status).toBe(200);
  // });

  // it('should respond with 200 on GET /foods', async () => {
  //   const response = await request.get('/foods');
  //   expect(response.status).toBe(200);
  // });
});
