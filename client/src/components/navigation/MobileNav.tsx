import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";
import NavLinks from "./NavLinks";
import { AnimatePresence } from "framer-motion";

type MobileNavProps = {
  className: string;
};

const MobileNav = ({ className }: MobileNavProps) => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div className={className}>
        <CiMenuFries
          onClick={() => {
            setMenu(!menu);
          }}
          className="text-3xl cursor-pointer text-white"
        />
      </div>
      <AnimatePresence mode="wait">
        {menu && (
          <NavLinks
            className="grid p-10 transition-all place-items-center divide-y-2 absolute left-0 right-0 top-full bg-nawa-400 uppercase z-10 font-bold mobile_nav md:hidden origin-top"
            mobileView={true}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;
