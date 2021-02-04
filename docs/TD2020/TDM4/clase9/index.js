"use strict";

var app = new Vue({
    "el": "#app",
    "data": {
        "disponibles": [
            {
                "codigo": "A",
                "descripcion": "Vue",
                "estilo": {"color": "green", "background-color": "yellow"},
                "url": "https://vuejs.org/images/logo.png"
            },
            {
                "codigo": "B",
                "descripcion": "Bootstrap",
                "estilo": {"color": "blue", "font-weight": "bolder"},
                url: "https://seeklogo.net/wp-content/uploads/2016/06/bootstrap-logo-vector-download.jpg"
            },
            {
                "codigo": "C",
                "descripcion": "Angular",
                "estilo": {"color": "red", "font-weight": "lighter"},
                url: "http://2.bp.blogspot.com/-wCv0pZqhWcg/UZcnKFLYBxI/AAAAAAAAABA/yvH7xYRk36E/s200/square.png"
            },
            {
                "codigo": "D",
                "descripcion": "React",
                "estilo": {"color": "cyan", "font-weight": "normal"},
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/220px-React-icon.svg.png"
            }
        ],
        "lenguajes": []
    }
});