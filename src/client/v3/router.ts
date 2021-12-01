import express from 'express';
import { auth } from '../../config/authentication';
const router = express.Router();

import AuthRouter from './routers/auth.router';

router.use(AuthRouter);

export default router;
