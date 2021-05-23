import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <strong>Quadrado Laranja</strong>
        <br/>
          <div className="quadrado laranja" style={{width:"300px", height:"300px", borderRadius: "7px"}}></div>
      </div>
      <div>
        <strong>Quadrado Azul</strong>
        <br/>
        <div className="quadrado azul" style={{border:"3px solid black", width: "200px", height: "200px"}}></div>
      </div>
      <div style={{marginLeft: "200px"}}>
        <strong>Quadrado Roxo</strong>
        <br/>
        <div className="quadrado roxo" ></div>
      </div>
    </div>
  );
}

export default App;
