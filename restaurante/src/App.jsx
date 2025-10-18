import './App.css';
import Categorias from "./components/categorias";
import Banner from "./components/banner";
import Cards from "./components/cards";

function App() {
  return (
    <div className="container">
      <Banner />

      <Categorias />
      
      <Cards />
    </div>
  );
}

export default App
