![](https://i.imgur.com/xG74tOh.png)

## Exercício de classe 🏫

### Exercício 2

# Custom properties

1. Quais das opções abaixo são inválidas como nomes de custom properties? Por que?

    1. `--gap`
    2. `--meu-padding`
    3. `-padding`
    4. `largura`
    5. `--meu-1-padding`
    6. `--padding-do-@`

    <details><summary>Resposta</summary> 3, 4 e 6, porque nomes de varáveis CSS precisam começar com <code>--</code> e consistir de <b>letras, números e hífens</b></details>

2. Quais das opções abaixo são inválidas como valores de custom properties? Por que?

   1. 2
   2. 0.5rem
   3. 1deg, 2px
   4. flex
   5. "Olá, mundo!"
   6. 122, 63, 101

    <details><summary>Resposta</summary> Nenhuma 🤡, porque valores de variáveis CSS são incrivelmente permissivos</details>

3. Dado o CSS abaixo, qual vai ser o valor de `--gap` em `.pai`?

    ```css
        html .pai {
            --gap: 2em;
        }

        .pai {
            --gap: 1em;
        }
    ```

    <details><summary>Resposta</summary> 2em, já que <code>html .pai</code> é um seletor mais específico do que <code>.pai</code></details>

4. Dado o CSS abaixo, qual vai ser o valor de `--gap` em `.filho`?

    ```css
        .filho {
            --gap: 1px;
        }

        html .pai {
            --gap: 2em;
        }

        .pai {
            --gap: 1em;
        }
    ```

    <details><summary>Resposta</summary> 1px, já que o valor especificado no filho sobrescreve o valor herdado do pai</details>

---

Preencha a checklist para finalizar o exercício:

- [ ] Resolver o exercício
- [ ] Adicionar as mudanças aos commits (`git add .` para adicionar todos os arquivos ou `git add nome_do_arquivo` para adicionar um arquivo específico)
- [ ] Commitar a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
- [ ] Pushar os commits na sua branch na origem (`git push origin nome-da-branch`)
- [ ] Realizar o pull request

###### tags: `módulo 2` `front-end` `css` `responsividade` `media query`
