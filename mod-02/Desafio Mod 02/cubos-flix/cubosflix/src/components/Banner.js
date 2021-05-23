import { useEffect } from 'react';
import './Banner.css';

export default function Banner({ timerCupom, setTimerCupom, setCupomAplicado, cupomAplicado }) {
    useEffect(() => {
      const intervalID = setInterval(() => {
        if (timerCupom > 0 && !cupomAplicado) {
          setTimerCupom(prevTimer => prevTimer - 1);
        }
      }, 1000);

      return () => {
        clearInterval(intervalID);
      };
    }, []);

    function handleCupom() {
      const input = document.querySelector("#cupom");
      input.value = "HTMLNAOELINGUAGEM";
      input.disabled = true;
      setCupomAplicado("htmlnaoelinguagem");
    } 
  
  return (
      <div onClick={handleCupom} className='cupom'>
        <div className='tituloCupom'>
          <h2>aproveite agora</h2>
          <div className='codigoCupom'>
            <img src='/assets/images/coupon-circle-icon.svg' alt='Cupom de Desconto' />
            <p>cupom: htmlnaoelinguagem</p>
          </div>
        </div>
        <img src='/assets/images/divisor.svg' alt='' />
        <div className='contadorCupom'>
          <h3>finaliza em:</h3>
          <div className='contador'>
            <img src='/assets/images/time-icon.svg' alt='Contador' />
            <p>{`${String(Math.floor(timerCupom / 60)).padStart(2, "0")}:${String(
              timerCupom % 60
            ).padStart(2, "0")}`}</p>
          </div>
        </div>
        <img className='dinheiro' src='/assets/images/money.png' alt='' />
      </div>
    );
  }