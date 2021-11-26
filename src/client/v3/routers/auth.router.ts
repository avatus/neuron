import express from 'express';
import { getFlows } from '../controllers/auth.controller';
import { limiter } from '../../../config/ratelimit';

const router = express.Router();

router.get('/login', limiter, getFlows);

export default router;
