import MasonryGrid from "@/components/shared/MasonryGrid";
import ProductCard from "@/components/shared/productCard";
import { Button } from "@/components/ui/button";
import { getFashionProducts } from "@/lib/actions";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = async () => {
  const products = await getFashionProducts();
  return (
    <div className="min-h-screen bg-main-bg">
      <div className="bg-white pt-2">
        <Image
          src="/Fshion-8.png"
          alt="Banner Component"
          width={1400}
          height={1400}
          className="w-full"
        />
      </div>
      <div className="p-2">
        {" "}
        <MasonryGrid>
          {products?.map((product) => {
            return (
              <Link key={product.id} href={`/home/fashion/${product.id}`}>
                <div className="p-3 mt-2 flex flex-col gap-2 rounded-xl shadow-md bg-white">
                  <Image
                    src={product.imageUrl}
                    alt={product.title}
                    width={150}
                    height={200}
                  />
                  <h2 className="font-semibold">{`Ksh ${product.price}`}</h2>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between gap-6">
                      <h3 className="font-semibold text-sm">Title:</h3>
                      <p className="text-sm truncate">{product.title}</p>
                    </div>
                    <div className="flex items-center justify-between gap-6">
                      <h3 className="font-semibold text-sm">Brand:</h3>
                      <p className="text-sm truncate">{product.brand}</p>
                    </div>
                    <div className="flex items-center justify-between gap-6">
                      <h3 className="font-semibold text-sm">Size:</h3>
                      <p className="text-sm truncate">{product.size}</p>
                    </div>
                    <div className="flex items-center justify-between gap-6">
                      <h3 className="font-semibold text-sm">Color:</h3>
                      <p className="text-sm truncate">{product.color}</p>
                    </div>
                    <div className="flex items-center justify-between gap-6">
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
