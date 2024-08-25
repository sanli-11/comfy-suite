import QuickActionDate from "./QuickActionDate";
import QuickActionSelect from "./QuickActionSelect";
import QuickActionNumber from "./QuickActionNumber";

function FloatingActionBar(): JSX.Element {
  const locationOptions: string[] = ["California", "New York"];

  return (
    <div className="border-y-2 border-orange-400 p-4 bg-neutral-950 flex items-center justify-between">
      <QuickActionDate text="Check in" />
      <QuickActionDate text="Check out" />
      <QuickActionNumber text="Rooms" />
      <QuickActionNumber text="Guests" />
      <QuickActionSelect text="Location" default="Select Location" options={locationOptions} />
    </div>
  );
}

export default FloatingActionBar;
