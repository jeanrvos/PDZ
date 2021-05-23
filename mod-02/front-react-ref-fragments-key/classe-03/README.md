![](https://i.imgur.com/xG74tOh.png)

## Exercício de classe 🏫

### Foco automático

```jsx
export default function App() {
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");

    return (
        <div>
            <h1>Login</h1>

            <form onSubmit={ev => {
                ev.preventDefault();
            }}>
                <label>
                    Usuário
                    <input value={usuario} onChange={ev => setUsuario(ev.target.value)} />
                </label>
                <label>
                    Senha
                    <input type="password" value={senha} onChange={ev => setSenha(ev.target.value)} />
                </label>
                <button>Fazer login</button>
            </form>
        </div>
    );
}
```

Modifique o código acima usando `useRef` para que, ao submeter o formulário com algum campo vazio, esse campo ganhe foco.

- [ ] Se ambos os campos estiverem vazios, o campo de usuário deve ganhar foco
- [ ] Se somente um campo estiver vazio, ele ganha foco
- [ ] Se ambos estiverem preenchidos, mostrar uma mensagem de sucesso usando `alert`

Reflexões para após resolver o exercício:

- Em que situações **não** precisamos usar `useRef` com elementos HTML no React?

<details>
<summary>Dicas para após o exercício</summary>

Não se usa `useRef` com elementos HTML para adicionar ouvintes de evento, modificar o conteúdo do elemento ou modificar atributos de um elemento, já que o React já torna isso fácil. Usamos `useRef` para casos que o React não cobre, como `elemento.focus()` e outras APIs _imperativas_.

</details>

---

Preencha a checklist para finalizar o exercício:

- [ ] Resolver o exercício
- [ ] Adicionar as mudanças aos commits (`git add .` para adicionar todos os arquivos ou `git add nome_do_arquivo` para adicionar um arquivo específico)
- [ ] Commitar a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
- [ ] Pushar os commits na sua branch na origem (`git push origin nome-da-branch`)
- [ ] Realizar o pull request

###### tags: `React` `useRef`
