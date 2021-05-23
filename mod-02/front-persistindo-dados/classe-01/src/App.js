import { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [tempo, setTempo] = useState(0);
  const [tema, setTema] = useState(localStorage.getItem('tema') ?? 'claro');
  const intervalId = useRef(null); 

  useEffect(() => {
    
    return () => {
      clearInterval(intervalId);
    }
  }, []);

  function mudarTema () {
    const novoTema = tema === 'claro' ? 'escuro' : 'claro';
    setTema(novoTema);

    localStorage.setItem('tema', novoTema);
  }

  function acionarPlay () {
    if(intervalId.current) return;

    intervalId.current = setInterval(() => {
      setTempo(prevTempo => prevTempo + 1);
    }, 1000);
  } 

  function acionarPause () {
    clearInterval(intervalId.current);
    intervalId.current = null;
  }

  function acionarStop () {
    setTempo(0);
    clearInterval(intervalId.current);
    intervalId.current = null;
  }

  function acionarReset () {
    setTempo(0);
  }

  return (
    <div className={tema}>      
      <button className="botao-tema" onClick={mudarTema}>Mudar tema</button>       
         
      <main className="cronometro">
        <div className="fundo-cronometro">
          <div className="display-cronometro">
            {/* colocar hora, min e segundo no p abaixo */}
            <p className="tempo">{tempo}</p>
            <span className="unidade">segundos</span>
            <div className="marca">
              <h1>VelasCron</h1>
              <h2>Stopwatch</h2>
            </div>
          </div>
        </div>       
      </main>
      
      <div className="botoes">
          {/* botao para chamar a funcao de iniciar a contagem */}
          <button className="botao-play" onClick={acionarPlay}>Iniciar</button>
          {/* botao para parar a contagem nos marcadores atuais */}
          <button className="botao-pause" onClick={acionarPause}>Pausar</button>
          {/* botao para parar a contagem e zerar os valores */}
          <button className="botao-stop" onClick={acionarStop}>Parar</button>
          {/* botao para resetar os valores sem parar a contagem */}
          <button className="botao-reset" onClick={acionarReset}>Resetar</button>
      </div> 
      <footer>
        created by jotavelasco
      </footer>
    </div>
  );
}

export default App;
