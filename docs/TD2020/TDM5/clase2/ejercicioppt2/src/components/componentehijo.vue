<template>
  <p>
    {{ descripcion }}: Valor actual: {{ contador }}
    <button type="button" v-on:click="incrementar()">+</button>
  </p>
</template>

<script>
export default {
  name: "componentehijo",
  props: ["descripcion"],
  data() {
    return {
      contador: 0,
    };
  },
  methods: {
    incrementar() {
      this.contador++;
      this.$emit("incrementado");
    },
  },
};
</script>