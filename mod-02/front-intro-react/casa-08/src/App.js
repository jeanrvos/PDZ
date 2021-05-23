import './App.css';
import CustomHeader from './components/Header';
import Card from './components/Card';
import { itens } from './exemplo-array';
import CustomFooter from './components/Footer';

function App() {
  return (
    <div className="App">
      <CustomHeader titulo="CubosFlix" logo={"/3d-glasses.png"} estilo={{color: "white", backgroundColor: "black"}} />
      <Card cardItems={itens} inicial={1} final={7}  />
      <CustomFooter titulo="Copyright © Cubos Academy" estilo={{color: "white", backgroundColor: "black"}} />
    </div>
  );
}

export default App;
