import { Button } from "@/components/ui/button";
import { packages } from "@/lib/constants";
import React from "react";

const Page = () => {
  return (
    <div className="p-4 bg-main-bg">
      <div className="grid grid-cols-2 gap-4">
        {packages.map((item) => (
          <div key={item.title} className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-lg font-bold capitalize text-center">
              {item.title}
            </h2>
            <div className="flex items-center justify-between mt-3">
              <h4 className="font-semibold">Days:</h4>
              <p>{item.days}</p>
            </div>
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">Ads:</h4>
              <p>{item.ads}</p>
            </div>
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">Price:</h4>
              <p>Ksh. {item.price}</p>
            </div>
            <Button className="mt-3 w-full h-8">Subscribe</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
