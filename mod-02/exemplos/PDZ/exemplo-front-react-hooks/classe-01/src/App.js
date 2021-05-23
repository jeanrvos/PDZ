import { useState } from 'react';
import './App.css';

function App() {

    const [tarefas, setTarefas] = useState([]);
    const [filtro, setFiltro] = useState('todas');

    function handleAddTarefa(e) {
        if(e.key !== "Enter" || !e.target.value) return;

        const novaTarefa = { nome: e.target.value,  completada: false };
        setTarefas([...tarefas, novaTarefa]);
        e.target.value = '';
    }

    function handleCompletarTarefa (tarefa) {
        const novasTarefas = [...tarefas];
        const tarefaCompletada = novasTarefas.find(t => t.nome === tarefa.nome);
        tarefaCompletada.completada = !tarefaCompletada.completada;
        setTarefas(novasTarefas);
    }

    function handleExcluirTarefa(tarefa){
        const novasTarefas = tarefas.filter(t => t.nome !== tarefa.nome);

        setTarefas(novasTarefas);
    }

    function handleFiltros(novoFiltro) {
        setFiltro(novoFiltro);
    }

    function filtrarTarefas(tarefa) {
        if (filtro === 'todas') return tarefa;

        if (filtro === 'completadas' && tarefa.completada) return tarefa;

        if (filtro === 'ativas' && !tarefa.completada) return tarefa;
    }

    function handleLimparCompletadas() {
        const tarefasIncompletas = tarefas.filter(tarefa => !tarefa.completada);

        setTarefas(tarefasIncompletas);
    }

    function handleCompletarTodas() {
        const tarefasCompletadas = tarefas.map(tarefa => {
            return {
                nome: tarefa.nome,
                completada: tarefa.completada ? false : true
            }            
        });
        setTarefas(tarefasCompletadas);
    }

    return (
        <div>
            <h1>TAREFAS</h1>

            <button onClick={handleCompletarTodas}>( )</button>
            <input type="text" onKeyPress={handleAddTarefa} />

            <ul>
                {tarefas.filter(filtrarTarefas).map(tarefa => <li><input type="checkbox" checked={tarefa.completada} onChange={() => handleCompletarTarefa(tarefa)} />{tarefa.nome}<button onClick={() => handleExcluirTarefa(tarefa)}>X</button> </li>)}                
            </ul>
            <footer>
                <p>{tarefas.filter(tarefa => !tarefa.completada).length} tarefas restantes</p>
                <div>
                    <button onClick={() => handleFiltros('todas')} >Todas</button>
                    <button onClick={() => handleFiltros('ativas')}>Ativas</button>
                    <button onClick={() => handleFiltros('completadas')}>Completadas</button>
                </div>
                <button onClick={handleLimparCompletadas} >Limpar Completadas</button>
            </footer>
        </div>
    )
}

export default App;