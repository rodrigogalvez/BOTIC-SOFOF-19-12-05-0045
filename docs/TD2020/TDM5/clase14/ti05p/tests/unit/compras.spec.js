/* global describe, it, expect */
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";


import { createLocalVue,shallowMount } from "@vue/test-utils";
import Compras from "@/components/Compras";

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(IconsPlugin);

console.log({ Compras });

describe("Compras", () => {
  const wrapper = shallowMount(Compras,{localVue});
  it("renders the correct markup", () => {
    expect(wrapper.html()).toContain("Listado");
  });
});
