import Link from 'next/link';
import { Button } from '../ui/button';
import Links from './Links';
import NavSearch from './NavSearch';

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
        <NavSearch />
      </div>
    </>
  );
};

export default MainNav;
