<template><div></div></template>

<script lang="ts">
import { useStore } from "vuex"
import { useRouter } from "vue-router"

export default {
  async mounted() {
    const store = useStore()
    const router = useRouter()
    try {
      const redirectPath: string = await store.dispatch("oidcSignInCallback")
      router.push(redirectPath)
    } catch (e) {
      console.error(e)// eslint-disable-line
      router.push("/error")
    }
  },
}
</script>
