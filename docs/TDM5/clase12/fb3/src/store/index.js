import Vue from 'vue'
import Vuex from 'vuex'
import {firestoreAction, vuexfireMutations} from 'vuexfire'
import {db} from './db'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    ...vuexfireMutations
  },
  actions: {
    bindTodos: firestoreAction(
      ({bindFirestoreRef})=>{
        return bindFirestoreRef('todos',db.collection('todos'))
      }
    )
  },
  modules: {
  }
})
