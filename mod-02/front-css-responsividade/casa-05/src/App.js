import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SectionOne from './components/Sections/Section-one';
import SectionTwo from './components/Sections/Section-two';
import SectionThree from './components/Sections/Section-three';
import Footer from './components/Footer/Footer';

const resourcesColumns = [
  {
    img: '../assets/shared/icon-compatible.svg',
    title: "HIGHLY COMPATIBLE",
    text: "Easy to use and works well with all major computer brands, gaming consoles and mobile devices. Plug & play, no installation or driver needed."
  },
  {
    img: "../assets/shared/icon-bluetooth.svg",
    title: "WIRELESS WITH BLUETOOTH",
    text: "Powerful 2.4G RF technology allows you to connect the cordless keyboard from up to 30ft away. Simply plug the unifying receiver into your computer."
  },
  {
    img: "../assets/shared/icon-battery.svg",
    title: "HIGH CAPACITY BATTERY",
    text: "Equipped with a long-lasting built-in battery, you’ll never have to spend a dime on replaceable ones. Enjoy 40 hours of usage time between charges."
  },
  {
    img: "../assets/shared/icon-battery.svg",
    title: "RGB BACKLIT MODES",
    text: "Choose from 4 backlight brightness levels and adjustable breathing speed. Each key glows intensely in the dark and helps you type in low light conditions."
  }
]

function App() {
  return (
    <div className="App">
      <Header />
      <SectionOne />
      <div className="gray-square-element"></div> 
      <div className="gray-square-element2"></div>   
      <SectionTwo />  
      <SectionThree resources={resourcesColumns}/> 
      <Footer />
      
    </div>
  );
}

export default App;
