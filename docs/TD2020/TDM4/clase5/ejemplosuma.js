"use strict";

var appsumalistado=new Vue({
    el: "#appsumalistado",
    data: {
        listado: [],
        numero: 0,
        suma: 0
    },
    methods: {
        // agregar= function() {
        // agregar= ()=>{
        agregar() {
            this.listado.push(this.numero);
        },
        sumar() {
            this.suma=0;
            for(let i=0;i<this.listado.length;i++) {
                this.suma=this.suma+this.listado[i];
                // this.suma+=this.listado[i];
            }

            // this.suma=this.listado.reduce(
            //     function (acumulado,valor){
            //         return acumulado+valor;
            //     },
            //     0
            // );

            // this.suma=this.listado.reduce((acumulado,valor)=>{acumulado+valor;},0);

        }
    }
});