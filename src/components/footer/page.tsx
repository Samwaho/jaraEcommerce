import React from "react";
import { FaTiktok, FaYoutube } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="bg-primary text-main-text p-4">
      <div className="flex justify-between">
        <div className=" text-sm">
          <p>About Us</p>
          <p>Home</p>
          <p>Sell on Jara</p>
          <p className="mt-6 underline">Privacy Policy</p>
          <p className="underline">Terms & Conditions</p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-semibold">Contact us for more info</p>
          <div className="flex items-center gap-4">
            <MdEmail className="text-xl" />
            <p>info@jara.co.ke</p>
          </div>
          <div className="flex items-center gap-4">
            <FaPhoneVolume className="text-xl" />
            <p>+254 724 653 574</p>
          </div>
          <div className="flex items-center gap-4 text-xl">
            <RiInstagramFill />
            <FaTiktok />
            <FaYoutube />
          </div>
        </div>
      </div>
      <p className="text-center text-sm mt-8 font-semibold">
        &copy; JARA.CO.KE
      </p>
      <p className="text-center text-sm">All rights reserved.</p>
    </div>
  );
};

export default Footer;
