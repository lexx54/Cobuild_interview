import request from 'supertest';

const baseUrl = 'http://localhost:3000/api'

describe('task endpoints', () => {
  test('should return a 200 status code', async () => {
    const response = await request(baseUrl).get('/tasks')
    expect(response.statusCode).toBe(200)
  })
})