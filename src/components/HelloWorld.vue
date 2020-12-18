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
import { computed } from "vue"
import { useRoute } from "vue-router"

export default {
  props: {
    msg: String,
    count: Number,
  },
  emits: ["increment", "decrement"],
  setup(props: any, context: any) {
    const route = useRoute()
    return {
      raise: () => context.emit("increment"),
      lower: () => context.emit("decrement"),
      isOdd: computed(() => props.count % 2 != 0),
      message: route?.params.message,
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
