/* 
  Solicite 2 números, faça a soma deles
  e apresente o resultado final ao usuário
*/


alert("Iremos somar 2 números")
let numberOne = (Number(prompt("Digite o primeiro numero da soma")));
let numberTwo = (Number(prompt("Digite o segundo numero da soma")));

let result = numberOne + numberTwo;

alert(`A soma entre o ${numberOne} e o ${numberTwo} é ${result}`)