import { Product } from '@prisma/client';
import { carouselProducts } from '@/utils/actions';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { Card, CardContent } from '../ui/card';

const ProductCarousel = async () => {
  const products: Product[] = await carouselProducts();

  return (
    <div className="flex items-center justify-center flex-col">
      <Carousel
        opts={{
          loop: true,
        }}
        className="w-[80%] lg:w-[90%] items-center"
      >
        <CarouselContent className="-ml-1">
          {products.map((product, index) => {
            return (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3 w-20"
              >
                <Card>
                  <CardContent className="p-2">
                    <div className="relative w-full h-[20rem]">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover rounded-sm"
                      />
                    </div>
                    <h2 className="capitalize font-bold">{product.name}</h2>
                    <span className="font-medium text-xl">
                      {product.price}$
                    </span>
                    <br />
                    <span>{product.description.slice(0, 80)}...</span>
                  </CardContent>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
