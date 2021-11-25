import jwt, { SignOptions } from 'jsonwebtoken';
import { JWT_SIGNING_SECRET } from '../config/config';

export const signJwt = (sub: string, opts = {} as SignOptions) => {
    return jwt.sign({ sub }, JWT_SIGNING_SECRET, opts);
};

export const verifyJwt = (token: string) => {
    try {
        const decoded = jwt.verify(token, JWT_SIGNING_SECRET);
        return decoded;
    } catch (err) {
        return false;
    }
};
