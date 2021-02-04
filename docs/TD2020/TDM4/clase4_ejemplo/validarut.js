"use strict";

let validarut = new Vue({
    el: "#validarut",
    data: {
        rut: "",
        rutcorrecto: false,
    },
    methods: {
        verificaRUT: function() {
            console.log("verificaRUT");

            if (!this.rut || this.rut.length < 3 || !this.rut.includes("-"))
                return false;

            console.log("inicia verificación");

            let [numero, digitoverificador] = this.rut.toUpperCase().split("-");
            let invertido = numero.split("").map(convertiranumero).reverse();
            let factores = [2, 3, 4, 5, 6, 7, 2, 3];
            let suma = invertido.reduce(multiplica, 0);
            let resto = suma % 11;
            let digito = 11 - resto;
            if (digito == 11) {
                digito = "0";
            } else if (digito == 10) {
                digito = "K";
            } else {
                digito = digito.toString();
            }

            console.log(digito, digitoverificador)

            this.rutcorrecto = digito == digitoverificador;

            function convertiranumero(e) {
                return parseInt(e);
            }

            function multiplica(acumulador, valoractual, indice) {
                return acumulador + valoractual * factores[indice];
            }
        },
    },
});
