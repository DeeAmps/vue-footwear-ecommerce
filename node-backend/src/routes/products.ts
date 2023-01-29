import express, { Router } from 'express';
import { getProducts } from '../controllers/products';

const productRouter: Router = express.Router();

productRouter.get('/', getProducts);

export default productRouter;
