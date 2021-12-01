import express from 'express';
import { getFlows, login } from '../controllers/auth.controller';
import { limiter } from '../../../config/ratelimit';

const router = express.Router();

router.get('/login', limiter, getFlows);
router.post('/login', limiter, login);

export default router;
