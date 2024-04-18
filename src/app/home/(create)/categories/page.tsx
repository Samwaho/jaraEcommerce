"use client";
import { categorySchema } from "@/lib/zodSchemas";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { createCategory } from "@/lib/actions";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import FileUpload from "@/components/shared/FileUpload";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Loading from "@/components/shared/Loading";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Categories = () => {
  const form = useForm<z.infer<typeof categorySchema>>({
    mode: "onChange",
    resolver: zodResolver(categorySchema),
    defaultValues: {
      title: "",
      imageUrl: "",
    },
  });

  const isLoading = form.formState.isSubmitting;
  const router = useRouter();
  const handleSubmit = async (values: z.infer<typeof categorySchema>) => {
    try {
      const response = await createCategory({
        title: values.title,
        imageUrl: values.imageUrl,
      });
      router.push("/home");
      console.log(
        "🚀 ~ handleSubmit ~ Successfully saved the Category:",
        response
      );
    } catch (error) {
      console.log("🚀 ~ handleSubmit ~ error:", error);
    }
  };
  return (
    <div className="p-5 h-[100vh]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
          <FormField
            disabled={isLoading}
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mt-4">Category Image</FormLabel>
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
                      placeholder="Your Full Name"
                      className="shadow-sm bg-transparent dark:bg-secondary-dark-bg"
                      {...field}
                    />
                  </FormControl>
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

export default Categories;
