<template>
  <div id="app">
    <label>Nombre de pila</label>
    <input type="text" v-model="nombredepila" />
    <componente-hijo
      v-bind:nombre="nombredepila"
      v-on:actualizaredad="actualizaedad"
    ></componente-hijo>
    <p>La edad indicada es: {{ edad }}</p>
  </div>
</template>

<script>
import componenteHijo from "./components/componentehijo.vue";

export default {
  name: "App",
  data() {
    return {
      nombredepila: "",
      edad: 0,
    };
  },
  components: {
    componenteHijo,
  },
  methods: {
    actualizaedad(edadactualizada) {
      this.edad = edadactualizada;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
