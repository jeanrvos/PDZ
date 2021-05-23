import './Tarefa.css';

export default function Tarefa({tarefa, completarTarefa, deletarTarefa}) {
    function handleChange() {
        completarTarefa(tarefa.nome);
    }

    function handleClick() {
        deletarTarefa(tarefa.nome);
    }

    return (
        <div className="li-container">
            <li className={tarefa.completada ? 'completada' : ''} >
                <label class="container">
                    <input type="checkbox" checked={tarefa.completada} onChange={handleChange} />
                    <span class="checkmark"></span>
                    <p>{tarefa.nome}</p>
                </label>
            </li>
            <button onClick={handleClick}>X</button>
        </div>
        
    )
}