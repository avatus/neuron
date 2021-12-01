import { Request, Response } from 'express';
import { M_LOGIN_PASSWORD, M_UNKNOWN } from '../../../config/codes';

const flows = [M_LOGIN_PASSWORD];

export const getFlows = async (req: Request, res: Response) => {
    return res.status(200).json({
        flows,
    });
};

export const login = async (req: Request, res: Response) => {
    const { type } = req.body;
    if (!type || !flows.includes(type)) {
        return res
            .status(400)
            .json({ errcode: M_UNKNOWN, error: 'Bad login type.' });
    }
    return res.json('hi');
};
