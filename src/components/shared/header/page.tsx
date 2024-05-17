import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsCart4 } from "react-icons/bs";

import { FaInstagram, FaTwitter } from "react-icons/fa";

import { FaTiktok, FaYoutube } from "react-icons/fa";
import Categories from "./categories/page";

const Header = () => {
  return (
    <div className="bg-gradient-to-tr from-sky-400 to-sky-700 text-main-text flex items-center justify-between py-1 px-2 xl:px-28">
      <div className="flex items-center">
        <Image src="/jara logo.svg" alt="logo" width={56} height={56} />
        <h4 className="font-bold text-lg md:text-2xl">Jara Marketing</h4>
      </div>
      <div className="flex items-center gap-3 md:hidden">
        <Link href="">
          <FaTiktok className=" cursor-pointer hover:opacity-85 md:text-2xl" />
        </Link>
        <Link href="">
          <FaYoutube className=" cursor-pointer hover:opacity-85 md:text-2xl" />
        </Link>
        <Link href="">
          <FaTwitter className=" cursor-pointer hover:opacity-85 md:text-2xl" />
        </Link>
        <Link href="">
          <FaInstagram className=" cursor-pointer hover:opacity-85 md:text-2xl" />
        </Link>
      </div>
      <div className="hidden md:flex items-center gap-10">
        <Link href="/">
          <h4 className="font-semibold text-xl cursor-pointer">Home</h4>
        </Link>
        <Categories />
        <Link href="/packages">
          <h4 className="font-semibold text-xl cursor-pointer">
            Subscriptions
          </h4>
        </Link>
      </div>
      <div className="hidden md:flex items-center gap-4">
        <Link href="/sell">
          <Button className="bg-white text-black uppercase rounded-md w-16 h-8">
            Sell
          </Button>
        </Link>

        <BsCart4 className="w-10 h-10" />
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <Button className="bg-transparent border p-2 uppercase rounded-md w-16 h-8">
            Login
          </Button>
        </SignedOut>
      </div>
    </div>
  );
};

export default Header;
