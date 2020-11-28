/*Exercício 4*/
const empresa = {
    nome : 'Rockeseat',
    endereco : {
        cidade : 'Rio do Sul',
        estado : 'SC',
    }
};
//4.1
let {nome} = empresa
let {cidade} = empresa.endereco
let {estado} = empresa.endereco

console.log(nome)
console.log(cidade)
console.log(estado)

//4.2
let usuario = {
    nome: 'Diego',
    idade: '23'
}
function mostraInfo({nome, idade}){
    return `${nome} tem ${idade} anos`
}

console.log(mostraInfo(usuario))