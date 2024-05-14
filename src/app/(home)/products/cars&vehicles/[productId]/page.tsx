import Comments from "@/components/shared/Comments";
import RateSeller from "@/components/shared/RateSeller";
import RateSellerService from "@/components/shared/RateSellerService";
import SellerDetails from "@/components/shared/SellerDetails";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getVehicleById } from "@/lib/actions";
import Image from "next/image";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import SliderComponent from "@/components/shared/slider";

const Page = async ({ params }: { params: { productId: string } }) => {
  const vehicle = await getVehicleById(params.productId);
  return (
    <div className="p-4 min-h-screen bg-main-bg pb-14">
      <div className=" -mt-4 bg-white shadow-md rounded-lg p-3 ">
        <SliderComponent slidesToShow={1} autoPlay>
          {vehicle?.imageUrls.map((image) => (
            <div key={image}>
              <div className="flex items-center justify-center w-full">
                <Image
                  src={image}
                  alt={image}
                  width={300}
                  height={300}
                  className=""
                />
              </div>
            </div>
          ))}
        </SliderComponent>

        <h2 className="mt-4 font-bold text-xl">{`Ksh ${vehicle?.price}`}</h2>
        <h2 className="mt-4 font-bold uppercase">Product details</h2>
        <div className="flex flex-col gap-2 bg-main-bg p-2 rounded-lg mt-2">
          <div className="flex items-center gap-10">
            <h4 className="font-semibold">Title:</h4>
            <p className="bg-white rounded-md ms-14 px-2 w-full truncate">
              {vehicle?.title}
            </p>
          </div>
          <div className="flex items-center gap-10">
            <h4 className="font-semibold">Brand:</h4>
            <p className="bg-white rounded-md ms-11 px-2 w-full truncate">
              {vehicle?.brand}
            </p>
          </div>
          <div className="flex items-center gap-10">
            <h4 className="font-semibold">Model:</h4>
            <p className="bg-white rounded-md ms-11  px-2 w-full truncate">
              {vehicle?.model}
            </p>
          </div>
          <div className="flex items-center gap-10">
            <h4 className="font-semibold">Mileage:</h4>
            <p className="bg-white rounded-md ms-7 px-2 w-full truncate">
              {vehicle?.mileage}
            </p>
          </div>
          <div className="flex items-center gap-10">
            <h4 className="font-semibold">EngineSize:</h4>
            <p className="bg-white rounded-md ms-2 px-2 w-full truncate">
              {vehicle?.engineSize}
            </p>
          </div>
          <div className="flex items-center gap-10">
            <h4 className="font-semibold">Y.O.M:</h4>
            <p className="bg-white rounded-md ms-12 px-2 w-full truncate">
              {vehicle?.yom}
            </p>
          </div>
          <div className="flex items-center gap-10">
            <h4 className="font-semibold">WheelDrive:</h4>
            <p className="bg-white rounded-md px-2 w-full truncate">
              {vehicle?.wheelDrive}
            </p>
          </div>
          <div className="flex items-center gap-10">
            <h4 className="font-semibold">BodyType:</h4>
            <p className="bg-white rounded-md ms-3 px-2 w-full truncate">
              {vehicle?.bodyType}
            </p>
          </div>
          <div className="flex items-center gap-10">
            <h4 className="font-semibold">Location:</h4>
            <p className="bg-white rounded-md ms-6 px-2 w-full truncate">
              {vehicle?.location}
            </p>
          </div>
        </div>
        <p className="mt-2 font-semibold">Description</p>
        <p>{vehicle?.description}</p>
      </div>
      <SellerDetails sellerId={vehicle?.sellerId || ""} />
      <RateSeller />
      <RateSellerService sellerId={vehicle?.sellerId || ""} />
      <Comments />
    </div>
  );
};

export default Page;
