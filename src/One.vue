<template>
  <font-awesome icon="flag"></font-awesome>
  <HelloWorld msg="View One" :count="count" @increment="increment()" @decrement="decrement()" />
</template>

<script lang="ts">
import HelloWorld from "./components/HelloWorld.vue"

export default {
  props: {
    count: Number,
  },
  emits: ["increment", "decrement"],
  components: {
    HelloWorld,
  },
  setup(props: any, context: any) {
    return {
      increment: () => context.emit("increment"),
      decrement: () => context.emit("decrement"),
    }
  },
}
</script>

<style></style>
