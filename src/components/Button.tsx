interface Prop {
  className?: string,
  children?: React.ReactNode,
}

function Button(props: Prop): JSX.Element {
  return (
    <button type="button" className={`mx-3 border-2 px-4 py-2 font-bold uppercase text-white ${props.className}`}>
      {props.children}
    </button>
  );
}

export default Button;
