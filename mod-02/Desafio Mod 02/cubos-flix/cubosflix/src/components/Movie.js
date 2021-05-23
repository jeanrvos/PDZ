import './Movie.css';

export default function Movie (props) {
    function handleAdicionarNaSacola () {            
        const presenteNaSacola = props.filmesNaSacola.find(filme => filme.title === props.title);
    
        const novoFilmeNaSacola = {
            title: props.title,
            backgroundImg: props.backgroundImg,
            price: props.price,
            qtd:1
        };

        if (presenteNaSacola) {
            presenteNaSacola.qtd ++;
            props.setFilmesNaSacola([...props.filmesNaSacola]);
        } else {
            props.setFilmesNaSacola([...props.filmesNaSacola, novoFilmeNaSacola]);
        }    
    }

    function handleFavoritos () {
        const favoritos = props.movies.map(movie => {
            if(movie.title !== props.title) {
                return movie;
            } else {
                movie.isStarred = !movie.isStarred;
                return movie;
            }
        });
        props.setMovies(favoritos);
    }

    return (
        <div className="movie-poster" style={{backgroundImage:`url(${props.backgroundImg})`}}>
            <div className="poster-items">
                <svg onClick={handleFavoritos} className={props.isStarred ? "isStarred active" : "isStarred"} width="24" height="24" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 2L11.7961 7.52786H17.6085L12.9062 10.9443L14.7023 16.4721L10 13.0557L5.29772 16.4721L7.09383 10.9443L2.39155 7.52786H8.20389L10 2Z" stroke="white" stroke-opacity="0.83"/>
                </svg>            
                <div className="poster-footer">
                    <div className="movie-info">
                        <h2>{props.title}</h2>
                        <div className="movie-rating">
                            <img src="/assets/images/golden-star.svg" alt="" />
                            <p>{props.starsCount}</p>                    
                        </div>
                    </div>
                    <div onClick={handleAdicionarNaSacola} className="comprar">
                        <p>Sacola</p>
                        <p>R$ {`${(props.price.toFixed(2)).toString().replace(".", ",")}`}</p>
                    </div>
                </div>              
            </div>
        </div>
    )
}