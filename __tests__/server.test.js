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
});
