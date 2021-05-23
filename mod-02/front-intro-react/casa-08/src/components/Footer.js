import './Footer.css';

export default function CustomFooter(props) {
    return (
      <footer style={props.estilo}>
        {props.titulo}
      </footer>
    );
  }