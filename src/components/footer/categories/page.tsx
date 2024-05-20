"use client";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { getCategories } from "@/lib/actions";
import { Category } from "@prisma/client";
import { BookText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Categories = () => {
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);

  const getCategoriesData = async () => {
    try {
      const categoriesData = await getCategories();
      if (categoriesData) setCategories(categoriesData);
    } catch (error) {
      console.log("🚀 ~ getCategoriesData ~ error:", error);
    }
  };

  useEffect(() => {
    getCategoriesData();
  }, []);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className="flex flex-col items-center  p-2 cursor-pointer rounded-full shadow-sm text-sm">
          <BookText className="w-5 h-5" />
          <h4>Categories</h4>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandEmpty>No category found.</CommandEmpty>
          <CommandGroup>
            {categories.map((category) => (
              <CommandItem
                key={category.id}
                value={category.title}
                onSelect={() => {
                  setOpen(false);
                }}
              >
                <Link
                  href={`/products/${category.title
                    .toLowerCase()
                    .replace(/\s+/g, "")}`}
                >
                  <div className="flex items-center justify-start gap-4">
                    <Image
                      src={category.imageUrl}
                      alt="image"
                      width={32}
                      height={32}
                      className=""
                    />
                    <p className="truncate">{category.title}</p>
                  </div>
                </Link>
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default Categories;
