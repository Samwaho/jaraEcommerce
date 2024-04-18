"use client";
import React from "react";
import Masonry from "react-masonry-css";

type Props = {
  children: React.ReactNode;
};
const MasonryGrid = ({ children }: Props) => {
  return (
    <Masonry
      breakpointCols={2}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {children}
    </Masonry>
  );
};

export default MasonryGrid;
