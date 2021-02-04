"use strict";

Vue.component('componentehijo',{
    template: /*html*/`
        <p> {{descripcion}}: Valor actual: {{contador}}
            <button type="button" v-on:click="incrementar()">+</button>
        </p>
    `,
    data() {
        return {
            contador:0
        }
    },
    props: ["descripcion"],
    methods: {
        incrementar() {
            this.contador++;
            this.$emit('incrementado');
        }
    }
})

var app=new Vue(
    {
        el: '#app',
        data:  {
            totalgeneral:0
        },
        methods: {
            incrementarTotalGeneral() {
                this.totalgeneral++;
            }
        }
    }
)