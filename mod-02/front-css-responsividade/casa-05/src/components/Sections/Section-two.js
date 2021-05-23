import './Section-two.css';
import keyboardImg2 from '../../assets/desktop/image-phone-and-keyboard.jpg';
import keyboardImg3 from '../../assets/desktop/image-glass-and-keyboard.jpg';

export default function SectionTwo () {
    return (
        <section className="section-two">
            <div className="images">
                <img className="img2" src={keyboardImg2} alt="" />
                <img className="img3" src={keyboardImg3} alt="" />
            </div>
            <div className="text">
                <h2>
                    MECHANICAL WIRELESS KEYBOARD
                </h2>
                <p>
                    The Typemaster keyboard boasts top-notch build and practical design. It offers a wide variety
                    of switches and keycaps, along with reliable wireless connectivity.
                </p>
            </div>            
        </section>
    )
}