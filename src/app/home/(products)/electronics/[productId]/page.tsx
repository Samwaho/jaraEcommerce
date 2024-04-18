import Comments from "@/components/shared/Comments";
import RateSeller from "@/components/shared/RateSeller";
import RateSellerService from "@/components/shared/RateSellerService";
import SellerDetails from "@/components/shared/SellerDetails";
import { Button } from "@/components/ui/button";
import { getElectronicsById } from "@/lib/actions";
import Image from "next/image";
import React from "react";

const Page = async ({ params }: { params: { productId: string } }) => {
  const electronics = await getElectronicsById(params.productId);
  return (
    <div className="p-4 min-h-screen bg-main-bg">
      <div className=" -mt-4 bg-white shadow-md rounded-lg p-3 ">
        <Image
          src={electronics?.imageUrl}
          alt={electronics?.title}
          width={400}
          height={400}
          className=""
        />
        <h2 className="mt-4 font-bold text-xl">{`Ksh ${electronics?.price}`}</h2>
        <h2 className="mt-4 font-bold uppercase">Product details</h2>
        <div className="flex flex-col gap-2 bg-main-bg p-2 rounded-lg mt-2">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold">Title:</h4>
            <p>{electronics?.title}</p>
          </div>
          <div className="flex items-center justify-between">
            <h4 className="font-semibold">Brand:</h4>
            <p>{electronics?.brand}</p>
          </div>
          <div className="flex items-center justify-between">
            <h4 className="font-semibold">Model:</h4>
            <p>{electronics?.model}</p>
          </div>
          <div className="flex items-center justify-between">
            <h4 className="font-semibold">Specs:</h4>
            <p>{electronics?.specs}</p>
          </div>
          <div className="flex items-center justify-between">
            <h4 className="font-semibold">Location:</h4>
            <p>{electronics?.location}</p>
          </div>
        </div>
        <p className="mt-2 font-semibold">Description</p>
        <Button className="h-6">{electronics?.condition}</Button>
      </div>
      <SellerDetails />
      <RateSeller />
      <RateSellerService />
      <Comments />
    </div>
  );
};

export default Page;
