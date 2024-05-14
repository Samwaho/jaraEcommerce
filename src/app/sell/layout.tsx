import Footer from "@/components/footer/page";
import Header from "@/components/shared/header/page";
import React from "react";

type Props = {
  children: React.ReactNode;
};
const layout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default layout;
