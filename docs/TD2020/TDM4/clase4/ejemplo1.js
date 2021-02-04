"use strict";

var app = new Vue({
    el: "#app",
    data: {
        rut: ""
    },
    computed: {
        estadoVerificacion() {
            if (this.rut.length < 3)
                return 0; // rut muy corto.
            else if (this.verificaRUT())
                return 1; // rut correcto.
            else
                return 2; // rut incorrecto.
        }
    },
    methods: {
        verificaRUT() {
            if (!this.rut || this.rut.length < 3) return false;
            let [numero, digitoVerificador] = this.rut.toUpperCase().split("-");
            return this.calculaDigitoVerificador(numero) == digitoVerificador;
        },
        calculaDigitoVerificador(numero) {
            let verificadorCalculado = 11 -
                numero
                    .split("")
                    .map((digito) => { return parseInt(digito); })
                    .reverse()
                    .reduce((acumulado, digito, indice) => { return acumulado + digito * (indice % 6 + 2); }, 0) % 11;
            switch (verificadorCalculado) {
                case 11:
                    return "0";
                case 10:
                    return "K";
                default:
                    return verificadorCalculado.toString();
            }
        }
    }

})