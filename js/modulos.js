//llaves porque es como si en el objeto se importara

// { nombre de la funcion que exporte } from (ubicacion)
import saludar,{Saludar, PI, usuario } from "./constantes.js";
import { aritmetica as  calculos} from "./artimeticas.js";
//alias abreviacion ↑↑↑
console.log("Archivo modulos.js");

console.log(PI, usuario);
console.log(calculos.sumar(3, 4));
saludar();

let saludo = new Saludar();
saludo;

