"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { FaGear, FaMoneyBillTrendUp } from "react-icons/fa6";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoIosPricetags } from "react-icons/io";

const Page = () => {
  const [open, setOpen] = useState(false);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <HiOutlineMenuAlt1 className="text-3xl hover:text-slate-800 duration-300 cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          <SignedIn>
            <div className="flex items-center gap-6">
              <UserButton />
              <p>My Account</p>
            </div>
          </SignedIn>
          <SignedOut>
            <Button className="bg-white text-slate-900 p-2 h-6 hover:border">
              Login
            </Button>
          </SignedOut>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link
            href="/home"
            className="flex items-center gap-10 w-full text-lg ms-2"
          >
            <FaHome />
            <p className="text-sm">Home</p>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            href="/sell"
            className="flex items-center gap-10 w-full text-lg ms-2"
          >
            <FaMoneyBillTrendUp />
            <p className="text-sm">Sell</p>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            href="/home/subCategories"
            className="flex items-center gap-10 w-full text-lg ms-2"
          >
            <IoIosPricetags />
            <p className="text-sm">Subscription</p>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            href="/home/categories"
            className="flex items-center gap-10 w-full text-lg ms-2"
          >
            <FaGear />
            <p className="text-sm">Settings</p>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem> </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Page;
