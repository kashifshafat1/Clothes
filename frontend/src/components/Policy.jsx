import React from "react";
import { asset } from "../assets/asset";
const Policy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div>
        <img src={asset.exchange_icon} className="w-12 m-auto mb-5 " alt="" />
        <p className="font-semibold">Easy Exchange Policy</p>
        <p>We Offer Hassle free exchange policy</p>
      </div>
      <div>
        <img src={asset.quality_icon} className="w-12 m-auto mb-5 " alt="" />
        <p className="font-semibold">Days Retuen Policy</p>
        <p>We Provide 7 Days free return policy</p>
      </div>
      <div>
        <img src={asset.support_img} className="w-12 m-auto mb-5 " alt="" />
        <p className="font-semibold">Best Customer Support </p>
        <p>We Provide 24/7 Customer Support</p>
      </div>
    </div>
  );
};

export default Policy;
