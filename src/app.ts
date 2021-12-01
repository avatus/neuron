import express from 'express';
import cors from 'cors';
import { auth } from './config/authentication';

import { corsOptions } from './config/cors';
// import { auth } from './config/authentication';
import clientv3 from './client/v3/router';

export const app = express();

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

app.use('/_matrix/client/v3', clientv3);

// utility routes
app.get('/secret', auth, (req, res) => {
    return res.json({ secret: 'message' });
});
