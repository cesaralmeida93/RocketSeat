// CONSTRUÇÃO E IMPRESSÃO DE OBJETOS

const empresa = {
    nome: "RocketSeat",
    cor: "Roxo",
    foco: "Programação",
    endereco: {
        rua: "Rua Guilherme Gembala",
        numero: "260"
    }
}

console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereco.rua}, ${empresa.endereco.numero}`)

// VETORES E OBJETOS

const programador = {
    nome: "Cesar",
    idade: 27,
    tecnologias: [
        {
            nome: 'C++',
            especialidade: 'Desktop'
        },
        {
            nome: 'Python',
            especialidade: 'Data Science'
        },
        {
            nome: 'JavaScript',
            especialidade: 'Web/Mobile'
        }
    ]
};

console.log(`O usuário ${programador.nome} tem ${programador.idade} e usa a tecnologia ${programador.tecnologias[1].nome}`)