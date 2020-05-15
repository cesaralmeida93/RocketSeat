// CALCULO DE IMC

const nome = "César"
const altura = 1.80
const peso = 78

const imc = peso / (altura * altura)

if (imc >= 30) {
    console.log(`${nome} você está acima do peso`)
} else if (imc < 29.9) {
    console.log(`${nome} você não está acima do peso`)
}

// CALCULO DE APOSENTADORIA

const nome2 = "Silvana"
const sexo = "F"
const idade = 48
const contribuicao = 30

if (sexo == "F") {
    if(contribuicao >= 30 && (contribuicao + idade) >= 85) {
        console.log(`${nome2}, você pode se aposentar`)
    } else {
        console.log(`${nome2}, você ainda não pode se aposentar`)
    }
}

if (sexo == "M") {
    if(contribuicao >= 35 && (contribuicao + idade) >= 95) {
        console.log(`${nome2}, você pode se aposentar`)
    } else {
        console.log(`${nome2}, você ainda não pode se aposentar`)
    }
}