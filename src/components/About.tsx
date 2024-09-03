import { ReactNode } from "react";
import about from "../assets/img/about.jpg";
import SectionTitle from "./SectionTitle";

function About(): ReactNode {
  return (
    <section className="w-full mb-20 flex justify-evenly items-center">
      <div className="h-96 w-1/3 overflow-hidden">
        <img className="size-full object-cover" src={about} alt="Comfy Suite HQ" width="5472" height="3648" />
      </div>
      <SectionTitle className="" title="About Comfy Suite">
        <p className="mt-10 mb-7 w-[45rem] text-wrap">
          At Comfy Suite, we are dedicated to enhancing your travel experience by providing comprehensive insights into the most popular destinations and a diverse selection of accommodations. Our platform not only highlights trending locations, reflecting where other travelers are exploring, but also features an extensive range of hotels, including a curated section for top-rated properties based on genuine guest reviews. This ensures that you have access to the highest quality options available.
        </p>
        <p className="w-[45rem] text-wrap">
          In addition to our hotel offerings, our blog section combines detailed testimonials with expert travel articles, providing you with valuable information and personal experiences to assist in your decision-making process. Our commitment is to offer a streamlined and reliable booking experience, empowering you to make well-informed choices and enjoy your travels with confidence.
        </p>
      </SectionTitle>
    </section>
  );
}

export default About;
