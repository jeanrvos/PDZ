import './Header.css';
import logo from '../../assets/shared/logo.svg';

export default function Header () {
    return (
        <header>
            <img src={logo} alt="logo Typemaster" />
            <button>PRE-ORDER NOW</button>
        </header>
    )
}