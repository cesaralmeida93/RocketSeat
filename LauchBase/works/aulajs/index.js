const classA = [
    {
        name: "Cesar",
        grade: 9.8
    },
    {
        name: "Bruno",
        grade: 10
    },
    {
        name: "Heitor",
        grade: 2
    },
    {
        name: "Mais um student",
        grade: 4.6
    }
]

const classB = [
    {
        name: "Cleiton",
        grade: 6.7
    },
    {
        name: "Manoel",
        grade: 9.2
    },
    {
        name: "Diabo",
        grade: 3.4
    },
    {
        name: "Novo Aluno",
        grade: 5
    }
]

function calculateAverage(students) {
    let sum = 0

    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].grade
    }

    const average = sum / students.length

    return average
}

function sendMessage(average, turma) {
    if (average > 5) {
        console.log(`${turma} average: ${average.toFixed(2)}. Congrats`)
    } else {
        console.log(`${turma} average: ${average.toFixed(2)}. Is not good.`)
    }
}

function markAsFlunked(student) {
    student.flunked = false

    if (student.grade < 5) {
        student.flunked = true
    }
}

function sendFlunkedMessage(student) {
    if (student.flunked) {
        console.log(`${student.name} flunked!`)
    }
}

function studentsReprovados(students) {
    for (let student of students) {
        markAsFlunked(student)
        sendFlunkedMessage(student);
    }
}

const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)

sendMessage(average1, 'ClassA')
sendMessage(average2, 'ClassB')

studentsReprovados(classA)
studentsReprovados(classB)