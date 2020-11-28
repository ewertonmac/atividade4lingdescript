/*Exercício 1*/
class Usuario{
    constructor(nome, senha){
        this.nome = nome;
        this.senha = senha;
        this.admin = false;
    }
    isAdmin(){
        return this.admin;
    }
}

class Admin extends Usuario{
    constructor(nome, senha){
        super(nome,senha);
        super.admin = true;
    }
}

let usuario1 = new Usuario('Ewerton','123456');
let adm1 = new Admin('a@abc.com', '123456789');
console.log(usuario1.isAdmin());
console.log(adm1.isAdmin());