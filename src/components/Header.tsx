import Logo from "./Logo";
import NavigationList from "./NavigationList";
import Button from "./Button";

function Header(): JSX.Element {
  return (
    <header className="absolute top-0 left-0 right-0 z-10 mt-2 mx-8 flex items-center justify-between">
      <Logo />
      <NavigationList />
      <Button className="border-white bg-transparent">
        Online Booking
      </Button>
    </header>
  );
}

export default Header;
