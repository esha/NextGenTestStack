<template>
  <div class="hello">
    <h1>{{ msg || message || "No message in props or path." }}</h1>
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
import { computed } from "vue"
import store from "@/store"
import { useRoute } from "vue-router"

export default {
  props: {
    msg: String,
  },
  setup() {
    const route = useRoute()
    return {
      raise: () => store.dispatch("raise"),
      lower: () => store.dispatch("lower"),
      isOdd: computed(() => store.getters.isOdd),
      count: computed(() => store.state.count),
      message: route.params.message,
    }
  },
}
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
