import { Request, Response } from 'express';
import {
  getAllProducts,
  getProduct as getProductById,
} from '../services/products';

export const getProducts = async (_: Request, res: Response) => {
  const products = await getAllProducts();
  res.send(products);
};

export const getProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await getProductById(Number(id));
  res.send(product);
};
