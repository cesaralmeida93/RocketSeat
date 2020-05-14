// Criar um programa que calcula a média
// das notas entre os alunos e envia
//mensagem do cálculoda média.

const alunos = [
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
    }
]

const nomesDeAlunos = ["Cesar", "Bruno", "Heitor"]

console.log(alunos)

const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3


// Se a média for maior que 5, parabenizar a turma
if (media > 5) {
    console.log(`A nota foi de ${media}. Parabéns`)
} else {
    console.log('A média é menor que 5')
}

