/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import AgricultureForm from "@/components/forms/agriculture/page";
import ConstructionForm from "@/components/forms/construction/page";
import ElectronicsForm from "@/components/forms/electronics/page";
import FashionForm from "@/components/forms/fashion/page";
import LightsForm from "@/components/forms/lights/page";
import MobilePhoneForm from "@/components/forms/mobilePhones/page";
import RealEstateForm from "@/components/forms/realEstate/page";
import ServicesForm from "@/components/forms/service/page";
import SparePartForm from "@/components/forms/spareParts/page";
import ToysForm from "@/components/forms/toys/page";
import VehicleForm from "@/components/forms/vehicles/page";
import FurnitureForm from "@/components/forms/furniture/page";
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
import { getAuthSeller, getCategories, getSubCategories } from "@/lib/actions";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import SellerForm from "@/components/forms/seller/page";
import { Category, subCategories } from "@prisma/client";

const Sell = () => {
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(false);
  const [value, setValue] = useState("");
  const [subValue, setSubValue] = useState("");
  const [categories, setCategories] = useState<Category[]>([]);
  const [subCategories, setSubCategories] = useState<subCategories[]>([]);
  const [CategoryName, setCategoryName] = useState("");
  const [seller, setSeller] = useState(null);

  const categoryForms = {
    mobilephones: (
      <MobilePhoneForm categoryId={value} subCategoryId={subValue} />
    ),
    spareparts: <SparePartForm categoryId={value} subCategoryId={subValue} />,
    fashion: <FashionForm categoryId={value} subCategoryId={subValue} />,
    construction: (
      <ConstructionForm categoryId={value} subCategoryId={subValue} />
    ),
    furniture: <FurnitureForm categoryId={value} subCategoryId={subValue} />,
    "cars&vehicles": (
      <VehicleForm categoryId={value} subCategoryId={subValue} />
    ),
    agriculture: (
      <AgricultureForm categoryId={value} subCategoryId={subValue} />
    ),
    services: <ServicesForm categoryId={value} subCategoryId={subValue} />,
    toys: <ToysForm categoryId={value} subCategoryId={subValue} />,
    realestate: <RealEstateForm categoryId={value} subCategoryId={subValue} />,
    "lights&lighting": (
      <LightsForm categoryId={value} subCategoryId={subValue} />
    ),
    electronics: (
      <ElectronicsForm categoryId={value} subCategoryId={subValue} />
    ),
    // Add more categories and corresponding form components here
  };
  const getCategoriesData = async () => {
    try {
      const categoriesData = await getCategories();
      if (categoriesData) setCategories(categoriesData);
    } catch (error) {
      console.log("🚀 ~ getCategoriesData ~ error:", error);
    }
  };

  const getSubCategoriesData = async () => {
    try {
      const subCategoriesData = await getSubCategories(value);
      if (subCategoriesData) setSubCategories(subCategoriesData);

      console.log(subCategoriesData);
    } catch (error) {
      console.log("🚀 ~ getSubCategoriesData ~ error:", error);
    }
  };

  const getSeller = async () => {
    const sellerDetail = await getAuthSeller();
    if (sellerDetail) setSeller(sellerDetail);
  };
  useEffect(() => {
    getCategoriesData();
    getSeller();
  }, []);

  useEffect(() => {
    getSubCategoriesData();
  }, [value]);
  console.log(seller);

  if (seller) {
    return (
      <div className="bg-main-bg min-h-screen">
        <div className=" bg-white p-4 lg:px-28 lg:max-w-xl mx-auto rounded-xl shadow-md">
          <div className="flex flex-col gap-4">
            <h2 className=" uppercase font-semibold">Product Category</h2>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="justify-between border-slate-400 text-gray-500 w-full"
                >
                  {value
                    ? categories.find((category) => category.id === value)
                        ?.title
                    : "Select category..."}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandInput placeholder="Search category..." />
                  <CommandEmpty>No category found.</CommandEmpty>
                  <CommandGroup>
                    {categories.map((category) => (
                      <CommandItem
                        key={category.id}
                        value={category.title}
                        onSelect={(currentValue) => {
                          setValue(category.id === value ? "" : category.id);
                          setCategoryName(
                            category.id === value ? "" : category.title
                          );
                          setOpen(false);
                        }}
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
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <h2 className=" uppercase font-semibold">Product Sub Category</h2>
            <Popover open={subOpen} onOpenChange={setSubOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="justify-between border-slate-400 text-gray-500 w-full"
                >
                  {value
                    ? subCategories.find(
                        (subCategory) => subCategory.id === subValue
                      )?.title
                    : "Select subcategory..."}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandInput placeholder="Search subcategory..." />
                  <CommandEmpty>No subcategory found.</CommandEmpty>
                  <CommandGroup>
                    {subCategories.map((subCategory) => (
                      <CommandItem
                        key={subCategory.id}
                        value={subCategory.title}
                        onSelect={(currentValue) => {
                          setSubValue(
                            subCategory.id === subValue ? "" : subCategory.id
                          );
                          setOpen(false);
                        }}
                      >
                        <div className="flex items-center justify-start gap-4">
                          <Image
                            src={subCategory.imageUrl}
                            alt="image"
                            width={32}
                            height={32}
                            className=""
                          />
                          <p className="truncate">{subCategory.title}</p>
                        </div>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
          {categoryForms[CategoryName.toLowerCase().replace(/\s+/g, "")] || (
            <div>
              <p>{categoryForms["mobilephones"]}</p>
            </div>
          )}
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-main-bg py-3 px-6 lg:px-28">
      <SellerForm />
    </div>
  );
};

export default Sell;
