<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />

    <b-container>
      <b-jumbotron
        header="Probando BootstrapVue"
        lead="Esta es una demostración hecha para la clase 4 de TD Módulo 5"
      >
        <p>Para más información, consulte al relator</p>
        <b-button variant="primary" href="#">Consultar</b-button>
      </b-jumbotron>
    </b-container>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
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
