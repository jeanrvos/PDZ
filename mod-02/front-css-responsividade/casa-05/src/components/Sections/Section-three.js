import './Section-three.css';
import compatible from '../../assets/shared/icon-compatible.svg';
import bluetooth from '../../assets/shared/icon-bluetooth.svg';
import battery from '../../assets/shared/icon-battery.svg';
import light from '../../assets/shared/icon-light.svg';

const resourcesColumns = [
    {
      img: compatible,
      title: "HIGHLY COMPATIBLE",
      text: "Easy to use and works well with all major computer brands, gaming consoles and mobile devices. Plug & play, no installation or driver needed."
    },
    {
      img: bluetooth,
      title: "WIRELESS WITH BLUETOOTH",
      text: "Powerful 2.4G RF technology allows you to connect the cordless keyboard from up to 30ft away. Simply plug the unifying receiver into your computer."
    },
    {
      img: battery,
      title: "HIGH CAPACITY BATTERY",
      text: "Equipped with a long-lasting built-in battery, you’ll never have to spend a dime on replaceable ones. Enjoy 40 hours of usage time between charges."
    },
    {
      img: light,
      title: "RGB BACKLIT MODES",
      text: "Choose from 4 backlight brightness levels and adjustable breathing speed. Each key glows intensely in the dark and helps you type in low light conditions."
    }
  ]

export default function SectionThree () {
    return (
        <section className="section-three">
            {resourcesColumns.map(column => {
                return (
                    <div className="column">
                      <div className="icon">
                        <img src={column.img} alt="" />
                      </div>                       
                      <h2>{column.title}</h2>
                      <p>{column.text}</p>
                    </div>
                );                
            })};         
        </section>
    )
}