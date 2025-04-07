//   O que precisamos fazer? - quando clicar no botão do personagem na lista temos que 
// marcar o botão como selecionado e mostrar o personagem correspondente

// OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar o botao como selecionado 
// passo 1 - pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um deles

const botoes = document.querySelectorAll('.botao');

// passo 2 - adicionar a classe "selecionado" no botão que o usuário clicou

botoes.forEach((botao, indice) => {
  botao.addEventListener("click", () => {

    // passo 3 - verificar se já existe um botão selecionado, se sim, devemos remover a seleção dele 

    const botaoselecionado = document.querySelector(".botao.selecionado")
    botaoselecionado.classList.remove("selecionado");

    botao.classList.add("selecionado");

    const personagemselecionado = document.querySelector(".personagem.selecionado");
    personagemselecionado.classList.remove("selecionado");

    personagens[indice].classList.add("selecionado");
  })
})

// OBJETIVO 2 - quando clicar no botão do personagem mostrar as informações do personagem
// passo 1 - pegar os personagens no JS pra poder mostrar ou esconder ele

const personagens = document.querySelectorAll(".personagem")

// passo 2 - adicionar a classe "selecionado" no personagem que o usuário selecionou
// ***foi adicionado junto com o FOREACH acima!!!
// personagens[indice].classList.add("selecionado");

// passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover
// a seleção dele
// TAMBÉM FEITA NO FOREACH ACIMA!!!
//const personagemselecionado = document.querySelector(".personagem.selecionado");
// personagemselecionado.classList.remove("selecionado");
