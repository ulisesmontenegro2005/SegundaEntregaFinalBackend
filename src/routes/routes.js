import Router from 'express';
import { productsRoutes } from './products.js';
import { cartsRoutes } from './carts.js';

export const routes = Router();

routes.use('/productos/', productsRoutes);
routes.use('/carritos/', cartsRoutes);