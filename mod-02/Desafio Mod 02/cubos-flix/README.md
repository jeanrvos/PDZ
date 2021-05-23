![](https://i.imgur.com/xG74tOh.png)

# Desafio | Front-end - Módulo 2

O objetivo deste exercício é replicar [essa página](https://desafio-2-front-cubos-academy.netlify.app), encontrada no arquivo 'Desafio front academy 2.fig'.

## Funcionalidades obrigatórias
- **Header**
  - **Input de busca**
    - Ao clicar na lupa ou aperta a tecla `Enter` deverá filtrar os filmes por **nome**
- **Seção de Top Filmes**
  - A seção de Top Filmes deve exibir os 5 primeiros filmes da lista encontrada no arquivo 'data.js'
- **Seção de Filmes**
  - A seção de Filmes deve exibir todos os filmes da lista encontrada no arquivo 'data.js'
  - Ao clicar em uma categoria (ex: Ação, Romance, etc), apenas filmes dessa categoria devem ser exibidos na seção filmes (a seção de "Top Filmes" deve permanecer como está)
- **Banner de cupom de desconto**
  - Caso clicado, o cupom de desconto deve ser aplicado e o banner deve desaparecer
- **Sacola**
  - Adição/remoção de filmes
  - Deverá exibir o total da soma de todos os filmes adicionados
  - Ao clicar no botão de "sacola" dentro de um filme, esse filme deve ser adicionado à sacola
      - Caso ele não esteja na sacola, adicione-o com quantidade 1
      - Caso ele esteja na sacola, aumente a quantidade em 1
  - Caso o input de cupom de desconto esteja preenchido com o valor `htmlnaoelinguagem` e o usuário aperte a tecla `Enter`, um desconto de 10% deve ser aplicado no total da compra

## Funcionalidades não obrigatórias
- **Conceitos**
  - Não usar estado quando uma variável bastaria
  - Componentização e organização de código
  - Limpar efeitos (só é aplicável ao do `setInterval`)
- **Responsividade**
- **Banner de cupom de desconto**
  - O banner do cupom de desconto deve exibir uma contagem regressiva de 5 minutos a partir do momento em que a página abre
  - No fim do período de 5 minutos, o banner deve desaparecer
- **Sacola**
  - O desconto somente deve ser aplicado se o banner ainda estiver visível, seja por quê o usuário não clicou no banner ou pelo tempo de 5 minutos ainda não ter passado
  - Persistir o valor total e os itens adicionados no `localStorage`


**LEMBRE-SE**: é melhor feito do quê perfeito!!!


###### tags: `front-end` `módulo 2` `React` `CSS` `desafio`
