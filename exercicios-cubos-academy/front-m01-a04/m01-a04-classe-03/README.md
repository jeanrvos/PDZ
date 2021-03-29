![](https://i.imgur.com/xG74tOh.png)

# Front-end

## Exercícios de classe 🏫

### Algorítmo do Flex

**1.** Qual alternativa abaixo corresponde ao comportamento correto do uso da propriedade `flex-wrap` com o valor `wrap` em um container flex?

**a)** O container fará quebra de linha quando sua largura for menor que a soma da largura dos de seus itens;

**b)** O container não fará quebra de linha e os itens serão encolhidos ao máximo possível;

**c)** Os itens ocuparão todo espaço do container e não serão encolhidos;

**d)** A quebra de linha do container acontecerá de imediato, independente do tamanho dos itens.

<details>
    <summary>Clique aqui para ver a resposta</summary>         <b>Letra A</b>. Por padrão o container flex possui <code>flex-wrap: nowrap;</code> que não permite a quebra de linhas, fazendo com que seus itens ultrapasse o tamanho do container. Quando <code>flex-wrap: wrap;</code> é definido o container fará quebra de linha quando sua largura for menor que a soma da largura dos de seus itens.
</details>

---

**2.** Analise o código abaixo

```htmlembedded=
<!-- HTML -->

<html>
  <body>
    <div class="container">
      <div class="item"></div>
      <div class="item flex-grow-1"></div>
      <div class="item"></div>
    </div>
  </body>
</html>
```

```css=
/* CSS */

.container, .item {
    border: 2px solid black;
    border-radius: 8px;
    padding: 16px;
}

.container {
    background-color: #995db5;
    display: flex;
}

.item {
    background-color: #f7941f;
}

.flex-grow-1 {
    flex-grow: 1;
}
```

O resultado será a alternativa:

**a)**
![](https://i.imgur.com/P8ixz6S.png)

**b)**
![](https://i.imgur.com/LboY4AB.png)

**c)**
![](https://i.imgur.com/noh60J0.png)

**d)**
![](https://i.imgur.com/VzOEsxj.png)

<details>
    <summary>Clique aqui para ver a resposta</summary>         <b>Letra C</b>. O <code>flex-grow: 1;</code> apenas no segundo item faz com que ele ocupe todo espaço restante do container que não está sendo utilizado.
</details>

---

**3.** Dado o código abaixo

```htmlembedded=
<!-- HTML -->

<html>
  <body>
    <div class="container">
      <div class="item"></div>
      <div class="item"></div>
      <div class="item flex-shrink-0"></div>
    </div>
  </body>
</html>
```

```css=
/* CSS */

.container, .item {
    border: 2px solid black;
    border-radius: 8px;
    padding: 16px;
}

.container {
    background-color: #995db5;
    display: flex;
}

.item {
    background-color: #f7941f;
    flex-basis: 200px;
}

.flex-shrink-0 {
    flex-shrink: 0;
}
```

O resultado será o seguinte:

![](https://i.imgur.com/xKQM1OD.png)

Sabendo que, mesmo com todos os itens possuindo `flex-basis: 200px;`, o terceiro item ficou com seu tamanho maior em relação aos outros dois da esquerda. Nesse terceiro item, foi aplicado `flex-shrink: 0;`, com isso, podemos afirmar que:

**a)** Todos os itens que não possuem `flex-shrink: 0;` terão sempre `200px` de largura por conta do `flex-basis`;

**b)** O `flex-shrink: 0;` significa que o item onde ele é aplicado não encolhe abaixo de `flex-basis`;

**c)** Todos os itens que não possuem `flex-shrink: 0;` terão sempre a metade do tamanho do item que recebe `flex-shrink: 0;`;

**d)** O `flex-basis: 200px;` é aplicado somente aos itens que não possuem `flex-shrink: 0;`.

<details>
    <summary>Clique aqui para ver a resposta</summary>         <b>Letra B</b>.
</details>

---

**4.** Crie um layout que contenha um container flex sem quebra de linhas e dois flex itens, sendo que o segundo item terá que ocupar todo espaço restante do container e seu menor tamanho será `300px` de largura.

---

**5.** Crie um layout que contenha um container flex com quebra de linhas e três flex itens. O primeiro item terá possibilidade de crescer duas vezes mais que o segundo e o terceiro na mesma linha e todos os itens precisam ter ao menos `200px` de largura.

---

**6.** Recrie o layout da questão anterior e modifique os itens do container para que eles possam crescer por igual, mas que não haja quebra de linha quando seu menor tamanho possível (`200px`) for atingido.

---

Faça commit do resultado.

Preencha a checklist para finalizar o exercício:

-   [ ] Resolver o exercício

###### tags: `front-end` `módulo 1` `exercício de classe` `HTML` `CSS` `flex`
