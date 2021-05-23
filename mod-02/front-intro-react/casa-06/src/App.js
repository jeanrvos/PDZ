import './App.css';

function App() {
  return (
    <div className="App">
      <form className="login">
        <label htmlFor="usuario">Usuário</label>
        <input id="usuario" />
        <label htmlFor="senha">Senha</label>
        <input type="password" id="senha" />
      </form>      
    </div>
  );
}

export default App;
