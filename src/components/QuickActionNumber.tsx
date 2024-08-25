interface Prop {
  text: string,
}

function QuickActionNumber(props: Prop): JSX.Element {
  return (
    <div className="flex flex-col items-start justify-start">
      <span className="pb-2 text-orange-800">{props.text}</span>
      <input className="w-40 bg-neutral-950 text-white" type="number" />
    </div>
  );
}

export default QuickActionNumber;
