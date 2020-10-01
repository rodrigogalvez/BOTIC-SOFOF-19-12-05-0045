"use strict";

Vue.component(
    'normalinput',
    {
        template:/*html*/`
        <div class="form-group">
            <label :for="inputid">{{etiqueta}}</label>
            <input 
                type="text" 
                class="form-control"
                :id="inputid"
                :aria-describedby="helpid"
                :placeholder="marcador"
                v-bind:value="entrada"
                v-on:input="$emit('input', $event.target.value)"
                >
            <small 
                :id="helpid"
                class="form-text text-muted">{{ayuda}}</small>
        </div>        
        `,
        props: ["etiqueta", "marcador", "ayuda", "entrada"],
        data() {
            return {
                inputid: "input_" + Math.random().toString().replace(".", ""),
                helpid: "input_" + Math.random().toString().replace(".", "")
            }
        }
    }



)