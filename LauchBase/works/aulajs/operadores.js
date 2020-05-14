/*=================================================
    OPERADORES DE COMPARAÇÃO

    >       Maior
    <       Menor
    >=      Maior igual a
    <=      Menor igual a
    ==      Igual a
    ===     Igual e do mesmo tamanho
    !=      Diferente de
    !==     Diferente, inclusive do tipo

=================================================*/


// DESAFIO 1
// verificar se a pessoa é maior de 18 anos
// se sim, deixar entrar, se não, bloqueara entrada
// se a pessoa tiver 17 anos
// avisar para voltar quando fizer 18 anos
const idade = 18
if (!(idade >= 18) || idade === 17) {
    console.log('Bloquear a entrada')
} else {
    console.log('Deixar entrar')
}

/* ===========================
    OPERADORES LÓGICOS

    && "E" As duas condições devem ser verdadeiras
        para que a condição final seja verdadeira.
    || "OU" Uma das condições deve ser verdadeira
        para que a condição finalseja verdadeira.
    !   "NÂO" Nega uma condição

=============================*/

// console.log(5 == 5 && 6 == 6) // true
// console.log(5 == 5 && 6 != 6) // false

// console.log(5 == 5 || 6 == 6) // true
// console.log(5 == 5 || 6 != 6) // true

// console.log(!(5 > 6)) // true
// console.log(!(5 < 6)) // false

/*====================================
    OPERADORES ARITMÉTICOS

    *   Multiplicação
    /   Divisão
    %   Resto da divisão
    +   Adição
    -   Subtração
====================================*/

console.log(2 * 2) // 4
console.log(2 / 2) // 1
console.log(2 % 1.5) // 0.5
console.log(2 + 2) // 4
console.log(2 - 2) // 0
