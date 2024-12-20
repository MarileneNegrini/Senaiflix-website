// === Exemplo de condicionais ===
// 1. Utilize uma estrutura condicional para descobrir se a pessoa é maior de idade.
let idade = 20
if (idade >= 18) {
    console.log("É maior de idade");
} else { 
    console.log("Não é maior de idade");
}

                // 0       1            2                3
 let nomes = ["Thor", "Hulk", "Homem de ferro", "Homem-aranha"];
// === Exemplos de laço de repetição
// 1. Utilize a estrutura de repetição while para listar todos os nomes da lista no console.
let i = 0

// Enquanto i for menor que o comprimento de nomes, da lista
while (i < nomes.length) {
    console.log(nomes[i]);
    i++;
}

// estrutura que significa Para
// 1. cria uma variável
// 2. define quando o laço vai encerrar
// 3. define o que acontece a cada execução do laço
// 2. Utilize a estrutura de repetição for para listar todos os nomes da lista no console.
for (let index = 0; index < nomes.length; index++) {
    console.log(nomes[index]);
    
}
// for com sintaxe simplicafada
    for (const nome of nomes) {
        console.log(nome);
}


// 3. Utilize a estrutura de repetição map para listar todos os nomes da lista no console.
nomes.map(nome=> console.log())
// principal uso do map é modificar todos os elementos de uma lista
let novosNomes = nomes.map(nome=> "personagem: " + nome)
console.log(novosNomes);