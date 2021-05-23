![](https://i.imgur.com/xG74tOh.png)

# Exercício de classe 🏫

## Modal e likes

Utilizando o `<script>` já presente na página:

**0)** Elementos que deveram ser selecionados com `querySelector() ou querySelectorAll()`:
  - todos os elementos com classe `.card`, a partir de agora chamados de **cards**
  - todos os `<i>` com classe `.fa-heart`, a partir de agora chamados de **corações**
  - o elemento com classe `.modal`, a partir de agora chamado de **modal**
  - o elemento com classe `.modal-content`, a partir de agora chamado de **imagem do modal**
  - o elemento com classe `.close`, a partir de agora chamado de **botão do modal**

**1)** Crie uma função chamada `curtir()`, ela vai receber como parametro um evento (`event`). Essa função deverá: 
 - Dar `toggle()` nas seguintes classes do `target`:
    - `curtido`
    - `far`
    - `fas`

**2)** Crie um event listener para o evento de clique para cada **coração**. Esse event listener terá como callback a função `curtir()`. O resultado disso é: ao clicarmos nos **corações**, eles deveram ficar vermelhos e preenchidos, e, ao clicarmos novamente, deveram voltar a ficar brancos e sem preenchimento.

**3)** Agora criaremos a função `abrirModal()`, ela vai receber como parametro um evento (`event`). Essa função deverá:
 - Adicionar a classe `modal-aberto` ao **modal**
 - Buscar a `<img>` de dentro do `target`
 - Trocar o `src` da **imagem do modal** pelo `src` da imagem buscada acima

**4)** Crie um event listener para o evento de clique para cada **card**. Esse event listener terá como callback a função `abrirModal()`. O resultado disso é: ao clicarmos nos **cards**, o **modal** deverá aparecer e sua imagem deve ser a mesma que a imagem clicada. Porém, ainda não conseguimos fecha-lo.

**5)** Crie um event listener para o evento de clique no **botão do modal**. Seu callback pode ser uma função anônima se desejar. Esse callback deverá:
 - Remover a classe `modal-aberto` ao **modal** 

**6)** O único problema agora é que, ao clicarmos em algum coração afim de darmos "like" na imagem, o evento de clique no card é escutado, assim abrindo o modal. Esse não é um comportamento esperado. Para resolvermos isto, devemos chamar a função `event.stopPropagation()` no fim da função `curtir()`.

---

Preencha a checklist para finalizar o exercício:

- [ ] Resolver o exercício
- [ ] Adicionar as mudanças aos commits (`git add .` para adicionar todos os arquivos ou `git add nome_do_arquivo` para adicionar um arquivo específico)
- [ ] Commitar a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
- [ ] Pushar os commits na sua branch na origem (`git push origin nome-da-branch`)
- [ ] Realizar o pull request

###### tags:  `front-end` `módulo 2` `exercício de classe` `DOM` `JS`
