import { ReactNode } from "react";

type Prop = {
  className: string,
  children?: ReactNode,
  title: string,
}

function SectionTitle(props: Prop): ReactNode {
  return (
    <div className={`text-white ${props.className}`} >
      <h3 className="font-serif text-5xl">{props.title}</h3>
      {props.children}
    </ div>
  );
}

export default SectionTitle;
