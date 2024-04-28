import React from "react";
import { FaPhoneAlt, FaRegStar, FaWhatsapp } from "react-icons/fa";
import { Button } from "../ui/button";
import { MdEmail } from "react-icons/md";
import Rating from "./rating/page";
import { getSellerById } from "@/lib/actions";
import Link from "next/link";

type Props = {
  sellerId: string;
};
const SellerDetails = async ({ sellerId }: Props) => {
  const seller = await getSellerById(sellerId);
  const formattedWhatsappUrl = seller?.whatsappUrl.startsWith("0")
    ? "254" + seller.whatsappUrl.slice(1) // Prepend '+254' if it starts with '0'
    : seller?.whatsappUrl; // Otherwise, use the original whatsappUrl

  return (
    <div className="p-3 bg-white shadow-md rounded-lg mt-3">
      <h2 className=" uppercase font-bold">Seller Details</h2>
      <p className="font-semibold text-sm mt-4 flex gap-4">
        Name: <span className="font-normal">{seller?.name}</span>
      </p>
      <Rating />
      <div className="flex items-center gap-2 justify-center mt-3">
        <Link href={`tel:${seller?.phone}`}>
          <Button className="flex gap-1 bg-gradient-to-tl from-sky-500 to-sky-700 h-6 text-xs">
            <FaPhoneAlt /> <span>Phone</span>
          </Button>
        </Link>

        <Link
          href={`https://api.whatsapp.com/send?phone=${formattedWhatsappUrl}`}
        >
          <Button className="flex gap-1 bg-gradient-to-tl from-emerald-400 to-emerald-600 h-6 text-xs">
            <FaWhatsapp /> <span>Whatsapp</span>
          </Button>
        </Link>

        <Link href={`mailto:${seller?.email}`}>
          <Button className="flex gap-1 bg-gradient-to-tl from-rose-400 to-rose-600 h-6 text-xs">
            <MdEmail /> <span>Email</span>
          </Button>
        </Link>
      </div>
      <div className="flex justify-center mt-4">
        <Button className="h-8 bg-gradient-to-tl from-sky-700 to-sky-500">
          Submit Your Offer
        </Button>
      </div>
    </div>
  );
};

export default SellerDetails;
