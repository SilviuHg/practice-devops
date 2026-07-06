const request = require('supertest');
const app = require('./server');

describe('Test get data endpoint', () => {
    it('should return status 200 and JSON message', async () => {
        const response = await request(app).get('/data');
        
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('message', 'Here is the backend response!');
        expect(response.body).toHaveProperty('status', 'Active');
    });
});