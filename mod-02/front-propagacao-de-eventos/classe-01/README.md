![](https://i.imgur.com/xG74tOh.png)

# Exercício de classe 🏫

## Feed de redes sociais

Utilizando o `<script>` já presente na página:

**1)** Crie um event listener para o evento de clique no `<button>` com callback a função `carregarMais()`. Perceba que desse jeito, a quantidade de elementos criados pode aumentar se você clicar mais de uma vez. Esse não é um comportamento esperado, o normal seria apenas carregar X elementos por clique, não X * quantidades de cliques.
Se este exemplo estivesse chamando uma API para buscar os dados, cada clique seria uma requisição na API o que pode consumir muita banda (internet) do usuário e sobrecarregar a API.

**2)** Ajuste o event listener para que o callback seja executado apenas 1 vez. Agora não temos mais o problema de múltiplos elementos, porém, só conseguimos carregar mais elementos 1 vez.

**3)** Ao final da função `requisicao()`, crie novamente um event listener como no passo **1** (não se esqueça do ajuste que fizemos no passo **2**). Finalmente, temos o comportamento esperado. Carregamos a mesma quantidade de elementos independente da quantidade de cliques do usuário

---

Preencha a checklist para finalizar o exercício:

- [ ] Resolver o exercício
- [ ] Adicionar as mudanças aos commits (`git add .` para adicionar todos os arquivos ou `git add nome_do_arquivo` para adicionar um arquivo específico)
- [ ] Commitar a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
- [ ] Pushar os commits na sua branch na origem (`git push origin nome-da-branch`)
- [ ] Realizar o pull request

###### tags:  `front-end` `módulo 2` `exercício de classe` `DOM` `JS`
