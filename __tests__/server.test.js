'use strict';

const { server } = require('../src/server');
const supertest = require('supertest');
const request = supertest(server);

// ======================================================

describe('WEB SERVER', () => {
  it('should respond with 404 on bad route', async () => {
    const response = await request.get('/foo');
    expect(response.status).toBe(404);
  });

  it('should respond with 404 on bad method', async () => {
    const response = await request.put('/foo');
    expect(response.status).toBe(404);
  });
});

// ======================================================

describe('FOODS ROUTES', () => {
  let id;
  it('should respond with 200 on GET /foods', async () => {
    const response = await request.get('/foods');
    expect(response.status).toBe(200);
  });
  
  it('should respond with 201 on POST /foods', async () => {
    const response = await request.post('/foods').send({name: 'testFoodName', color: "testColor" });
    expect(response.status).toBe(201);
    expect(response.body.name).toEqual('testFoodName');
    id = response.body._id;
  });
  
  it('should respond with 200 on GET /foods/:id', async () => {
    const response = await request.get(`/foods/${id}`);
    expect(response.status).toBe(200);
  });

  it('should respond with 200 on PUT /foods/:id', async () => {
    const response = await request.put(`/foods/${id}`)
    .send({ name: 'testUpdateFood', color:"testUpdateColor" });
    expect(response.status).toBe(200);
    expect(response.body.name).toEqual('testUpdateFood');
  });
  
  it('should respond with 200 on DELETE /foods/:id', async () => {
    const response = await request.delete(`/foods/${id}`);
    expect(response.status).toBe(200);
    expect(response.body.name).toEqual('testUpdateFood');
  });
});

// ======================================================

describe('ClOTHES ROUTES', () => {
  let id;
  it('should respond with 200 on GET /clothes', async () => {
    const response = await request.get('/clothes');
    expect(response.status).toBe(200);
  });
  
  it('should respond with 201 on POST /clothes', async () => {
    const response = await request.post('/clothes').send({name: 'testclothesName', color: "testColor" });
    expect(response.status).toBe(201);
    expect(response.body.name).toEqual('testclothesName');
    id = response.body._id;
  });
  
  it('should respond with 200 on GET /clothes/:id', async () => {
    const response = await request.get(`/clothes/${id}`);
    expect(response.status).toBe(200);
  });

  it('should respond with 200 on PUT /clothes/:id', async () => {
    const response = await request.put(`/clothes/${id}`)
    .send({ name: 'testUpdateclothes', color:"testUpdateColor" });
    expect(response.status).toBe(200);
    expect(response.body.name).toEqual('testUpdateclothes');
  });
  
  it('should respond with 200 on DELETE /clothes/:id', async () => {
    const response = await request.delete(`/clothes/${id}`);
    expect(response.status).toBe(200);
    expect(response.body.name).toEqual('testUpdateclothes');
  });
});