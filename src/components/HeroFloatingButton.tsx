import Button from "./Button";
import call from "../assets/svg/call.svg";

function HeroFloatingButton(): JSX.Element {
  return (
    <div className="absolute top-1/2 -right-8 -translate-y-1/2 rotate-90">
      <div className="absolute size-full bg-gradient-to-b from-black/0 via-black/30 to-black/30" />
      <Button className="relative flex items-center justify-center m-0">
        <img className="mr-2" src={call} alt="Call" width="15" height="15" />
        <span className="font-bold">+1 555 444 333</span>
      </Button>
    </div>
  );
}

export default HeroFloatingButton;
