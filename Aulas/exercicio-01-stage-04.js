let numberOne = Number(prompt("Digite o 1° numero"));
let numberTwo = Number(prompt("Digite o 2° numero"));

const valueSum = numberOne + numberTwo;
const valueSub = numberOne - numberTwo;
const valueMul = numberOne * numberTwo;
const valueDiv = numberOne / numberTwo;
const valueResDiv = numberOne % numberTwo;

alert(`O valor da soma é ${valueSum}`);
alert(`O valor da subtração é ${valueSub}`);
alert(`O valor da Multiplicação é ${valueMul}`);
alert(`O valor da divisão é ${valueDiv}`);
alert(`O valor do resto da divisão é ${valueResDiv}`);


if(valueSum % 2 === 0) {
    alert("O valor da soma é PAR");
} else {
    alert("O valor da soma é IMPAR");
}

if (numberOne == numberTwo) {
    alert("Os dois numeros inseridos são IGUAIS")
} else {
    alert("Os dois numeros inseridos são DIFERENTES")
}