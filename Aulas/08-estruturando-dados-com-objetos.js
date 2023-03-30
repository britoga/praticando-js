/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes
*/

let patients = [
    {
        name: "Gabriel",
        age: 23,
        weight: 80,
        height: 175,
    },
    {
        name: "Pelé",
        age: 23,
        weight: 72,
        height: 170,
    },
    {
        name: "Miriã",
        age: 20,
        weight: 56,
        height: 170,
    },
]

let patientsNames = [];
let patientsAge = [];
let patientsWeight = [];
let patientsHeight = [];


for(patient of patients) {
    patientsNames.push(" " + patient.name)
    patientsAge.push(" " + patient.age)
    patientsWeight.push(" " + patient.weight)
    patientsHeight.push(" " + patient.height)
}

alert(`Os Pacientes ${patientsNames}
Tem ${patientsAge} anos
Pesam ${patientsWeight}
E medem ${patientsHeight} 
`)


// Forma mais longa de resolver o problema
// for(index = 0; index < patients.length; index++) {
//     patients[index] = patients[index].name
// }
