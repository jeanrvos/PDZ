import './Card.css';

export default function Card(props) {
    return (
      <div className="container-cards">
        {props.cardItems.map(item => {
          return (
            <div className="card">
            <img src={item.image} alt={item.title} />
            <h2>{item.title}</h2>
          </div>
          );
        }).slice(props.inicial-1, props.final)
        }      
      </div>
    );
}