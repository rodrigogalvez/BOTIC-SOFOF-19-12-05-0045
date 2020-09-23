"use strict";

var app = new Vue({
    el: "#app",
    data: {
        comentarios: [],
        ultimoid: 0
    },
    methods: {
        agregarComentario() {
            this.comentarios.push({
                id: this.ultimoid++,
                texto: "",
                estado: "vigente"
            })
        },
        borrarComentario(id) {
            var comentario = this.comentarios.find(comentario => comentario.id == id);
            if (comentario) {
                comentario.estado = "borrado";
            }
        },
        recuperarComentario(id) {
            var comentario = this.comentarios.find(comentario => comentario.id == id);
            if (comentario) {
                comentario.estado = "vigente";
            }

        }
    }
})