import { Request, Response, NextFunction } from 'express';
import { M_LIMIT_EXCEEDED } from './codes';
import rateLimit from 'express-rate-limit';

const WINDOW_MS = 2000; // 2 seconds

export const limiter = rateLimit({
    windowMs: WINDOW_MS,
    handler: function (req: Request, res: Response, next: NextFunction) {
        res.status(429).json({
            errcode: M_LIMIT_EXCEEDED,
            error: 'Too many requests',
            retry_after_ms: WINDOW_MS,
        });
    },
});
