"use strict";

// componente
Vue.component(
    "login",
    {
        template: `#logintemplate`,
        data() {
            return {
                usuario: "",
                clave: ""
            }
        }
    }

)



// aplicación
var app = new Vue({
    el: "#app"
})