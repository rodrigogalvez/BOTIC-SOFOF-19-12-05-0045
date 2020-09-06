"use strict";

var appnombres = new Vue({
    el: "#appnombres",
    data: {
        nombre: "",
        apellido: ""
    },
    computed: {
        nombrecompleto: function() {
            return this.nombre+" "+this.apellido;
        }
    }
})