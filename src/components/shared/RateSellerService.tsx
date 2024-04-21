import React from "react";
import { FaRegStar } from "react-icons/fa";
import { Progress } from "../ui/progress";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Rating from "./rating/page";
import { Textarea } from "../ui/textarea";

const RateSellerService = () => {
  return (
    <div className="mt-3 p-3 rounded-md shadow-md bg-white">
      <h2 className="font-bold uppercase">Rate Seller&apos;s Service </h2>
      <Rating />
      <p className="mt-3 font-semibold">Service Rating (3.0)</p>
      <div className="flex items-center gap-6 mt-2">
        <p>5star</p>
        <Progress value={46} />
        <p>12</p>
      </div>
      <div className="flex items-center gap-6 mt-2">
        <p>4star</p>
        <Progress value={78} />
        <p>9</p>
      </div>
      <div className="flex items-center gap-6 mt-2">
        <p>3star</p>
        <Progress value={50} />
        <p>5</p>
      </div>
      <div className="flex items-center gap-6 mt-2">
        <p>2star</p>
        <Progress value={34} />
        <p>5</p>
      </div>
      <div className="flex items-center gap-6 mt-2">
        <p>1star</p>
        <Progress value={19} />
        <p>4</p>
      </div>
      <p className="mt-4 opacity-80 uppercase font-semibold">Review</p>
      <Textarea placeholder="Type your Review" />
      <div className="flex justify-center mt-4">
        <Button className="h-8 bg-gradient-to-tl from-sky-700 to-sky-500">
          Submit Your Review
        </Button>
      </div>
    </div>
  );
};

export default RateSellerService;
