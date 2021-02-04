import { shallowMount } from '@vue/test-utils'
import Usuario from '@/components/Usuario.vue'

describe('Pruebas del componente Usuario.vue', () => {
  it('El usuario es activado por el método activarUsuario()', () => {
    const wrapper = shallowMount(Usuario)

    expect(wrapper.vm.usuarioActivo).toBe(false);
    wrapper.vm.activarUsuario();
    expect(wrapper.vm.usuarioActivo).toBe(true);

  })

  test('El componente debe decir "Usuario" y colocar el nombre del usuario', () => {

    const wrapper = shallowMount(Usuario, { propsData: { name: "Rodrigo" } });
    expect(wrapper.html()).toContain("Usuario Rodrigo");

  })

  test('El botón debe activar al usuario',()=>{

    const spy=jest.spyOn(Usuario.methods,'activarUsuario');
    const wrapper = shallowMount(Usuario);

    wrapper.find('button').trigger('click');

    expect(spy).toHaveBeenCalled();

  })
})
