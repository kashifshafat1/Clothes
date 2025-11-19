import React from "react";
import { asset } from "../assets/asset";
const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-10 text-sm">
        <div>
          <img src={asset.logo} className="mb-5 w-32 " alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            amet veniam maiores doloremque, unde iusto nulla aliquid deleniti
            porro libero laborum dolorum voluptate assumenda. Dignissimos
            voluptate quo ipsa nisi maxime!
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+92 321-9956854</li>
            <li>contact@yahoo.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          CopyRight 2024 forever.com All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
