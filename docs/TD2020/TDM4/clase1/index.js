"use strict";

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hola Vue!'
    }
});


var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'Usted cargó esta página el ' + new Date().toLocaleString()
    }
});

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
});


var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'Aprender JavaScript' },
            { text: 'Aprender Vue' },
            { text: 'Construir algo increíble' }
        ]
    }
})

var app5 = new Vue({
    el: '#app-5',
    data: {
      message: 'Hola Vue.js!'
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      }
    }
  })


  var app6 = new Vue({
    el: '#app-6',
    data: {
      message: 'Hola Vue!'
    }
  })