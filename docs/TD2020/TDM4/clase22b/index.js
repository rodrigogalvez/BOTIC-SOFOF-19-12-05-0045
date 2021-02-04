"use strict";

Vue.component('muestraimagenes',
{
    template:/*html*/`
    <div class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
            <div  v-for="(imagen,indice) in imagenes" class="carousel-item"
                v-bind:class="{active:indice==0}"
            >
                <img v-bind:src="imagen" class="d-block w-100 imagentamano" v-bind:class="indice%2==0?'marcorojo':'marcoazul'">
            </div>
        </div>
    </div>

    `,
    props: ["imagenes"]
})

var app = new Vue({
    el: '#app',
    data: {
        direccionimagen: "",
        imagenes: []
    },
    methods: {
        agregarimagen() {
            this.imagenes.push(this.direccionimagen);
            this.direccionimagen="";
        }
    }
})

