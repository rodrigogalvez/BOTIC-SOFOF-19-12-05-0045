"use strict";

Vue.component(
    "contador",
    {
        template: `
            <div>
                <p>Cuenta actual: {{cuenta}}</p>
                <button v-on:click="incrementar">+</button>
                <button v-on:click="decrementar">-</button>
            </div>
        `,
        props: ["valorinicial", "maximo", "minimo"],
        data: function(){
            return {
                // ! El this.valorinicial no se puede modificar.
                // entonces hay que crear otra variable e 
                // inicializarla con el this.valorinicial.
                // TODO: mostrar como devolver un valor.
                cuenta: this.valorinicial
            }
        },
        methods: {
            incrementar() {
                if (this.cuenta < this.maximo) {
                    this.cuenta++;
                }
            },
            decrementar() {
                if (this.cuenta > this.minimo) {
                    this.cuenta--;
                }
            }
        }
    }
)