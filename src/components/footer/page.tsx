import { SignedIn, UserButton } from "@clerk/nextjs";
import { BookText, Home, Plus, TicketPlus } from "lucide-react";
import Link from "next/link";
import React from "react";
import { BsCart4 } from "react-icons/bs";
import { FaTiktok, FaYoutube } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import Categories from "./categories/page";

const Footer = () => {
  return (
    <div className="text-main-text bg-gradient-to-tr from-sky-400 to-sky-700 fixed bottom-0 w-full flex items-center justify-around">
      <Link href="/home">
        <div className="flex flex-col items-center  p-2 cursor-pointer rounded-full shadow-sm text-sm">
          <Home className="w-5 h-5" />
          <h4>Home</h4>
        </div>
      </Link>
      <Categories />
      <Link href="/sign-in">
        <div className="flex flex-col items-center  p-2 cursor-pointer rounded-full shadow-sm text-sm">
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </Link>
      <Link href="/sell">
        <div className="flex flex-col items-center  p-2 cursor-pointer rounded-full shadow-sm text-sm">
          <TicketPlus className="w-5 h-5" />
          <h4>Sell</h4>
        </div>
      </Link>
      <Link href="/home">
        <div className="flex flex-col items-center  p-2 cursor-pointer rounded-full shadow-sm text-sm">
          <BsCart4 className="w-5 h-5" />
          <h4>Orders</h4>
        </div>
      </Link>
    </div>
  );
};

export default Footer;
