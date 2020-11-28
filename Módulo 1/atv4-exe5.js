/*Exercício 5*/
const arr = [1, 2, 3, 4, 5, 6];
//5.1
let [x, ...y] = arr;
console.log(x, y);

function soma(...params) {
  return params.reduce((acc, nxt) => (acc += nxt));
}

console.log(soma(1, 2, 3, 4, 5, 6));
console.log(soma(1, 2));

//5.2
const usuario = {
  nome: "Diego",
  idade: 23,
  endereco: { cidade: "Rio do Sul", uf: "SC", pais: "Brasil", },
};

let usuario2 = { ...usuario, nome: "Gabriel" };
let usuario3 = { ...usuario, endereco: {...usuario.endereco, cidade: "Lontras" } };

console.log(usuario);
console.log(usuario2);
console.log(usuario3);
