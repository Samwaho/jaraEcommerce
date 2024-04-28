import MasonryGrid from "@/components/shared/MasonryGrid";
import ProductCard from "@/components/shared/productCard";
import { Button } from "@/components/ui/button";
import { getRealEstateProducts } from "@/lib/actions";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = async () => {
  const products = await getRealEstateProducts();
  return (
    <div className="min-h-screen bg-main-bg pb-4">
      <div className="bg-white pt-2">
        <Image
          src="/Real estate-8.png"
          alt="Banner Component"
          width={1400}
          height={1400}
          className="w-full"
        />
      </div>
      <div className="p-2">
        <MasonryGrid>
          {products?.map((product) => {
            return (
              <Link key={product.id} href={`/home/realestate/${product.id}`}>
                <div className="p-3 mt-2 flex flex-col gap-2 rounded-xl shadow-md bg-white">
                  <Image
                    src={product.imageUrls[0]}
                    alt={product.title}
                    width={150}
                    height={200}
                  />
                  <h2 className="font-semibold">{`Ksh ${product.price}`}</h2>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-10 justify-between">
                      <h3 className="font-semibold text-sm">Title:</h3>
                      <p className="text-sm truncate">{product.title}</p>
                    </div>
                    <div className="flex items-center gap-10 justify-between">
                      <h3 className="font-semibold text-sm">Size:</h3>
                      <p className="text-sm truncate">{product.size}</p>
                    </div>
                    <div className="flex items-center gap-10 justify-between">
                      <h3 className="font-semibold text-sm">Type:</h3>
                      <p className="text-sm truncate">{product.type}</p>
                    </div>
                    <div className="flex items-center gap-10 justify-between">
                      <h3 className="font-semibold text-sm">Location:</h3>
                      <p className="text-sm truncate">{product.location}</p>
                    </div>
                  </div>
                  <Button className="w-16 h-4">{product.condition}</Button>
                </div>
              </Link>
            );
          })}
        </MasonryGrid>
      </div>
    </div>
  );
};

export default Page;
