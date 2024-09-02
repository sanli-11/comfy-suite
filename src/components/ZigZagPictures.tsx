import { ReactNode } from "react";
import { hotelDatatype } from "../constants/mostRatedHotels";
import ImageTitle from "./ImageTitle";

function ZigZagPictures(props: hotelDatatype): ReactNode {
  return (
    <div className={`relative w-80 h-[calc(100%-4rem)] overflow-hidden ${props.id % 2 === 0 ? "self-start" : "self-end"}`}>
      <img className="h-full object-cover" src={props.src[0]} alt={props.name} width="1875" height="3000" />
      <ImageTitle name={props.name} location={props.location} />
    </div>
  );
}

export default ZigZagPictures;
