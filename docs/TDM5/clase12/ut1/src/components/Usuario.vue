<template>
  <div>
    <h1>Usuario {{name}}</h1>
    <button @click="activarUsuario">Activar</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuarioActivo: false,
    };
  },
  props:["name"],
  methods: {
    activarUsuario() {
      this.usuarioActivo = true;
    },
  },
};
</script>

<style >
</style>