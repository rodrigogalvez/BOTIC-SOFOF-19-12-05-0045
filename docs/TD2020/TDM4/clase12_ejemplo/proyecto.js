"use strict";

Vue.component("proyecto",{
    template: `<div><h1>Título del proyecto: {{titulocomponente}}</h1></div>`,
    props: ['titulocomponente'],
    data: function () {
        return {
            // tituloComponente: "Proyecto componente"
        };
    }

})