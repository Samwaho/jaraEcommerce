import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Home, TicketPlus } from "lucide-react";
import Link from "next/link";
import React from "react";
import { BsCart4 } from "react-icons/bs";
import { FaArrowDown } from "react-icons/fa";

import Categories from "./categories/page";

const Footer = () => {
  return (
    <div className="text-main-text bg-gradient-to-tr from-sky-400 to-sky-700 fixed bottom-0 w-full flex items-center justify-around">
      <Link href="/home">
        <div className="flex flex-col items-center  p-2 cursor-pointer text-sm">
          <Home className="w-5 h-5" />
          <h4>Home</h4>
        </div>
      </Link>
      <Categories />

      <Link href="/sell">
        <div className="flex flex-col items-center  p-2 cursor-pointer text-sm">
          <TicketPlus className="w-6 h-6" />
          <h4 className="text-md">Sell</h4>
        </div>
      </Link>
      <Link href="/home">
        <div className="flex flex-col items-center  p-2 cursor-pointer text-sm">
          <BsCart4 className="w-5 h-5" />
          <h4>Orders</h4>
        </div>
      </Link>
      <Link href="/sign-in">
        <div className="flex flex-col items-center  p-2 cursor-pointer text-sm">
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <FaArrowDown className="w-5 h-5" />
            <h4>Login</h4>
          </SignedOut>
        </div>
      </Link>
    </div>
  );
};

export default Footer;
