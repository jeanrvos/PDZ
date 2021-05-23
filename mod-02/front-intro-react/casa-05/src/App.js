import './App.css';

function App() {
  const periodoPreferido = 'tarde';
  const nascidoNoBrasil = true;
  const idade = 28;

  return (
    <div className="App">
      {/* if, else-if , else */}
      <div>
          <h1>Que seu período preferido do dia?</h1>
              {periodoPreferido === 'manha' ? (
                <div>
                  <h2>Manhã</h2>
                  <img src="/manha.jpg" alt="manhã" />
                </div>
              ) : periodoPreferido === 'tarde' ? (
                <div>
                  <h2>Tarde</h2>
                  <img src="/tarde.jpg" alt="tarde" />
                </div>          
              ) : (
                <div>
                  <h2>Noite</h2>
                  <img src="/noite.jpg" alt="noite" />
                </div>
              )}
      </div>

      <hr />
      {/* if, else */}
      {nascidoNoBrasil ? (
        <strong>Brasileiro</strong>
      ) : (
        <strong>Estrangeiro</strong>
      )}

      <br />

      {/* if */}
      {idade >= 18 ? (
        <strong>Maior de idade!</strong>
      ) : null    
      }
    </div>
  );
}

export default App;
