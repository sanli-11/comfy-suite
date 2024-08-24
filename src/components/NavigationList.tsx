import { navigationItemsList } from "../constants/header";

function NavigationList(): JSX.Element {
  return (
    <ul className="flex items-center justify-evenly">
      {navigationItemsList.map(item => (
        <li key={item.id} className="mx-6 font-semibold uppercase text-white">
          <a href={item.href}>
            <span>{item.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default NavigationList;
