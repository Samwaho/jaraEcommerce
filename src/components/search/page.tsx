import React from "react";
import { Input } from "../ui/input";
import { Search } from "lucide-react";

const SearchJara = () => {
  return (
    <div className="flex items-center justify-center p-4 w-full max-w-md mx-auto mt-4">
      <div className="flex items-center gap-4 bg-primary w-full p-1 rounded-2xl">
        <Input placeholder="Serch on Jara..." className="h-8 rounded-2xl" />
        <Search className="font-bold text-main-text me-4 h-8 w-8" />
      </div>
    </div>
  );
};

export default SearchJara;
