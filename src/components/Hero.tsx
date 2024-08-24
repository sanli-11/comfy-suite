import Button from "./Button";

function Hero(): JSX.Element {
  return (
    <div className="w-full h-dvh flex items-center justify-center bg-black">
      <div className="w-1/2 text-center uppercase text-white">
        <h2 className="pb-4 text-xl font-medium tracking-wider">Elevate your Travel</h2>
        <h2 className="text-[2.75rem] font-semibold leading-normal">Effortless Booking for Memorable Escapes</h2>
        <Button className="mt-8 border-orange-400 bg-orange-400">Book Hotel Now</Button>
      </div>
    </div>
  );
}

export default Hero;
