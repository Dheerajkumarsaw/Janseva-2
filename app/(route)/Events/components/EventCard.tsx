/* eslint-disable @next/next/no-img-element */
import React from "react";
const EventCard = () => {
  return (
    <>
      {/* Card Main border */}
      <div className=" border max-sm:ml-4 flex w-[450px] h-fit flex-col gap-2 justify-center ">
        {/* Images */}
        <img
          className="object-cover w-[450px] h-[270px] rounded-md"
          src={"./EventCardTest.avif"}
          alt="EventCardImageTest"
        />

        {/* Title */}
        <div className="flex justify-center items-center">
          <span className="font-bold text-xl">
            Bhoomi Pujan of Delhi branch
          </span>
        </div>

        {/* Organizer */}
        <div className="">
          <span className="font-bold text-lg">Organizer: </span>
          <span className="font-bold text-base">
            Chairmen & Founder - Amit Grewal
          </span>
        </div>

        {/* Date and Location */}
        <div className=" flex gap-10">
          <span className="font-semibold text-lg">Date: 23-12-2023</span>
          <span className="font-semibold text-lg">Location: Chhawala</span>
        </div>
        {/* Description */}
        <div className="">
          <span className="font-semibold text-lg">Description: </span>
          <span className="font-semibold text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            voluptatibus, quibusdam voluptate, natus, voluptatum quas
            reprehenderit quae cumque facilis quos. Quisquam, voluptate
            voluptatum. Natus, voluptates. Quisquam, voluptate voluptatum.
            Natus, voluptates.
          </span>
        </div>
      </div>
    </>
  );
};

export default EventCard;
