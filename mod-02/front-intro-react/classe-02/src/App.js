import './App.css';

function App() {
  const itens = [
    {
      id: 1,
      title: "RV Acima em Diante",
      image: "https://ghcdn.rawgit.org/pexilis/Loopstudios-landing-page/master/images/desktop/image-from-above.jpg",
    },
    {
      id: 2,
      title: "Arcarde Noturno",
      image: "https://ghcdn.rawgit.org/pexilis/Loopstudios-landing-page/master/images/desktop/image-night-arcade.jpg",
    },
    {
      id: 3,
      title: "RV Futebol",
      image: "https://ghcdn.rawgit.org/pexilis/Loopstudios-landing-page/master/images/desktop/image-soccer-team.jpg",
    },
    {
      id: 4,
      title: "A Grid",
      image: "https://ghcdn.rawgit.org/pexilis/Loopstudios-landing-page/master/images/desktop/image-grid.jpg",
    },
    {
      id: 5,
      title: "A Curiosidade",
      image: "https://ghcdn.rawgit.org/pexilis/Loopstudios-landing-page/master/images/desktop/image-curiosity.jpg",
    },
    {
      id: 6,
      title: "Olho de Peixe",
      image: "https://ghcdn.rawgit.org/pexilis/Loopstudios-landing-page/master/images/desktop/image-fisheye.jpg",
    },
    {
      id: 7,
      title: "Boreal Pocket",
      image: "https://ghcdn.rawgit.org/pexilis/Loopstudios-landing-page/master/images/desktop/image-pocket-borealis.jpg",
    }
  ];

  return (
    <div className="App">
      {itens.map(item => {
        return (
          <div className="card" key={item.id}>
          <img src={item.image} alt={item.title} />
          <h2>{item.title}</h2>
        </div>
        );
      })
      }
    </div>
  );
}

export default App;
