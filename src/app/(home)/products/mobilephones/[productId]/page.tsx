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
import { getMobilePhonesById } from "@/lib/actions";
import Image from "next/image";
import React from "react";

const Page = async ({ params }: { params: { productId: string } }) => {
  const mobilePhone = await getMobilePhonesById(params.productId);
  return (
    <div className="p-4 min-h-screen bg-main-bg pb-14">
      <div className=" -mt-4 bg-white shadow-md rounded-lg p-3 ">
        <Carousel
          opts={{
            loop: true,
          }}
          className="pb-4 bg-main-bg p-3 rounded-md"
        >
          <CarouselContent>
            {mobilePhone?.imageUrls.map((image) => (
              <CarouselItem key={image}>
                <div className="flex items-center justify-center w-full">
                  <Image
                    src={image}
                    alt={image}
                    width={300}
                    height={300}
                    className=""
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <h2 className="mt-4 font-bold text-xl">{`Ksh ${mobilePhone?.price}`}</h2>
        <h2 className="mt-4 font-bold uppercase">Product details</h2>
        <div className="flex flex-col gap-2 bg-main-bg p-2 rounded-lg mt-2">
          <div className="flex items-center gap-10">
            <h4 className="font-semibold">Title:</h4>
            <p className="bg-white rounded-md px-2 ms-8 w-full truncate">
              {mobilePhone?.title}
            </p>
          </div>
          <div className="flex items-center gap-10">
            <h4 className="font-semibold">Brand:</h4>
            <p className="bg-white rounded-md px-2 ms-4 w-full truncate">
              {mobilePhone?.brand}
            </p>
          </div>
          <div className="flex items-center gap-10">
            <h4 className="font-semibold">Model:</h4>
            <p className="bg-white rounded-md px-2 ms-4 w-full truncate">
              {mobilePhone?.model}
            </p>
          </div>
          <div className="flex items-center gap-10">
            <h4 className="font-semibold">Storage:</h4>
            <p className="bg-white rounded-md ms-1 px-2 w-full truncate">
              {mobilePhone?.storage}
            </p>
          </div>
          <div className="flex items-center gap-10">
            <h4 className="font-semibold">RAM:</h4>
            <p className="bg-white rounded-md ms-8 px-2 w-full truncate">
              {mobilePhone?.ram}
            </p>
          </div>
          <div className="flex items-center gap-10">
            <h4 className="font-semibold">OS:</h4>
            <p className="bg-white rounded-md ms-11 px-2 w-full truncate">
              {mobilePhone?.os}
            </p>
          </div>
          <div className="flex items-center gap-10">
            <h4 className="font-semibold">Location:</h4>
            <p className="bg-white rounded-md px-2 w-full truncate">
              {mobilePhone?.location}
            </p>
          </div>
        </div>
        <p className="mt-2 font-semibold">Description</p>
        <Button className="h-6">{mobilePhone?.condition}</Button>
      </div>
      <SellerDetails sellerId={mobilePhone?.sellerId || ""} />
      <RateSeller />
      <RateSellerService sellerId={mobilePhone?.sellerId || ""} />
      <Comments />
    </div>
  );
};

export default Page;
