
/*

Tipos de dados:

string
number
boolean
array
object
undefined
null


*/


// string
let nome = 'Thiago' // string
console.log (nome)

// string - concatenada (não se usa mais)
let sobrenome = 'Medeiros' // string
//console.log (nome + ' ' + sobrenome)

// string literal
console.log(`${nome} ${sobrenome}`)



// number
let idade = 35
console.log(idade)
console.log(idade + 10)

// number float
let porcentagem = 10.2
console.log(porcentagem + '%')



// boolean (true ou false)
let maiorDeIdade = true
console.log(maiorDeIdade)

let menorDeIdade = false
console.log(menorDeIdade)



// array
let habilidades = ['Javascript','Php','Python']
console.log(habilidades)
console.log(habilidades.length) 
console.log(habilidades[2])



// object

let pessoa = {
    nome: 'Fulano',
    sobrenome: 'da Silva',
    idade: 25,
    habilidades: ['c++','c#','Python']
}
console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa.habilidades[0])


// JSON (Javascript Object Notation) - procurar depois sobre

// undefined (foi declarada mas não definida)
let endereco
console.log(endereco)



// null ()
let cidade = null
console.log(cidade)