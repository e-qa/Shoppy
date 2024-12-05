'use client';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import img1 from '@/public/images/img1.jpg';
import img2 from '@/public/images/img2.jpg';
import img3 from '@/public/images/img3.jpg';

const carouselImages = [img1, img2, img3];

function HeroCarousel() {
  return (
    <div>
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          {carouselImages.map((image, index) => {
            return (
              <CarouselItem key={index}>
                <Image
                  src={image}
                  alt="carousel image"
                  className="w-full h-[25rem] object-cover"
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
export default HeroCarousel;
