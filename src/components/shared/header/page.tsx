import Image from "next/image";
import Link from "next/link";
import React from "react";

import { FaInstagram, FaTwitter } from "react-icons/fa";

import { FaTiktok, FaYoutube } from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-gradient-to-tr from-sky-400 to-sky-700 text-main-text flex items-center justify-between py-1 px-2 md:px-4">
      <div className="flex items-center">
        <Image src="/jara logo.svg" alt="logo" width={56} height={56} />
        <h4 className="font-bold text-lg md:text-2xl">Jara Marketing</h4>
      </div>
      <div className="flex items-center gap-3 md:gap-4 ">
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
    </div>
  );
};

export default Header;
