//des-estructuracion de datos importando modulos 

import { barcelona, roma, paris, londres } from "./2-cities.js";

// Obtain elements from DOM

//todos los selectores que sean 'a'
let enlaces = document.querySelectorAll('a');
let tituloElemento = document.getElementById('titulo');
let subTituloElemento = document.getElementById('subtitulo');
let parrafoElemento = document.getElementById('parrafo');

console.log(enlaces);

//add element click to every link

enlaces.forEach(function(enlace){
    // seems like the HTML's onclick event
    enlace.addEventListener('click', function(){

        //remove "active" class from every link
        enlaces.forEach(function(enlace){
            enlace.classList.remove('active');
        });

        //adding "active" class to the current link 
        this.classList.add('active');

        //obtain the concerned content for the link
        let contenido = obtenerContenido(this.textContent);

        //Show content
        tituloElemento.innerHTML = contenido.titulo;
        subTituloElemento.innerHTML = contenido.subtitulo;
        parrafoElemento.innerHTML = contenido.parrafo;

    })
});


function obtenerContenido(enlace){
    let contenido = {
        'Barcelona' : barcelona,
        'Roma' : roma,
        'Paris' : paris,
        'Londres' : londres,
    }
    return contenido[enlace];
}
