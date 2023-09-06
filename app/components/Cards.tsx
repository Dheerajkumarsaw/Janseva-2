import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

type CardsType = {
  heading: string;
  description: string;
  images: string;
};

const Cards = ({ heading, description, images }: CardsType) => {
  return (
    <div>
      <div className="max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <Image width={1000} height={800} className="rounded-t-lg" src={images} alt="images" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {heading}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>

          {/* <Button className="border text-[1.1rem] font-bold border-blue-500 bg-transparent text-black hover:text-white hover:bg-blue-300">
            Read More &nbsp;
            <Image src="images/right-arrow.svg" alt="" width={15} height={15} />
          </Button> */}
        </div>
      </div>
    </div>
  );
};

export default Cards;
