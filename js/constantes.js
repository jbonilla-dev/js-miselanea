//exportando modulos
export const PI = Math.PI;

//Solo se exporta lo que se necesite
export let usuario = "Jon";
let password = "qwerty";

//FUNCION EXPRESADA (EL EXECUTION TIME ES DIFERENTE Y NO SE PUEDE DECLARAR "DEFAULT" EN ALGUNOS)
const hello = ()=> console.log("Hola");

//FUNCION DEFINIDA
//cuando se exporte esa funcion saludar se exporta automaticamente
export default function saludar(){
    console.log("Hola modulos +ES6")
}

//azucar sintactico las clases no trabajan en JS igual
export class Saludar{
    constructor(){
        console.log("Hola Clases +ES6");
    }
}