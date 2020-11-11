<template>
  <div>
    <h1>Devolver bicicleta</h1>
    <div>
      <p>RUT <input type="text" v-model="rut" /></p>
      <p>Código bicicleta <input type="text" v-model="codigobicicleta" /></p>
      <p>Código candado <input type="text" v-model="codigocandado" /></p>
      <p><button @click="bloquear()">Enviar</button></p>
    </div>
  </div>
</template>

<script>
// import { db } from '@/db.js';
// import { mapState } from "vuex";
import store from "@/store";

export default {
  name: "Devolver",
  data() {
    return {
      rut: "",
      codigobicicleta: "",
      codigocandado: "",
    };
  },
  computed: {
  },
  methods: {
    bloquear() {
      store.dispatch("bloqueos/agregar", {
        rut: this.rut,
        codigobicicleta: this.codigobicicleta,
        codigocandado: this.codigocandado,
        fechahora: + new Date(),
        estado: 0,
      });
    },
  },
  created() {
    store.dispatch("bloqueos/enlazar");
  },
};
</script>