import Link from 'next/link';
import { Button } from '../ui/button';
import { FaShoppingBag } from 'react-icons/fa';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { SignedIn, SignedOut, SignInButton, SignUpButton } from '@clerk/nextjs';
import SingOutLink from './SingOutLink';
import UserIcon from './UserIcon';
export const NavButtons = () => {
  const numItemsInCart = 6;
  return (
    <Button
      asChild
      variant={'outline'}
      size={'icon'}
      className="flex justify-center items-center relative"
    >
      <Link href="/cart">
        <FaShoppingBag />

        <span className="absolute -top-3 -right-3 bg-primary text-secondary rounded-full h-6 w-6 flex items-center justify-center text-xs">
          {numItemsInCart}
        </span>
      </Link>
    </Button>
  );
};
export const LinksDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size={'icon'}
          className="flex gap-4 max-w-[100px]"
        >
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>

      <SignedOut>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <SignInButton mode="modal">
              <button>Login</button>
            </SignInButton>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <SignUpButton mode="modal">
              <button>Register</button>
            </SignUpButton>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </SignedOut>
      <SignedIn>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>
            <SingOutLink />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </SignedIn>
    </DropdownMenu>
  );
};
