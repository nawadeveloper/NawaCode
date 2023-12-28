import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";
import DesktopNav from "./DesktopNav";

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
          className="text-3xl text-white"
        />
      </div>
      {menu && (
        <DesktopNav className="grid p-10 place-items-center divide-y-2 absolute left-0 right-0 top-full bg-nawa-400 uppercase z-10 font-bold mobile_nav" />
      )}
    </>
  );
};

export default MobileNav;
