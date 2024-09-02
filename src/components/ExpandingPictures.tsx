import { ReactNode } from "react";
import ImageTitle from "./ImageTitle";

type Prop = {
  className?: string,
  src: string,
  alt: string,
  name: string,
  location: string,
}

function ExpandingPictures(props: Prop): ReactNode {
  return (
    <div className={`relative w-[22.5%] h-full overflow-hidden ${props.className}`}>
      <img className="h-full object-cover" src={props.src} alt={props.alt} width="2243" height="2991" />
      <ImageTitle name={props.name} location={props.location} />
    </div>
  );
}

export default ExpandingPictures;
