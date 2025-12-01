let frutas = ["Goiaba", "Morango", "Melancia", "Uva", "Pera"]; //array/lista vazia
//0

let tarefasAlexia = ["Dar aula de Função e Objetos turma Torloni", "Corrigir as atividades Função e Objetos", "Lavar o banheiro após o trabalho"];

//length igual a comprimento, ou seja, a qtd de itens que a lista tem.
// console.log("A lista de frutas tem " + frutas.length + " itens.");

// console.log("A primeira fruta é a: " + frutas[0]);


//Acesse o item 4 da lista e exiba-o no console
// console.log("O item 4 da minha lista é: " + frutas[3]);

//exibe todas as frutas do array e com o seu formato
// console.log(frutas);

// for(let i = 0; i < frutas.length; i++){
//     console.log(frutas[i]);   
// }

//Crie uma lista de tarefas, contendo no max 10 itens
//E exiba cada tarefa

console.log("A lista de tarefas tem: " + tarefasAlexia.length + " itens.");

//versao mais enxuta do for tradicional
tarefasAlexia.forEach((fruta) => {
    console.log(fruta);
})
