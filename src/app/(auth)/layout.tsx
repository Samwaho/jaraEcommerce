import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      {children}
    </div>
  );
};

export default layout;
