"use client";

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
import { initSeller } from "@/lib/actions";
import { sellerSchema } from "@/lib/zodSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { FaUpload } from "react-icons/fa";
import { v4 } from "uuid";
import { z } from "zod";

const SellerForm = () => {
  const form = useForm<z.infer<typeof sellerSchema>>({
    mode: "onChange",
    resolver: zodResolver(sellerSchema),
    defaultValues: {
      phone: "",
      address: "",
      county: "",
      whatsappUrl: "",
      packageId: "",
    },
  });

  const isLoading = form.formState.isSubmitting;
  const router = useRouter();

  const handleSubmit = async (values: z.infer<typeof sellerSchema>) => {
    try {
      const response = await initSeller({
        id: v4(),
        phone: values.phone,
        address: values.address,
        county: values.county,
        whatsappUrl: values.whatsappUrl,
        rating: 0,
        products: 0,
        packageId: values.packageId,
      });
      alert("Successfully saved info");
      console.log(
        "🚀 ~ handleSubmit ~ Successfully saved the Seller deatils:",
        response
      );
      router.push("/sell");
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
              name="phone"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Phone No.</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your phone number"
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
              name="county"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>County</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your county"
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
              name="address"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your address"
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
              name="whatsappUrl"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Whatsapp No.</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your whatsapp number"
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
              name="packageId"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Package</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Choose a package"
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

export default SellerForm;
