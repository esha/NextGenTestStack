<template>
<div class="hello">
    <h1>{{ msg || 'Hello' }}</h1>
    <h3 :class="isOdd ? 'odd' : 'even'">
        Counter:
        <button @click="lower">&lt;</button>
        {{ count }}
        <button @click="raise">&gt;</button>
    </h3>
</div>
</template>

<script lang="ts">
//import { useStore } from 'vuex'
import { computed } from 'vue'
import store from "@/store"

export default {
    props: {
        msg: String,
    },
    setup() {
        return {
            raise: () => store.dispatch("raise"),
            lower: () => store.dispatch("lower"),
            isOdd: computed(() => store.getters.isOdd),
            count: computed(() => store.state.count)
        }
    },
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
.odd {
    color: white;
}
.even {
    color: black;
}
</style>
