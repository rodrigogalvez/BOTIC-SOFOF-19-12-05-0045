"use strict";

var app = new Vue(
    {
        el: "#app",
        data: {
            // el arreglo notas está vacío y sirve para
            // guardar todos los objetos nota.
            notas: []
        },
        methods: {
            agregarNota() {
                // agregar nota al arreglo.
                // la nota: se compone de texto y estado.
                // el texto por defecto es vacio y 
                // el estado por defecto es activo.
                this.notas.push({
                    texto: "",
                    estado: "activo"
                });
            },
            borrarNota(indice) {
                // borro la nota en la posición indice del arreglo.
                // borrado lógico: se cambia el estado a borrado.
                this.notas[indice].estado = "borrado";
            },
            recuperarNota(indice) {
                // recupero la nota en la posición indice.
                // recuperación es cambiar el estsado a activo.
                this.notas[indice].estado = "activo";
            }
        }
    });