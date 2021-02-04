<template>
  <div id="app">
    <p>Total general: {{ totalgeneral }}</p>
    <componentehijo
      descripcion="Hijo 1"
      v-on:incrementado="incrementarTotalGeneral"
    />
    <componentehijo
      descripcion="Hijo 2"
      v-on:incrementado="incrementarTotalGeneral"
    />
    <componentehijo
      descripcion="Hijo 3"
      v-on:incrementado="incrementarTotalGeneral"
    />
  </div>
</template>

<script>
import componentehijo from "./components/componentehijo.vue";

export default {
  name: "App",
  data() {
    return {
      totalgeneral: 0,
    };
  },
  methods: {
    incrementarTotalGeneral() {
      this.totalgeneral++;
    },
  },
  components: {
    componentehijo,
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
