import { GetSingleProduct } from '@/utils/actions';
import Image from 'next/image';

const SingleProductPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const resolvedParams = await params;
  const product = await GetSingleProduct(resolvedParams.id);

  const { name, image, company, description, price } = product;

  return (
    <section>
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
          <h1 className="capitalize text-3xl font-bold">{name}</h1>
          <h4 className="text-xl mt-2">{company}</h4>
          <p className="mt-3 text-md bg-muted inline-block p-2 rounded">
            {price}$
          </p>
          <p className="mt-6 leading-8 text-muted-foreground">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default SingleProductPage;
