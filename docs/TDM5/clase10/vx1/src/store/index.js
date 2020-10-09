import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    numero:0
  },
  mutations: {
    incrementar(state) {
      state.numero++;
      console.log(state);
    }
  },
  actions: {
  },
  modules: {
  }
})
