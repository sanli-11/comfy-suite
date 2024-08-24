import Button from "./Button";
import left from "../assets/svg/chevron-left.svg";
import right from "../assets/svg/chevron-right.svg";

function HeroButtons(): JSX.Element {
  return (
    <div className="absolute bottom-6 right-4 flex items-end justify-end">
      <Button className="border px-2">
        <img src={left} alt="Previous" width="20" height="20" />
      </Button>
      <Button className="border px-2">
        <img src={right} alt="Next" width="20" height="20" />
      </Button>
    </div>
  );
}

export default HeroButtons;
