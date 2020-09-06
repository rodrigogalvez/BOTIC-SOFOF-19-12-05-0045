"use strict";

var app = new Vue({
    el: "#app",
    data: {
        productos: [
            {
                nombre: "Espresso",
                imagen: "https://www.comprarmicafetera.com/wp-content/uploads/2018/11/que_es_un_cafe_espresso.jpg",
                url: "https://www.comprarmicafetera.com/",
                precio: 1150
            },
            {
                nombre: "Capuchino",
                imagen: "https://t1.rg.ltmcdn.com/es/images/2/4/2/img_capuchino_16242_600.jpg",
                url: "https://t1.rg.ltmcdn.com/",
                precio: 1200
            },
            {
                nombre: "Mocachino",
                imagen: "https://t2.uc.ltmcdn.com/images/9/4/3/img_como_hacer_mocachino_frio_32349_600.jpg",
                url: "https://t2.uc.ltmcdn.com/",
                precio: 1500
            }
        ],
        carro: [],
        seleccion: ""
    },
    methods: {
        agregrarAlCarro( ) {
            this.carro.push(this.seleccion);
        }
    }
})