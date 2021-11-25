import { Request, Response, NextFunction } from 'express';
import { M_MISSING_TOKEN, M_UNKNOWN_TOKEN } from './codes';
import { verifyJwt } from '../util/jwt';

export const auth = (req: Request, res: Response, next: NextFunction) => {
    const token =
        req?.query?.access_token || req?.headers?.authorization || null;
    if (!token) {
        return res.status(401).json({
            errcode: M_MISSING_TOKEN,
            error: 'You include an access_token in a query parameter or an Authorization header',
        });
    }
    const decoded = verifyJwt(token.toString());
    if (!decoded) {
        return res.status(401).json({
            errcode: M_UNKNOWN_TOKEN,
            error: 'Invalid token. This token is either incorrectly signed or expired.',
            soft_logout: true,
        });
    }
    next();
};
