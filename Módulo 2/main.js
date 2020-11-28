//Módulo 2
//Exercicío 1
//1.1
import classeUsuario from "./functions"
classeUsuario.info()

//1.2
import {idade} from "./functions"
console.log(idade)


import {default as Usuario, idade as idadeUsuario} from "./functions"

Usuario.info()
console.log(idadeUsuario)