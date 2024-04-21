import React from "react";
import { FaRegStar } from "react-icons/fa";
import { Progress } from "../ui/progress";
import Rating from "./rating/page";

const RateSeller = () => {
  return (
    <div className="mt-3 p-3 rounded-md shadow-md bg-white">
      <h2 className="font-bold uppercase">Rate Seller&apos;s Product </h2>
      <Rating />
      <p className="mt-3 font-semibold">Product Rating (3.0)</p>
      <div className="flex items-center gap-6 mt-2">
        <p>5star</p>
        <Progress value={25} />
        <p>6</p>
      </div>
      <div className="flex items-center gap-6 mt-2">
        <p>4star</p>
        <Progress value={70} />
        <p>12</p>
      </div>
      <div className="flex items-center gap-6 mt-2">
        <p>3star</p>
        <Progress value={50} />
        <p>9</p>
      </div>
      <div className="flex items-center gap-6 mt-2">
        <p>2star</p>
        <Progress value={46} />
        <p>5</p>
      </div>
      <div className="flex items-center gap-6 mt-2">
        <p>1star</p>
        <Progress value={19} />
        <p>4</p>
      </div>
    </div>
  );
};

export default RateSeller;
