"use strict";

Vue.component('componente-uno',
    {
        template: `<form v-on:submit.prevent="verificar">
                        <label>Usuario:</label><input type="text" v-model="usuario" /><br />
                        <label>Clave:</label><input type="password" v-model="clave" /><br />
                        <button type="submit">Ok</button>
                    </form>`,
        props: ["acceso"],
        data: function () {
            return {
                usuario: "",
                clave: ""
            }
        },
        methods: {
            verificar() {
                console.log(this.usuario, this.clave);
                if (this.usuario == "r.galvez" && this.clave == "abcdef") {
                    this.$emit('input', true);
                } else {
                    this.$emit('input', false);
                }
            }
        }
    })

var app = new Vue({
    el: "#app",
    data: {
        acceso1: false,
        acceso2: false

    }
})