import Vue from 'vue'
import App from './App.vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Corregido con npm install -D sass-loader sass
// más información en 
// https://cli.vuejs.org/guide/css.html#pre-processors
import '@/style/custom.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
