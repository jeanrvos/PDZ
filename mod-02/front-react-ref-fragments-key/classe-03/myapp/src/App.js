import './App.css';
import { useState, useRef } from 'react';

export default function App() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const userRef = useRef();
  const pwRef =  useRef();

  const handleSubmit = ev => {
    ev.preventDefault();
    if (!usuario) {
      return userRef.current.focus();
    }

    if (!senha) {
      return pwRef.current.focus();
    }

    alert("Submetido com sucesso!");
  }

  return (
      <div>
          <h1>Login</h1>

          <form onSubmit={handleSubmit}>
              <label>
                  Usuário
                  <input ref={userRef} value={usuario} onChange={ev => setUsuario(ev.target.value)} />
              </label>
              <label>
                  Senha
                  <input ref={pwRef} type="password" value={senha} onChange={ev => setSenha(ev.target.value)} />
              </label>
              <button>Fazer login</button>
          </form>
      </div>
  );
}
