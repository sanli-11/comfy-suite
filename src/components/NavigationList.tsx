import { navigationItemsList } from "../constants/header";
import down from "../assets/svg/chevron-down.svg";

function NavigationList(): JSX.Element {
  return (
    <ul className="flex items-center justify-evenly">
      {navigationItemsList.map(item => (
        <li key={item.id} className="mx-6 font-semibold uppercase text-white">
          {item.haveChevron ?
            (
              <a href={item.href} className="flex justify-center items-center">
                <span>{item.name}</span>
                <img className="ml-1" src={down} alt="More" width="15" height="15" />
              </a>
            ) : (
              <a href={item.href}>
                <span>{item.name}</span>
              </a>
            )
          }
        </li>
      ))
      }
    </ul >
  );
}

export default NavigationList;
