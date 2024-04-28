"use client";

import Loading from "@/components/shared/Loading";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createPackage } from "@/lib/actions";
import { packageSchema } from "@/lib/zodSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { FaUpload } from "react-icons/fa";
import { v4 } from "uuid";
import { z } from "zod";

const PackageForm = () => {
  const form = useForm<z.infer<typeof packageSchema>>({
    mode: "onChange",
    resolver: zodResolver(packageSchema),
    defaultValues: {
      name: "",
      days: "",
      ads: "",
      price: "",
    },
  });

  const isLoading = form.formState.isSubmitting;
  const router = useRouter();

  const handleSubmit = async (values: z.infer<typeof packageSchema>) => {
    try {
      const response = await createPackage({
        id: v4(),
        name: values.name,
        ads: values.ads,
        days: values.days,
        price: values.price,
      });
      alert("Successfully saved info");
      console.log(
        "🚀 ~ handleSubmit ~ Successfully saved the Seller deatils:",
        response
      );
      return router.push("/sell");
    } catch (error) {
      console.log("🚀 ~ handleSubmit ~ error:", error);
    }
  };
  return (
    <div className="mt-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <FormField
              disabled={isLoading}
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Package Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Package name"
                      className="shadow-sm bg-transparent dark:bg-secondary-dark-bg border-slate-400"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              disabled={isLoading}
              control={form.control}
              name="days"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Days</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your days"
                      className="shadow-sm bg-transparent dark:bg-secondary-dark-bg border-slate-400"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              disabled={isLoading}
              control={form.control}
              name="ads"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Ads</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your ads"
                      className="shadow-sm bg-transparent dark:bg-secondary-dark-bg border-slate-400"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
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
                      placeholder="Your price"
                      className="shadow-sm bg-transparent dark:bg-secondary-dark-bg border-slate-400"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
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

export default PackageForm;
