import Logo from "./Logo";
import NavigationList from "./NavigationList";
import Button from "./Button";

function Header(): JSX.Element {
  return (
    <header className="absolute top-0 left-0 right-0 mt-6 mx-8 flex items-center justify-between">
      <Logo />
      <NavigationList />
      <Button className="border-orange-400 bg-orange-400">
        Online Booking
      </Button>
    </header>
  );
}

export default Header;
