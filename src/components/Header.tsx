import Logo from "./Logo";
import NavigationList from "./NavigationList";

function Header(): JSX.Element {
  return (
    <header className="mt-6 mx-8 flex items-center justify-between">
      <Logo />
      <NavigationList />
    </header>
  );
}

export default Header;
