import React from "react";
import { MenuAlt1Icon } from "@heroicons/react/solid";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="flex items-center p-4">
      <div className="w-6 md:hidden">
        <MenuAlt1Icon />
      </div>
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/"/>
      </div>
    </div>
  );
};

export default Navbar;
