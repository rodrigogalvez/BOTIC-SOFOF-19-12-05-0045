"use strict";

Vue.component('componentehijo',{
    template: /*html*/`
        <p> Fecha: {{fechahora}}
        </p>
    `,
    data() {
        return {
            
        }
    },
    props: ["fechahora"]
})

var app=new Vue(
    {
        el: '#app',
        data:  {
            fechahora:""
        },
        methods: {
            actualizarFechaHora() {
                this.fechahora=(new Date()).toString();
            }
    
        }
    }
)