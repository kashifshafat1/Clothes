import React from "react";
import Title from "../components/Title";
import NewsLetter from "../components/NewsLetter";

import { asset } from "../assets/asset";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title Text1={"ABOUT"} Text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-[450px]" src={asset.about_img} />
        <div className=" flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique
            voluptatibus fugiat hic, iusto adipisci ab nihil quidem voluptas
            iure, tenetur neque quaerat, maiores fugit. Nisi mollitia doloremque
            aliquam! Minus, ullam?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique
            voluptatibus fugiat hic, iusto adipisci ab nihil quidem voluptas
            iure, tenetur neque quaerat, maiores fugit. Nisi mollitia doloremque
            aliquam! Minus, ullam?
          </p>
          <b className="text-gray-800">OUR MISSION</b>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit esse et quis deserunt, soluta nobis tempore
            perspiciatis nemo laudantium asperiores officiis sunt. Quo culpa
            voluptatibus nobis? Necessitatibus exercitationem suscipit
            repellendus!
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title Text1={"WHY"} Text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-700">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
            maiores molestiae.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-700">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
            maiores molestiae.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Expectional Customer Services:</b>
          <p className="text-gray-700">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
            maiores molestiae.
          </p>
        </div>
      </div>
      <NewsLetter />
    </div>
  );
};

export default About;
