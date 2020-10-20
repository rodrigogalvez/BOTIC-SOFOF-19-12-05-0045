import PruebaBasica from '@/components/PruebaBasica.vue'
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { createLocalVue, mount } from "@vue/test-utils";


const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(IconsPlugin);

describe('Componte PruebaBasica',()=>{
    it('El recibe un parámetro nombre con un nombre y saluda: Buenos días X. ¿Cómo estás?',
        ()=>{
            const wrapper=mount(PruebaBasica,{localVue,propsData: {nombre: "Juan"}});
            expect(wrapper.html()).toContain("Buenos días Juan. ¿Cómo estás?");
        }
    )
})