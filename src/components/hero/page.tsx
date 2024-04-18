import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="bg-white pt-2">
      <Image
        src="/Shopping cart-8.png"
        alt="Banner Component"
        width={1400}
        height={1400}
        className="w-full"
      />
    </div>
  );
};

export default Hero;
