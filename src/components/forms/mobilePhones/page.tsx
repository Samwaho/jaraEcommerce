"use client";

import FileUpload from "@/components/shared/FileUpload";
import Loading from "@/components/shared/Loading";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { createMobilePhone, createSparePart } from "@/lib/actions";
import { cn } from "@/lib/utils";
import { mobilePhonesSchema } from "@/lib/zodSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { FaUpload } from "react-icons/fa";
import { toast } from "sonner";
import { z } from "zod";

type Props = {
  categoryId: string;
  subCategoryId: string;
};
const MobilePhoneForm = ({ categoryId, subCategoryId }: Props) => {
  const form = useForm<z.infer<typeof mobilePhonesSchema>>({
    mode: "onChange",
    resolver: zodResolver(mobilePhonesSchema),
    defaultValues: {
      title: "",
      imageUrl: "",
      location: "",
      town: "",
      brand: "",
      model: "",
      storage: "",
      ram: "",
      os: "",
      condition: "NEW",
      description: "",
      price: "",
      categoryId: "",
      subcategoryId: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const handleSubmit = async (values: z.infer<typeof mobilePhonesSchema>) => {
    try {
      const response = await createMobilePhone({
        title: values.title,
        imageUrl: values.imageUrl,
        location: values.location,
        town: values.town,
        brand: values.brand,
        model: values.model,
        storage: values.storage,
        ram: values.storage,
        os: values.os,
        condition: values.condition,
        description: values.condition,
        price: values.price,
        categoryId: categoryId,
        subCategoryId: subCategoryId,
      });
      toast("Product has been created", {
        description: "successfully saved",
      });
      console.log(
        "🚀 ~ handleSubmit ~ Successfully saved the Product:",
        response
      );
    } catch (error) {
      console.log("🚀 ~ handleSubmit ~ error:", error);
    }
  };
  return (
    <div className="mt-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
          <FormField
            disabled={isLoading}
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <div>
                    <h2 className="font-semibold uppercase">Product Images </h2>
                    <p className="mt-4 text-gray-500 font-normal">
                      Add atleast 2 photos for this category
                    </p>
                    <p className="mt-2 text-gray-500 font-normal">
                      Note that the first picture will be used as the title
                      picture.
                    </p>
                  </div>
                </FormLabel>
                <FormControl>
                  <FileUpload
                    apiEndpoint="userAvatar"
                    onChange={field.onChange}
                    value={field.value}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="flex flex-col md:flex-row gap-4">
            <FormField
              disabled={isLoading}
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Mobile phone title"
                      className="shadow-sm bg-transparent dark:bg-secondary-dark-bg border-slate-400"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              disabled={isLoading}
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Location/County</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="location"
                      className="shadow-sm bg-transparent dark:bg-secondary-dark-bg border-slate-400"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              disabled={isLoading}
              control={form.control}
              name="town"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Ward/Town</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="ward or town"
                      className="shadow-sm bg-transparent dark:bg-secondary-dark-bg border-slate-400"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              disabled={isLoading}
              control={form.control}
              name="brand"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Brand</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="brand"
                      className="shadow-sm bg-transparent dark:bg-secondary-dark-bg border-slate-400"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              disabled={isLoading}
              control={form.control}
              name="model"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Model</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="model"
                      className="shadow-sm bg-transparent dark:bg-secondary-dark-bg border-slate-400"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              disabled={isLoading}
              control={form.control}
              name="storage"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Storage</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="storage"
                      className="shadow-sm bg-transparent dark:bg-secondary-dark-bg border-slate-400"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              disabled={isLoading}
              control={form.control}
              name="ram"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>RAM</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="RAM"
                      className="shadow-sm bg-transparent dark:bg-secondary-dark-bg border-slate-400"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              disabled={isLoading}
              control={form.control}
              name="os"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Operating System</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="os"
                      className="shadow-sm bg-transparent dark:bg-secondary-dark-bg border-slate-400"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              disabled={isLoading}
              control={form.control}
              name="condition"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Condition</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="condition"
                      className="shadow-sm bg-transparent dark:bg-secondary-dark-bg border-slate-400"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              disabled={isLoading}
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Product Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="description"
                      className="shadow-sm bg-transparent dark:bg-secondary-dark-bg border-slate-400"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              disabled={isLoading}
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="price"
                      className="shadow-sm bg-transparent dark:bg-secondary-dark-bg border-slate-400"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="flex items-center mt-4 gap-6">
            <Button
              className="flex-1 flex items-center gap-2"
              disabled={isLoading}
              type="submit"
            >
              {isLoading ? (
                <Loading />
              ) : (
                <div className="flex items-center gap-2">
                  <FaUpload />
                  <p>Upload</p>
                </div>
              )}
            </Button>
            <Link className="flex-1" href={`/home`}>
              <Button
                className="w-full bg-transparent border border-red-500 text-red-500"
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

export default MobilePhoneForm;
