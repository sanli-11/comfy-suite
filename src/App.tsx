import FloatingActionBar from "./components/FloatingQuickAction";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MostRatedHotels from "./components/MostRatedHotels";
import PopularLocations from "./components/PopularLocations";

function App() {
  return (
    <div className="overflow-hidden">
      <Header />
      <main className="bg-lessblack">
        <Hero />
        <FloatingActionBar />
        <PopularLocations />
        <MostRatedHotels />
      </main>
    </div>
  )
}

export default App;
