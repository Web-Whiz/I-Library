"use client";
import { Rating } from "@smastrom/react-rating";
import React from "react";
import { BsStarFill, BsStar } from "react-icons/bs";

const ReactRating = () => {
  return (
    <div>
      <Rating
        placeholderRating={4.5}
        emptySymbol={<BsStar className="text-2xl" />}
        placeholderSymbol={<BsStarFill className="text-[#FF9900] text-2xl" />}
        fullSymbol={<BsStarFill className="text-[#FF9900] text-2xl" />}
      />
    </div>
  );
};

export default ReactRating;
