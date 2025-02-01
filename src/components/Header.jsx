import { HiDotsHorizontal } from "react-icons/hi";
import { useState } from "react";
import NavBar from "./NavBar";
import React from "react";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuHandler = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div
      className={`${
        openMenu ? "pb-64 transition-all" : ""
      } p-4 flex items-center right-0 transition-all text-xl py-8 uppercase font-semibold justify-between text-slate-300`}
    >
      <p className="tracking-widest text-[22px]">Amirhosein Azizi</p>
      <button onClick={menuHandler}>
        <HiDotsHorizontal className="w-6 h-6 ml-18 hover:fill-[#61DBFB] cursor-pointer" />
      </button>
      <div>{openMenu ? <NavBar className="h-40" /> : ""}</div>
    </div>
  );
};
export default Header;
