// USUARIOS E TECNOLOGIAS

const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["Javascript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
];

for (let usuario of usuarios) {
    console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(', ')}`)
} 

// BUSCA POR TECNOLOGIA

function checaSeUsuarioUsaCSS(usuario) {
    for (tecnologia of usuario.tecnologias) {
        if (tecnologia == "CSS") return true
    }
    return false
}

for (let i = 0; i < usuarios.length; i++) {
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i])

    if(usuarioTrabalhaComCSS) {
        console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
    }
}

// SOMA DE DESPESAS E RECEITAS

const users = [
    {
      nome: "Salvio",
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: "Marcio",
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: "Lucia",
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
  ]

function calculaSaldo(receitas, despesas) {
    const somaReceita = somaNumeros(receitas)
    const somaDespesa = somaNumeros(despesas)

    return somaReceita - somaDespesa
}

function somaNumeros(numeros) {
    let soma = 0

    for(numero of numeros) {
        soma += numero
    }

return soma
}

for (let user of users) {
    const saldo = calculaSaldo(user.receitas, user.despesas)

    if (saldo > 0) {
        console.log(`${user.nome} possui saldo POSITIVO de ${saldo.toFixed(2)}`)
    } else {
        console.log(`${user.nome} possui saldo NEGATIVO de ${saldo.toFixed(2)}`)
    }
}