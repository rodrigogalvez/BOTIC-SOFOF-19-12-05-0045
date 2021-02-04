"use strict";

var app = new Vue({
    el: "#appPersonas",
    data: {
        personas: [],
        correlativo: 0,
        nombreEditado: "",
        edadEditado: 0,
        modoEdicion: false,
        filaEditada: 0
    },
    //CRUD:
    // Create -> crearPersona
    // Read -> v-for
    // Update -> activarActualizarPersona / guardarPersona
    // Delete -> borrarPersona
    methods: {
        crearPersona() {
            var personaNueva = {
                id: this.correlativo++,
                nombre: "",
                edad: ""
            }
            this.personas.push(personaNueva);
        },
        activarActualizarPersona(indice) {
            this.modoEdicion = true;
            this.filaEditada = indice;
            this.nombreEditado = this.personas[indice].nombre;
            this.edadEditado = this.personas[indice].edad;
        },
        guardarPersona(indice) {
            this.modoEdicion = false;
            this.personas[indice].nombre = this.nombreEditado;
            this.personas[indice].edad = this.edadEditado;
        },
        borrarPersona(indice) {
            this.personas.splice(indice, 1);
        },
        cancelarEdicion() {
            this.modoEdicion = false;
        }
    }

})