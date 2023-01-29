import express, { Router } from 'express';
import { getProducts, getProduct } from '../controllers/products';

const productRouter: Router = express.Router();

productRouter.get('/', getProducts);
productRouter.get('/:id', getProduct);

export default productRouter;
