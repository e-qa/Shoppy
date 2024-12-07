import db from '@/utils/db';

export const carouselProducts = async () => {
  const products = await db.product.findMany({
    where: {
      newArrival: true,
    },
  });
  return products;
};

export const GetAllProducts = ({ search = '' }: { search: string }) => {
  return db.product.findMany({
    where: {
      OR: [{ name: { contains: search, mode: 'insensitive' } }],
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
};
