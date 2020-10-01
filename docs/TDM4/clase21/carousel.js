"use strict";

Vue.component(
    "carousel",
    {
        template: /*html*/`
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item" v-for="(imagen,indice) in imagenes" v-bind:class="{active:indice==0}">
                    <img v-bind:src="imagen" class="d-block w-100 imagen" alt="...">
                </div>
            </div>
        </div>`,
        props: ["imagenes"]
    }
)


