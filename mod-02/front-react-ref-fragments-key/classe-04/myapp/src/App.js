import './App.css';
import { useState, useEffect, useRef } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [delaySegundos, setDelaySegundos] = useState(1);
  const callbackRef = useRef();

  callbackRef.current = () => setCount(c => c + step);

  useEffect(() => {
    const intervalId = setInterval(
        () => callbackRef.current(),
        delaySegundos * 1000
    );

    return () => clearInterval(intervalId);
  }, [delaySegundos]);

  return (
    <div>
      <h1>{count}</h1>
      <label>
        Passo:
        <br />
        <input
          type="number"
          value={step}
          onChange={(ev) => setStep(ev.target.valueAsNumber)}
          min={0}
        />
      </label>
      <label>
        Delay:
        <br />
        <input
          type="number"
          value={delaySegundos}
          onChange={(ev) => setDelaySegundos(ev.target.valueAsNumber)}
          min={1}
        />
      </label>
    </div>
  );
}