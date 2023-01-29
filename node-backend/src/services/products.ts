import { AppDataSource } from '../data-source';
import { Product } from '../entity/Product';

const productsRepository = AppDataSource.getRepository(Product);

export const getAllProducts = async () => {
  return productsRepository.find();
};

export const getProduct = async (id: number) => {
  return productsRepository.findOne({
    where: {
      id,
    },
  });
};
