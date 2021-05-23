import { useState } from 'react';
import './Filtros.css';

export default function Filtros({ setFiltro }) {
    const [filtroAtivo, setFiltroAtivo] = useState('todas');

    function handleFiltros(novoFiltro) {
        setFiltroAtivo(novoFiltro);
        setFiltro(novoFiltro);
    }

    return (
        <div className="container-filtros">
            <button onClick={() => handleFiltros('todas')} className={filtroAtivo === 'todas' ? 'filtro filtro-ativo' : 'filtro'}>Todas</button>
            <button onClick={() => handleFiltros('ativas')} className={filtroAtivo === 'ativas' ? 'filtro filtro-ativo' : 'filtro'}>Ativas</button>
            <button onClick={() => handleFiltros('completadas')} className={filtroAtivo === 'completadas' ? 'filtro filtro-ativo' : 'filtro'}>Completadas</button>
        </div>
    )
}