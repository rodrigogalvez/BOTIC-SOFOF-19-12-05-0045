"use strict";

Vue.component(
    "notaactiva",
    {
        template: /*html*/`
            <tr v-if="nota.estado=='activo'">
                <td>{{indice+1}}</td>
                <td><textarea rows="2" v-model="nota.texto" ref="textonota"></textarea></td>
                <td>{{nota.estado}}</td>
                <td><button type="button" v-on:click="borrarNota()">Borrar</button></td>
            </tr>
            <tr v-else>
                <td>{{indice+1}}</td>
                <td><pre>{{nota.texto}}</pre></td>
                <td>{{nota.estado}}</td>
                <td><button type="button" v-on:click="recuperarNota()">Recuperar</button></td>
            </tr>`,
        props: ["nota", "indice"],
        methods: {
            borrarNota() {
                // borro la nota en la posición indice del arreglo.
                // borrado lógico: se cambia el estado a borrado.
                this.nota.estado = "borrado";
            },
            recuperarNota() {
                // recupero la nota en la posición indice.
                // recuperación es cambiar el estsado a activo.
                this.nota.estado = "activo";
            }
        },
        mounted() {
            // si se monta el compontente en pantalla
            // se ejecuta un método focus para el textarea
            // internamente en el componente, el textarea se lama textonota
            // porque así lo llame'en la línea 10, donde dice ref="textonota"
            if (this.$refs.textonota) this.$refs.textonota.focus();
        }
    }
)

var app = new Vue(
    {
        el: "#app",
        data: {
            // el arreglo notas está vacío y sirve para
            // guardar todos los objetos nota.
            notas: []
        },
        methods: {
            agregarNota() {
                // agregar nota al arreglo.
                // la nota: se compone de texto y estado.
                // el texto por defecto es vacio y 
                // el estado por defecto es activo.
                this.notas.push({
                    texto: "",
                    estado: "activo"
                });
            }
        }
    });