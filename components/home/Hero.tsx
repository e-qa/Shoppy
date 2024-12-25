import Link from 'next/link';
import { Button } from '../ui/button';
import AnimatedCounter from './AnimatedCounter';
import HeroCarousel from './HeroCarousel';

const Hero = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-center ">
      <div className="flex flex-col gap-4">
        <h1 className="max-w-2xl font-bold text-4xl tracking-tighter sm:text-6xl">
          Find Home Items That Match Your Style
        </h1>
        <p>
          Browse through our diverse range of carefully crafted home items,
          designed to enhance your living space and reflect your unique style.
        </p>
        <div className="w-24">
          <Button asChild size={'lg'}>
            <Link href={'/products'}>Shop Now</Link>
          </Button>
        </div>
        <div className="flex gap-10">
          <div className="border-r pr-4">
            <AnimatedCounter end={50} label="International Brands" />
          </div>
          <div className="border-r pr-4">
            <AnimatedCounter end={100} label="High-Quality Products" />
          </div>
          <div>
            <AnimatedCounter end={6000} label="Happy Customers" />
          </div>
        </div>
      </div>
      <HeroCarousel />
    </section>
  );
};

export default Hero;
