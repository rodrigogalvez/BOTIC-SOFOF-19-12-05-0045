<template>
  <div>
    <h1>Listado de compras</h1>
    <b-input-group prepend="Qué comprar:">
      <b-form-input v-model="Descripcion" @keyup.enter="agregar"></b-form-input>
      <b-input-group-append>
        <b-button variant="success" @click="agregar">+</b-button>
      </b-input-group-append>
    </b-input-group>
    <br />
    <b-list-group>
      <b-list-group-item
        v-for="Item in Listado"
        v-bind:key="Item.Key"
        v-bind:variant="
          Item.Estado == 0 ? 'warning' : Item.Estado == 1 ? 'success' : 'danger'
        "
      >
        <b-button
          type="button"
          @click="cambiarEstado(Item)"
          variant="outline-primary"
          >>></b-button
        >
        {{ Item.Descripcion }} (
        <span v-if="Item.Estado == 0">Pendiente</span>
        <span v-if="Item.Estado == 1">Comprado</span>
        <span v-if="Item.Estado == 2">No encontrado</span>
        )
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  name: "Compras",
  data() {
    return {
      Listado: [],
      Descripcion: "",
    };
  },
  methods: {
    agregar() {
      this.Listado.push({
        Descripcion: this.Descripcion,
        Estado: 0,
        Key: +new Date(),
      });
      this.Descripcion = "";
    },
    cambiarEstado(Item) {
      Item.Estado++;
      if (Item.Estado > 2) {
        Item.Estado = 0;
      }
    },
  },
};
</script>