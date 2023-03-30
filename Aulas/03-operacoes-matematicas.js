/*
  Capturar 2 números
  e fazer as operações matemáticas
  de soma, subtração, multiplicação,
  divisão e resto da divisão.

  E para cada operação, mostrar um alerta
  com o resultado.
*/

let numberOne = (Number(prompt("Digite o Primeiro numero")));
let numberTwo = (Number(prompt("Digite o Segundo numero")));

let resultSum = numberOne + numberTwo;
let resultSub = numberOne - numberTwo;
let resultDiv = numberOne / numberTwo;
let resultMut = numberOne * numberTwo;
let restDiv = numberOne % numberTwo;

alert("Soma " + resultSum)
alert("Subtração " + resultSub)
alert("Divisão " + resultDiv)
alert("Multiplicação " + resultMut)
alert("Resto Divisão " + restDiv)