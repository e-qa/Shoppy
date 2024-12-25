import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { GetSingleProduct } from '@/utils/actions';
import Image from 'next/image';

const SingleProductPage = async ({ params }: { params: { id: string } }) => {
  const product = await GetSingleProduct(params.id);
  const { name, image, company, description, price } = product;

  if (!product) {
    <h1>not found</h1>;
  }

  return (
    <section>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/products">Products</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="mt-6 grid gap-y-8 grid-cols-2 lg:gap-x-16">
        <div className="relative">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw, 33vw"
            priority
            className="w-full rounded object-cover"
          />
        </div>
        <div>
          <div className="flex gap-x-8 items-center">
            <h1 className="capitalize text-3xl font-bold">{name} </h1>
            <div className="flex items-center gap-x-2">
              {/* <FavoriteToggleButton productId={params.id} /> */}
              {/* <ShareButton name={product.name} productId={params.id} /> */}
            </div>
          </div>
          {/* <ProductRating productId={params.id} /> */}
          <h4 className="text-xl mt-2">{company}</h4>
          <p className="mt-3 text-md bg-muted inline-block p-2 rounded">
            {price}$
          </p>
          <p className="mt-6 leading-8 text-muted-foreground">{description}</p>
          {/* <AddToCart productId={params.id} /> */}
        </div>
      </div>
    </section>
  );
};

export default SingleProductPage;
