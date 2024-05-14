import Image from "next/image";
import React from "react";
import SliderComponent from "../shared/slider";

const Hero = () => {
  return (
    <div className="bg-white pt-2">
      <SliderComponent slidesToShow={1} autoPlay={true}>
        <Image
          src="/Shopping cart-8.png"
          alt="Banner Component"
          width={1400}
          height={1400}
          className="w-full"
        />
        <Image
          src="/Agri-8.png"
          alt="Banner Component"
          width={1400}
          height={1400}
          className="w-full"
        />
        <Image
          src="/Beaty-8.png"
          alt="Banner Component"
          width={1400}
          height={1400}
          className="w-full"
        />
        <Image
          src="/car-8.png"
          alt="Banner Component"
          width={1400}
          height={1400}
          className="w-full"
        />
        <Image
          src="/Electronics-8.png"
          alt="Banner Component"
          width={1400}
          height={1400}
          className="w-full"
        />
        <Image
          src="/Real estate-8.png"
          alt="Banner Component"
          width={1400}
          height={1400}
          className="w-full"
        />
      </SliderComponent>
    </div>
  );
};

export default Hero;
