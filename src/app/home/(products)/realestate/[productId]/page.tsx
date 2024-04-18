import Comments from "@/components/shared/Comments";
import RateSeller from "@/components/shared/RateSeller";
import RateSellerService from "@/components/shared/RateSellerService";
import SellerDetails from "@/components/shared/SellerDetails";
import { Button } from "@/components/ui/button";
import { getRealEstateById } from "@/lib/actions";
import Image from "next/image";
import React from "react";

const Page = async ({ params }: { params: { productId: string } }) => {
  const realEstate = await getRealEstateById(params.productId);
  return (
    <div className="p-4 min-h-screen bg-main-bg">
      <div className=" -mt-4 bg-white shadow-md rounded-lg p-3 ">
        <Image
          src={realEstate?.imageUrl}
          alt={realEstate?.title}
          width={400}
          height={400}
          className=""
        />
        <h2 className="mt-4 font-bold text-xl">{`Ksh ${realEstate?.price}`}</h2>
        <h2 className="mt-4 font-bold uppercase">Product details</h2>
        <div className="flex flex-col gap-2 bg-main-bg p-2 rounded-lg mt-2">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold">Title:</h4>
            <p>{realEstate?.title}</p>
          </div>
          <div className="flex items-center justify-between">
            <h4 className="font-semibold">Type:</h4>
            <p>{realEstate?.type}</p>
          </div>
          <div className="flex items-center justify-between">
            <h4 className="font-semibold">Size:</h4>
            <p>{realEstate?.size}</p>
          </div>
          <div className="flex items-center justify-between">
            <h4 className="font-semibold">Location:</h4>
            <p>{realEstate?.location}</p>
          </div>
        </div>
        <p className="mt-2 font-semibold">Description</p>
        <Button className="h-6">{realEstate?.condition}</Button>
      </div>
      <SellerDetails />
      <RateSeller />
      <RateSellerService />
      <Comments />
    </div>
  );
};

export default Page;
