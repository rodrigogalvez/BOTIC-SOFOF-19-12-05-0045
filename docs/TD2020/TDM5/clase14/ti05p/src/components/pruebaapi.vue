<template>
  <div>
    <b-button @click="consultar" variant="primary">Consultar API</b-button>
    <!-- {{ resultado }} -->
    <!-- <ol>
      <li v-for="persona in resultado.results" v-bind:key="persona.login.uuid">
        {{ persona.name.title }}
        {{ persona.name.first }}
        {{ persona.name.last }}
        <img v-bind:src="persona.picture.thumbnail" />
      </li>
    </ol> -->
    <br />
    <b-card
      v-for="persona in resultado.results"
      v-bind:key="persona.login.uuid"
      v-bind:title="
        [persona.name.title, persona.name.first, persona.name.last].join(' ')
      "
      v-bind:img-src="persona.picture.large"
      img-alt="Foto persona"
      img-top
      tag="article"
      style="width: 20rem; height: 30rem; vertical-align: top"
      class="mb-2 d-inline-block"
    >
      <b-card-text>
        {{ persona.location.street.name }}
        {{ persona.location.street.number }}, {{ persona.location.city }},
        {{ persona.location.country }}
        <br />
        <b-button
          variant="secondary"
          target="_blank"
          v-bind:href="
            [
              'https://www.google.com/maps/@',
              persona.location.coordinates.latitude,
              ',',
              persona.location.coordinates.longitude,
              ',',
              '13z',
            ].join('')
          "
          >({{ persona.location.coordinates.latitude }},{{
            persona.location.coordinates.longitude
          }})</b-button
        >
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      resultado: "",
      ok: false,
      coordenadas: "",
    };
  },
  methods: {
    consultar() {
      fetch("https://randomuser.me/api?results=10").then((respuesta) => {
        if (respuesta.status !== 200) {
          this.resultado = "ERROR" + respuesta.status;
          this.ok = false;
        } else {
          respuesta.json().then((data) => {
            this.resultado = data;
            this.ok = true;
          });
        }
      });
    },
  },
};
</script>

<style scoped>
/* .card >>> img {
  height: 300px;
  object-fit: cover;
} */
</style>