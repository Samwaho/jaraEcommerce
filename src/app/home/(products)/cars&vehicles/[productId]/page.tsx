import Comments from "@/components/shared/Comments";
import RateSeller from "@/components/shared/RateSeller";
import RateSellerService from "@/components/shared/RateSellerService";
import SellerDetails from "@/components/shared/SellerDetails";
import { Button } from "@/components/ui/button";
import { getVehicleById } from "@/lib/actions";
import Image from "next/image";
import React from "react";

const Page = async ({ params }: { params: { productId: string } }) => {
  const vehicle = await getVehicleById(params.productId);
  return (
    <div className="p-4 min-h-screen bg-main-bg">
      <div className=" -mt-4 bg-white shadow-md rounded-lg p-3 ">
        <Image
          src={vehicle?.imageUrl}
          alt={vehicle?.title}
          width={400}
          height={400}
          className=""
        />
        <h2 className="mt-4 font-bold text-xl">{`Ksh ${vehicle?.price}`}</h2>
        <h2 className="mt-4 font-bold uppercase">Product details</h2>
        <div className="flex flex-col gap-2 bg-main-bg p-2 rounded-lg mt-2">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold">Brand:</h4>
            <p>{vehicle?.brand}</p>
          </div>
          <div className="flex items-center justify-between">
            <h4 className="font-semibold">Model:</h4>
            <p>{vehicle?.model}</p>
          </div>
          <div className="flex items-center justify-between">
            <h4 className="font-semibold">Mileage:</h4>
            <p>{vehicle?.mileage}</p>
          </div>
          <div className="flex items-center justify-between">
            <h4 className="font-semibold">Engine Size:</h4>
            <p>{vehicle?.engineSize}</p>
          </div>
          <div className="flex items-center justify-between">
            <h4 className="font-semibold">Y.O.M:</h4>
            <p>{vehicle?.yom}</p>
          </div>
          <div className="flex items-center justify-between">
            <h4 className="font-semibold">Wheel Drive:</h4>
            <p>{vehicle?.wheelDrive}</p>
          </div>
          <div className="flex items-center justify-between">
            <h4 className="font-semibold">Body Type:</h4>
            <p>{vehicle?.bodyType}</p>
          </div>
          <div className="flex items-center justify-between">
            <h4 className="font-semibold">Location:</h4>
            <p>{vehicle?.location}</p>
          </div>
        </div>
        <p className="mt-2 font-semibold">Description</p>
        <Button className="h-6">{vehicle?.condition}</Button>
      </div>
      <SellerDetails />
      <RateSeller />
      <RateSellerService />
      <Comments />
    </div>
  );
};

export default Page;
