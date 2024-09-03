import { ReactNode } from "react";
import ImageTitle from "./ImageTitle";
import { latestBlogDatatype } from "../constants/latestBlogs";

function ScalingPictures(props: latestBlogDatatype): ReactNode {
  return (
    <div className="relative h-72 w-96 overflow-hidden">
      <img className="size-full object-cover" src={props.src} alt={props.name} width="1875" height="3000" />
      <ImageTitle name={props.name} location={props.location} />
    </div>
  );
}

export default ScalingPictures;
