![](https://i.imgur.com/xG74tOh.png)

## Exercício de classe 🏫

### Exercício 3

# `calc()`

1. Quais das opções abaixo são inválidas? Por que?

    1. `calc(100% - 1px)`
    2. `calc(1rem / 2)`
    3. `calc(5em * 50%)`
    4. `calc(10vw * (1px / 2))`
    5. `calc(10% * 2)`
    6. `calc(1% + 2)`

    <details><summary>Resposta</summary> 3, 4 e 6, por causa das <a href="https://apresentacao-css-avancado-responsividade.netlify.app/#/normal/35/0">regras de uso de operadores aritiméticos</a></details>

2. No CSS abaixo, qual é o valor computado de `border-width` em `.elemento`?

    ```css
        .elemento {
            font-size: 24px;
            border-width: calc(1em + 10px);
        }
    ```

    <details><summary>Resposta</summary> <code>34px</code>, porque <code>1em</code> vale <code>24px</code></details>

---

Preencha a checklist para finalizar o exercício:

- [ ] Resolver o exercício
- [ ] Adicionar as mudanças aos commits (`git add .` para adicionar todos os arquivos ou `git add nome_do_arquivo` para adicionar um arquivo específico)
- [ ] Commitar a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
- [ ] Pushar os commits na sua branch na origem (`git push origin nome-da-branch`)
- [ ] Realizar o pull request

###### tags: `módulo 2` `front-end` `css` `responsividade` `media query`
