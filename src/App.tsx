import FloatingActionBar from "./components/FloatingQuickAction";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="overflow-hidden">
      <Header />
      <main className="bg-black">
        <Hero />
        <FloatingActionBar />
      </main>
    </div>
  )
}

export default App;
