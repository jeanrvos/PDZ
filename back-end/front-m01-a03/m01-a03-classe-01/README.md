![](https://i.imgur.com/xG74tOh.png)

# Front-end | Módulo 01 - Aula 03

## Exercícios de classe 🏫

### 1. Recriar tela

O objetivo desse exercício é recriar a seguinte tela:

![](https://i.imgur.com/iVb7nZs.gif)

#### Especificações de estrutura
- div.card-principal
  - img com altura (*height*) máxima de 500px
  - h1
- div.card-curiosidades
  - h2
  - ul
    - li
- div.card-musicas
  - h2
  - div.card-banda
  - div.card-audio
- div.card-banda
  - a
    - img com altura (*height*) máxima de 150px
  - p
- div.card-audio
  - audio
  - p

#### Especificações de estilo (CSS separado)
- body
    - cor de fundo deve ser #F7F8F7, a fonte deve ser *cursive*, a cor dos textos deve ser #2C2D29 
- todos os textos com o nome do Godzilla devem ser da fonte *Godzilla* (se encontra na pasta assets) com falback para *monospace*
- .card-principal
  - img
    - deve estar centralizada, ter um borda arredondada em 25px e ter uma sombra 3px para baixo, com blur de 8px e cor preta (*black*)
  - h1
    - centralizado e com tamanho de fonte 60px
- .card-curiosidades
  - cor de fundo #FC4E1E, cor de texto #F7F8F7
  - li
    - texto justificado, tamanho de fonte 20px e estilo de lista *upper-roman* 
- .card-musicas
  - cor de fundo #FDB350
- ambos os h2 do .card-curiosidades e do .card-musicas
  - sem margem no topo, centralizado e com tamanho de fonte 32px
- .card-musicas e .card-curiosidades
  - borda arredondada em 10px, padding de 25px, largura (*width*) máxima de 50%, margem de 15px no topo e alinhado ao centro (centralize com as margens verticais)
- .card-banda
  - img
    - borda arredondada em 3px
  - a
    - sem decoração de texto
  - p
    - largura (*width*) máxima de 45%, texto justificado e margem na esquerda de 25px
- ambos os p do .card-banda e .card-audio
  - seu display deve ser inline-block, tamanho de fonte 16px e verticalmente alinhado ao topo
- .card-audio
  - margem no topo de 15px

---

Preencha a checklist para finalizar o exercício:

- [ ] Resolver o exercício
- [ ] Adicionar as mudanças aos commits (`git add .` para adicionar todos os arquivos ou `git add nome_do_arquivo` para adicionar um arquivo específico)
- [ ] Commitar a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
- [ ] Pushar os commits na sua branch na origem (`git push origin nome-da-branch`)
- [ ] Realizar o pull request

###### tags: `front-end` `módulo 1` `exercício de classe` `HTML` `CSS`
