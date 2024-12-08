import Link from 'next/link';
import { Button } from '../ui/button';
import Links from './Links';
import NavSearch from './NavSearch';
import { Suspense } from 'react';

const MainNav = () => {
  return (
    <>
      <Button variant={'none'} asChild>
        <Link href={'/'} className="text-xl lg:text-5xl text-center font-bold">
          Shoppy
        </Link>
      </Button>
      <div>
        <Links className="hidden md:flex ml-4" />
      </div>
      <div className="hidden md:flex">
        <Suspense>
          <NavSearch />
        </Suspense>
      </div>
    </>
  );
};

export default MainNav;
