![](https://i.imgur.com/xG74tOh.png)

## Exercício de classe 🏫

### Exercício 1

# Media queries

1. Dado o CSS abaixo, aplicado en um viewport de 700px, o elemento `.filho` vai ser visível ou não? Por que?

    ```css
        .filho {
            display: none;
        }

        @media (min-width: 700px) {
            .filho {
                display: block;
            }
        }
    ```

    <details><summary>Resposta</summary> Vai ser visível, porque media queries aplicam o CSS para tamanhos de viewport <b>maiores ou iguais ao viewport</b>!</details>

2. Dado o CSS abaixo, aplicado en um viewport de 700px, o elemento `.filho` vai ser visível ou não? Por que?

    ```css
        @media (max-width: 700px) {
            .filho {
                display: block;
            }
        }

        .filho {
            display: none;
        }
    ```

    <details><summary>Resposta</summary> Não vai ser visível, porque, apesar da condição da media query ser atingida, ela é sobrescrita logo em seguida. Lembre-se: media queries devem vir no final!</details>

3. Para que tamanhos de viewport a media query abaixo não se aplica? Por que?

    ```css
        @media (min-width: 300px) and (max-width: 700px) {}
    ```

    1. `400px`
    2. `100px`
    3. `600px`
    4. `800px`
    5. `300px`

    <details><summary>Resposta</summary> 2 e 4, porque a condição da media query é <code>300px <= largura do viewport <= 700px</code></details>

---

Preencha a checklist para finalizar o exercício:

- [ ] Resolver o exercício
- [ ] Adicionar as mudanças aos commits (`git add .` para adicionar todos os arquivos ou `git add nome_do_arquivo` para adicionar um arquivo específico)
- [ ] Commitar a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
- [ ] Pushar os commits na sua branch na origem (`git push origin nome-da-branch`)
- [ ] Realizar o pull request

###### tags: `módulo 2` `front-end` `css` `responsividade` `media query`
