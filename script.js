import { barcelona, roma, paris, londres } from "./ciudades.js";

// Obtener los elementos del DOM
let enlaces = document.querySelectorAll("a");
let tituloElemento = document.getElementById("titulo");
let subtituloElemento = document.getElementById("subtitulo");
let parrafoElemento = document.getElementById("parrafo");
let precioElemento = document.getElementById("precio");

// Agregar un evento CLICK a cada enlace

enlaces.forEach(function (enlace) {
  enlace.addEventListener('click', function () {
    // REMOVER EL ACTIVE
    enlaces.forEach(function (enlace) {
      enlace.classList.remove('active');
    });

    // AGREGAR ACTIVE AL ENLACE ACTUAL
    this.classList.add('active');

    // TRAER LA INFORMACION DEL OBJETO CORRESPONDIENTE A ENLACE
    let contenido = obtenerContenido(this.textContent);

    // MOSTRAR EL CONTENIDO EN EL DOM
    tituloElemento.innerHTML = contenido.titulo;
    subtituloElemento.innerHTML = contenido.subtitulo;
    parrafoElemento.innerHTML = contenido.parrafo;
    precioElemento.innerHTML = contenido.precio;
    
  });
});

// Funcion para traer la informacion correcta desde ciudades.js

function obtenerContenido(enlace) {
  let contenido = {
    Barcelona: barcelona,
    Roma: roma,
    París: paris,
    Londres: londres,
  };
  return contenido[enlace];
}
