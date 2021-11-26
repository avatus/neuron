import { app } from '../app';
import supertest from 'supertest';
import { M_MISSING_TOKEN, M_UNKNOWN_TOKEN } from '../config/codes';

import { signJwt } from '../util/jwt';

const request = supertest(app);

describe('Authentication', () => {
    // describe('middleware', () => {
    //     it('should return an error if an access_token is missing', async () => {
    //         const response = await request.get('/secret');
    //         expect(response.status).toBe(401);
    //         expect(response.body).toHaveProperty('errcode');
    //         expect(response.body).toHaveProperty('error');
    //         expect(response.body.errcode).toBe(M_MISSING_TOKEN);
    //     });

    //     it('should return an error if an access_token is invalid', async () => {
    //         // create a token that expired a minute ago
    //         const token = signJwt('person', { expiresIn: -1000 * 60 });
    //         // query param
    //         let response = await request.get(`/secret?access_token=${token}`);
    //         expect(response.status).toBe(401);
    //         expect(response.body).toHaveProperty('errcode');
    //         expect(response.body).toHaveProperty('error');
    //         expect(response.body).toHaveProperty('soft_logout');
    //         expect(response.body.soft_logout).toBe(true);
    //         expect(response.body.errcode).toBe(M_UNKNOWN_TOKEN);

    //         // Authorization header
    //         response = await request.get(`/secret`).set('Authorization', token);
    //         expect(response.status).toBe(401);
    //     });

    //     it('should return the resource if a valid access_token is presented', async () => {
    //         const token = signJwt('hi');
    //         // query param
    //         let response = await request.get(`/secret?access_token=${token}`);
    //         expect(response.status).toBe(200);

    //         // Authorization header
    //         response = await request.get(`/secret`).set('Authorization', token);
    //         expect(response.status).toBe(200);
    //     });

    //     it('should rate limit the resource', async () => {
    //         // TODO: how do I test rate limiting?
    //     });
    // });

    describe('login', () => {
        it('should return a list of authentication flows', async () => {
            let response = await request.get('/_matrix/client/v3/login');
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty('flows');
            expect(response.body.flows.length).toBeGreaterThan(0);
        });
    });
});
