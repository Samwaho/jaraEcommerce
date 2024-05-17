import Image from "next/image";
import React from "react";
import SliderComponent from "../shared/slider";

const Hero = () => {
  return (
    <div className=" overflow-hidden">
      <div className="xl:px-28 rounded-b-md">
        <SliderComponent slidesToShow={1} autoPlay={true}>
          <Image
            src="/Shopping cart-8.png"
            alt="Banner Component"
            width={1400}
            height={300}
            className="w-full rounded-b-lg"
          />
          <Image
            src="/Agri-8.png"
            alt="Banner Component"
            width={1400}
            height={300}
            className="w-full rounded-b-lg"
          />
          <Image
            src="/Beaty-8.png"
            alt="Banner Component"
            width={1400}
            height={300}
            className="w-full rounded-b-lg"
          />
          <Image
            src="/car-8.png"
            alt="Banner Component"
            width={1400}
            height={300}
            className="w-full rounded-b-lg"
          />
          <Image
            src="/Electronics-8.png"
            alt="Banner Component"
            width={1400}
            height={300}
            className="w-full rounded-b-lg"
          />
          <Image
            src="/Real estate-8.png"
            alt="Banner Component"
            width={1400}
            height={300}
            className="w-full rounded-b-lg"
          />
        </SliderComponent>
      </div>
    </div>
  );
};

export default Hero;
