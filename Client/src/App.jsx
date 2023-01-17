import "./App.css";
import Landing from "./Componentes/Landing/Landing.jsx";
import Formulariolanding from "./Componentes/FormularioLanding/FormLanding";
import Card from "./Componentes/Card/Card";
import DetailCard from "./Componentes/DetailCard/DetailCard";

function App() {
  return (
    <div className='App'>
      <Landing />
      <Formulariolanding/>
      <Card/>
      <DetailCard/>
    </div>
  );
}

export default App;
