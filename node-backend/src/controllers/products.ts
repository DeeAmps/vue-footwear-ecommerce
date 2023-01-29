import { Request, Response } from 'express';

export const getProducts = async (_: Request, res: Response) => {
  res.send('getProducts');
};
