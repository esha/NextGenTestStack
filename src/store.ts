import { createStore } from "vuex"

export default createStore({
    state: { 
        count: 54       
    },
    getters: {
        counter(state){
            return state.count
        }
    },
})