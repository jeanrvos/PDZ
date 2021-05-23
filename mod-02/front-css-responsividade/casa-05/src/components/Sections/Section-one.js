import './Section-one.css';
import keyboardImg from '../../assets/desktop/image-keyboard.jpg';

export default function SectionOne () {
    return (
        <section className="section-one">
            <div className="text">
                <h1>
                    TYPEMASTER
                    KEYBOARD
                </h1>
                <p>
                    Improve your productivity and gaming without breaking the bank. Upgrade to a high quality
                    mechanical typing experience.
                </p>
                <div className="buttons">
                    <button>PRE-ORDER NOW</button>
                    <button>RELEASE ON5/27</button>
                </div>
            </div>            
            <img src={keyboardImg} alt="" />
        </section>
    )
}