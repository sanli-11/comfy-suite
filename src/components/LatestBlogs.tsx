import { ReactNode } from "react";
import SectionTitle from "./SectionTitle";
import Button from "./Button";
import { latestBlogs, latestBlogDatatype } from "../constants/latestBlogs";
import ScalingPictures from "./ScalingPictures";

function LatestBlogs(): ReactNode {
  return (
    <section className="relative w-full py-12">
      <SectionTitle className="absolute top-1/2 -translate-y-1/2 left-[15%] -translate-x-[15%] w-72" title="Latest Blogs">
        <p className="mt-2 mb-10 w-56">
          Check out our latest blogs for reviews and testimonials to guide your travel decisions.
        </p>
        <Button className="mx-6 border-orange-400 bg-orange-400">View All</Button>
      </SectionTitle>
      <div className="h-full w-2/3 my-24 ml-auto mr-20 flex flex-wrap-reverse justify-end items-start gap-x-8 gap-y-6">
        {latestBlogs.map((blog: latestBlogDatatype) => (
          <ScalingPictures key={blog.id} {...blog} />
        ))}
      </div>
    </section>
  );
}

export default LatestBlogs;
