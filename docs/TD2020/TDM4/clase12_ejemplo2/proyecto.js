"use strict";

Vue.component(
    "proyecto",
    {
        template: 
        `<div v-bind:style="{color: color}">
            <p>Contador de: {{nombre}} Votos: {{contador}}
                <button v-on:click="incrementar">Votar +1</button>
            </p>
        </div>`,
        props: ["nombre", "color"],
        data: function () {
            return {
                contador: 0
            }
        },
        methods: {
            incrementar() {
                this.contador++;
            }
        }
    }
)

Vue.component(
    "nombreformal",
    {
        template: `<p>{{nombrecompleto}}</p>`,
        props: ["nombre", "segundonombre", "apellidopaterno", "apellidomaterno","formato"],
        computed: {
            nombrecompleto(){
                switch (this.formato) {
                    case "chileno":
                        return "Sr./Sra. "+[this.nombre,this.segundonombre,this.apellidopaterno,this.apellidomaterno].join(" ");
                    case "brasileno":
                        return "Garoto/Garota "+[this.nombre,this.apellidomaterno].join(" ");
                    case "oriental":
                        return [this.apellidopaterno,this.nombre].join(" ")+" kun";
                }
            }
        }
    }
)