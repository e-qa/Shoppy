import db from '@/utils/db';

export const carouselProducts = async () => {
  const products = await db.product.findMany({
    where: {
      newArrival: true,
    },
  });
  return products;
};
