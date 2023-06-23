//llaves porque es como si en el objeto se importara

// { nombre de la funcion que exporte } from (ubicacion)
import { PI, usuario } from "./constantes.js";
import { sumar } from "./artimeticas.js";

console.log("Archivo modulos.js");

console.log(PI, usuario);
console.log(sumar(3, 4));
