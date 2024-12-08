'use client';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu as MenuIcon } from 'lucide-react';
import { useState, useEffect, Suspense } from 'react';
import { usePathname } from 'next/navigation';
import Links from './Links';
import NavSearch from './NavSearch';

const MiniNav = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Shoppy</SheetTitle>
            <SheetDescription aria-describedby={undefined} />
          </SheetHeader>
          <Links className="flex flex-col gap-4" />
          <Suspense>
            <NavSearch />
          </Suspense>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MiniNav;
