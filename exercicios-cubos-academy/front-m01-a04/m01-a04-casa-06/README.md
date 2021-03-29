![](https://i.imgur.com/xG74tOh.png)

# Front-end

## Exercícios de casa 🏠

### Unidades de comprimento e cores

#### Dado o html abaixo e um tamanho de fonte padrão de 16px:

```
<html>
  <body>
    <div class="pai">
      <div class="filho"></div>
    </div>
  </body>
</html>
```

**1.** Qual é a altura em pixels de .filho, dado o CSS abaixo? 

```
.pai {
  font-size: 20px;
}

.filho {
  height: 1em;
}
```

**a)** 16px
**b)** 1em
**c)** 12px
**d)** 20px

<details>
    <summary>Clique aqui para ver a resposta</summary>         Letra D - Porque a div .filho herdou os 20px de tamanho de fonte do pai e 1em equivale ao tamanho da fonte do elemento atual.
</details>

---

**2.** Qual é a altura em pixels de .filho, dado o CSS abaixo? 

```
.pai {
  font-size: 20px;
}

.filho {
  height: 1rem;
}
```

**a)** 16px
**b)** 1rem
**c)** 12px
**d)** 20px

<details>
    <summary>Clique aqui para ver a resposta</summary>         Letra A - Porque o valor da fonte do elemento root é 16px e 1rem equivale ao tamanho da fonte do elemento root.
</details>

---

**3.** Qual é a altura em pixels de .filho, dado o CSS abaixo? 

```
html {
  font-size: 30px;
}

.pai {
  font-size: 20px;
}

.filho {
  height: 1rem;
}
```

**a)** 3em
**b)** 1rem
**c)** 30px
**d)** 20px

<details>
    <summary>Clique aqui para ver a resposta</summary>         Letra C - Porque o valor da fonte do elemento root é 30px e 1rem equivale ao tamanho da fonte do elemento root.
</details>

---

**4.** Escolha a opção inválida

**a)** `#FFF`

**b)** `#2314` 

**c)** `#A5B7`

**d)** `#990C35`

**e)** `#492B1`

<details>
    <summary>Clique aqui para ver a resposta</summary>         Letra E. É inválido porque as sintaxes válidas são #RGB, #RGBA, #RRGGBB, #RRGGBBAA
</details>

---

**5.** Escolha a opção inválida

**a)** `#FFFFFF`

**b)** `#COFFEE` 

**c)** `#A4A5A6`

**d)** `#D9087B`

**e)** `#CB4CE5`

<details>
    <summary>Clique aqui para ver a resposta</summary>         Letra B. É inválido porque somente A, B, C, D, E, F e os números de 1 a 9 são valores válidos
</details>

---

**6.** Escolha a opção inválida

**a)** `rgba(0, 255, 128, 20)`

**b)** `rgba(0, 255, 128, 0)` 

**c)** `rgba(0, 255, 128, 50%)`

<details>
    <summary>Clique aqui para ver a resposta</summary>         Letra A. É inválido porque <code>a</code> só pode ser um número entre 0 e 1 ou uma porcentagem entre 0% e 100%
</details>

---

**7.** Escolha a opção mais transparente

**a)** `rgba(0, 255, 128, 100%)`

**b)** `rgba(0, 255, 128, 0)` 

**c)** `rgba(0, 255, 128, 50%)`

**d)** `rgba(0, 255, 128, 1)`

<details>
    <summary>Clique aqui para ver a resposta</summary>         Letra B. Porque quando menor o valor mais transparente é a cor, 0% = totalmente transparente e 100% totalmente opaco</details>

---

**7.** Escolha a opção válida

**a)** `rgb(0, 300, 255)`

**b)** `rgb(0, 128, 255)` 

**c)** `rgba(0, -1, 255)`

<details>
    <summary>Clique aqui para ver a resposta</summary>         Letra B. Porque os valores de <code>r</code>, <code>g</code> e <code>b</code> devem estar entre 0 e 255 </details>

---

**8.** Escolha a opção válida

**a)** `hsl(20deg, 25%, 50%)`

**b)** `hsl(20deg, 0.25, 50%)` 

**c)** `hsl(20deg, 0.25, 50%)`

**d)** `hsl(20deg, 25%, 50)`

**e)** `hsl(20px, 25%, 50%)`

<details>
    <summary>Clique aqui para ver a resposta</summary>         Letra A. Porque a sintaxe é <code>hsl(ângulo, porcentagem, porcentagem)</code></details>

---

Preencha a checklist para finalizar o exercício:

- [ ] Resolver o exercício

###### tags: `front-end` `módulo 1` `exercício de casa` `HTML` `CSS`