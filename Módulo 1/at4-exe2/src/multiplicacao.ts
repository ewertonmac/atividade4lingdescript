import usuario from "./defineUsuario";
export default function multiplicacao({ nome, idade, empresa, cpf }:usuario) {
  return {
    nome,
    idade: idade * 2,
    empresa,
    cpf,
  };
}
