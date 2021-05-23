![](https://i.imgur.com/xG74tOh.png)

## Exercício de classe 🏫

### Fragmentos

```jsx
const glossario = [
  {
    termo: "HTML",
    definicao:
      "Linguagem de marcação responsável por definir a estrutura de uma página web"
  },
  {
    termo: "CSS",
    definicao: "Linguagem responsável por definir o estilo de uma página web"
  },
  {
    termo: "Javascript",
    definicao:
      "Linguagem de programação responsável por ditar o comportamento de uma página web"
  }
];

export default function App() {
    const [mostrando, setMostrando] = useState(false);

    return (
        <div>
            <h1>Meu app</h1>
            <button>{mostrando ? "Fechar" : "Abrir"} menu</button>

            {mostrando && (
                <>
                    <button>Adicionar entrada</button>
                    <button>Remover entrada</button>
                </>
            )}

            <dl>
                {glossario.map(entrada => (
                    <Fragment key={entrada.termo}>
                        <dt>{entrada.termo}</dt>
                        <dd>{entrada.definicao}</dd>
                    </Fragment>
                ))}
            </dl>
        </div>
    );
}
```

Modifique o código acima usando fragmentos de forma a remover as `div`s com classe `remover-div`.

Reflexões para após resolver o exercício:

- Em que situação precisamos usar fragmentos no React?
- Quando usar `<>` vs `<Fragment>`?

---

Preencha a checklist para finalizar o exercício:

- [ ] Resolver o exercício
- [ ] Adicionar as mudanças aos commits (`git add .` para adicionar todos os arquivos ou `git add nome_do_arquivo` para adicionar um arquivo específico)
- [ ] Commitar a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
- [ ] Pushar os commits na sua branch na origem (`git push origin nome-da-branch`)
- [ ] Realizar o pull request

###### tags: `React` `Fragment`
