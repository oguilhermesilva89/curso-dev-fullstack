
// prompt não se usa mais19

/* let idade = prompt('Digite sua idade')

if (idade >= 18) {
    document.write('Ok, você é maior de idade')
} else if (idade === 15) {
    document.write('Você tem 15 anos')
} else {
    document.write('Você não pode acessar')
}
*/

let nome = prompt('Digite seu nome')

if (nome === 'Thiago' || 'thiago') {
    document.write(`Olá ${nome}, seja bem vindo!`)
} else {
    document.write('Você não tem acesso de administrador')
}