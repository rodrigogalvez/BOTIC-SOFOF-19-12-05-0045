import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Listado: [],
  },
  mutations: {
    agregar(state, Descripcion) {
      state.Listado.push({
        Descripcion: Descripcion,
        Estado: 0,
        Key: +new Date(),
      });
    },
    cambiarEstado(state,Item) {
      Item.Estado++;
      if (Item.Estado > 2) {
        Item.Estado = 0;
      }
    },
  },
  actions: {
  },
  modules: {
  }
})
