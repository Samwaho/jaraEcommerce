import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  image: string;
  link: string;
};
const CategoryCard = ({ title, image, link }: Props) => {
  return (
    <Link
      href={link}
      className="flex flex-col items-center justify-between gap-2 p-2 rounded-lg mt-2 shadow-md hover:shadow-none bg-white"
    >
      <Image src={image} alt={title} width={150} height={200} className="" />
      <p className="text-center text-sm font-semibold">{title}</p>
    </Link>
  );
};

export default CategoryCard;
