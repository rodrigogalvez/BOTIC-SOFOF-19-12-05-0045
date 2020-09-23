"use strict";

Vue.component("componentenota",
    {
        template: "#templatenota",
        props: ["parametronota"],
        data() {
            return {
                editando: false
            }
        },
        computed: {
            titulo() {
                return "Nota id = "+ this.parametronota.identificador;
            }
        },
        methods: {
            editar() {
                this.editando = true;
            },
            mostrar(){
                this.editando=false;
            },
            eliminar() {
                this.parametronota.eliminada=true;
            }
        }
    }


)

var app = new Vue({
    el: "#app",
    data: {
        notas: [],
        ultimoid: 0
    },
    methods: {
        agregarnota() {
            this.notas.push({
                identificador: this.ultimoid++,
                contenido: "",
                eliminada: false
            })
        }
    }
});