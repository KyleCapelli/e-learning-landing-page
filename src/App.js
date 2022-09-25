import "./App.css";
import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Tiles from "./components/Tiles/Tiles.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Tiles />
      <Footer />
    </div>
  );
}

export default App;
