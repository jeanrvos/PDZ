import { useEffect, useState } from 'react';
import Banner from './components/Banner';
import { Movies } from './data';
import Movie from './components/Movie';
import Filtros from './components/Filtros';
import BagMovies from './components/Bag-movies';
import './App.css';

function App() {

  const tempoCupom = 5 * 60;
  const [ filtro, setFiltro ] = useState('todos');
  const [busca, setBusca] = useState("");
  const [ cupom, setCupom ] = useState("Insira seu cupom");
  const [ timerCupom, setTimerCupom ] = useState(tempoCupom);
  const [ cupomAplicado, setCupomAplicado ] = useState("");
  const [ movies, setMovies ] = useState(Movies);
  const [ filmesNaSacola, setFilmesNaSacola ] = useState([]);  

  useEffect(() => {
    if (cupomAplicado === "htmlnaoelinguagem") {
      setCupom("");
    }
  }, [cupomAplicado]);

  function handleCupom({ key, target }) {
    if (key !== "Enter" || !target.value) return;

    if (target.value.toLowerCase() === "htmlnaoelinguagem" && timerCupom > 0) {
      setCupom ("");
      setCupomAplicado (target.value.toLowerCase());
      target.value = "HTMLNAOELINGUAGEM";
      target.disabled = true;
    } else {
      setCupom("Cupom inválido");
    }
  }

  function handlePrice() {
    let soma = 0;
    for (const movie of filmesNaSacola) {
      soma += movie.qtd * movie.price;
    }
    if (cupom === "") {
      return soma * 0.9;
    } else {
      return soma;
    }
  }

  function handleFilterSearch ({ key, target }) {
    if (key !== "Enter" || !target.value) return; 
    setBusca(target.value);
  }

  function handleClickSearch (event) {
    const input = document.querySelector('#search');
    setBusca(input.value);
  }

  function filterMovies(movies) {
    if (filtro === 'todos') return movies;

    if (filtro === 'acao' && movies.categories.includes('action')) return movies;

    if (filtro === 'romance' && movies.categories.includes('romance')) return movies;
    
    if (filtro === 'ficcao' && movies.categories.includes('science fiction')) return movies;

    if (filtro === 'terror' && movies.categories.includes('horror')) return movies;
  }

  return (
    <div className="App">
      <header>
        <div className="menu-container" >
            <img src="/assets/images/logo.svg" alt="logo" />
            <div className="input-container">
              <input id="search" type="text" placeholder="Pesquise filmes..." onKeyPress={handleFilterSearch} />
              <button onClick={handleClickSearch} type="button">
                <img src="./assets/images/search-icon.svg" alt="Search" />
              </button>
            </div>          
            <div className="favoritos">
              <img src="./assets/images/bookmark-icon.svg" alt="Favoritos" />
              <p>Favoritos</p>
            </div>
            <div className="promocoes">
              <img src="./assets/images/promotion-icon.svg" alt="Promoções" />
              <p>Promoções</p>
            </div>
            <div className="usuario">
              <p>Bem-vindo, <strong>Jeanrvos</strong></p>
              <img src="./assets/images/profile-pic.jpg" alt="Profile" />
            </div>
          </div>
      </header>

      <div className="content-container">
        <div className="main-content">
          {timerCupom > 0 && cupomAplicado !== "htmlnaoelinguagem" ? (<Banner timerCupom={timerCupom} setTimerCupom={setTimerCupom} cupomAplicado={cupomAplicado} setCupomAplicado={setCupomAplicado} />) : ("")}

          <section className="section-one">
            <p className="titulo">Top Filmes</p>
            <div className="container-movies">
              {Movies.map(item => {
                return (
                  <Movie title={item.title} backgroundImg={item.backgroundImg} isStarred={item.isStarred} starsCount={item.starsCount} price={item.price} filmesNaSacola={filmesNaSacola} setFilmesNaSacola={setFilmesNaSacola} movies={movies} setMovies={setMovies} />
                );
              }).slice(0, 5)
              }      
            </div>
          </section>

          <section className="section-two">
            <p className="titulo">Filmes</p>
            <Filtros setFiltro={setFiltro} />
            <div className="container-movies">
              {movies.filter(filterMovies).map(item => {
                if ((busca !== "" && item.title.includes(busca)) || busca === "") {
                  return (
                    <Movie title={item.title} backgroundImg={item.backgroundImg} isStarred={item.isStarred} starsCount={item.starsCount} price={item.price} filmesNaSacola={filmesNaSacola} setFilmesNaSacola={setFilmesNaSacola} movies={movies} setMovies={setMovies} />
                  );
                } else {
                  return "";
                } 
              })}      
            </div>
          </section>

        </div>    
        <div className="aside">
          <div className="sacola">
            <div className="bag-header">
              <img src="/assets/images/bag-icon.svg" alt="" />
              <p>Sacola</p>
            </div>
            <div className="bag-content">
              <BagMovies filmesNaSacola={filmesNaSacola} setFilmesNaSacola={setFilmesNaSacola} />
            </div>
            <div className="bag-footer">
              <p>{cupom}</p>
              <div className='divInputCupom'>
                <input onKeyPress={handleCupom} id='cupom' type='text' placeholder='Cupom de desconto' />
                <img src='/assets/images/coupon-icon.svg' alt='Código de Cupom' />
              </div>
              {filmesNaSacola.length > 0 ? (<button>{`Confirme seus dados R$ ${String(handlePrice().toFixed(2)).replace(".", ",")}`}</button>) : ("")}
            </div>
          </div>
        </div>    
      </div>      
    </div>
  );
}

export default App;