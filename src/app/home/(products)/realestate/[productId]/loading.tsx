import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loading = () => {
  return (
    <div className=" min-h-screen p-4">
      <Skeleton className="w-full h-[100px]" />
      <Skeleton className="w-full h-[40px] mx-4 mt-4" />
      <div className="grid grid-cols-2 gap-3 mt-4">
        <Skeleton className="w-[250px] h-[200px]" />
        <Skeleton className="w-[250px] h-[200px]" />
        <Skeleton className="w-[250px] h-[200px]" />
        <Skeleton className="w-[250px] h-[200px]" />
        <Skeleton className="w-[250px] h-[200px]" />
        <Skeleton className="w-[250px] h-[200px]" />
        <Skeleton className="w-[250px] h-[200px]" />
        <Skeleton className="w-[250px] h-[200px]" />
        <Skeleton className="w-[250px] h-[200px]" />
        <Skeleton className="w-[250px] h-[200px]" />
        <Skeleton className="w-[250px] h-[200px]" />
        <Skeleton className="w-[250px] h-[200px]" />
      </div>
      <Skeleton className="w-full h-[100px] mt-4" />
    </div>
  );
};

export default Loading;
