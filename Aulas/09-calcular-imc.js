/* 
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC
*/

/* peso / (altura * altura) */

let patients = [
    {
        name: "Gabriel",
        age: 23,
        weight: 80,
        height: 1.75,
    },
    {
        name: "Pelé",
        age: 23,
        weight: 72,
        height: 1.70,
    },
    {
        name: "Miriã",
        age: 20,
        weight: 56,
        height: 1.70,
    },
]

function imcCalculate(weight, height) {
    let calculateImc = (weight / (height * height)).toFixed(2);
    // Caso no array o height não tivesse separado por ponto (1.75) teriamos que usar esse calculo
    // let calculateImc = (weight / ((height / 100) ** 2)).toFixed(2)
    return calculateImc; 
}

function printPatient(patient) {
    return `
        Paciente ${patient.name} possui o IMC de
        ${imcCalculate(patient.weight, patient.height)}
    `
}

for (let patient of patients) {
    let imcMessage = printPatient(patient);
    alert(imcMessage)
}

/* Outra forma de resolução, sem o alert dentro do FOR OF */

function IMC(weight, height) {
    let calculateIMC = (weight / (height * height)).toFixed(2);
    return calculateIMC;
}

function printPatientIMC(patient){
    let printPatient = alert(`
        O ${patient.name} possui o IMC de
        ${IMC(patient.weight, patient.height)}
    `)
    return printPatient;
}

for (let patient of patients) {
    printPatientIMC(patient)
}