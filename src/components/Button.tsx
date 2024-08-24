interface Prop {
  className?: string,
  children?: React.ReactNode,
}

function Button(props: Prop): JSX.Element {
  return (
    <button type="button" className={`${props.className} mx-3 border-2 px-4 py-2 uppercase text-white`}>
      {props.children}
    </button>
  );
}

export default Button;
