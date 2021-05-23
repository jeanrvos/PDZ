import './Bag-movies.css';
import BagMovie from './Bag-movie';


export default function BagMovies(props) {
  return (
    <main className={props.filmesNaSacola.length === 0 ? "empty" : "full"}>
      {props.filmesNaSacola.length === 0 ? (
        <div>
          <h2>Sua sacola está vazia</h2>
          <p>Adicione filmes agora</p>
          <img src='/assets/images/person-illustration.svg' alt='' />
        </div>
      ) : (
        ""
      )}
      {props.filmesNaSacola.map(item => {
        return (
          <BagMovie
            title={item.title}
            backgroundImg={item.backgroundImg}
            qtd={item.qtd}
            price={item.price}
            filmesNaSacola={props.filmesNaSacola}
            setFilmesNaSacola={props.setFilmesNaSacola}
          />
        );
      })}
    </main>
  );
}
