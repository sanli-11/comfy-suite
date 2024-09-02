import { ReactNode } from "react";
import SectionTitle from "./SectionTitle";
import { mostRatedHotels, hotelDatatype } from "../constants/mostRatedHotels";
import ZigZagPictures from "./ZigZagPictures";

function MostRatedHotels(): ReactNode {
  return (
    <section className="mt-32 h-dvh w-full">
      <SectionTitle className="flex justify-evenly items-center" title="Most Rated Hotels">
        <p className="w-96">
          Discover our most-rated hotels, celebrated for their exceptional service and guest satisfaction. Experience top-notch comfort and quality that our visitors rave about.
        </p>
      </SectionTitle>
      <div className="mt-16 w-full h-[calc(100dvh-10rem)] relative flex flex-wrap justify-center items-stretch gap-x-6">
        {mostRatedHotels.map((hotel: hotelDatatype) => (
          <ZigZagPictures key={hotel.id} {...hotel} />
        ))}
      </div>
    </section>
  );
}

export default MostRatedHotels;
