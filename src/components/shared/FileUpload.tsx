import { FileIcon, X } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { UploadDropzone } from "@/lib/uploadthing";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

type Props = {
  apiEndpoint: "media" | "userAvatar";
  onChange: (urls: string[]) => void; // Adjust onChange to accept an array of URLs
  value?: string[]; // Adjust value to accept an array of URLs
};

const FileUpload = ({ apiEndpoint, onChange, value }: Props) => {
  const type = value && value.length > 0 ? value[0]?.split(".").pop() : null; // Check if value is an array and get the type from the first element

  const handleFileUploadComplete = (urls: string[]) => {
    onChange(urls); // Pass the array of URLs to onChange
  };

  if (value && value.length > 0) {
    return (
      <div className="flex flex-col justify-center p-2 items-center border border-dashed border-gray-300 rounded-md">
        {type !== "pdf" ? (
          <div className="relative w-60 ">
            {apiEndpoint === "media" ? (
              <Carousel
                opts={{
                  loop: true,
                }}
                plugins={[
                  Autoplay({
                    delay: 3000,
                  }),
                ]}
              >
                <CarouselContent>
                  {value.map((image, index) => (
                    <CarouselItem key={index}>
                      <img
                        src={image}
                        alt="image"
                        className="w-[300px] h-[300px] object-cover"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            ) : (
              <div className="">
                {" "}
                <img
                  src={value[0]}
                  alt="image"
                  className="w-[300px] h-[300px] object-cover"
                />
              </div>
            )}
          </div>
        ) : (
          <div className="relative flex items-center p-2 mt-2 rounded-md">
            <FileIcon />
            <a
              href={value[0]} // Display the first image from the array
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-sm "
            >
              View PDF
            </a>
          </div>
        )}
        <Button variant="ghost" type="button" onClick={() => onChange([])}>
          <X className="h-4 w-4" />
          Remove Images
        </Button>
      </div>
    );
  }

  return (
    <div className="w-full">
      <UploadDropzone
        appearance={{}}
        className="ut-allowed-content:text-main-text-light dark:ut-allowed-content:text-main-text-dark ut-label:text-main-text-light dark:ut-label:text-main-text-dark ut-button:hover:opacity-85 ut-button:cursor-pointer ut-button:bg-gradient-to-tl from-sky-700 to-sky-500 ut-button:after:bg-gradient-to-tl ut-button:after:from-sky-200 ut-button:after:to-sky-400"
        endpoint={apiEndpoint}
        onClientUploadComplete={(res) => {
          const urls = res.map((file) => file.url); // Extract URLs from the response array
          handleFileUploadComplete(urls); // Call the handler with an array of URLs
        }}
        onUploadError={(error: Error) => {
          console.log(error);
        }}
      />
    </div>
  );
};

export default FileUpload;
