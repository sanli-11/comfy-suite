import { ReactNode } from "react";
import { hotelDatatype } from "../constants/mostRatedHotels";
import { locationData } from "../constants/popularLocations";

type Prop = Pick<hotelDatatype | locationData, 'name' | 'location'>;

function ImageTitle(props: Prop): ReactNode {
  return (
    <div className="absolute bottom-0 left-0 w-full py-12 px-6 bg-gradient-to-t from-black/80 via-black/50 to-black/0 text-white uppercase">
      <h3 className="text-2xl">{props.name}</h3>
      <p className="ml-0.5">{props.location}</p>
    </div>
  );
}

export default ImageTitle;
