import { hotelLocations } from "../constants/locations";
import QuickActionDate from "./QuickActionDate";
import QuickActionSelect from "./QuickActionSelect";
import QuickActionNumber from "./QuickActionNumber";
import Button from "./Button";

function FloatingActionBar(): JSX.Element {
  return (
    <aside className="relative bottom-8 left-0 right-0 mx-36 mb-0 border-t-2 border-orange-400 py-4 px-12 bg-overlay shadow-sm shadow-white/10">
      <form className="flex items-center justify-between">
        <QuickActionSelect className="basis-1/5" text="Location" form="quickadd" name="location" default="Select Location" options={hotelLocations} />
        <div className="flex justify-between items-center basis-1/4">
          <QuickActionDate form="quickadd" name="checkin" text="Check in" />
          <QuickActionDate form="quickadd" name="checkout" text="Check out" />
        </div>
        <div className="flex justify-between items-center basis-1/4">
          <QuickActionNumber form="quickadd" name="rooms" text="Rooms" />
          <QuickActionNumber form="quickadd" name="guests" text="Guests" />
        </div>
        <Button className="border-orange-400 bg-orange-400">Check Availability</Button>
      </form>
    </aside>
  );
}

export default FloatingActionBar;
