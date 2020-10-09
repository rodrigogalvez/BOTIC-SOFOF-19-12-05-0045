"use strict";

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment(state) {
            state.count++;
        }
    }
})

const Foo = {
    template: /*html*/`
        <div>
            <div>foo</div>
            <button @click="increment">{{ count }}</button>
        </div>
    `,
    computed: {
        ...Vuex.mapState(["count"])
    },
    methods: {
        ...Vuex.mapMutations(["increment"])
    }
}

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