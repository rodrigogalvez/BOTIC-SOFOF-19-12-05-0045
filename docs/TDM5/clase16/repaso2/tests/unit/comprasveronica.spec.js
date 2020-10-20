// import { shallowMount } from '@vue/test-utils'
// import HelloWorld from '@/components/HelloWorld.vue'


import ComprasVeronica from '@/components/comprasveronica.vue'
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { createLocalVue, mount } from "@vue/test-utils";


const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(IconsPlugin);

describe('Compras.vue', () => {
  it('cuando se agrega un item en descripcion, hay un item mas en el arreglo', () => {
   
    const wrapper = mount(ComprasVeronica,{localVue})
    var contador=wrapper.vm.Listado.length
    // wrapper.find("input").element.value="leche"
    wrapper.find("input").trigger("keyup.enter")
    expect(wrapper.vm.Listado.length).toBe(contador+1)
  })
})

