![](https://i.imgur.com/xG74tOh.png)

## Exercício de casa 🏠

### Especificidade, herança e efeito cascata

**1.** Qual seletor abaixo tem uma especificidade maior (levando em consideração que queremos estilizar o h1)?

**a)** `div h1`
**b)** `h1`
**c)** `div.pai h1`
**d)** `div h1#titulo`

<details>
    <summary>Clique aqui para ver a resposta</summary>         Letra D - Porque ele contem um seletor de ID, que nenhuma outra opção contém
</details>

---

**2.** Qual seletor abaixo tem uma especificidade maior (levando em consideração que queremos estilizar o h1)?

**a)** `div#pai h1.titulo`
**b)** `div`
**c)** `#pai h1`
**d)** `div h1.titulo`

<details>
    <summary>Clique aqui para ver a resposta</summary>         Letra A - Porque as opções A e C contém a mesma quantidade de seletores de ID, porém a opção A contém um seletor de classe a mais.
</details>

---

**3.** Qual seletor abaixo tem uma especificidade maior (levando em consideração que queremos estilizar o h1)?

**a)** `div#pai .titulo`
**b)** `div h1.titulo`
**c)** `div#pai h1.titulo`
**d)** `#pai .titulo`

<details>
    <summary>Clique aqui para ver a resposta</summary>         Letra C - Porque as opções A e C contém a mesma quantidade de seletores de ID e de classe, porém a opção C contém um seletor tipo a mais.
</details>

---

**4.** Qual a cor da fonte do h1 abaixo, considerando o seguinte html e css?

html
```
<div>
    <h1>Olá!</h1>
</div>
```

css
```
div {
    color: white;
}
```

**a)** `cor padrão (black)`
**b)** `white`

<details>
    <summary>Clique aqui para ver a resposta</summary>         Letra B - Porque o h1 herda a cor do seu parente.
</details>

---

**5.** Qual a cor da fonte do h1 abaixo, considerando o seguinte html e css?

html
```
<div>
    <h1>Olá!</h1>
</div>
```

css
```
h1 {
    color: red;
}

div {
    color: white;
}
```

**a)** `cor padrão (black)`
**b)** `red`
**c)** `white`

<details>
    <summary>Clique aqui para ver a resposta</summary>         Letra B - Porque a cor herdada pelo h1 é sobrescrita pela regra feita diretamente nele.
</details>


---

**6.** Qual a cor da fonte do h1 abaixo, considerando o seguinte html e css?

html
```
<div>
    <h1>Olá!</h1>
</div>
```

css
```
h1 {
    color: red;
}

h1 {
    color: blue;
}
```

**a)** `cor padrão (black)`
**b)** `red`
**c)** `blue`
**d)** `white`

<details>
    <summary>Clique aqui para ver a resposta</summary>         Letra C - Porque seguindo a cascata, a regra com cor blue vem após a regra com cor red, logo, sobrescreve-a.
</details>

---

**7.** Qual a cor da fonte do span abaixo, considerando o seguinte html e css?

html
```
<div>
    <p class="paragrafo">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. <span>Delectus, ullam!</span>
    </p>
    <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. <span>Delectus, ullam!</span>
    </p>
</div>
```

css
```
span {
    color: red;
}

.paragrafo span {
    color: inherit;
}

```

**a)** `cor padrão (black)`
**b)** `red`
**c)** `blue`
**d)** `white`

<details>
    <summary>Clique aqui para ver a resposta</summary>         Letra A - Porque o ultimo seletor diz que todos os spans dentro de um elemento da classe paragrafo deve herdar a cor de seu parente, como nenhum de seus parentes modificou sua cor, ele herda a cor padrão
</details>

###### tags: `front-end` `módulo 1` `exercício de classe` `HTML` `CSS`