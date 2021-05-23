import './Tarefas.css';
import Tarefa from './Tarefa';

export default function Tarefas({tarefas, filtro, setTarefas}) {
    function handleCompletarTarefa (nome) {
        const novasTarefas = [...tarefas];
        const tarefaCompletada = novasTarefas.find(tarefa => tarefa.nome === nome);
        tarefaCompletada.completada = !tarefaCompletada.completada;
        setTarefas(novasTarefas);
    }

    function handleExcluirTarefa(nome){
        const novasTarefas = tarefas.filter(tarefa => tarefa.nome !== nome);

        setTarefas(novasTarefas);
    }

    function filtrarTarefas(tarefa) {
        if (filtro === 'todas') return tarefa;

        if (filtro === 'completadas' && tarefa.completada) return tarefa;

        if (filtro === 'ativas' && !tarefa.completada) return tarefa;
    }

    return (
        <ul className="lista-tarefas" >
            {tarefas.filter(filtrarTarefas).map(tarefa => <Tarefa tarefa={tarefa} completarTarefa={handleCompletarTarefa} deletarTarefa={handleExcluirTarefa} />)}                
        </ul>
    )
}