"use strict";

Vue.component('fechahora', {
    template: /*html*/`
        <p> Fecha: {{fechahoraactual}}</p>
    `,
    props: ["fechahoraactual"]
})

var app = new Vue({
    el: '#app',
    data: {
        fechahoraactual: ""
    },
    methods: {
        actualizarFechaHora() {
            this.fechahoraactual = (new Date()).toString();
        }
    }
})