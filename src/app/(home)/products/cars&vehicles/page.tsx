import MasonryGrid from "@/components/shared/MasonryGrid";
import { Button } from "@/components/ui/button";
import { getVehiclesProducts } from "@/lib/actions";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = async () => {
  const products = await getVehiclesProducts();
  return (
    <div className="min-h-screen bg-main-bg pb-14">
      <div className="xl:px-28 rounded-b-md">
        <Image
          src="/car-8.png"
          alt="Banner Component"
          width={1400}
          height={1400}
          className="w-full"
        />
      </div>
      <MasonryGrid>
        {products?.map((product) => {
          return (
            <Link
              key={product.id}
              href={`/products/cars&vehicles/${product.id}`}
            >
              <div className="p-3 lg:p-4 mt-2 lg:mt-4 flex flex-col gap-2 lg:gap-4 rounded-xl shadow-md bg-white relative">
                <Image
                  src={product.imageUrls[0]}
                  alt={product.title}
                  width={150}
                  height={200}
                  className="w-full"
                />
                <div className="flex items-center justify-between">
                  <h2 className="lg:text-xl font-semibold text-sky-600">{`Ksh ${product.price}`}</h2>
                  <span className="flex gap-1 items-center">
                    <Heart className="w-4 h-4 text-rose-500" />
                    <p className="text-sm">2k</p>
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between gap-6">
                    <h3 className="text-sm lg:text-lg">Title:</h3>
                    <p className="text-sm lg:text-lg truncate">
                      {product.title}
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-6">
                    <h3 className="text-sm">Brand:</h3>
                    <p className="text-sm lg:text-lg truncate">
                      {product.brand}
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-6">
                    <h3 className="text-sm">Model:</h3>
                    <p className="text-sm lg:text-lg truncate">
                      {product.model}
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-6">
                    <h3 className="text-sm">Y.O.M:</h3>
                    <p className="text-sm lg:text-lg truncate">{product.yom}</p>
                  </div>
                  <div className="flex items-center justify-between gap-6">
                    <h3 className="text-sm">Location:</h3>
                    <p className="text-sm lg:text-lg truncate">
                      {product.location}
                    </p>
                  </div>
                </div>
                <Button className="w-fit h-4 p-2 text-sm absolute bg-gradient-sky capitalize top-2 right-2 shadow-md">
                  {product.condition.toLowerCase()}
                </Button>
              </div>
            </Link>
          );
        })}
      </MasonryGrid>
    </div>
  );
};

export default Page;
