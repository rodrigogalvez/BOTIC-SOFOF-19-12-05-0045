<template>
  <div>
    <ul>
      <li v-for="solicitud in solicitudes" v-bind:key="solicitud['.key']">
        <p>
          {{ solicitud.nombre }}, {{ solicitud.domicilio }},
          {{ solicitud.tipodomicilio }}
          <button @click="revisar(solicitud)">Revisar</button>
        </p>
      </li>
    </ul>
    <div>
      <div v-if="solicitud">
        <p>RUT {{ solicitud.rut }}</p>
        <p>Nombre {{ solicitud.nombre }}</p>
        <p>Domicilio {{ solicitud.domicilio }}</p>
        <p>
          Tipo domicilio
          <select v-model="solicitud.tipodomicilio">
            <option value="L">Laboral</option>
            <option value="P">Particular</option>
          </select>
        </p>
        <p>Número TC {{ solicitud.numerotc }}</p>
        <p>Estado {{ solicitud.estado }}</p>
        <p><button @click="aprobar(solicitud)">Aprobar</button></p>
        <p><button @click="rechazar(solicitud)">rechazar</button></p>
      </div>
    </div>
  </div>
</template>

<script>
// import { db } from "@/db.js";
import { mapState } from "vuex";
import store from "@/store";

export default {
  data() {
    return { solicitud: undefined };
  },
  computed: {
    ...mapState("solicitudes", ["solicitudes"]),
  },
  methods: {
    revisar(solicitud) {
      this.solicitud = solicitud;
    },
    aprobar(solicitud) {
      solicitud.estado = 1;
      store.dispatch("solicitudes/modificar", solicitud);
    },
    rechazar(solicitud) {
      solicitud.estado = 2;
      store.dispatch("solicitudes/modificar", solicitud);
    },
  },
  created() {
    store.dispatch("solicitudes/enlazar");
  },
};
</script>