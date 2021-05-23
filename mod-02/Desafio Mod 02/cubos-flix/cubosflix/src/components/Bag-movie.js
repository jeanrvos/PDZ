import './Bag-movie.css';

export default function BagMovie (props) {
    function handlePlus() {
        const addFilmeNaSacola = props.filmesNaSacola.find(item => item.title === props.title);
        addFilmeNaSacola.qtd ++;
        props.setFilmesNaSacola([...props.filmesNaSacola]);
      }
    
      function handleMinus() {
        const removerFilmeDaSacola = props.filmesNaSacola.find(item => item.title === props.title);
        if (removerFilmeDaSacola.qtd === 1) {
          const indice = props.filmesNaSacola.indexOf(removerFilmeDaSacola);
          props.filmesNaSacola.splice(indice, 1);
        } else {
          removerFilmeDaSacola.qtd --;
        }
        props.setFilmesNaSacola([...props.filmesNaSacola]);
      }
    
      return (
        <div className='bag-movie-container'>
          <div className='movie-details'>
            <img src={props.backgroundImg} alt='' />
            <div className='text'>
              <p>{props.title}</p>
              <p>{`R$ ${String(props.price.toFixed(2)).replace(".", ",")}`}</p>
            </div>
          </div>
          <div className='quantity'>
            <svg onClick={handlePlus} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_b)">
            <rect width="24" height="24" fill="black" fill-opacity="0.37"/>
            </g>
            <line x1="11.75" y1="4" x2="11.75" y2="19" stroke="#6FCF97" stroke-width="1.5"/>
            <line x1="19" y1="11.75" x2="4" y2="11.75" stroke="#6FCF97" stroke-width="1.5"/>
            <defs>
            <filter id="filter0_b" x="-15" y="-15" width="54" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feGaussianBlur in="BackgroundImage" stdDeviation="7.5"/>
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur" result="shape"/>
            </filter>
            </defs>
            </svg>
            <p>{props.qtd}</p>
            {props.qtd === 1 ? (
              <svg onClick={handleMinus} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_c)">
              <rect width="24" height="24" fill="black" fill-opacity="0.37"/>
              </g>
              <path opacity="0.4" d="M19.325 9.46777C19.325 9.46777 18.782 16.2028 18.467 19.0398C18.317 20.3948 17.48 21.1888 16.109 21.2138C13.5 21.2608 10.888 21.2638 8.28003 21.2088C6.96103 21.1818 6.13803 20.3778 5.99103 19.0468C5.67403 16.1848 5.13403 9.46777 5.13403 9.46777" stroke="#FF7366" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M20.7082 6.23926H3.75024" stroke="#FF7366" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M17.4406 6.23949C16.6556 6.23949 15.9796 5.68449 15.8256 4.91549L15.5826 3.69949C15.4326 3.13849 14.9246 2.75049 14.3456 2.75049H10.1126C9.53358 2.75049 9.02558 3.13849 8.87558 3.69949L8.63258 4.91549C8.47858 5.68449 7.80258 6.23949 7.01758 6.23949" stroke="#FF7366" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <defs>
              <filter id="filter0_c" x="-15" y="-15" width="54" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feGaussianBlur in="BackgroundImage" stdDeviation="7.5"/>
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur" result="shape"/>
              </filter>
              </defs>
              </svg>
            ) : (
              <svg
                onClick={handleMinus} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d)">
                <rect width="24" height="24" fill="black" fill-opacity="0.37"/>
                </g>
                <path d="M20.7082 11.5H3.75024" stroke="#FF7366" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <defs>
                <filter id="filter0_d" x="-15" y="-15" width="54" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feGaussianBlur in="BackgroundImage" stdDeviation="7.5"/>
                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur" result="shape"/>
                </filter>
                </defs>
                </svg>
            )}
          </div>
        </div>
      );
}