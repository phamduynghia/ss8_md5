import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-[#f7f7f7] w-full h-[70px] pt-5 text-2xl font-bold text-blue-600">
      <ul className="flex justify-center items-center gap-5">
        <li className="hover:text-red-300">
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li className="hover:text-red-300">
          <NavLink to={"/products"}>List Product</NavLink>
        </li>
        <li className="hover:text-red-300">
          <NavLink to={"/login"}>Login</NavLink>
        </li>
        <li className="hover:text-red-300">
          <NavLink to={"/cart"}>Cart</NavLink>
        </li>
      </ul>
    </div>
  );
}
