import { createStore } from "vuex"

export default createStore({
    state: {
        count: 0
    },
    getters: {
        counter(state) {
            return state.count
        }
    },
    mutations: {
        increment(state) {
            state.count++
        }
    }
})