/*Exercício 2*/
import usuario from "./defineUsuario";

let usuarios: Array<usuario> = [
  { nome: "Diego", idade: 46, empresa: "Rocketseat", cpf: 12345678901 },
  { nome: "Anderson", idade: 12, empresa: "Rocketseat", cpf: 10987654321 },
  { nome: "José", idade: 22, empresa: "Rocketseat", cpf: 15975345698 },
  { nome: "Maria", idade: 18, empresa: "Rocketseat", cpf: 15478996541 },
  { nome: "Ivone", idade: 25, empresa: "Rocketseat", cpf: 49865730219 },
  { nome: "Letícia", idade: 14, empresa: "Rocketseat", cpf: 15978546235 },
];


type listaIdades = Array<number>;
let q1: listaIdades = usuarios.map((user) => user.idade);
console.table(q1)


type listaUsuarios = Array<usuario>;
let q2: listaUsuarios = usuarios.filter((usuario) =>
  usuario.empresa === "Rocketseat" && usuario.idade > 18 ? usuario : ""
);
console.table(q2)

let q3:any = usuarios.find((usuario:usuario)=>usuario.empresa ==="Google")
console.table(q3)

import multiplicacao from "./multiplicacao";
let q4:any = usuarios.map((usuario) => multiplicacao(usuario)).filter((usuario: usuario) => usuario.idade < 50);
console.table(q4)