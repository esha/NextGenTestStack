import { resolveComponent } from 'vue'
import { createStore } from "vuex"
import oidc from "@/store.oidc"

export default createStore({
    state: {
        count: 0
    },
    mutations: {
        increment(state) {
            state.count++
        },
        decrement(state) {
            state.count--
        },
    },
    getters: {
        isOdd: state => state.count % 2 === 0
    },
    actions: {
        raise: ({ commit }) => commit("increment"),
        // async example
        lower: ({ commit }) => {
            new Promise((resolve) => {
                setTimeout(() => resolve(commit('decrement')), 500)
            })
        },
    },
    modules: {
        oidc
    }
})