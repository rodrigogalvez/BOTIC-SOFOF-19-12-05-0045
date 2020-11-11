import Vue from 'vue'
import Vuex from 'vuex'

import { vuexfireMutations, firebaseAction } from 'vuexfire'
// import firebase from 'firebase/app'
import 'firebase/database'


Vue.use(Vuex)

import { db } from "@/db.js";

const moduleSolicitudes = {
  namespaced: true,
  state() {
    return {
      solicitudes: []
    }
  },
  mutations: {
    // ...vuexfireMutations,
  },
  actions: {
    enlazar: firebaseAction(
      context => {
        return context.bindFirebaseRef('solicitudes', db.ref('solicitudes'))
      }
    ),
    agregar: firebaseAction(
      (context, payload) => {
        return db.ref('solicitudes').push(payload);
      }
    ),
    eliminar: firebaseAction(
      (context, payload) => {
        return db.ref('solicitudes').child(payload[".key"]).remove();
      }
    ),
    modificar: firebaseAction(
      (context, payload) => {
        return db.ref('solicitudes').child(payload[".key"]).set(payload);
      }
    )
  }
}

const moduleBloqueos = {
  namespaced: true,
  state() {
    return {
      bloqueos: []
    }
  },
  mutations: {
    // ...vuexfireMutations,
  },
  actions: {
    enlazar: firebaseAction(
      context => {
        return context.bindFirebaseRef('bloqueos', db.ref('bloqueos'))
      }
    ),
    agregar: firebaseAction(
      (context, payload) => {
        return db.ref('bloqueos').push(payload);
      }
    ),
    eliminar: firebaseAction(
      (context, payload) => {
        return db.ref('bloqueos').child(payload[".key"]).remove();
      }
    ),
    modificar: firebaseAction(
      (context, payload) => {
        return db.ref('bloqueos').child(payload[".key"]).set(payload);
      }
    )
  }
}

const moduleDesbloqueos = {
  namespaced: true,
  state() {
    return {
      desbloqueos: []
    }
  },
  mutations: {
    // ...vuexfireMutations,
  },
  actions: {
    enlazar: firebaseAction(
      context => {
        return context.bindFirebaseRef('desbloqueos', db.ref('desbloqueos'))
      }
    ),
    agregar: firebaseAction(
      (context, payload) => {
        return db.ref('desbloqueos').push(payload);
      }
    ),
    eliminar: firebaseAction(
      (context, payload) => {
        return db.ref('desbloqueos').child(payload[".key"]).remove();
      }
    ),
    modificar: firebaseAction(
      (context, payload) => {
        return db.ref('desbloqueos').child(payload[".key"]).set(payload);
      }
    )
  }
}
export default new Vuex.Store({
  state: {
  },
  mutations: {
    ...vuexfireMutations,
  },
  actions: {
  },
  modules: {
    solicitudes: moduleSolicitudes,
    bloqueos: moduleBloqueos,
    desbloqueos: moduleDesbloqueos
  }
})
