import { app } from '../app';
import supertest from 'supertest';

const request = supertest(app);

describe('Authentication', () => {
    it('should return an error if an access_token is missing', async () => {
        const response = await request.get('/secret');
        expect(response.status).toBe(401);
        expect(response.body).toHaveProperty('errcode');
        expect(response.body).toHaveProperty('error');
        expect(response.body.errcode).toBe('M_MISSING_TOKEN');
    });
});
