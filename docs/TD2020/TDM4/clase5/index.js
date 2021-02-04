"use strict";

var appvon = new Vue({
    el: "#appvon",
    data: {
        contador: 0
    },
    methods: {
        incrementar() {
            // this.contador = this.contador + 1;
            this.contador++;
        },
        decrementar() {
            // this.contador = this.contador - 1;
            this.contador--;
        }
    }
});

var appsuma = new Vue({
    el: "#appsuma",
    data: {
        numero1: 0,
        numero2: 0,
        suma: 0,
        proximosumar: false,
        x:0,
        y:0,
        campo:0
    },
    methods: {
        sumar() {
            this.suma = this.numero1 + this.numero2;
        },
        focusnumero1(){
            this.campo=1;
        },
        focusnumero2(){
            this.campo=2;
        },
        leavenumero1() {
            this.campo=0;
        },
        leavenumero2() {
            this.campo=0;
        },
        mouseover(){
            this.proximosumar=true;
        },
        mouseleave(){
            this.proximosumar=false;
        },
        mousemove(event){
            this.x=event.clientX;
            this.y=event.clientY;
        }

    }
});