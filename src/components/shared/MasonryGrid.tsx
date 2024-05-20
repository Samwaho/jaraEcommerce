"use client";
import React from "react";
import Masonry from "react-masonry-css";

type Props = {
  children: React.ReactNode;
};
const MasonryGrid = ({ children }: Props) => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 2,
  };
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {children}
    </Masonry>
  );
};

export default MasonryGrid;
