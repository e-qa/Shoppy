import { GetAllProducts } from '@/utils/actions';
import { Separator } from '@radix-ui/react-dropdown-menu';
import { IoGrid } from 'react-icons/io5';
import { FaList } from 'react-icons/fa';
import ProductsGrid from './ProductsGrid';
import ProductsList from './ProductsList';
import { Button } from '../ui/button';
import Link from 'next/link';

const ProductsContainer = async ({
  layout,
  search,
}: {
  layout: string;
  search: string;
}) => {
  const products = await GetAllProducts({ search });
  const totalProducts = products.length;
  const searchTerm = search ? `&search=${search}` : '';
  return (
    <>
      <section>
        <div className="flex justify-between items-center">
          <div className="flex gap-x-4">
            <Button
              variant={layout === 'grid' ? 'default' : 'ghost'}
              size="icon"
              asChild
            >
              <Link href={`/products?layout=grid${searchTerm}`}>
                <IoGrid />
              </Link>
            </Button>
            <Button
              variant={layout === 'list' ? 'default' : 'ghost'}
              size="icon"
              asChild
            >
              <Link href={`/products?layout=list${searchTerm}`}>
                <FaList />
              </Link>
            </Button>
          </div>
        </div>
        <Separator className="mt-4" />
      </section>
      <div>
        {totalProducts === 0 ? (
          <h5 className="text-2xl mt-16">Sorry, no products</h5>
        ) : layout === 'grid' ? (
          <ProductsGrid products={products} />
        ) : (
          <ProductsList products={products} />
        )}
      </div>
    </>
  );
};

export default ProductsContainer;
