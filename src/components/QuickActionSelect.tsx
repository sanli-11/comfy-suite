interface Prop {
  text: string,
  default: string,
  options: string[],
}

function QuickActionSelect(props: Prop): JSX.Element {
  return (
    <div className="flex flex-col items-start justify-start">
      <span className="pb-2 text-orange-800">{props.text}</span>
      <select className="w-40 bg-neutral-950 text-white">
        <option selected disabled hidden>{props.default}</option>
        {props.options.map((opt) => <option>{opt}</option>)}
      </select>
    </div>
  );
}

export default QuickActionSelect;
