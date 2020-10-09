<template>
  <div id="app">
    <!-- https://cdn.pixabay.com/photo/2017/09/04/18/39/coffee-2714970__340.jpg -->
    <!-- img-src="https://cdn.pixabay.com/photo/2017/09/04/18/39/coffee-2714970_960_720.jpg" -->
    <!-- :img-src="require('@/assets/coffee-2714970_960_720.jpg')" -->
    <b-container>
      <b-card
        overlay
        img-src="@/assets/coffee-2714970_960_720.jpg"
        img-alt="Card Image"
        text-variant="white"
        title="Cafetería"
        sub-title="El mejor café molido de grano"
        class="imagenajustada"
      >
        <b-card-text> Bienvenido a mi cafetería. </b-card-text>
      </b-card>

      <b-navbar toggleable type="dark" variant="dark">
        <b-navbar-brand href="#">Talento Digital</b-navbar-brand>

        <b-navbar-toggle target="navbar-toggle-collapse">
          <template v-slot:default="{ expanded }">
            <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
            <b-icon v-else icon="chevron-bar-down"></b-icon>
          </template>
        </b-navbar-toggle>

        <b-collapse id="navbar-toggle-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#">Módulo 1 HTML</b-nav-item>
            <b-nav-item href="#">Módulo 2 HTML Avanzado</b-nav-item>
            <b-nav-item href="#">Módulo 3 JavaScript</b-nav-item>
            <b-nav-item href="#">Módulo 4 VueJS</b-nav-item>
            <b-nav-item href="#">Módulo 5 VueJS Avanzado</b-nav-item>
            <b-nav-item href="#" disabled>Disabled</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>

      <b-row align-h="between"
        cols="1" cols-sm="2" cols-md="3" cols-lg="3"
      >
        <b-col>
          <b-card
            title="Capuccino"
            img-src="https://cdn.pixabay.com/photo/2016/08/09/13/21/coffee-1580595_960_720.jpg"
            img-alt="Capuccino"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-2 mx-auto tarjetaaltura imagenajustada"
          >
            <b-card-text>
              Disfrute un rico café con diseño.
            </b-card-text>

            <b-button href="#" variant="success" pill>Go somewhere</b-button>
          </b-card></b-col
        >
        <b-col>
          <b-card
            title="Cafe con queque"
            img-src="https://cdn.pixabay.com/photo/2015/07/12/14/26/coffee-842020_960_720.jpg"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-2 mx-auto tarjetaaltura imagenajustada"
          >
            <b-card-text>
              Promoción: café con queque por $2.500.
              Muy barato.
            </b-card-text>

            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card></b-col
        >
        <b-col>
          <b-card
            title="Café con leche"
            img-src="https://cdn.pixabay.com/photo/2014/12/11/02/57/coffee-563800_960_720.jpg"
            img-alt="Café con leche"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-2 mx-auto tarjetaaltura imagenajustada"
          >
            <b-card-text>
              Café con leche caliente.
              Disfrute con leche entera, descremada, o semi-descremada.
            </b-card-text>

            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card></b-col
        >
      </b-row>
      <!-- <img alt="Vue logo" src="@/assets/logo.png" />
      <img alt="Vue logo" src="@/assets/coffee-2714970_960_720.jpg" /> -->

      <!-- <div class="hello">
        <img alt="Vue logo" src="@/assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js App" /> 
      </div> -->
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
.hello {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.imagenajustada > img {
  height: 200px;
  object-fit: cover;
}

.imagenajustada > .card-body > .text-muted {
  color: white !important;
}

.tarjetaaltura {
  height: 500px;
}
</style>
