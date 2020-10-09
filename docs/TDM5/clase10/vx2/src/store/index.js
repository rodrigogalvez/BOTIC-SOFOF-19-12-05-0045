import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// import jsondata from '@/assets/listado.json'

export default new Vuex.Store({
  state: {
    numero: 0
  },
  mutations: {
    incrementar(state, n) {
      if (n) {
        state.numero += n;
      }
      else {
        state.numero++;
      }
    }
  },
  actions: {
    cargarlistado: async function (context) {
      // console.log(require)
      // console.log(require('@/assets/listado.json'));
      // var data = await fetch("https://jsonplaceholder.typicode.com/users");
      var data = await fetch("/json/");
      var js = await data.json();
      console.log(js);
      // context.$http.get('@/assets/listado.json')
    }
  },
  modules: {
  }
})
