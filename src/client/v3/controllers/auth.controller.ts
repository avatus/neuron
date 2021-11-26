import { Request, Response } from 'express';
import { M_LOGIN_PASSWORD } from '../../../config/codes';

const flows = [M_LOGIN_PASSWORD];

export const getFlows = async (req: Request, res: Response) => {
    return res.status(200).json({
        flows,
    });
};

export const login = async (req: Request, res: Response) => {
    return res.json('hi');
};
