interface Prop {
  text: string,
  form: string,
  name: string,
}

function QuickActionNumber(props: Prop): JSX.Element {
  return (
    <div className="flex flex-col items-start justify-start">
      <label form={props.form} htmlFor={props.name} className="mb-1 text-orange-500">{props.text}</label>
      <input form={props.form} className="w-40 border-2 border-orange-400 bg-white py-1.5 px-2 text-black" type="number" name={props.name} defaultValue={1} />
    </div>
  );
}

export default QuickActionNumber;
