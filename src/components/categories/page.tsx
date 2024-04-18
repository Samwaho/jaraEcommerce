import React from "react";
import CategoryCard from "./categoryCard/page";
import { getCategories } from "@/lib/actions";
import MasonryGrid from "../shared/MasonryGrid";

const Categories = async () => {
  const categories = await getCategories();
  return (
    <div className="mt-4 px-6 font-semibold pb-8">
      <h4 className="font-semibold">Categories</h4>
      <div className="grid grid-cols-2 gap-2">
        {categories.map((category) => {
          return (
            <CategoryCard
              key={category.title}
              title={category.title}
              image={category.imageUrl}
              link={`/home/${category.title.toLowerCase().replace(/\s+/g, "")}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
