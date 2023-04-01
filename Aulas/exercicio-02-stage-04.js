let students = [
    {
        name: "Gabriel",
        firtsNote: 9,
        secondNote: 7,
    },
    {
        name: "Miriã",
        firtsNote: 7,
        secondNote: 6,
    },
    {
        name: "Lucas",
        firtsNote: 1,
        secondNote: 10,
    },
    {
        name: "Juliana",
        firtsNote: 6,
        secondNote: 4,
    },
]

function caculateSchoolAverage(firtsNote, secondNote){
    let avarege = (firtsNote + secondNote) / 2;
    return avarege;
}   


function printAveregeNote(student){
    if (caculateSchoolAverage(student.firtsNote, student.secondNote) >= 7) {
        alert(`
        O ${student.name} possui a média de  ${caculateSchoolAverage(student.firtsNote, student.secondNote)}
        Parabéns, você passou com méritos
    `)
    } else {
        alert(`
        O ${student.name} possui a média de ${caculateSchoolAverage(student.firtsNote, student.secondNote)}
        Não desanime, continue tentando
    `)
    }
}

for(student of students){
    printAveregeNote(student)
}