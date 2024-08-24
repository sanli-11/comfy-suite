import Button from "./Button";
import left from "../assets/svg/chevron-left.svg";
import right from "../assets/svg/chevron-right.svg";

function Hero(): JSX.Element {
  return (
    <section className="w-full h-dvh flex items-center justify-center bg-black">
      <div className="w-2/5 text-center uppercase text-white">
        <h2 className="pb-4 text-xl font-medium tracking-wider">Elevate your Travel</h2>
        <h2 className="text-[2.75rem] font-semibold leading-normal">Effortless Booking for Memorable Escapes</h2>
        <Button className="mt-8 border-orange-400 bg-orange-400">Book Hotel Now</Button>
      </div>
      <div className="absolute bottom-6 right-4 flex items-end justify-end">
        <Button className="border px-2">
          <img src={left} alt="Previous" width="20" height="20" />
        </Button>
        <Button className="border px-2">
          <img src={right} alt="Next" width="20" height="20" />
        </Button>
      </div>
    </section>
  );
}

export default Hero;
