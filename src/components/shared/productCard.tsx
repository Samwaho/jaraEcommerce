import Image from "next/image";
import React from "react";

type Props = {
  children: React.ReactNode;
};
const ProductCard = ({ children }: Props) => {
  return (
    <div className="p-3 flex flex-col gap-3 rounded-xl shadow-md">
      <Image src="" alt="image" width={150} height={200} />
      {children}
    </div>
  );
};

export default ProductCard;
