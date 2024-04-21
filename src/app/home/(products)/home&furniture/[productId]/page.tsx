import Comments from "@/components/shared/Comments";
import RateSeller from "@/components/shared/RateSeller";
import RateSellerService from "@/components/shared/RateSellerService";
import SellerDetails from "@/components/shared/SellerDetails";
import { Button } from "@/components/ui/button";
import { getFurnitureById } from "@/lib/actions";
import Image from "next/image";
import React from "react";

const Page = async ({ params }: { params: { productId: string } }) => {
  const furniture = await getFurnitureById(params.productId);
  return (
    <div className="p-4 min-h-screen bg-main-bg">
      <div className=" -mt-4 bg-white shadow-md rounded-lg p-3 ">
        <Image
          src={furniture?.imageUrl}
          alt={furniture?.title}
          width={400}
          height={400}
          className=""
        />
        <h2 className="mt-4 font-bold text-xl">{`Ksh ${furniture?.price}`}</h2>
        <h2 className="mt-4 font-bold uppercase">Product details</h2>
        <div className="flex flex-col gap-2 bg-main-bg p-2 rounded-lg mt-2">
          <div className="flex items-center gap-10">
            <h4 className="font-semibold">Title:</h4>
            <p className="bg-white rounded-md ms-8 px-2 w-full truncate">{furniture?.title}</p>
          </div>
          <div className="flex items-center gap-10">
            <h4 className="font-semibold">Brand:</h4>
            <p className="bg-white rounded-md ms-5 px-2 w-full truncate">{furniture?.brand}</p>
          </div>
          <div className="flex items-center gap-10">
            <h4 className="font-semibold">Type:</h4>
            <p className="bg-white rounded-md ms-7 px-2 w-full truncate">{furniture?.types}</p>
          </div>
          <div className="flex items-center gap-10">
            <h4 className="font-semibold">Location:</h4>
            <p className="bg-white rounded-md  px-2 w-full truncate">{furniture?.location}</p>
          </div>
        </div>
        <p className="mt-2 font-semibold">Description</p>
        <Button className="h-6">{furniture?.condition}</Button>
      </div>
      <SellerDetails />
      <RateSeller />
      <RateSellerService />
      <Comments />
    </div>
  );
};

export default Page;
