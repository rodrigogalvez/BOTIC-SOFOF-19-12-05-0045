<template>
  <div>
    <div>
      <p>RUT <input type="text" v-model="rut" /></p>
      <p>Nombre <input type="text" v-model="nombre" /></p>
      <p>Domicilio <input type="text" v-model="domicilio" /></p>
      <p>
        Tipo domicilio
        <select v-model="tipodomicilio">
          <option value="L">Laboral</option>
          <option value="P">Particular</option>
        </select>
      </p>
      <p>Número TC <input type="text" v-model="numerotc" /></p>
      <p><button @click="guardar()">Enviar</button></p>
    </div>
  </div>
</template>

<script>
// import { db } from '@/db.js';
// import { mapState } from "vuex";
import store from "@/store";

export default {
  name: "Inscripcion",
  data() {
    return {
      rut: "",
      domicilio: "",
      tipodomicilio: "",
      numerotc: "",
      nombre: "",
      estado: 0,
    };
  },
  computed: {
    // ...mapState("solicitudes", ["solicitudes"]),
  },
  methods: {
    // ...mapMutations(['agregar']),
    guardar() {
      store.dispatch("solicitudes/agregar", {
        rut: this.rut,
        nombre: this.nombre,
        domicilio: this.domicilio,
        tipodomicilio: this.tipodomicilio,
        numerotc: this.numerotc,
        estado: 0,
      });
    },
  },
  created() {
    store.dispatch("solicitudes/enlazar");
  },
};
</script>