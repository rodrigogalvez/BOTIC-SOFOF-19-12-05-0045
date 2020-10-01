<template>
  <div>
    <p>Hola {{ nombre }}, ¿Qué edad tienes?”</p>
    <label>Edad:</label>
    <input type="number" v-model.number="edad" />
    <button type="button" v-on:click="avisaredad">Avisar</button>
  </div>
</template>

<script>
export default {
  name: "componenteHijo",
  props: ["nombre"],
  data() {
    return {
      edad: 0,
    };
  },
  methods: {
    avisaredad() {
      this.$emit("actualizaredad", this.edad);
    },
  },
};
</script>