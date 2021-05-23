import { useState } from 'react';
import './App.css';

function App() {

  const [contador, setContador] = useState(0);

  function handleClick(soma) {
    const novoContador = contador + soma;

    if(novoContador < 0 || novoContador > 100) return;

    setContador(novoContador);
  }

  return (
    <div className="App">
      <button onClick={() => handleClick(-10)}>-10</button>
      <button onClick={() => handleClick(-1)}>-</button>
      {contador}
      <button onClick={() => handleClick(+1)}>+</button>
      <button onClick={() => handleClick(+10)}>+10</button>
    </div>
  );
}

export default App;
