// Criar um programa que calcula a média
// das notas entre os alunos e envia
//mensagem do cálculoda média.

const aluno01 = 'César'
const notaAluno01 = 9.8

const aluno02 = 'Will'
const notaAluno02 = 10

const aluno03 = 'Biel'
const notaAluno03 = 2

const media = (notaAluno01 + notaAluno02 + notaAluno03) / 3


// Se a média for maior que 5, parabenizar a turma
if (media > 5) {
    console.log(`A nota foi de ${media}. Parabéns`)
} else {
    console.log('A média é menor que 5')
}

