import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Nav = () => {
  return (
    <>
      <MobileNav className="md:hidden" />
      <DesktopNav className="hidden md:flex md:items-center gap-10 text-nawa-100 uppercase" />
    </>
  );
};

export default Nav;
