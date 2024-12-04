import MainNav from './MainNav';
import MiniNav from './MiniNav';
import { LinksDropdown, NavButtons } from './NavButtons';
const Navbar = () => {
  return (
    <nav className="container mx-auto px-2 flex justify-between py-4 border-b lg:py-7">
      <MiniNav />
      <MainNav />
      <div className="flex justify-between gap-5">
        <NavButtons />
        <LinksDropdown />
      </div>
    </nav>
  );
};

export default Navbar;
