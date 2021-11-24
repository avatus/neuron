import { Request, Response, NextFunction } from 'express';

export type MatrixAuthenticationError = {
    errcode: string;
    error: string;
};

const M_MISSING_TOKEN: MatrixAuthenticationError = {
    errcode: 'M_MISSING_TOKEN',
    error: 'Missing access token',
};

const M_UNKNOWN_TOKEN: MatrixAuthenticationError = {
    errcode: 'M_MISSING_TOKEN',
    error: 'Missing access token',
};

export const auth = (req: Request, res: Response, next: NextFunction) => {
    const token = req?.params?.access_token || req?.headers?.authorization;
    if (!token) {
        return res.status(401).json(M_MISSING_TOKEN);
    }
    next();
};
