import Button from "./Button";
import left from "../assets/svg/chevron-left.svg";
import right from "../assets/svg/chevron-right.svg";

type Prop = {
  className: string,
}

function ArrowButtons(props: Prop): JSX.Element {
  return (
    <div className={`flex items-end justify-end ${props.className}`}>
      <Button className="border px-2">
        <img src={left} alt="Previous" width="20" height="20" />
      </Button>
      <Button className="border px-2">
        <img src={right} alt="Next" width="20" height="20" />
      </Button>
    </div>
  );
}

export default ArrowButtons;
