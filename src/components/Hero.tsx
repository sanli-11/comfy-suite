import HeroBG from "../assets/img/hero.jpg";
import Button from "./Button";
import HeroFloatingButton from "./HeroFloatingButton";

function Hero(): JSX.Element {
  return (
    <section className="w-full h-dvh flex items-center justify-center bg-bottom bg-cover" style={{
      backgroundImage: `url(${HeroBG})`
    }}>
      <div className="w-2/5 text-center uppercase text-white">
        <h2 className="pb-4 text-xl font-medium tracking-wider">Elevate your Travel</h2>
        <pre className="text-[2.75rem] font-semibold leading-normal whitespace-pre-wrap">
          Effortless Booking for
          Memorable Escapes
        </pre>
        <Button className="mt-8 border-orange-400 bg-orange-400">Book Hotel Now</Button>
      </div>
      <HeroFloatingButton />
    </section >
  );
}

export default Hero;
