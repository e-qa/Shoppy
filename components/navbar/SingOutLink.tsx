'use client';
import { useToast } from '@/hooks/use-toast';
import { SignOutButton } from '@clerk/nextjs';
import Link from 'next/link';

const SingOutLink = () => {
  const { toast } = useToast();

  return (
    <SignOutButton>
      <Link
        href={'/'}
        className="w-full text-left"
        onClick={() => {
          toast({ description: 'Logout Successful' });
        }}
      >
        Logout
      </Link>
    </SignOutButton>
  );
};

export default SingOutLink;
