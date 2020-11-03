<template>
<div class="hello">
    <h1>{{ msg || 'Hello' }}</h1>
    <h3 @click="increment">Count: {{ counter }}</h3>
</div>
</template>

<script lang="ts">
import store from "@/store"

export default {
    name: 'HelloWorld',
    props: {
        msg: String,
    },
    methods: {
        increment() {
            store.commit("increment")
            console.log(store.getters.counter)
        }
    },
    setup() {
        return {
            counter: store.getters.counter
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
h1 {
    color: blue;
}
h3 {
    color: white;
}
</style>
