import Vue from 'vue'
import { shallowMount } from "@vue/test-utils"

import Usuario from "@/components/Usuario"

describe('activar usuario',
    () => {
        test('debe cambiar el valor a true', () => {
            const wrapper = shallowMount(Usuario);
            expect(wrapper.vm.usuarioActivo).toBe(false);
            wrapper.vm.activarUsuario();
            expect(wrapper.vm.usuarioActivo).toBe(true);
        })
    })

describe('dibujar componente',
    () => {
        test('el componente debe decir "Usuario y un nombre"', () => {
            const wrapper = shallowMount(Usuario, {
                propsData: {
                    name: "Rodrigo"
                }
            });
            expect(wrapper.html()).toContain("Usuario Rodrigo");
        })
    })

describe('botón click activa usuario',
    () => {
        test('el botón debe activar el usuario', () => {
            const spy = jest.spyOn(Usuario.methods, 'activarUsuario');
            const wrapper = shallowMount(Usuario);
            console.log(wrapper);
            const action = jest.fn();

            // wrapper.setMethods({activarUsuario: action});

            wrapper.find('button').trigger('click');

            expect(spy).toHaveBeenCalled();
            // Vue.nextTick(() => {
            //     expect(spy).toHaveBeenCalled();
            //     done()
            // })

        })
    })