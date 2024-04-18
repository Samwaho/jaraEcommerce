import Categories from "@/components/categories/page";
import Footer from "@/components/footer/page";
import Hero from "@/components/hero/page";
import SearchJara from "@/components/search/page";
import Header from "@/components/shared/header/page";
import React from "react";

const Home = () => {
  return (
    <div className="bg-main-bg">
      <Hero />
      <SearchJara />
      <Categories />
    </div>
  );
};

export default Home;
