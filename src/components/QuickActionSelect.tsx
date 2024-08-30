interface Prop {
  className: string,
  text: string,
  form: string,
  name: string,
  default: string,
  options: { id: number, name: string }[],
}

function QuickActionSelect(props: Prop): JSX.Element {
  return (
    <div className={`flex flex-col items-start justify-start${props.className}`}>
      <label form={props.form} htmlFor={props.name} className="mb-1 text-orange-500">{props.text}</label>
      <select form={props.form} className="w-40 border-2 border-orange-400 py-1.5 px-2 bg-white text-black" name={props.name}>
        <option selected disabled hidden>{props.default}</option>
        {props.options.map((opt) => <option id={opt.id.toString()}>{opt.name}</option>)}
      </select>
    </div>
  );
}

export default QuickActionSelect;
