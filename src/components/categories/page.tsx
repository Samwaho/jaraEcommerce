import React from "react";
import CategoryCard from "./categoryCard/page";
import { getCategories } from "@/lib/actions";
import MasonryGrid from "../shared/MasonryGrid";

const Categories = async () => {
  const categories = await getCategories();
  return (
    <div className="mt-4 px-6 xl:px-28 font-semibold pb-8">
      <h4 className="font-semibold">Categories</h4>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4">
        {categories?.map((category) => {
          return (
            <CategoryCard
              key={category.title}
              title={category.title}
              image={category.imageUrl}
              link={`/products/${category.title
                .toLowerCase()
                .replace(/\s+/g, "")}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
