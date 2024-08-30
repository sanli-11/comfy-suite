import FloatingActionBar from "./components/FloatingQuickAction";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PopularLocations from "./components/PopularLocations";

function App() {
  return (
    <div className="overflow-hidden">
      <Header />
      <main className="bg-lessblack">
        <Hero />
        <FloatingActionBar />
        <PopularLocations />
      </main>
    </div>
  )
}

export default App;
