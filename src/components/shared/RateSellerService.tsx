"use client";
import React from "react";
import { FaRegStar, FaUpload } from "react-icons/fa";
import { Progress } from "../ui/progress";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Rating from "./rating/page";
import { Textarea } from "../ui/textarea";
import { useForm } from "react-hook-form";
import { reviewSchema } from "@/lib/zodSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { createReview } from "@/lib/actions";
import { v4 } from "uuid";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import Loading from "./Loading";
import Link from "next/link";

type Props = {
  sellerId: string;
};
const RateSellerService = ({ sellerId }: Props) => {
  const form = useForm<z.infer<typeof reviewSchema>>({
    mode: "onChange",
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      review: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const handleSubmit = async (values: z.infer<typeof reviewSchema>) => {
    try {
      const response = await createReview({
        id: v4(),
        review: values.review,
        sellerId: sellerId,
      });
      alert("Successfully sent review");
      console.log("🚀 ~ handleSubmit ~ Successfully saved review:", response);
    } catch (error) {
      console.log("🚀 ~ handleSubmit ~ error:", error);
    }
  };

  return (
    <div className="mt-3 p-3 rounded-md shadow-md bg-white">
      <h2 className="font-bold uppercase">Rate Seller&apos;s Service </h2>
      <Rating />
      <p className="mt-3 font-semibold">Service Rating (3.0)</p>
      <div className="flex items-center gap-6 mt-2">
        <p>5star</p>
        <Progress value={46} />
        <p>12</p>
      </div>
      <div className="flex items-center gap-6 mt-2">
        <p>4star</p>
        <Progress value={78} />
        <p>9</p>
      </div>
      <div className="flex items-center gap-6 mt-2">
        <p>3star</p>
        <Progress value={50} />
        <p>5</p>
      </div>
      <div className="flex items-center gap-6 mt-2">
        <p>2star</p>
        <Progress value={34} />
        <p>5</p>
      </div>
      <div className="flex items-center gap-6 mt-2">
        <p>1star</p>
        <Progress value={19} />
        <p>4</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <FormField
              disabled={isLoading}
              control={form.control}
              name="review"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>
                    <p className="mt-4 opacity-80 uppercase font-semibold">
                      REVIEW
                    </p>
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Your review"
                      className=" "
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="w-full flex items-center justify-center">
            {" "}
            <Button
              className="h-8 bg-gradient-to-tl from-sky-700 to-sky-500"
              disabled={isLoading}
              type="submit"
            >
              {isLoading ? (
                <Loading />
              ) : (
                <div className="flex items-center gap-2">
                  <FaUpload />
                  <p>Submit Your Review</p>
                </div>
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default RateSellerService;
