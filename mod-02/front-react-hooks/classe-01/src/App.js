import { useState } from 'react';
import Tarefas from './components/Tarefas';
import Filtros from './components/Filtros';
import './App.css';

function App() {
    const [tarefas, setTarefas] = useState([]);
    const [filtro, setFiltro] = useState('todas');
    const [marcarTodas, setMarcarTodas] = useState("botao-inativo");

    function handleAddTarefa({ key, target}) {
        if(key !== "Enter" || !target.value) return;

        const novaTarefa = { nome: target.value,  completada: false };
        setTarefas([...tarefas, novaTarefa]);
        target.value = '';
    }

    function handleLimparCompletadas() {
        const tarefasIncompletas = tarefas.filter(tarefa => !tarefa.completada);

        setTarefas(tarefasIncompletas);
    }

    function handleCompletarTodas() {
        const tarefaPendente = tarefas.some(tarefa => !tarefa.completada);

        const estadoBotao = () => {
            if((marcarTodas === "botao-inativo" || marcarTodas === "botao-ativo") && tarefaPendente) {
                return "botao-ativo";
            } else {
                return "botao-inativo";
            }          
        }

        setMarcarTodas(estadoBotao);

        if(tarefaPendente) {
            const tarefasCompletadas = tarefas.map(tarefa => {
                return {
                    nome: tarefa.nome,
                    completada: true
                }            
            });            
            setTarefas(tarefasCompletadas);
        } else {
            const tarefasCompletadas = tarefas.map(tarefa => {
                return {
                    nome: tarefa.nome,
                    completada: false
                }            
            });
            setTarefas(tarefasCompletadas);
        }        
    }

    return (
        <div className="content">
            <h1>TAREFAS</h1>
            <div className="pesquisa card">
                <button onClick={handleCompletarTodas} className={marcarTodas}></button>
                <input type="text" className="inserir-tarefas" placeholder="Criar uma nova tarefa" onKeyPress={handleAddTarefa} />
            </div>  
            <div className="card">
                <Tarefas tarefas={tarefas} filtro={filtro} setTarefas={setTarefas} />    
            <footer>
                <p>{tarefas.filter(tarefa => !tarefa.completada).length} tarefas restantes</p>
                <Filtros setFiltro={setFiltro} />
                <button onClick={handleLimparCompletadas} className="limpar-completadas" >Limpar Completadas</button>
            </footer>
            </div>   
        </div>
    )
}

export default App;