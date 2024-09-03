import { ReactNode } from "react";
import SectionTitle from "./SectionTitle";
import Button from "./Button";

function Footer(): ReactNode {
  return (
    <footer className="w-full py-16 flex justify-evenly items-center bg-overlay">
      <SectionTitle className="w-full mx-auto text-center" title="Have Any Questions?">
        <div className="my-8 flex justify-center items-center gap-x-12">
          <div className="size-80 border-2 border-orange-400" />
          <div className="text-start">
            <h3 className="my-8 text-2xl">Get in Touch</h3>
            <h3 className="my-8 text-2xl">+1 555 444 333</h3>
          </div>
        </div>
      </SectionTitle>
      <form className="w-full flex flex-col justify-center items-center gap-y-6">
        <div className="flex justify-between items-center gap-x-6">
          <input form="contact" name="fname" className="w-72 border-2 border-orange-400 bg-white py-1.5 px-2 text-black" type="text" placeholder="First Name" />
          <input form="contact" name="lname" className="w-72 border-2 border-orange-400 bg-white py-1.5 px-2 text-black" type="text" placeholder="Last Name" />
        </div>
        <div className="flex justify-between items-center gap-x-6">
          <input form="contact" name="tel" className="w-72 border-2 border-orange-400 bg-white py-1.5 px-2 text-black" type="tel" placeholder="Contact Number" />
          <input form="contact" name="email" className="w-72 border-2 border-orange-400 bg-white py-1.5 px-2 text-black" type="email" placeholder="Email Address" />
        </div>
        <textarea form="contact" name="message" className="w-[37.5rem] h-36 border-2 border-orange-400 bg-white py-1.5 px-2 text-black" placeholder="Your Message Here..." />
        <Button className="border-orange-400 bg-orange-400">Submit</Button>
      </form>
    </footer>
  );
}

export default Footer;
