import './Header.css';

export default function CustomHeader(props) {
    return (
      <header>
        <div className="container-menu" style={props.estilo}>
          <img src={props.logo} alt="logo" />
          <h1>{props.titulo}</h1>
        </div>
      </header>
    );
  }