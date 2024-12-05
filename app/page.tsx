import Hero from '@/components/home/Hero';
import ProductCarousel from '@/components/home/ProductCarousel';
import SectionTitle from '@/components/home/SectionTitle';
import LoadingContainer from '@/components/LoadingContainer';
import { Suspense } from 'react';

export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <SectionTitle title="new arrivals" />
        <Suspense fallback={<LoadingContainer />}>
          {/* <LoadingContainer /> */}
          <ProductCarousel />
        </Suspense>
      </div>
    </>
  );
}
