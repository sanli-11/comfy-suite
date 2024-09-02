import { ReactNode } from "react";
import ExpandingPictures from "./ExpandingPictures";
import { popularLocationsData, locationData } from "../constants/popularLocations";
import SectionTitle from "./SectionTitle";
import Button from "./Button";
import ArrowButtons from "./ArrowButtons";

function PopularLocations(): ReactNode {
  return (
    <section className="relative h-dvh w-full flex justify-end items-start">
      <SectionTitle className="absolute top-1/2 -translate-y-1/2 left-[15%] -translate-x-[15%] w-48" title="Popular Locations">
        <p className="mt-2 mb-10 w-2/3">Book Your Getaway in the Most Popular Destinations.</p>
        <Button className="mx-6 border-orange-400 bg-orange-400">View All</Button>
      </SectionTitle>
      <ArrowButtons className="absolute bottom-6 left-4" />
      {popularLocationsData.map((loc: locationData) => (<ExpandingPictures key={loc.id} src={loc.src} alt={loc.alt} name={loc.name} location={loc.location} />))}
    </section>
  );
}

export default PopularLocations;
