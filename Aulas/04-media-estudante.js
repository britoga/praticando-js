/*
  Solicitar o nome do aluno e as 3 notas
  do bimestre calcular a média daquele aluno.

  A média positiva deverá ser maior que 6

  Se o aluno passou no bimestre, dar os 
  parabéns.

  Se o aluno não passou no bimestre, 
  motivar o aluno a dar seu melhor na prova
  de recuperação.

  Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
*/

const studentName = prompt("Como você se chama?");

alert(`${studentName}, Agora vamos falar sobre suas 3 notas do bimestre, ok!?`)

const gradesOne = Number(prompt("Informe sua 1° nota"));
const gradesTwo = Number(prompt("Informe sua 2° nota"));
const gradesThree = Number(prompt("Informe sua 3° nota"));

const pointAverage = (gradesOne + gradesTwo + gradesThree) / 3;
const result = pointAverage.toFixed(2)

if (pointAverage >= 6) {
  alert("Parabéns, você passou!")
} else {
  alert("Não desanime, ainda teremos a prova de recuperação, boa sorte!")
}

alert(`O ${studentName} atingiu a média de ${result} pontos`)