"use client";
import { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

const Rating = () => {
  const [rating, setRating] = useState(1);

  const handleRating = (value: number) => {
    setRating(value);
  };

  return (
    <div className="flex items-center gap-3 mt-2 text-lg">
      {rating >= 1 ? (
        <FaStar
          onClick={() => handleRating(1)}
          className="text-yellow-500 cursor-pointer"
        />
      ) : (
        <FaRegStar
          onClick={() => handleRating(1)}
          className="text-slate-700 cursor-pointer"
        />
      )}
      {rating >= 2 ? (
        <FaStar
          onClick={() => handleRating(2)}
          className="text-yellow-500 cursor-pointer"
        />
      ) : (
        <FaRegStar
          onClick={() => handleRating(2)}
          className="text-slate-700 cursor-pointer"
        />
      )}
      {rating >= 3 ? (
        <FaStar
          onClick={() => handleRating(3)}
          className="text-yellow-500 cursor-pointer"
        />
      ) : (
        <FaRegStar
          onClick={() => handleRating(3)}
          className="text-slate-700 cursor-pointer"
        />
      )}
      {rating >= 4 ? (
        <FaStar
          onClick={() => handleRating(4)}
          className="text-yellow-500 cursor-pointer"
        />
      ) : (
        <FaRegStar
          onClick={() => handleRating(4)}
          className="text-slate-700 cursor-pointer"
        />
      )}
      {rating >= 5 ? (
        <FaStar
          onClick={() => handleRating(5)}
          className="text-yellow-500 cursor-pointer"
        />
      ) : (
        <FaRegStar
          onClick={() => handleRating(5)}
          className="text-slate-700 cursor-pointer"
        />
      )}
    </div>
  );
};

export default Rating;
