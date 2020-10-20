import ComponenteAlternativa2 from '@/components/ComponenteAlternativa2.vue'
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { createLocalVue, mount } from "@vue/test-utils";


const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(IconsPlugin);

/**
 * Instrucciones:
Crear un componente con el nombre que se espera en este archivo de especificación.
El componente espera un parámetro x para indicar un nombre y saludar. Presenta dos
campos para ingresar números (las propiedades asociadas a estos parámetros son 
a y b), un botón que mediante el método sumar() calcula la suma de ambos números
guardando el resultado en el atributo c. 
La salida se presenta directamente en pantalla.

Se espera que el saludo inicial esté en un tag h1 y que el resultado esté dentro 
de un tag h2. Los campos de entrada tienen clase a y b respectivamente.


El componente debe tener más o menos esta apariencia:

Hola x, bienvenido

Ingresa un número: 
Ingresa otro número:

La suma de los números es:

 */

describe('Pruebas relator ComponenteAlternativa2.vue', () => {

  test('El componente recibe un parámetro x con un nombre, lo presenta en pantalla en un tag H1 donde dice "Hola x, bienvenido"', () => {

    const wrapper1 = mount(ComponenteAlternativa2, { propsData: { x: "Rodrigo" } });

    expect(wrapper1.find("h1").html()).toContain("Hola Rodrigo, bienvenido");
    const wrapper2 = mount(ComponenteAlternativa2, { propsData: { x: "Marcela" } });
    expect(wrapper2.find("h1").html()).toContain("Hola Marcela, bienvenido");
    const wrapper3 = mount(ComponenteAlternativa2, { propsData: { x: "Leonela" } });
    expect(wrapper3.find("h1").html()).toContain("Hola Leonela, bienvenido");

  })

  it('El método sumar() suma dos atributos llamados a y b', () => {
    const wrapper = mount(ComponenteAlternativa2);
    wrapper.vm.a=3;
    wrapper.vm.b=5;
    wrapper.vm.sumar();
    expect(wrapper.vm.c).toBe(8);
    wrapper.vm.a=67;
    wrapper.vm.b=34;
    wrapper.vm.sumar();
    expect(wrapper.vm.c).toBe(101);
    wrapper.vm.a=9832;
    wrapper.vm.b=58;
    wrapper.vm.sumar();
    expect(wrapper.vm.c).toBe(9890);
  })


  it('Los parámetros en pantalla se llenan y el botón ejecuta la suma', () => {
   
    const wrapper = mount(ComponenteAlternativa2,{localVue})
    const input1 = wrapper.find('input.a').element;
    const input2 = wrapper.find('input.b').element;
    const button = wrapper.find('button');
    const h2 = wrapper.find("h2");

    input1.value=3;
    input2.value=5;
    button.trigger('click');
    expect(h2.html()).toContain("8");

    input1.value=67;
    input2.value=34;
    button.trigger('click');
    expect(h2.html()).toContain("101");

    input1.value=9832;
    input2.value=58;
    button.trigger('click');
    expect(h2.html()).toContain("9890");

  })
})

