// === Exercícios de Condicionais ===
// 1. Verifique se uma pessoa pode votar com base em sua idade.
function podeVotar(idade) {

    if (idade >= 16) {
        console.log("Pode votar");
    } else { 
        console.log("Não pode votar");
    }
    
}
podeVotar(13)

// 2. Determine o maior número entre três números.
function maiorNumero(a, b, c) {

// && significa e; || significa ou


if (a > b && a > c) {
    console.log(a + " é o maior numero"); 
    // concatenação
}

else if (b > a && b > c) {
    console.log(b+ " é o maior numero");
}

// não usar - if (c > b && c > a) { e ir direto para:
  
else {
    console.log(c+ " é o maior numero");
} 
}

maiorNumero(6, 4, 2)

// 3. Avalie se um número é positivo, negativo ou zero.
function tipoNumero(num) {
    
    if (num > 0) {
        console.log("numero é positivo");

    }
// um simbolo de = é atribuição. para representar o igual, precisa de 2 ==
    else if (num == 0) {
        console.log("numero é zero");
        
    }
    else {
        console.log("numero é negativo");
        
    }
}
tipoNumero (16)

// 4. Determine se uma loja está aberta com base na hora atual (0-23).
function lojaAberta(hora) {
    if (hora > 9 && hora < 18) {
        console.log("loja aberta");  
} else {
    console.log("Loja fechada");
}


}

    
lojaAberta (17)

// 5. Avalie se uma palavra é longa (mais de 10 caracteres).

let word = "constitucionalissimamente"

    if(word.length > 10) {
        console.log("a palavra é longa");  
       
    }
    else {
        console.log ("a palavra é curta"); 
    }


// === Exercícios de Laços de Repetição ===
// 1. Imprima os números de 1 a 10 usando um laço for.

for (let index = 1; index <= 10; index++) {
    console.log(index);
    
}

// 2. Use um for-of para imprimir cada letra de uma palavra.
let palavra = "JavaScript";
for (const letra of palavra) {
    console.log(letra);
}


// 3. Utilize for-of para imprimir cada palavra desta lista.
let listaDePalavras = ["Fernando", "Eduardo", "Brasil", "Reino Unido", "Japão", "Croácia"];
for (const palavra of listaDePalavras) {
    console.log(palavra)
    
}


// 4. Some os números de 1 a 100 usando while.
let i = 1
let r = 0
while (i <= 100) {
    r = r + i 
    i++;
}
console.log("o total da soma é:", r);

// 5. Use o método map para criar um novo array com o dobro dos valores do array original.

const valor = [1, 2, 3, 4, 5,]
let dobroValor = valor.map(valor=> valor * 2);
console.log(dobroValor);


// 6. Conte os números pares de 1 a 20 usando um laço for.

let pares = 0;
let listaDePares = [];
for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) { // Módulo = resto da divisão
    listaDePares.push(i); // Adiciona na lista
    }
}

console.log("Pares: ", listaDePares)


// === Exercícios de Métodos de Array ===
// 1. Use filter para encontrar todos os números maiores que 5 em um array.
let nums = [3, 7, 1, 8, 2, 9];
//                                     predicate
let maioresQueCinco = nums.filter(meuNumero => meuNumero > 5);
console.log("Maiores que cinco: ", maioresQueCinco);


// 2. Use find para localizar o primeiro número ímpar em um array.
let numerosAleatorios = [2, 4, 6, 7, 10, 12];

let primeiroNumeroImpar = numerosAleatorios.find(meuNumero => meuNumero %2 != 0)
console.log(primeiroNumeroImpar);


// 3. Filtre os nomes que começam com a letra "A".
let nomes = ["Ana", "João", "Amanda", "Carlos", "Alice"];
let nomesEscolhidos = nomes.filter(nome => nome.startsWith("A"))
console.log("Nomes escolhidos: ", nomesEscolhidos);

// 4. Localize o primeiro número maior que 50 em um array.
let valores = [10, 20, 55, 40, 60];

let primeiroNumeroMaior = valores.find(valor => valor > 50)
console.log("Maior que cinquenta: ", primeiroNumeroMaior);


// 5. Use filter para encontrar palavras com mais de 4 letras.
let palavras = ["gato", "elefante", "sol", "mar", "montanha"];

let palavrasQuatroLetras = palavras.filter(palavra => palavra.length > 4);
console.log(palavrasQuatroLetras)

// 6. Use filter para encontrar quais filmes tem o genero ação.
let filmes = [
    {
        nome: "Os Vingadores", 
        genero: "Açâo"
    },
    {
        nome: "A Lagoa Azul",
        genero: "Romance"
    },
    {
        nome: "O Bug da linha 42.",
        genero: "Terror"        
    },

    {
        nome: "novo filme",
        genero: "Açâo"
    }
];
let filmesdeAção = filmes.filter(f => f.genero == "Açâo");
console.log(filmesdeAção)
