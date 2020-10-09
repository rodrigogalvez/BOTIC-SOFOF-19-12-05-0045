"use strict";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCpr527SnHHfscuypnPxX2JcZlhxw4CvlY",
    authDomain: "tdm5relator1.firebaseapp.com",
    databaseURL: "https://tdm5relator1.firebaseio.com",
    projectId: "tdm5relator1",
    storageBucket: "tdm5relator1.appspot.com",
    messagingSenderId: "287989974512",
    appId: "1:287989974512:web:f1975f86b36bc634984935"
};
// Initialize Firebase
let fbapp=firebase.initializeApp(firebaseConfig).database();
let compras = fbapp.ref('compras');

const store = new Vuex.Store({
    state: {
        count: 0,
        compras:[]
    },
    mutations: {
        increment(state) {
            state.count++;
        },
        cargarcompras(state,nuevascompras) {
            state.compras=nuevascompras;
        }
    },
    actions: {
        actualizar(context) {
            var nuevascompras=[];
            compras.orderByKey()
                .on('child_added',
                    (snapshot)=>{
                        let data=snapshot.toJSON();
                        data.key=snapshot.key;
                        console.log(snapshot);
                        nuevascompras.push(data);
                        context.commit('cargarcompras',nuevascompras);
                    }
                )
            
            // .onSnapshot(
            //     snapshot=>{
            //         let compras=[];
            //         snapshot.forEach(
            //             data=>{
            //                 let compra=data.data();
            //                 compras.push(compra);
            //             }
            //         )
            //         context.commit('cargarcompras',compras)
            //     }
            // )
        }
    }
})

const Foo=Vue.component('Foo',{
    template: /*html*/`
        <div>
            <div>foo</div>
            <button @click="increment">{{ count }}</button>
            <div>
                <button @click="actualizar">Actualizar listado</button>
                <button @click="agregar">Agregar</button>
            </div>
            <input type="text" v-model="nombre">
            <input type="number" v-model.number="cantidad">
            <ul>
                <li v-for="compra in compras">
                    <input type="text" v-model="compra.nombre">    
                    <input type="number" v-model.number="compra.cantidad">
                    <button @click="modificar(compra)">M</button>
                </li>
            </ul>
        </div>
    `,
    firebase: {
        compras: compras
    },
    data() {
        return {
            nombre: "",
            cantidad: 0
        }
    },
    computed: {
        ...Vuex.mapState(["count","compras"])
    },
    methods: {
        ...Vuex.mapMutations(["increment"])        ,
        ...Vuex.mapActions(["actualizar"]),
        agregar() {
            compras.push({ nombre: this.nombre, cantidad: this.cantidad },
                (error) => {
                    if (error) {
                        console.err("error", error);
                    } else {
                        console.log("ok");
                    }
                }
            )
        },
        modificar(compra) {
            compras
                .child(compra.key)
                .set(
                    { nombre: compra.nombre, cantidad: compra.cantidad },
                    (error) => {
                        if (error) {
                            console.err("error", error);
                        } else {
                            console.log("ok");
                        }
                    }
                );
        },
        eliminar(compra) {
            compras
                .child(compra.key)
                .remove(
                    (error) => {
                        if (error) {
                            console.err("error", error);
                        } else {
                            console.log("ok");
                        }
                    }
                );
        }
    }
})

const Bar = {
    template: /*html*/`
        <div>
            <div>bar</div>
            <div>El contador está en: {{count}}</div>
        </div>
        `,
    computed: {
        ...Vuex.mapState(["count"])
    },
    methods: {
        ...Vuex.mapMutations(["increment"])
    }
}

const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
]

const router = new VueRouter({
    // mode: 'history',
    routes // short for `routes: routes`
})

const app = new Vue({
    router,
    store
}).$mount('#app')