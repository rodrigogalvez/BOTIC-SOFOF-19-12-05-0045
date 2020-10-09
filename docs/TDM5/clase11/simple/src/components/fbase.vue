<template>
  <div id="app" class="container">
    <div class="page-header">
      <h1>Lista de compras</h1>
    </div>
    <form>
      <table class="table table-responsive">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="compra in compras">
            <td>
              <input
                type="text"
                class="form-control"
                placeholder="Ingrese el nombre del producto"
                v-model="compra.nombre"
              />
            </td>
            <td>
              <input
                type="number"
                class="form-control"
                placeholder="Ingrese la cantidad"
                v-model="compra.cantidad"
              />
            </td>
            <td>
              <a
                href="javascript:void(0);"
                title="Modificar"
                v-if="validarCompra(compra)"
                v-on:click="modificar(compra)"
              >
                <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>
              </a>
              |
              <a
                href="javascript:void(0);"
                title="Eliminar"
                v-on:click="eliminar(compra)"
              >
                <span
                  class="glyphicon glyphicon-remove"
                  aria-hidden="true"
                ></span>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="text"
                class="form-control"
                placeholder="Ingrese el nombre del producto"
                v-model="compra_nueva.nombre"
              />
            </td>
            <td>
              <input
                type="number"
                class="form-control"
                placeholder="Ingrese la cantidad"
                v-model="compra_nueva.cantidad"
              />
            </td>
            <td>
              <a
                href="javascript:void(0);"
                title="Agregar"
                v-if="validarCompra(compra_nueva)"
                v-on:click="agregar()"
              >
                <span
                  class="glyphicon glyphicon-plus"
                  aria-hidden="true"
                ></span>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  </div>
</template>

<script>
// import VueFire from 'vuefire'
// import Firebase from 'firebase'

// Vue.use(VueFire)
// Vue.use(Firebase)

var firebaseConfig = {
  apiKey: "AIzaSyCpr527SnHHfscuypnPxX2JcZlhxw4CvlY",
  authDomain: "tdm5relator1.firebaseapp.com",
  databaseURL: "https://tdm5relator1.firebaseio.com",
  projectId: "tdm5relator1",
  storageBucket: "tdm5relator1.appspot.com",
  messagingSenderId: "287989974512",
  appId: "1:287989974512:web:f1975f86b36bc634984935"
};
// Initialize Firebase
let app = firebase.initializeApp(firebaseConfig);
let db = app.database(); 
let compras = db.ref('compras');
export default {
  name: "App",
  firebase: { compras: compras },
  data() {
    return { compra_nueva: { nombre: "", cantidad: "" } };
  },
  methods: {
    agregar: function () {
      compras.push(this.compra_nueva, function (error) {
        if (error) {
          toastr.error("Error al intentar agregar el registro.", "Aviso");
        } else {
          toastr.success("Registro agregado correctamente.", "Aviso");
        }
      });
      this.compra_nueva.nombre = "";
      this.compra_nueva.cantidad = "";
    },
    modificar: function (p_compra) {
      compras
        .child(p_compra[".key"])
        .set(
          { nombre: p_compra.nombre, cantidad: p_compra.cantidad },
          function (error) {
            if (error) {
              toastr.error("Error al intentar modificar el registro.", "Aviso");
            } else {
              toastr.success("Registro modificado correctamente.", "Aviso");
            }
          }
        );
    },
    eliminar: function (p_compra) {
      compras.child(p_compra[".key"]).remove(function (error) {
        if (error) {
          toastr.error("Error al intentar eliminar el registro.", "Aviso");
        } else {
          toastr.success("Registro eliminado correctamente.", "Aviso");
        }
      });
    },
    validarCompra: function (p_compra) {
      return (
        p_compra.nombre.split(" ").join("") != "" &&
        !isNaN(parseInt(p_compra.cantidad, 10))
      );
    },
  },
};


</script>

<style>
</style>