function exibirTabuadaEscolhida() {
    let tabuadaEscolhida = parseInt(prompt("Digite o número da tabuada desejada: "));


    console.log(`=====TABUADA ${tabuadaEscolhida}=======`);

    for (let i = 1; i <= 10; i++) {
        //      2 X 4 = ?
        console.log(tabuadaEscolhida + " X " + i + " = " + (tabuadaEscolhida * i));
    }
}

//Chama a minha função
// exibirTabuadaEscolhida();

//Crie uma função para que solicite o nome da pessoa e exiba-o
//Função com return
function exibirNomeSolicitado() {
    let nomeSolicitado = prompt("Digite seu nome");

    return nomeSolicitado;
}

//Criado uma variavel para guardar valor retornado
// let nome = exibirNomeSolicitado();

// alert(nome);

//com parametros
function somarDoisNumeros(numero1, numero2) {

    console.log(numero1 + numero2);
}

//passando valores via parametro
somarDoisNumeros(10, 10);


//Crie função para o exercicio 08 de Estrutura Condicional
//Passe via parametro o peso e a altura.

//1 coisa a se fazer - criar a estrutura da funçao com os seus devidos parametros ✅
//2 coisa - copiar o codigo do IMC ✅
//3 coisa - colar o codigo do IMC dentro da funçao ✅
//4 coisa - chamar a função e atribuir peso e altura ✅

function calcularIMC(peso, altura) {

    let IMC = peso / (altura * altura);

    if (IMC < 18.5) {
        alert("Abaixo do peso");
    }
    else if (IMC >= 18.5 && IMC <= 24.9) {
        alert("Peso normal");
    }
    else if (IMC >= 25 && IMC <= 29.9) {
        alert("Sobrepeso");
    }
    else if (IMC >= 30.0 && IMC <= 34.9) {
        alert("Obesidade grau 1");
    }
    else if (IMC >= 35.0 && IMC <= 39.9) {
        alert("Obesidade grau 2");
    }
    else {
        alert("Obesidade grau 3. Se cuide por favor, sua vida está em risco 🙏🥺");
    }
}

let pesoDigitado = parseFloat(prompt("Digite seu peso em quilograma: "));
let alturaDigitado = parseFloat(prompt("Digite sua altura: "));

calcularIMC(pesoDigitado, alturaDigitado);


