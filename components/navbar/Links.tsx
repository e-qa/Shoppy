import { links } from '@/utils/links';
import { Button } from '../ui/button';
import Link from 'next/link';

type Props = {
  className?: string;
};

const Links = ({ className }: Props) => {
  return (
    <div className={className}>
      {links.map((link) => {
        return (
          <Button variant={'link'} key={link.href}>
            <Link href={link.href} className="text-xl">
              {link.label}
            </Link>
          </Button>
        );
      })}
    </div>
  );
};

export default Links;
