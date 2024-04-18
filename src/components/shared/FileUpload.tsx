import { FileIcon, X } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { UploadDropzone } from "@/lib/uploadthing";

type Props = {
  apiEndpoint: "agencyLogo" | "userAvatar";
  onChange: (url?: string) => void;
  value?: string;
};
const FileUpload = ({ apiEndpoint, onChange, value }: Props) => {
  const type = value?.split(".").pop();

  if (value) {
    return (
      <div className="flex flex-col justify-center items-center">
        {type !== "pdf" ? (
          <div className="relative w-40 h-40">
            <Image
              src={value}
              alt="uploaded image"
              className="object-contain"
              fill
            />
          </div>
        ) : (
          <div className="relative flex items-center p-2 mt-2 rounded-md">
            <FileIcon />
            <a
              href={value}
              target="_blank"
              rel="noopener_noreferrer"
              className="ml-2 text-sm "
            >
              View PDF
            </a>
          </div>
        )}
        <Button variant="ghost" type="button" onClick={() => onChange("")}>
          <X className="h-4 w-4" />
          Remove Logo
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
          onChange(res?.[0].url);
        }}
        onUploadError={(error: Error) => {
          console.log(error);
        }}
      />
    </div>
  );
};

export default FileUpload;
