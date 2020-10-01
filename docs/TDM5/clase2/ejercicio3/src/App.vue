<template>
  <div id="app">
    <button type="button" v-on:click="actualizarFechaHora">Actualizar</button>
    <fechahora v-bind:fechahoraactual="fechahoraactual"></fechahora>
  </div>
</template>

<script>
import fechahora from './components/fechahora.vue'

export default {
  name: 'App',
  data() {
    return {
        fechahoraactual: ""
    };
  },
  methods: {
        actualizarFechaHora() {
            this.fechahoraactual = (new Date()).toString();
        }
    },
  components: {
    fechahora
  }
}
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
