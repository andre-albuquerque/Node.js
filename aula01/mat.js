let num = 70;
let num2 = 20;

function somar (a,b){
    return `Resultado da função utilizando Function padrão: ${a + b}`;
}

const soma = (a,b) => {
    return `Resultado da função utilizando ArrowFunction: ${a + b}`
}

console.log(somar(num, num2))
console.log(soma(num, num2))