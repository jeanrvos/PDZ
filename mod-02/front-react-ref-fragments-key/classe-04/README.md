![](https://i.imgur.com/xG74tOh.png)

## Exercício de classe 🏫

### Contador configurável

```jsx
import { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [delaySegundos, setDelaySegundos] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(
        () => setCount((c) => c + step),
        delaySegundos * 1000
    );

    return () => clearInterval(intervalId);
  }, []);

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
```

Modifique o código acima para que:

- [ ] Ao mudar `step`, isso se reflita imediatamente no quanto o contador aumenta a cada passo
- [ ] Ao mudar `step`, a contagem de tempo não reinicie
- [ ] Ao mudar `delaySegundos`, mudar a duração de um passo

Reflexões para após resolver o exercício:

- Qual é a diferença em como lidamos com `step` e `delaySegundos`?
  - Os dois entram no array de dependências do useEffect? (segundo argumento)
  - Usamos `useRef` com os dois?
- Por que lidamos com esses dois estados de forma distinta?
  - <details><summary>Spoiler 👀</summary>Quem é usado dentro do callback do `setInterval` e quem é usado fora? Isso tem a ver?</details>

---

Preencha a checklist para finalizar o exercício:

- [ ] Resolver o exercício
- [ ] Adicionar as mudanças aos commits (`git add .` para adicionar todos os arquivos ou `git add nome_do_arquivo` para adicionar um arquivo específico)
- [ ] Commitar a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
- [ ] Pushar os commits na sua branch na origem (`git push origin nome-da-branch`)
- [ ] Realizar o pull request

###### tags: `React` `useRef` `useEffect`
