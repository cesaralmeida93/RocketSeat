// Criar um programa que calcula a média
// das turmas de alunos e envia
//mensagem do cálculo da média.

const alunosDaTurmaA = [
    {
        nome: "Cesar",
        nota: 9.8
    },
    {
        nome: "Bruno",
        nota: 10
    },
    {
        nome: "Heitor",
        nota: 2
    },
    {
        nome: "Mais um aluno",
        nota: 4.6
    }
]

const alunosDaTurmaB = [
    {
        nome: "Cleiton",
        nota: 6.7
    },
    {
        nome: "Manoel",
        nota: 9.2
    },
    {
        nome: "Diabo",
        nota: 3.4
    },
    {
        nome: "Novo Aluno",
        nota: 5
    }
]

// const nomesDeAlunos = ["Cesar", "Bruno", "Heitor"]

// console.log(nomesDeAlunos)

function calculaMedia(alunos) {
    let soma = 0
    for (let i = 0; i < alunos.length; i++) {
        soma = soma + alunos[i].nota
    }

    const media = soma / alunos.length
    return media
}

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB) 


function enviaMensagem(media, turma) {
    if (media > 5) {
        console.log(`A media da turma ${turma} foi de ${media}. Parabéns`)
    } else {
        console.log(`A média da turma ${turma} é menor que 5`)
    }
}


enviaMensagem(media1, 'turmaA')
enviaMensagem(media2, 'turmaB')


