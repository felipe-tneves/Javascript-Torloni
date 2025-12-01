let mercedes = {
    modelo: "G63", //característica - propriedades
    ano: 2025,
    fabricante: "mercedes",
    cor: "preto fosco",
    acelerar() { //comportamentos - métodos
        console.log("Acelerando...vrum...vrumm...");
    },
    freiar() {
        console.log("Freiando....");
    }
};

console.log(mercedes.modelo);
console.log(mercedes.acelerar());


//Criar um objeto Professor Tadeu ou Jonas
// 3 propriedades nome, NIF, salario
// 2 comportamentos atribuirNota e baterPonto
// Além disso, escolha mais uma propriedade e mais um comportamento

let professoraAlexia = {
    nome: "Aléxia Vitória M. P.",
    NIF: 1111112,
    salario: 9990.90,
    dataNasc: new Date(2001, 3, 30),
    hobbies: ["correr", "jogar clash"],

    atribuirNota() { },
    baterPonto() {
        let horarioBatido = new Date(2025, 10, 28, 17, 5);

        console.log(horarioBatido);
        
    }
};



console.log(professoraAlexia.hobbies);
console.log(professoraAlexia.dataNasc);
console.log(professoraAlexia.baterPonto());
