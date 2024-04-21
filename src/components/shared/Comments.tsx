import React from "react";
import { FaRegStar } from "react-icons/fa";
import Rating from "./rating/page";

const Comments = () => {
  return (
    <div className="mt-4 mb-6">
      <h2 className="font-semibold">Comments</h2>
      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col">
          <Rating />
          <h4 className="font-semibold mt-3">Talia Maghanda</h4>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="flex flex-col">
          <Rating />
          <h4 className="font-semibold mt-3">David Njoroge</h4>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
