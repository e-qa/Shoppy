'use server';

import db from '@/utils/db';
import { redirect } from 'next/navigation';

export const carouselProducts = async () => {
  const products = await db.product.findMany({
    where: {
      newArrival: true,
    },
  });
  return products;
};

export const GetAllProducts = async ({ search = '' }: { search: string }) => {
  return db.product.findMany({
    where: {
      OR: [{ name: { contains: search, mode: 'insensitive' } }],
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
};

export const GetSingleProduct = async (productId: string) => {
  const product = await db.product.findUnique({
    where: {
      id: productId,
    },
  });
  if (!product) {
    redirect('/products');
  }
  return product;
};
