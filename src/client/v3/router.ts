import express from 'express';
const router = express.Router();

import AuthRouter from './routers/auth.router';

router.use(AuthRouter);

// import { auth } from '../../config/authentication';

export default router;
