import React from "react";
import Title from "../components/Title";
import { asset } from "../assets/asset";
import NewsLetter from "../components/NewsLetter";

const Contact = () => {
  return (
    <div>
      <div className=" text-center text-2xl pt-10 border-t">
        <Title Text1={"CONTACT "} Text2={"US"} />
      </div>
      <div className="flex flex-col justify-center my-10 md:flex-row gap-10 mb-28">
        <img className="w-full md:max-w-[480px]" src={asset.contact_img} />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">OUR STORE</p>
          <p className="text-gray-500">
            54709 AminPur Bazar <br /> Main City, Faisalabad
          </p>
          <p className="text-gray-500">
            Tel: 92 333 9925987
            <br /> AounMalik@gmail.com
          </p>
          <p className="font-semibold text-xl text-gray-600">
            Careers At Forever
          </p>
          <p className="text-gray-500">
            Learn more about our teams and job opennings.
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>
      <NewsLetter />
    </div>
  );
};

export default Contact;
