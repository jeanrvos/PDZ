import './App.css';

function App() {
  const tamanhoFonte = 16;
  return (
    <div className="App">
      <form>
        <input type="text" name="name" placeholder="Nome" maxlength="15" />
        <input type="text" name="email" placeholder="E-mail" />
        <input type="password" name="password" placeholder="Senha" />
        <input type="submit" value="Login" style={{borderRadius: "7px", backgroundColor: "green", color: "#fff", padding: "10px", marginTop: "20px", fontSize: tamanhoFonte}} />
      </form>
    </div>
  );
}

export default App;