/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import FileUpload from "@/components/shared/FileUpload";
import Loading from "@/components/shared/Loading";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { createSubCategory, getCategories } from "@/lib/actions";
import { cn } from "@/lib/utils";
import { subCategorySchema } from "@/lib/zodSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Category } from "@prisma/client";
import { CheckIcon, ChevronsUpDown } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { v4 } from "uuid";
import { z } from "zod";

type Props = {
  data?: Partial<Category>;
};

const Page = ({ data }: Props) => {
  const form = useForm<z.infer<typeof subCategorySchema>>({
    mode: "onChange",
    resolver: zodResolver(subCategorySchema),
    defaultValues: {
      title: "",
      imageUrls: [],
      categoryId: "",
    },
  });

  const [categories, setCategories] = useState<Category[]>([]);
  const router = useRouter();
  const isLoading = form.formState.isSubmitting;
  const getCategoryData = async () => {
    try {
      const categoryData = await getCategories();
      if (categoryData) setCategories(categoryData);
      console.log(categories);
    } catch (error) {
      console.log("🚀 ~ getCategoryData ~ error:", error);
    }
  };

  const handleSubmit = async (values: z.infer<typeof subCategorySchema>) => {
    try {
      const response = await createSubCategory({
        id: v4(),
        title: values.title,
        imageUrl: values.imageUrls[0],
        categoryId: values.categoryId,
      });
      console.log(
        "🚀 ~ handleSubmit ~ Successfully saved the Category:",
        response
      );
      // router.push("/home");
    } catch (error) {
      console.log("🚀 ~ handleSubmit ~ error:", error);
    }
  };
  useEffect(() => {
    getCategoryData();
  }, []);

  return (
    <div className="p-5 h-[100vh]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
          <FormField
            disabled={isLoading}
            control={form.control}
            name="imageUrls"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mt-4">SubCategory Image</FormLabel>
                <FormControl>
                  <FileUpload
                    apiEndpoint="userAvatar"
                    onChange={field.onChange}
                    value={field.value}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex md:flex-row gap-4">
            <FormField
              disabled={isLoading}
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Subcategory title"
                      className="shadow-sm bg-transparent dark:bg-secondary-dark-bg"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              disabled={isLoading}
              control={form.control}
              name="categoryId"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2 flex-1">
                  <FormLabel>Category</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          role="combobox"
                          className={cn(
                            "justify-between",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value
                            ? categories.find(
                                (category) => category.id === field.value
                              )?.title
                            : "Select category"}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                      <Command className="bg-secondary-bg dark:bg-secondary-dark-bg">
                        <CommandInput
                          placeholder="Search station..."
                          className="h-9"
                        />
                        <CommandEmpty>No station found.</CommandEmpty>
                        <CommandGroup>
                          {categories.map((category) => (
                            <CommandItem
                              value={category.id}
                              key={category.id}
                              onSelect={() => {
                                form.setValue("categoryId", category.id);
                              }}
                              className="hover:bg-main-bg dark:bg-main-dark-bg"
                            >
                              {category.title}
                              <CheckIcon
                                className={cn(
                                  "ml-auto h-4 w-4",
                                  category.id === field.value
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </Command>
                    </PopoverContent>
                  </Popover>
                </FormItem>
              )}
            />
          </div>
          <div className="flex items-center mt-4 gap-6">
            <Button className="w-24" disabled={isLoading} type="submit">
              {isLoading ? <Loading /> : "Save"}
            </Button>
            <Link href={`/users`}>
              <Button
                className="w-24 bg-transparent border border-red-500 text-red-500"
                disabled={isLoading}
                type="button"
              >
                Back
              </Button>
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Page;
