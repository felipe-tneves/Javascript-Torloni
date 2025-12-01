//1
function conferirSequencia() {
    let primeiroNumero = parseInt(prompt("Digite o primeiro número: "));
    let segundoNumero = parseInt(prompt("Digite o segundo número: "));
    let terceiroNumero = parseInt(prompt("Digite o terceiro número: "));

    // 1 2 3 -  crescente
    //Utilizamos o IF toda vez que precisamos conferir algo
    if (primeiroNumero < segundoNumero && segundoNumero < terceiroNumero) {
        //Só entra neste bloco se for verdadeiro
        alert("Está em ordem crescente.");

    }

    //3 2 1
    //verificar o decrescente
    if (primeiroNumero > segundoNumero && segundoNumero > terceiroNumero) {
        alert("Está em ordem decrescente")

    }

    //verificar o aleatoria
    else {
        alert("Os números estão em ordem aleatória.")
    }

}

//2
function descontoNaCompra() {
    let valorTotalCompra = parseFloat(prompt("Digite o valor total da compra 💵:"));

    let desconto;

    if (valorTotalCompra <= 100) {
        desconto = 0;
    }
    // else if(valorTotalCompra > 100 && valorTotalCompra <= 200)
    else if (valorTotalCompra <= 200) {
        //desconto = 10/100;
        desconto = 0.1;
    }

    else {
        //desconto = 20/100;
        desconto = 0.2;
    }

    let valorFinal = valorTotalCompra - (valorTotalCompra * desconto);

    alert(valorFinal);

}

//3
function exibirNumerosPares() {
    for (let i = 2; i <= 10; i = i + 2) {
        console.log(i);
    }
}

//4
function somarSequenciaDeNumeros() {
    let numero = 1; //variavel inicializadora
    let soma = 0;

    //condicao
    while (numero <= 100) {
        soma = soma + numero; // Esta somando os numeros
        numero++; //incremento de cada volta
    }

    alert("A soma dos números de 1 a 100 é: " + soma);
}

//5
function verificarNumeroDigitado() {
    let numeroEscolhido = prompt("Digite um número: ");

    while (numeroEscolhido != 0) {
        numeroEscolhido = prompt("Por favor, digite novamente um número: ");
    }
}