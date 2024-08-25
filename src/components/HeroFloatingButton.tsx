import Button from "./Button";
import call from "../assets/svg/call.svg";

function HeroFloatingButton(): JSX.Element {
  return (
    <div className="absolute top-1/2 -left-6 -translate-y-1/2 -rotate-90">
      <Button className="flex items-center justify-center m-0">
        <img className="mr-2" src={call} alt="Call" width="15" height="15" />
        <span>+1 555 444 333</span>
      </Button>
    </div>
  );
}

export default HeroFloatingButton;
