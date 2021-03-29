![](https://i.imgur.com/xG74tOh.png)

## Exercício de casa 🏠

### z-index e stacking contexts

**1.** Como podemos posicionar um elemento atrás de outro elemento não posicionado?

**a)** `z-index: 0;`
**b)** `z-index: -1;`
**c)** `z-index: 1;`
**d)** Não é possível

<details>
    <summary>Clique aqui para ver a resposta</summary>         Letra B - Pois a ordem é elementos com z-index negativo > elementos não posicionados > elementos posicionados com z-index auto > elementos posicionados com z-index maior ou igual a 1
</details>

---

**2.** Como podemos posicionar um elemento na frente de outro elemento posicionado com z-index *auto*?

**a)** `z-index: auto;`
**b)** `z-index: -1;`
**c)** `z-index: 1;`
**d)** `z-index: 0;`

<details>
    <summary>Clique aqui para ver a resposta</summary>         Letra C - Pois a ordem é elementos com z-index negativo > elementos não posicionados > elementos posicionados com z-index auto > elementos posicionados com z-index maior ou igual a 1
</details>

---

**3.** Como podemos posicionar um elemento na frente de outro elemento posicionado com z-index 999?

**a)** `z-index: auto;`
**b)** `z-index: 1;`
**c)** `z-index: 998;`
**d)** `z-index: 1000;`

<details>
    <summary>Clique aqui para ver a resposta</summary>         Letra C - Pois quanto maior o z-index do elemento, mais para frente ele estará
</details>

---

**4.** Como podemos posicionar a div da classe filho-um na frente da div da classe filho-dois?

html
```
<div class="pai-um">
    <div class="filho-um">
    </div>
</div>
<div class="pai-dois">
    <div class="filho-dois">
    </div>
</div>
```

css 
```
.pai-um, .pai-dois {
    position: relative;
}

.pai-um {
    z-index: 0;
}

.pai-dois {
    z-index: 1;
}
```

**a)** `z-index: 2;`
**b)** `z-index: 99999999999;`
**c)** `z-index: 1;`
**d)** Não é possível

<details>
    <summary>Clique aqui para ver a resposta</summary>         Letra D - Porque o .filho-um pertence a outro stacking context, que tem z-index menor do que o stacking context do .filho-dois
</details>

###### tags: `front-end` `módulo 1` `exercício de classe` `HTML` `CSS`