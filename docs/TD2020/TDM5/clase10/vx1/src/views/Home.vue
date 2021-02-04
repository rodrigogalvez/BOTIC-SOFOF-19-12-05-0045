<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <p>Número: {{ numero }}</p>
    <p>Número: {{ $store.state.numero }}</p>
    <button type="button" @click="avisareincrementar">+</button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { mapMutations, mapState } from "vuex";

export default {
  name: "Home",
  computed: {
    ...mapState(["numero"]),
  },
  methods: {
    avisareincrementar() {
      console.log("antes:",this.numero);
      this.$store.commit("incrementar");
      console.log("despues:",this.numero);
    },

    ...mapMutations(["incrementar"]),
  },
  components: {
    // HelloWorld
  },
};
</script>
