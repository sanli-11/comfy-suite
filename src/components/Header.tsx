import Logo from "./Logo";

function Header(): JSX.Element {
  return (
    <header className="mt-6 mx-8 flex items-center justify-between">
      <Logo />
    </header>
  );
}

export default Header;
