function Logo(): JSX.Element {
  return (
    <div className="flex items-center justify-center">
      <div className="m-3 size-12 bg-red-400 rounded-full" />
      <div className="flex flex-col items-start justify-start text-white">
        <h1 className="text-xl font-bold leading-6">Comfy Suite</h1>
        <h2 className="uppercase font-light text-xs">Hotel Booking</h2>
      </div>
    </div>
  );
}

export default Logo;
