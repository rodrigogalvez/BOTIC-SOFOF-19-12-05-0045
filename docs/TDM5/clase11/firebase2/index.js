"use strict";

var firebaseConfig = {
    apiKey: "AIzaSyDjeQ-HJ0gaHI-NRnik-enWgHe8I7VPlIY",
    authDomain: "tdm5relator2.firebaseapp.com",
    databaseURL: "https://tdm5relator2.firebaseio.com",
    projectId: "tdm5relator2",
    storageBucket: "tdm5relator2.appspot.com",
    messagingSenderId: "712913525454",
    appId: "1:712913525454:web:23e7ad182c93a840818e9f"
};
var firebasecompras = firebase.initializeApp(firebaseConfig).database().ref('compras');

var app = new Vue({
    el: '#app',
    data: {
        compras: [],
        nombre: "",
        cantidad: 0
    },
    mounted(){
        firebasecompras.orderByKey()
        .on('child_added',
            (snapshot)=>{
                let data=snapshot.toJSON();
                data.id=snapshot.key;
                console.log(data)
                this.compras.push(data);
            })
    },
    methods: {
        agregar() {
            // this.compras.push({
            //     nombre: this.nombre,
            //     cantidad: this.cantidad,
            //     id: + new Date() //(new Date()).getTime()
            // });
            firebasecompras.push(
                {
                    nombre: this.nombre,
                    cantidad: this.cantidad
                },
                (error) =>{
                    if (error) {
                        console.log("error",error);
                    } else {
                        console.log("ok");
                    }
                }
            )
        },
        modificar(compramodificada) {
            // let compraantigua = this.compras.find(
            //     (compra) => compra.id == compramodificada.id
            // );
            // compraantigua.nombre = compramodificada.nombre;
            // compraantigua.cantidad = compramodificada.cantidad;

            firebasecompras.child(compramodificada.id)
                .set(
                    {
                        nombre: compramodificada.nombre,
                        cantidad: compramodificada.cantidad
                    },
                    (error) =>{
                        if (error) {
                            console.log("error",error);
                        } else {
                            console.log("ok");
                        }
                    }
                )

        },
        eliminar(compraaeliminar) {
            // let index = this.compras.findIndex(
            //     (compra) => compra.id == compraaeliminar.id
            // );
            // if (index >= 0) {
            //     this.compras.splice(index, 1);
            // }

            firebasecompras.child(compraaeliminar.id)
                .remove(
                    (error) =>{
                        if (error) {
                            console.log("error",error);
                        } else {
                            console.log("ok");
                        }
                    }
                )
        }
    }
})