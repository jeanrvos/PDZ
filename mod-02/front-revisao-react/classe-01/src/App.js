import { useState, useEffect } from "react";
import "./App.css";

const standardModes = [
  {
    content: "pomodoro",
    value: "pomodoro",
    duration: 25 * 60
  },
  {
    content: "short break",
    value: "short break",
    duration: 5 * 60
  },
  {
    content: "long break",
    value: "long break",
    duration: 15 * 60
  }
];

const fonts = [
  {
    name: "Kumbh Sans",
    fontClass: "kumbh"
  },
  {
    name: "Roboto Slab",
    fontClass: "roboto"
  },
  {
    name: "Space Mono",
    fontClass: "space"
  }
];

const colors = ["--red", "--cyan", "--purple"];

const standardMode = standardModes[0];

function App() {
  const [modes, setModes] = useState(standardModes);
  const [currentModeValue, setCurrentModeValue] = useState(standardMode.value);
  const [isCounting, setIsCounting] = useState(false);
  const [remainingTime, setRemainingTime] = useState(standardMode.duration);

  const [toggleModal, setToggleModal] = useState(false);
  const [currentFont, setCurrentFont] = useState(fonts[0].fontClass);
  const [currentColor, setCurrentColor] = useState(colors[0]);

  const minutes = String(Math.floor(remainingTime / 60)).padStart(2, "0");
  const seconds = String(remainingTime % 60).padStart(2, "0");

  const currentMode = modes.find((mode) => mode.value === currentModeValue);

  useEffect(() => {
    const mode = modes.find((mode) => mode.value === currentModeValue);
    setRemainingTime(mode.duration);
    setIsCounting(false);
  }, [currentModeValue, currentMode.duration, modes]);

  useEffect(() => {
    if (isCounting) {
      const intervalId = setInterval(() => {
        setRemainingTime((remainingTime) => {
          if (remainingTime > 0) {
            return remainingTime - 1;
          } else {
            return 0;
          }
        });
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [isCounting]);

  return (
    <div className={`App ${currentFont}`} style={{ "--highlight-color": `var(${currentColor})` }}>
      <h1>pomodoro</h1>

      <div className="mode">
        {modes.map((mode) => (
          <button className={currentModeValue === mode.value ? "selected" : ""} onClick={() => setCurrentModeValue(mode.value)}>{mode.content}</button>
        )        
        )}
      </div>

      <div className="outer-circle">
        <div className="inner-circle">
          <div className="time">
            {minutes}:{seconds}
          </div>
          <button onClick={() => {setIsCounting((isCounting) => !isCounting);}}>
            {isCounting ? "pause" : "start"}
          </button>
        </div>
      </div>

      <button className="settings" title="Settings" onClick={() => setToggleModal(true)}>
        <img src="/icon-settings.svg" alt="Settings" />
      </button>

      <div className={`overlay ${toggleModal ? "" : "closed"}`}>
        <div className="modal">
          <header>
            <h2>Settings</h2>
            <button
              aria-label="Close modal"
              title="Close modal"
              onClick={() => setToggleModal(false)}
            >
              &times;
            </button>
          </header>
          <hr />
          <form>
            <section className="time-settings">
              <h3>Time (minutes)</h3>
              <div className="side-by-side">
                {modes.map((mode) => (
                  <label>
                    <span class="label">{mode.content}</span>
                    <input
                      value={mode.duration / 60}
                      type="number"
                      min={1}
                      onChange={(event) => {
                        const newDuration = event.target.valueAsNumber;
                        setModes((modes) => {
                          return modes.map((newMode) => {
                            if (newMode.value === mode.value) {
                              return { ...newMode, duration: newDuration * 60 };
                            } else {
                              return newMode;
                            }
                          });
                        });
                      }}
                    />
                  </label>
                ))}
              </div>
            </section>
            <hr />
            <section className="font-settings">
              <h3>Font</h3>
              <div className="buttons">
                {fonts.map((font) => (
                  <button
                    type="button"
                    className={`${font.fontClass} ${font.fontClass === currentFont ? "selected" : ""
                      }`}
                    aria-label={font.name}
                    onClick={() => setCurrentFont(font.fontClass)}
                  >
                    Aa
                  </button>
                ))}
              </div>
            </section>
            <hr />
            <section className="color-settings">
              <h3>Color</h3>
              <div className="buttons">
                {colors.map((color) => (
                  <button
                    type="button"
                    className={`color ${color === currentColor ? "selected" : ""}`}
                    style={{ backgroundColor: `var(${color})` }}
                    onClick={() => setCurrentColor(color)}
                  >
                    <img src="/check-solid.svg" alt="" />
                  </button>
                ))}
              </div>
            </section>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
