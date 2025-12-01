// Faça um programa que receba a idade do usuário, enquanto a
// resposta do usuário for menor que 18 anos continue a solicitar a
// idade e mostre uma mensagem quando a idade do usuário for
// maior que 18.

let informesuaidade = parseInt(prompt("Qual é sua idade ?"))

while (informesuaidade < 18) {

    informesuaidade = parseInt(prompt("Qual é sua idade?"))
    
}

if(informesuaidade >= 18){

    alert("você e maior de 18 anos !!!")
}
