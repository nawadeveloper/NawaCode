import NavLinks from "./NavLinks";
import MobileNav from "./MobileNav";

const Nav = () => {
  return (
    <>
      <MobileNav className="md:hidden" />
      <NavLinks className="hidden md:flex md:items-center gap-10 text-nawa-100 uppercase" />
    </>
  );
};

export default Nav;
