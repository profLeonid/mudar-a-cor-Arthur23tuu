const botaoo = document.getElementById("botao");

/*
document faz o navegador olhar pro html todo

getElementById("botao") fala: me da o elemento que tem o id = botao

const botao = cria uma variável chamada botaoo

Isso significa: guarde na variavel botaoo o BOTÃO com o id botao
*/

let corAtual = "azul";

/*
let: cria variável que pode mudar

corAtual: nome da variável

"azul": valor inicial
*/

botaoo.addEventListener("click", function() {
   if (corAtual === "azul") {
        document.body.style.backgroundColor = "blue";
        corAtual = "amarelo";
    } else {
        document.body.style.backgroundColor = "yellow";
        corAtual = "azul";
    }
});

/*
addEventListener é "fique escutando um evento". os eventos podem ser: click, scroll, mouseover...

function(): função é um bloco de código que executa quando algo acontece. ta querendo dizer q quando clicar, faça o que esta dentro de {}

=   : atribui valor (coloca algo na variável)
==  : compara só o valor
=== : compara valor e tipo 

if (corAtual === "azul") é se a variável corAtual for igual a "azul"...

document.body.style.backgroundColor = "blue" muda a cor de fundo pra azul

corAtual = "amarelo" muda a variável corAtual pra "amarelo"

Se for azul, muda a tela para azul e atualiza a variável para "amarelo"

else:  se a variável corAtual não for "azul", ele muda pra amarelo a cor de fundoo e atribui "azul" como valor de corAtual...

O ciclo se repete
*/