"use client";

import Loading from "@/components/shared/Loading";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { initSeller, getPackages } from "@/lib/actions";
import { sellerSchema } from "@/lib/zodSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Package } from "@prisma/client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
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
  const [packages, setPackages] = useState<Package[]>([]);
  const isLoading = form.formState.isSubmitting;
  const router = useRouter();

  const getPackagesData = async () => {
    const packagesData = await getPackages();
    console.log("🚀 ~ getPackagesData ~ packagesData:", packagesData);
    setPackages(packagesData || []);
  };
  useEffect(() => {
    getPackagesData();
  }, []);

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
      <h1 className="text-xl font-bold">Add Your Info</h1>
      <p className="text-gray-400 mb-2">
        This information is going to be attached to your products details
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4 p-3 rounded-lg bg-sky-50">
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
          </div>
          <h1 className="text-xl font-semibold">Select A Subscription</h1>
          <Carousel
            opts={{
              loop: true,
            }}
          >
            <CarouselContent>
              {packages.map((item) => (
                <CarouselItem key={item.id}>
                  <div className="p-3 rounded md shadow-md">
                    <h4 className="text-black">{item.name}</h4>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
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
