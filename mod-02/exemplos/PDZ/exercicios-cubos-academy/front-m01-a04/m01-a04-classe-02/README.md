![](https://i.imgur.com/xG74tOh.png)

# Front-end

## Exercícios de classe 🏫

### Container VS Item Flex

**1.** A imagem abaixo possui uma propriedade CSS usada indevidamente.

![](https://i.imgur.com/pYMfeYj.png)

Marque a alternativa que justifica o uso indevido dessa propriedade

**a)** A propriedade `flex-grow` não pode ser usada em um item flex;

**b)** A propriedade `align-self` não pode ser usada em um container, ao menos que ele seja também um item flex;

**c)** O uso da propriedade `display` teria que ser na classe `.item` para que eles fossem um item flex;

**d)** A propriedade `flex-grow` teria que receber o valor `center`;

<details>
    <summary>Clique aqui para ver a resposta</summary>         <b>Letra B</b>. Para que a propriedade <code>align-self</code> possa ser usada ela precisa ser aplicada dentro de elementos que possuam <code>display:flex;</code>, ou seja, em containers flex.
</details>

---

**2.** Analise o código que está nos arquivos da pasta `questao02` e modifique o CSS de forma que os itens do container fiquem centralizados no eixo cruzado e o primeiro item consiga crescer o dobro do segundo.

---

**3.** Analise o código que está nos arquivos da pasta `questao03` e modifique o CSS de forma que os itens do container fiquem centralizados no eixo cruzado e o segundo item consiga diminuir o triplo do primeiro. Dica: para testar se sua solução está correta, redimensione a janela de seu navegador até faltar espaço no container flex e veja se o encolhimento acontece na proporção esperada.

---

**4.** Analise o código que está nos arquivos da pasta `questao04` e modifique o CSS de forma que os itens do container fiquem dispostos na vertical, centralizados no eixo cruzado e que o segundo item não seja menor que `300px`.

---

**5.** Crie uma tela usando os arquivos da pasta `questao05` que atenda os requisitos a seguir:

- Contenha um flex container com `300px` de altura e três flex itens;
- Os itens serão centralizados no eixo direto e cruzado;
- Cada item só poderá diminuir até `200px` e caso chegue em seu limite de tamanho;
- O item do meio deverá estar posicionado no rodapé do container.

---

Faça commit do resultado.

Preencha a checklist para finalizar o exercício:

- [ ] Resolver o exercício

###### tags: `front-end` `módulo 1` `exercício de classe` `HTML` `CSS` `flex`
