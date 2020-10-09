<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p>Número: {{numero}}</p>
    <button type="button" @click="incrementar(1)">Incrementar</button>
    <button type="button" @click="$store.commit('incrementar',2)">Incrementar 2</button>
    <button type="button" @click="$store.commit('incrementar',3)">Incrementar 3</button>
    <button type="button" @click="$store.commit('incrementar',4)">Incrementar 4</button>
    <button type="button" @click="cargarlistado">cargar listado</button>

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { mapState,mapMutations,mapActions } from 'vuex';

export default {
  name: 'Home',
  computed: {
    ...mapState(["numero"])
  },
  methods: {
    ...mapMutations(["incrementar"]),
    // incrementar() {
    //   console.log("antes de incrementar ", this.numero );
    //   this.$store.commit('incrementar');
    //   console.log("después de incrementar ", this.numero );
    // }
    ...mapActions(["cargarlistado"])
  },
  components: {
    // HelloWorld
  }
}
</script>
