import { useState } from 'react';
import './Filtros.css';

export default function Filtros({ setFiltro }) {
    const [filtroAtivo, setFiltroAtivo] = useState('todos');

    function handleFiltros(novoFiltro) {
        setFiltroAtivo(novoFiltro);
        setFiltro(novoFiltro);
    }

    return (
        <div className="container-filtros">
            <button onClick={() => handleFiltros('todos')} className={filtroAtivo === 'todos' ? 'filtro filtro-ativo' : 'filtro'}>Todos</button>
            <button onClick={() => handleFiltros('acao')} className={filtroAtivo === 'acao' ? 'filtro filtro-ativo' : 'filtro'}>Ação</button>
            <button onClick={() => handleFiltros('romance')} className={filtroAtivo === 'romance' ? 'filtro filtro-ativo' : 'filtro'}>Romance</button>
            <button onClick={() => handleFiltros('ficcao')} className={filtroAtivo === 'ficcao' ? 'filtro filtro-ativo' : 'filtro'}>Ficção científica</button>
            <button onClick={() => handleFiltros('terror')} className={filtroAtivo === 'terror' ? 'filtro filtro-ativo' : 'filtro'}>Terror</button>        
        </div>
    )
}