import HeroBG from "../assets/img/hero.jpg";
import Button from "./Button";
import HeroFloatingButton from "./HeroFloatingButton";

function Hero(): JSX.Element {
  return (
    <section className="w-full h-dvh flex items-center justify-center bg-bottom bg-cover" style={{
      backgroundImage: `url(${HeroBG})`
    }}>
      <div className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-black/55 from-5% via-black/0 to-black/30 to-85%" />
      <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-b from-black/30 from-5% via-black/15 to-black/25 to-85%" />
      <div className="relative w-2/5 text-center uppercase text-white">
        <h2 className="text-[2.75rem] font-semibold font-serif whitespace-pre-wrap">
          Discover Your Perfect Stay
        </h2>
        <p>Where Comfort Meets Convenience. Book Your Escape Today!</p>
        <Button className="mt-8 border-orange-400 bg-orange-400">Book Hotel Now</Button>
      </div>
      <HeroFloatingButton />
    </section >
  );
}

export default Hero;
